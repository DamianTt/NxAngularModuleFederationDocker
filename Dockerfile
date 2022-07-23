# Stage 1
FROM node:16-alpine as build-step

ARG APP_NAME

RUN mkdir -p /app
WORKDIR /app
COPY ["decorate-angular-cli.js", "package*.json", "/app/"]
RUN npm ci
COPY . /app
RUN npx nx build ${APP_NAME} --configuration=production

# Stage 2
FROM nginx:1.22.0-alpine

ARG APP_NAME

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-step /app/dist/apps/${APP_NAME} /usr/share/nginx/html
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
