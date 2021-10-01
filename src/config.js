"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "Knowledge as Currency";
//baseUri Sit
const baseUri = "https://gateway.pinata.cloud/ipfs/QmWTAuE1bJib1v1eF1RpaWM62UwgEsA2sKQ4pusLmhYyLW";

// layer configurations - number in collection and attributes
const layerConfigurations = [
  {
    growEditionSizeTo: 15,
    layersOrder: [
      { name: "Background" },
      { name: "veyesors-face" },
      { name: "veyesors-hair" },
      { name: "veyesors-eyes" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

// file size
const format = {
  width: 517,
  height: 517,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 2000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
