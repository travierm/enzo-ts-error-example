import { canHandleContext } from "enzo-core";
import { Hono } from "hono";
const app = new Hono();

app.get("/", (c) => {
  canHandleContext(c);

  return c.json({ message: "Hello World" });
});

export default app;
