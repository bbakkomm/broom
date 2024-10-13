import * as dotenv from "dotenv";
dotenv.config();

import axios from 'axios';

const customFetch = axios.create({
  baseURL: `${process.env.BASE_URL}/api/v1`,
  // baseURL: 'http:localhost:5100/api/v1',
  withCredentials: true,
});

export default customFetch;
