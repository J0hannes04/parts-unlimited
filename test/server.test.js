import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { server } from "../src/server.js";

let base;

before(async () => {
  await new Promise((resolve) => server.listen(0, resolve));
  base = `http://localhost:${server.address().port}`;
});

after(() => server.close());

test("GET /health meldet ok", async () => {
  const res = await fetch(`${base}/health`);
  assert.equal(res.status, 200);
  const health = await res.json();
  assert.equal(health.status, "ok");
  assert.equal(typeof health.version, "string");
  assert.match(health.startedAt, /^\d{4}-\d{2}-\d{2}T.*Z$/);
});

test("GET /api/parts liefert den Katalog", async () => {
  const parts = await (await fetch(`${base}/api/parts`)).json();
  assert.ok(parts.length >= 5);
});

test("Startseite kennzeichnet ausverkaufte Teile deutlich", async () => {
  const html = await (await fetch(`${base}/`)).text();
  assert.match(html, /class="out-of-stock"/);
  assert.match(html, /class="stock-status" role="status">AUSVERKAUFT<\/strong>/);
});

test("unbekannte Pfade liefern 404", async () => {
  const res = await fetch(`${base}/gibts-nicht`);
  assert.equal(res.status, 404);
});
