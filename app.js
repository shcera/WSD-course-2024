import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

app.get("/", (c) => c.html(eta.render("index.eta")));
app.post("/", async (c) => {
  const body = await c.req.parseBody(); // Parse form data
  const name = body.name || "Unknown";  // Handle missing fields
  const address = body.address || "Unknown";
  
  return c.text(`${name} lives at ${address}.`);
});

Deno.serve(app.fetch);
