import { makeLetter } from "./love-letter.ts";

const template = Deno.readTextFileSync("./template.html");

const server = Deno.listen({ port: 8080 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/`);

for await (const conn of server) {
  serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);

  for await (const requestEvent of httpConn) {
    const letter = makeLetter();

    // replace newlines with breaks in letter so the whitespace is preserved
    const letterWithBreaks = letter.replaceAll("\n", "<br>");

    // insert poem in page template
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
