import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
const routes = ["/", "/about", "/para-pickleball", "/athletes", "/events", "/news", "/contact", "/accessibility"];
describe("BPPA routes", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  for (const path of routes) it(`matches ${path}`, () => { expect(router.matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId); });
  it("falls back for unknown paths", () => { expect(router.matchRoutes("/missing-page").at(-1)?.routeId).toBe(rootRouteId); });
});
