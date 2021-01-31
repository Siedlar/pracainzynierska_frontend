FROM  node:latest AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build 

# Stage 2
FROM nginx:1.19-alpine
COPY --from=build /usr/src/app/dist/workoutapp /usr/share/nginx/html