import { useEffect, useRef, useState } from 'react';
import { FiBarChart2, FiCheckSquare, FiFilm, FiImage, FiPlay } from 'react-icons/fi';

const emptyProofState = {
  status: 'ready',
  summary: null,
  engineering: null,
  visuals: [],
  working: [],
  testing: [],
};

const proofCache = new Map();

function ProofSection({ icon: Icon, title, children }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="text-cyber-blue" />
        <h4 className="text-sm font-semibold uppercase tracking-wider text-cyber-cyan">{title}</h4>
      </div>
      {children}
    </div>
  );
}

function formatEngineeringValue(value) {
  if (Array.isArray(value)) {
    return value.join(', ');
  }

  if (value && typeof value === 'object') {
    return JSON.stringify(value, null, 2);
  }

  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }

  return String(value);
}

function ProofImage({ src, alt }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-xl border border-white/10 bg-cyber-black/50"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cyber-black/60">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </a>
  );
}

function getVideoMimeType(src) {
  const lower = src.toLowerCase();

  if (lower.endsWith('.webm')) {
    return 'video/webm';
  }

  if (lower.endsWith('.mov')) {
    return 'video/quicktime';
  }

  if (lower.endsWith('.m4v')) {
    return 'video/mp4';
  }

  return 'video/mp4';
}

function ProofVideoCard({ src, title, index, isActive, onActivate }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isActive || !videoRef.current) {
      return;
    }

    videoRef.current.play().catch(() => {});
  }, [isActive]);

  if (!isActive) {
    return (
      <button
        type="button"
        onClick={onActivate}
        className="group relative h-[220px] w-full overflow-hidden rounded-xl border border-white/10 bg-[#111] text-white transition duration-200 hover:scale-[1.02] hover:border-cyber-blue/40"
        aria-label={`Load ${title} video ${index + 1}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/40 opacity-90 transition-opacity duration-200 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_0_30px_rgba(255,255,255,0.08)] transition duration-200 group-hover:bg-white/15">
            <FiPlay className="ml-1 h-9 w-9" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-left">
          <p className="text-sm font-medium text-white/95">{`Video ${index + 1}`}</p>
          <p className="mt-1 text-xs text-white/60">Click to load demo</p>
        </div>
      </button>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-cyber-black/50 transition-opacity duration-300">
      <video
        ref={videoRef}
        controls
        autoPlay
        preload="none"
        playsInline
        className="w-full bg-black"
        aria-label={`${title} working demo ${index + 1}`}
      >
        <source src={src} type={getVideoMimeType(src)} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

async function fetchTextIfExists(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      return null;
    }

    const contentType = response.headers.get('content-type') || '';
    const text = await response.text();
    const trimmed = text.trim();

    if (!trimmed) {
      return null;
    }

    const looksLikeHtml =
      contentType.includes('text/html') ||
      trimmed.startsWith('<!doctype html') ||
      trimmed.startsWith('<html') ||
      trimmed.startsWith('<head') ||
      trimmed.startsWith('<body');

    return looksLikeHtml ? null : trimmed;
  } catch {
    return null;
  }
}

async function fetchJsonIfExists(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      return null;
    }

    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('text/html')) {
      return null;
    }

    return await response.json();
  } catch {
    return null;
  }
}

export default function ProjectProof({ projectDir, projectTitle }) {
  const [state, setState] = useState(emptyProofState);
  const [activeVideoSrc, setActiveVideoSrc] = useState(null);
  const activeVideoKey = `${projectDir || 'no-project'}::${activeVideoSrc || 'none'}`;

  useEffect(() => {
    if (!projectDir) {
      return undefined;
    }

    let isActive = true;
    const basePath = `/assets/projects/${projectDir}`;

    async function loadProof() {
      const cachedProof = proofCache.get(projectDir);
      if (cachedProof) {
        setState(cachedProof);
        return;
      }

      setState((current) => ({
        ...current,
        status: 'loading',
      }));

      const [summary, engineering, manifest] = await Promise.all([
        fetchTextIfExists(`${basePath}/summary.txt`),
        fetchJsonIfExists(`${basePath}/engineering.json`),
        fetchJsonIfExists(`${basePath}/proof-manifest.json`),
      ]);

      if (!isActive) {
        return;
      }

      const visuals = Array.isArray(manifest?.visualsImages)
        ? manifest.visualsImages.map(
            (file) => `${basePath}/visuals/images/${encodeURIComponent(file)}`
          )
        : [];
      const working = Array.isArray(manifest?.workingVideos)
        ? manifest.workingVideos.map(
            (file) => `${basePath}/working/videos/${encodeURIComponent(file)}`
          )
        : [];
      const testing = Array.isArray(manifest?.testingImages)
        ? manifest.testingImages.map(
            (file) => `${basePath}/testing/images/${encodeURIComponent(file)}`
          )
        : [];

      const nextState = {
        status: 'ready',
        summary,
        engineering,
        visuals,
        working,
        testing,
      };

      proofCache.set(projectDir, nextState);
      setState(nextState);
    }

    loadProof();

    return () => {
      isActive = false;
    };
  }, [projectDir]);

  const { status, summary, engineering, visuals, working, testing } = state;
  const engineeringEntries =
    engineering && typeof engineering === 'object' && !Array.isArray(engineering)
      ? Object.entries(engineering)
      : [];
  const hasProof = Boolean(
    summary || engineeringEntries.length > 0 || visuals.length > 0 || working.length > 0 || testing.length > 0
  );

  if (status === 'loading') {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-gray-400">
        Loading project proof...
      </div>
    );
  }

  if (!hasProof) {
    return (
      <div className="rounded-xl border border-dashed border-white/10 bg-white/5 p-5 text-sm text-gray-400">
        No proof available yet for {projectTitle}.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {summary && (
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyber-cyan">
            Proof Summary
          </h4>
          <p className="whitespace-pre-line text-gray-300">{summary}</p>
        </div>
      )}

      {visuals.length > 0 && (
        <ProofSection icon={FiImage} title="Visual Proof">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {visuals.map((src, index) => (
              <ProofImage
                key={src}
                src={src}
                alt={`${projectTitle} visual proof ${index + 1}`}
              />
            ))}
          </div>
        </ProofSection>
      )}

      {working.length > 0 && (
        <ProofSection icon={FiFilm} title="Working Demo">
          <div
            className={`grid gap-4 ${
              working.length === 1
                ? 'mx-auto max-w-2xl grid-cols-1'
                : 'grid-cols-1 md:grid-cols-2'
            }`}
          >
            {working.map((src, index) => (
              <ProofVideoCard
                key={`${src}::${activeVideoKey}`}
                src={src}
                title={projectTitle}
                index={index}
                isActive={activeVideoSrc === src}
                onActivate={() => setActiveVideoSrc(src)}
              />
            ))}
          </div>
        </ProofSection>
      )}

      {engineeringEntries.length > 0 && (
        <ProofSection icon={FiBarChart2} title="Engineering Data">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {engineeringEntries.map(([key, value]) => {
              const formatted = formatEngineeringValue(value);
              const isComplex = value && typeof value === 'object';

              return (
                <div key={key} className="rounded-lg border border-white/10 bg-cyber-black/30 p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyber-cyan">
                    {key}
                  </p>
                  {isComplex ? (
                    <pre className="overflow-x-auto whitespace-pre-wrap break-words text-sm text-gray-300">
                      {formatted}
                    </pre>
                  ) : (
                    <p className="text-sm text-gray-300">{formatted}</p>
                  )}
                </div>
              );
            })}
          </div>
        </ProofSection>
      )}

      {testing.length > 0 && (
        <ProofSection icon={FiCheckSquare} title="Testing & Validation">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {testing.map((src, index) => (
              <ProofImage
                key={src}
                src={src}
                alt={`${projectTitle} testing proof ${index + 1}`}
              />
            ))}
          </div>
        </ProofSection>
      )}
    </div>
  );
}
