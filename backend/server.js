// 필요한 모듈 가져오기
const express = require("express");
const bodyParser = require("body-parser"); //클라이언트에서 오는 요청의 본문을 해석해주는 미들웨어

const db = require("./db.js");
//const db = require("./db.js");

// 상수선언
const PORT = 5000;

//express 서버 생성
const app = express();

// json 형태로 오는 요청의 본문을 해석해줄 수 있도록 bodyParser 미들웨어 등록
app.use(bodyParser.json());

// 테이블 생성하기
// db.pool.query(
//   `CREATE TABLE lists (
//   id INGEGER AUTO_INCREAMENT,
//   value TEXT,
//   PRIMARY KEY (id)
// )`,
//   (err, results, fileds) => {
//     console.log("results::", results);
//   }
// );

// DB lists 테이블에 있는 모든 데이터를 프론트에 보내주기
app.get("/api/values", (req, res) => {
  console.log("/api/values 요청!!");
  // DB에서 데이터 가져오기
  db.pool.query("SELECT * FROM lists;", (err, results, fileds) => {
    if (err) {
      return res.status(500).end(err);
    } else {
      return res.json(results);
    }
  });
});

// 클라이언트에서 입력한 항목 등록
app.post("/api/value", (req, res, next) => {
  console.log("/api/value 요청!!");
  // DB에 값 넣기
  db.pool.query(
    `INSERT INTO lists (value) VALUES ("${req.body.value}")`,
    (err, result, fileds) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.json({ success: true, value: req.body.value });
      }
    }
  );
});

// http request listen
app.listen(PORT, () => {
  console.log(`애플리케이션이 ${PORT}에서 시작되었습니다.`);
});
