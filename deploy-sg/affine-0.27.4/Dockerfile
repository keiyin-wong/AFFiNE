FROM ghcr.io/toeverything/affine@sha256:c312116a134184947d98749c8a8e29f4e3bc97f4f2a51c9a3497f9baea2eec2b

COPY selfhost-seat-limit.cjs /app/dist/selfhost-seat-limit.cjs
ENV NODE_OPTIONS="--require=/app/dist/selfhost-seat-limit.cjs"
