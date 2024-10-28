/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const WebDesignLazyImport = createFileRoute('/web-design')()
const LocationLazyImport = createFileRoute('/location')()
const GraphicDesignLazyImport = createFileRoute('/graphic-design')()
const ContactLazyImport = createFileRoute('/contact')()
const AppDesignLazyImport = createFileRoute('/app-design')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const WebDesignLazyRoute = WebDesignLazyImport.update({
  id: '/web-design',
  path: '/web-design',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/web-design.lazy').then((d) => d.Route))

const LocationLazyRoute = LocationLazyImport.update({
  id: '/location',
  path: '/location',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/location.lazy').then((d) => d.Route))

const GraphicDesignLazyRoute = GraphicDesignLazyImport.update({
  id: '/graphic-design',
  path: '/graphic-design',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/graphic-design.lazy').then((d) => d.Route),
)

const ContactLazyRoute = ContactLazyImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/contact.lazy').then((d) => d.Route))

const AppDesignLazyRoute = AppDesignLazyImport.update({
  id: '/app-design',
  path: '/app-design',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/app-design.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/app-design': {
      id: '/app-design'
      path: '/app-design'
      fullPath: '/app-design'
      preLoaderRoute: typeof AppDesignLazyImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactLazyImport
      parentRoute: typeof rootRoute
    }
    '/graphic-design': {
      id: '/graphic-design'
      path: '/graphic-design'
      fullPath: '/graphic-design'
      preLoaderRoute: typeof GraphicDesignLazyImport
      parentRoute: typeof rootRoute
    }
    '/location': {
      id: '/location'
      path: '/location'
      fullPath: '/location'
      preLoaderRoute: typeof LocationLazyImport
      parentRoute: typeof rootRoute
    }
    '/web-design': {
      id: '/web-design'
      path: '/web-design'
      fullPath: '/web-design'
      preLoaderRoute: typeof WebDesignLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/app-design': typeof AppDesignLazyRoute
  '/contact': typeof ContactLazyRoute
  '/graphic-design': typeof GraphicDesignLazyRoute
  '/location': typeof LocationLazyRoute
  '/web-design': typeof WebDesignLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/app-design': typeof AppDesignLazyRoute
  '/contact': typeof ContactLazyRoute
  '/graphic-design': typeof GraphicDesignLazyRoute
  '/location': typeof LocationLazyRoute
  '/web-design': typeof WebDesignLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/app-design': typeof AppDesignLazyRoute
  '/contact': typeof ContactLazyRoute
  '/graphic-design': typeof GraphicDesignLazyRoute
  '/location': typeof LocationLazyRoute
  '/web-design': typeof WebDesignLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/app-design'
    | '/contact'
    | '/graphic-design'
    | '/location'
    | '/web-design'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/app-design'
    | '/contact'
    | '/graphic-design'
    | '/location'
    | '/web-design'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/app-design'
    | '/contact'
    | '/graphic-design'
    | '/location'
    | '/web-design'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  AppDesignLazyRoute: typeof AppDesignLazyRoute
  ContactLazyRoute: typeof ContactLazyRoute
  GraphicDesignLazyRoute: typeof GraphicDesignLazyRoute
  LocationLazyRoute: typeof LocationLazyRoute
  WebDesignLazyRoute: typeof WebDesignLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  AppDesignLazyRoute: AppDesignLazyRoute,
  ContactLazyRoute: ContactLazyRoute,
  GraphicDesignLazyRoute: GraphicDesignLazyRoute,
  LocationLazyRoute: LocationLazyRoute,
  WebDesignLazyRoute: WebDesignLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/app-design",
        "/contact",
        "/graphic-design",
        "/location",
        "/web-design"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/app-design": {
      "filePath": "app-design.lazy.tsx"
    },
    "/contact": {
      "filePath": "contact.lazy.tsx"
    },
    "/graphic-design": {
      "filePath": "graphic-design.lazy.tsx"
    },
    "/location": {
      "filePath": "location.lazy.tsx"
    },
    "/web-design": {
      "filePath": "web-design.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */