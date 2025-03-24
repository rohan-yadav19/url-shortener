import { shortenedRoutes } from "./URLShortener/routes/url-shortener.js";
import express from "express";

const PORT = 3002;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
//app.use(router);
app.use(shortenedRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
