import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as storeService from "./store.js";

const app = new Hono();

app.get("/", (c) => {
    if (c.req.query("store")) {
        storeService.setStore(c.req.query("store"));}
    return c.text(`Store: ${storeService.getStore()}`)
});

export default app;
