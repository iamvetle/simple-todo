# syntax = docker/dockerfile:1

ARG NODE_VERSION=20.0

FROM node:${NODE_VERSION}-slim as base

# Allows us to override the port later (but default is 3000)
ARG PORT=3000

# because this is dockerfile for our production?
# ? should i remove this
ENV NODE_ENV=production

# The WORKDIR instruction sets the working directory for any instructions that follow it in the Dockerfile.
WORKDIR /src

# Build
FROM base as build

COPY --link package.json package-lock.json .
RUN npm install --production=false

COPY --link . .

RUN npm run build
RUN npm prune

# Run
FROM base

ENV PORT=$PORT

COPY --from=build /src/.output /src/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules

CMD [ "node", ".output/server/index.mjs" ]

# https://markus.oberlehner.net/blog/running-nuxt-3-in-a-docker-container/