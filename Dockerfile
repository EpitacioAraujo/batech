# build stage — compiles the prerendered static site
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# runtime stage — nginx serves the static dist/ (no Node at runtime)
FROM nginx:alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html
# nginx:alpine already EXPOSEs 80 and runs nginx -g 'daemon off;'
