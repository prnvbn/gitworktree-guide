import { copyFile, mkdir, rm } from "node:fs/promises";

const projectRoot = new URL("../", import.meta.url);
const outputDirectory = new URL("../dist/", import.meta.url);
const publicFiles = ["index.html", "styles.css", "favicon.svg"];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

await Promise.all(
  publicFiles.map((file) =>
    copyFile(new URL(file, projectRoot), new URL(file, outputDirectory)),
  ),
);
