import { makeLetter } from "./love-letter.ts";

const server = Deno.listen({ port: 8080 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/`);

for await (const conn of server) {
  serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);

  for await (const requestEvent of httpConn) {
    const template = Deno.readTextFileSync("./template.html");

    const letter = makeLetter();

    // insert breaks in poem
    const letterWithBreaks = letter.replaceAll("\n", "<br>");

    const page = template.replace("{{LETTER}}", letterWithBreaks);

    requestEvent.respondWith(
      new Response(page, {
        status: 200,
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      })
    );
  }
}
