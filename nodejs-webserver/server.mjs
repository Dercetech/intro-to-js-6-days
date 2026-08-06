import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const port = Number(process.env.PORT ?? 8080);
const websiteRoot = resolve(fileURLToPath(new URL("../www/", import.meta.url)));
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url ?? "/", "http://localhost").pathname);
    let filePath = resolve(websiteRoot, `.${pathname}`);

    if (filePath !== websiteRoot && !filePath.startsWith(`${websiteRoot}${sep}`)) {
      response.writeHead(403).end("Forbidden");
      return;
    }

    if ((await stat(filePath)).isDirectory()) {
      filePath = resolve(filePath, "index.html");
    }

    const file = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": contentTypes[extname(filePath).toLowerCase()] ?? "application/octet-stream"
    });
    response.end(file);
  } catch (error) {
    response.writeHead(error?.code === "ENOENT" ? 404 : 500).end(error?.code === "ENOENT" ? "Not found" : "Server error");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Examples available at http://127.0.0.1:${port}`);
});
