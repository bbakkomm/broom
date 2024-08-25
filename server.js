import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import morgan from 'morgan';
import mongoose from 'mongoose';

// routers
import memberRouter from './routes/memberRouter.js';

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// MEMBER
app.use('/api/v1/members', memberRouter);

// 설정 API 이외 경로 요청 NOT FOUND 처리
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found'});
});

// 설정 서버 내부 ERROR 처리
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: 'something went wrong'});
});

const port = process.env.PORT || 5100;

// MONGODB 연결
try {
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(port, () => {
    console.log(`mongo server running to PORT ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

// app.listen(port, () => {
//   console.log(`server running on PORT ${port}...`);
// });