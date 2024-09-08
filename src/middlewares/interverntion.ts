import { RequestHandler } from "express";

export const interverntion: RequestHandler = (req, res, next) => {
 const logged = true;
 if (logged) {
  next();
 } else {
  res.status(403).json({ message: "Not Authorized" });
 }
};
