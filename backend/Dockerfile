# 베이스 이미지를 도커 허브에서 가져온다.
FROM node:alpine

# 해당 애플레케이션의 소스 코드들이 들어가게 될 위치
WORKDIR /app

# 소스코드가 바뀔 때마다 종속성까지 다시 복사하지 않기 하기 위해 복사
COPY ./package.json ./

# 종속성 설치
RUN npm install

# WORKDIR로 복사
COPY ./ ./

# 컨테이너가 실행될 때 실행할 명령어 지정
CMD ["npm", "run", "start"]