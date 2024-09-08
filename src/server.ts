import express from "express";
import helmet from "helmet";
import path from "path";
import router from "./routes";
import { errorHandler, notFoundRequest } from "./routes/errorHandler";

const server = express();

// Secure HTTP headers
server.use(helmet());
// Parse JSON bodies (as sent by API clients)
server.use(express.json());
// Parse URL-encoded bodies (as sent by HTML forms)
server.use(express.urlencoded({ extended: true }));
// Serve static files
server.use(express.static(path.join(__dirname, "../public")));
// Use the products router to nickname the /products route and access its endpoints
server.use("/", router);
// Error handler for routes that do not exist
server.use(notFoundRequest);
server.use(errorHandler);
server.listen(3000, () => {
 console.log("Server is running on port 3000");
});
