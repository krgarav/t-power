import express from 'express';
import multer from 'multer';
import upload from '../multerUploader/multer.js';
import { convertImageToPdfController, downloadPdfController, extractPdfController } from '../controllers/TaggingController.js';

const app = express();
const router = express.Router();


router.post("/extractPdf", upload.single("pdf"), extractPdfController);
router.post("/convertImagesToPdf", convertImageToPdfController);
router.post("/downloadPdf", downloadPdfController);

export default router;