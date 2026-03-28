import { mkdir, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { projects } from '../src/data/projects.js';

const rootDir = process.cwd();
const projectsRoot = path.join(rootDir, 'public', 'assets', 'projects');
const ignoredFiles = new Set(['.gitkeep', '.ds_store', 'thumbs.db']);
const imageExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif']);
const videoExtensions = new Set(['.mp4', '.webm', '.mov', '.m4v']);

async function listFiles(relativeDir, allowedExtensions) {
  const absoluteDir = path.join(projectsRoot, relativeDir);

  try {
    const entries = await readdir(absoluteDir, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => !ignoredFiles.has(name.toLowerCase()))
      .filter((name) => {
        if (!allowedExtensions) {
          return true;
        }

        return allowedExtensions.has(path.extname(name).toLowerCase());
      })
      .sort((left, right) => left.localeCompare(right));
  } catch {
    return [];
  }
}

async function ensureProjectStructure(projectDir) {
  const requiredDirs = [
    'visuals/images',
    'working/videos',
    'testing/images',
  ];

  await Promise.all(
    requiredDirs.map((relativeDir) =>
      mkdir(path.join(projectsRoot, projectDir, relativeDir), { recursive: true })
    )
  );
}

async function generateProjectManifest(projectDir) {
  await ensureProjectStructure(projectDir);

  const manifest = {
    visualsImages: await listFiles(path.join(projectDir, 'visuals', 'images'), imageExtensions),
    workingVideos: await listFiles(path.join(projectDir, 'working', 'videos'), videoExtensions),
    testingImages: await listFiles(path.join(projectDir, 'testing', 'images'), imageExtensions),
  };

  const manifestPath = path.join(projectsRoot, projectDir, 'proof-manifest.json');
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
}

async function main() {
  const projectDirs = [
    ...new Set(
      projects
        .map((project) => project.proof?.projectDir)
        .filter(Boolean)
    ),
  ];

  await Promise.all(projectDirs.map((projectDir) => generateProjectManifest(projectDir)));
}

main().catch((error) => {
  console.error('Failed to generate proof manifests.');
  console.error(error);
  process.exitCode = 1;
});
