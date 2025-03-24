import crypto from "crypto";
import { Loadlinks, savelinks } from "../models/shortener.models.js";
export const getshortenerpage = async (req, res) => {
  try {
    //const file = await readFile(path.join("views", "index.html"));
    const links = await Loadlinks();
    return res.render("index", { links, host: req.host });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
};
export const postURLShortener = async (req, res) => {
  try {
    const { url, shortCode } = req.body;
    const finalshortCode = shortCode || crypto.randomBytes(4).toString("hex");
    const links = await Loadlinks();
    if (links[finalshortCode]) {
      return res
        .status(400)
        .send("short code already exists. please enter another");
    }
    links[finalshortCode] = url;
    await savelinks(links);
    return res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(200).send("");
  }
};
export const redirectToShortLink = async (req, res) => {
  try {
    const { shortCode } = req.params;
    //const finalshortCode = shortCode || crypto.randomBytes(4).toString("hex");
    const links = await Loadlinks();
    if (!links[shortCode]) {
      return res.status(404).send("404 error occured");
    }
    return res.redirect(links[shortCode]);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
};
