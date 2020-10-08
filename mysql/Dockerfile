# 베이스 이미지를 도커 허브에서 가져온다.
FROM mysql:5.7

RUN rm -fr /var/lib/mysql/*

# my.cnf 설정 정포 파일을 실제 mysql 설정을 해주는 my.conf 파일로 덮어씌운다.
ADD ./my.cnf /etc/mysql/conf.d/my.cnf