import { app } from "../util/middleware/app";

export const routes = async () => {
  await app.get("/", (_, res) => {
    res.json({
      message: {
        greetings: " welcome 🎉",
        details: "go to /graphql to query",
      },
    });
  });

  await app.use((req, res) => {
    res.status(404).json({
      status: "not found 404!",
      page: `requested page ${req.originalUrl} is not found!`,
      emoj: "⛔️",
    });
  });
  await app.use((error:any,_,res:any)=>{
    const statusCode = res.statusCode === 200 ? 500: res.statusCode;
    res.status(statusCode);
    res.json({
      message: error.message,
      stack: process.env.NODE_ENV === 'production' ? '):' : error.stack,
    });
  
  })


};
// const errorHandler = (error, req, res, next) => {
//   const statusCode = res.statusCode === 200 ? 500: res.statusCode;
//   res.status(statusCode);
//   res.json({
//     message: error.message,
//     stack: process.env.NODE_ENV === 'production' ? '):' : error.stack,
//   });
// };
// export const main:any = (_, res:any) => {
//     res.json({
//         message: {
//             greetings: " welcome 🎉",
//             details: "go to /graphql to query",
//           },
//     });
//   };

// import express from "express";
// const router = express.Router();

// //

// router.use("/", (req, res, next) => {
//     res.status(200).json({
//       status: 200,
//       message: {
//         greetings: " welcome 🎉",
//         details: "go to /graphql to query",
//       },
//     });
//   });

// router.get("/login", (req, res) => {
//     res.json({
//       message: "login",
//     });
//   });

// //note found
// router.use((req, res, next) => {
//   res.status(404).json({
//     status: "not found 404!",
//     emoj: "⛔️",
//   });
// });

// module.exports = router;
