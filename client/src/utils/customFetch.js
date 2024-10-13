import axios from 'axios';
import * as dotenv from "dotenv";
dotenv.config();

const customFetch = axios.create({
  baseURL: `${process.env.BASE_URL}/api/v1`,
  // baseURL: 'http:localhost:5100/api/v1',
  withCredentials: true,
});

export default customFetch;
