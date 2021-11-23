/*
 * Project:
 * File Name: main.js
 * Description:
 *
 * Created Date:
 * Author:
 *
 */


const fs = require("fs").promises

const IOhandler = require("./IOhandler"),
  zipFilePath = `${__dirname}/myfile.zip`,
  pathUnzipped = `${__dirname}/unzipped`,
  pathProcessed = `${__dirname}/grayscaled`;



IOhandler.unzip("myfile.zip","unzipped")
  .then((path)=> IOhandler.readDir())
  .then(IOhandler.grayScale())