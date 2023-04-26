import webp from "webp-converter";
import sharp from "sharp";
import fs from "fs";

webp.grant_permission();

// main function to convert image to webp
const convertImageToWebp = async (
  imagePath,
  outputPath,
  width = 1920,
  height = null,
  quality = 100
) => {
  try {
    if (!imagePath) {
      throw new Error("Image path is required");
    }
    if (!outputPath) {
      outputPath = imagePath;
    }
    if (!imagePath.match(/\.(jpg|jpeg|png)$/)) {
      throw new Error("File is not in format of image");
      //   continue;
    }
    await sharp(imagePath)
      .resize({
        fit: sharp.fit.contain,
        width: width,
        height: height,
      })
      .webp({ quality: quality })
      .toFile(`${outputPath.substring(0, outputPath.lastIndexOf("."))}.webp`);
  } catch (error) {
    // console.log(error);
    throw error;
  }
};

const convertMultipleImagesToWebp = async (
  imagePaths,
  outputPaths,
  width = 1920,
  height = null,
  quality = 100
) => {
  try {
    if (!imagePaths) {
      throw new Error("Image paths are required");
    }
    if (!outputPaths) {
      outputPaths = imagePaths;
    }
    for (let i = 0; i < imagePaths.length; i++) {
      if (!imagePaths[i].match(/\.(jpg|jpeg|png)$/)) {
        throw new Error("File is not in format of image");
        //   continue;
      }
      await convertImageToWebp(
        imagePaths[i],
        outputPaths[i],
        width,
        height,
        quality
      );
    }
  } catch (error) {
    // console.log(error);
    throw error;
  }
};

const convertDirectoryImagesToWebp = async (
  directoryPath,
  outputDirectoryPath,
  width = 1920,
  height = null,
  quality = 100
) => {
  try {
    if (!directoryPath) {
      throw new Error("Directory path is required");
    }
    if (!outputDirectoryPath) {
      outputDirectoryPath = directoryPath;
    }
    const files = fs.readdirSync(directoryPath);
    // check if file is in format of image jpg, jpeg, png
    for (let i = 0; i < files.length; i++) {
      if (!files[i].match(/\.(jpg|jpeg|png)$/)) {
        // throw new Error("File is not in format of image");
        continue;
      }

      await convertImageToWebp(
        `${directoryPath}/${files[i]}`,
        `${outputDirectoryPath}/${files[i]}`,
        width,
        height,
        quality
      );
    }
  } catch (error) {
    throw error;
    // console.log(error);
  }
};

export {
  convertImageToWebp,
  convertMultipleImagesToWebp,
  convertDirectoryImagesToWebp,
};
