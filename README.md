# Img Webp Converter

## Installation

using npm

```
npm i img-webp-converter
```

using yarn

```
yarn add img-webp-converter
```

## Implementation

### converting single image to webp

```js
import { convertImageToWebp } from "img-webp-converter";

convertImageToWebp(imagePath, outputPath, width, height, quality);
```

### converting multiple images to webp

```js
import { convertMultipleImagesToWebp } from "img-webp-converter";

const imagePaths = [
  "./images/1.png",
  "./images/2.png",
  "./images/3.png",
  "./images/4.png",
];
const outputPaths = [
  "./images/1.webp",
  "./images/2.webp",
  "./images/3.webp",
  "./images/4.webp",
];

convertMultipleImagesToWebp(imagePaths, outputPaths, width, height, quality);
```

### converting directory of images to webp

```js
import { convertDirectoryImagesToWebp } from "img-webp-converter";

convertDirectoryImagesToWebp(
  "/path/to/images/",
  "/path/to/output/",
  width,
  height,
  quality
);
```

default path of output is same as input

Table for inputs
| Params | Default | Required | Input Type
|---|---|---|--|
| imagePath | none | true | string |
| outputPath | imagePath | false | string |
| width | 1920 | false | number |
| height | none | false | number |
| quality | 100 | false | number |
