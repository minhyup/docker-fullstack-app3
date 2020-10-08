# NGINX가 제공해줄 build 파일들을 생성하는 단계
FROM node:alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

# NGNIX를 가동하고 빌드 파일들을 제공한다.
FROM nginx
EXPOSE 3000
# nginx config 덮어쓰기
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html