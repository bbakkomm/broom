import * as dotenv from "dotenv";
dotenv.config();

const corsOption = {
  origin: [
    process.env.NODE_ENV === 'production' ? process.env.BACKEND_URL : "http://localhost:5100",
    process.env.NODE_ENV === 'production' ? process.env.FRONTEND_URL : "http://localhost:5173",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
}

export default corsOption;