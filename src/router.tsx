import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function DefaultErrorComponent() {
  return <div className="grid min-h-dvh place-items-center bg-background p-6 text-center"><div><h1 className="font-display text-3xl font-bold">This page didn't load</h1><p className="mt-3 text-muted-foreground">Please return home and try again.</p><a href="/" className="mt-6 inline-flex min-h-11 items-center bg-primary px-5 font-bold text-primary-foreground">Go home</a></div></div>;
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent,
  });

  return router;
};
