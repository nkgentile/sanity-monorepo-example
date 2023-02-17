# Sanity Monorepo Example

An example workspace demonstrating how to manage a [Sanity Studio](https://www.sanity.io/studio) in a monorepo. This is a minimal example and a rough sketch of how to approach breaking down features and plugins into reusable packages. These internal packages can then be reused across apps.

> ⚠️ NOTE: This is an example repo and should not be used for production purposes as-is

## What's inside?

This monorepo uses [npm](https://www.npmjs.com/) as a package manager and leverages [npm workspaces](https://docs.npmjs.com/cli/using-npm/workspaces) to manage the following apps and internal packages[^1]:

### Apps and Packages

- `apps/studio`: a [Sanity Studio](https://www.sanity.io/studio)
- `packages/sanity/project`: a feature plugin that registers [Sanity schema types](https://www.sanity.io/docs/schema-types)
- `packages/sanity/preview-pane`: provides a way to register a "Preview" tab to the document pane
- `packages/sanity/production-url`: registers an "Open preview" action

> ⚠️ NOTE: Internal packages don't have their own build step. They rely on the consuming app to be properly configured to transpile them for the intended environment.

## Getting Started

1. Clone the repository
2. Install the workspace dependencies
```sh
npm i
```
3. Run the `studio` app
```sh
npm run dev -w studio
```
4.  Visit the development environment running at http://localhost:3333

## Building for production

```sh
npm run build -w studio
```