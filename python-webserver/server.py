import os
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


PORT = int(os.environ.get("PORT", "8000"))
WWW_DIRECTORY = Path(__file__).resolve().parent.parent / "www"
handler = partial(SimpleHTTPRequestHandler, directory=WWW_DIRECTORY)

with ThreadingHTTPServer(("127.0.0.1", PORT), handler) as server:
    print(f"Examples available at http://127.0.0.1:{PORT}")
    server.serve_forever()
