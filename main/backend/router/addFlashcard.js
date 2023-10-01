import express from "express";
import flashCardController from "../controller/flashCardContoller.js";

const router = express.Router();

// Post New FlashCard

router.post("/addFlashCard", flashCardController.flashcardAdd);

export default router;
