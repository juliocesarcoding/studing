import { ErrorRequestHandler, RequestHandler } from "express";

export const notFoundRequest: RequestHandler = (req, res) => {
 res.status(404).json({ error: "Route not Found" });
};

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
 console.error(err.stack);
 res.status(500).json({ error: "Something went wrong" });
};
