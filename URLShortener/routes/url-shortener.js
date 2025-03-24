import { Router } from "express";
import {
  postURLShortener,
  getshortenerpage,
  redirectToShortLink,
} from "../../controllers/posturlshortener.controller.js";
const router = Router();

router.get("/", getshortenerpage);
router.post("/", postURLShortener);

router.get("/:shortCode", redirectToShortLink);
//default export
//export default router;
//Named exports
export const shortenedRoutes = router;
