import { app } from "../util/middleware/app";
import { verify } from "jsonwebtoken";
import { User } from "../models/User";
import { createAccessToken, createRefreshToken } from "../util/auth";
import { sendRefreshToken } from "../util/auth/refreshToken";

export const routes = async () => {
  await app.get("/", (_, res) => {
    res.json({
      message: {
        greetings: " welcome 🎉",
        details: "go to /graphql to query 👻",
      },
    });
  });
  //
  await app.post("/refresh_token", async (req, res) => {
    const cookie = req.cookies.jid;
    //check cookie

    if (!cookie) {
      res.send({ emoj: "🚫", message: " Auth fail 😓" });
      throw new Error(" Auth fail 😓");
    }

    // verify cookie
    let payload: any = null;

    try {
      payload = verify(cookie, process.env.SECRET_KEY_TWO!);
    } catch (error) {
      res.send({ emoj: "🚫", message: " Auth fail 😓" });
      throw new Error(" Auth fail 😓");
    }
    //success
    const user = await User.findOne({ id: payload.userId });

    // check user
    if (!user) {
      res.send({ emoj: "🚫", message: " Auth fail 😓" });
      throw new Error(" Auth fail 😓");
    }
    //create refresh token
    sendRefreshToken(res,createRefreshToken(user))
    // create new access token
    return res.send({
      emoj: "🎊",
      accessToken: createAccessToken(user),
      message: " success 🤓",
    });
  });

  //   await app.use((req, res) => {
  //     //whitelist
  //     if (req.originalUrl === "/graphql") {
  //       // res.redirect('/graphql')
  //       //.. do nothing
  //     } else {
  //       res.status(404).json({
  //         status: "not found 404!",
  //         page: `requested page ${req.originalUrl} is not found! 👹`,
  //         emoj: "⛔️",
  //       });
  //     }
  //   });
  //   await app.use((error: any, _, res: any) => {
  //     const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  //     res.status(statusCode);
  //     res.json({
  //       message: error.message,
  //       stack: process.env.NODE_ENV === "production" ? "):" : error.stack,
  //     });
  //   });
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
