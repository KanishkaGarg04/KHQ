import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportError } from "../lib/error-reporting";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold">404</h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Page not found
      </h2>

      <p className="mt-2 max-w-md text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Go home
      </Link>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  useEffect(() => {
    reportError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold">
        This page didn't load
      </h1>

      <p className="mt-3 max-w-md text-muted-foreground">
        Something went wrong on our end. You can try refreshing or head back
        home.
      </p>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Try again
        </button>

        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Kanishka Labs — Innovation HQ of Kanishka Garg",
      },
      {
        name: "description",
        content:
          "Step inside Kanishka Labs — a futuristic control room showcasing the projects, research, and engineering work of Kanishka Garg.",
      },
      {
        name: "author",
        content: "Kanishka Garg",
      },
      {
        property: "og:title",
        content: "Kanishka Labs — Innovation HQ",
      },
      {
        property: "og:description",
        content:
          "A 3D laboratory tour of the work, experiments and achievements of engineer Kanishka Garg.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],

    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <>
      <HeadContent />

      {children}

      <Scripts />
    </>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}