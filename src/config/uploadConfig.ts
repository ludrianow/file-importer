import { validateExtensionType } from "@/shared/validators/validateExtensionType";
import { Request } from "express";
import multer from "multer";

const destinationStorage = (req: any, file: any, cb: any) => {
  cb(null, 'tmp/uploads')
}

const filenameStorage = (req: Request, file: any, cb: any) => {
  let newFilename = `${req.body.name}.${validateExtensionType(file)}`;

  cb(null, newFilename)
}

const storage = multer.diskStorage({
  destination: destinationStorage,
  filename: filenameStorage
})

export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 100MB
  }
})
