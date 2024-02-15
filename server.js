import "ignore-styles";
import express from "express";
import React from "react";
import {ServerContainer} from "@react-navigation/native";
import { renderToString } from "react-dom/server";
import path from "path";
import fs from "fs";

import App from "./src/App";

const app = express();
const port = 3000

app.use(express.static("./build", { index: false }));


app.use((req, res) => {

  const location = new URL(req.url, `http://localhost:${port}`)

  const reactApp = renderToString(
    <ServerContainer location={location}>
      <App location={location} />
    </ServerContainer>
  );


  const templateFile = path.resolve("./build/index.html");
  const data = fs.readFileSync(templateFile, "utf-8")
  res.send(data.replace('<div dir="rtl" id="root"></div>', `<div dir="rtl" id="root">${reactApp}</div>`))
});


app.listen(3000, () => { console.log(`server is running on the ${3000}`) });













// import "ignore-styles";
// import express from "express";
// import React from "react";
// import {ServerContainer} from "@react-navigation/native";
// import { renderToString } from "react-dom/server";
// import path from "path";
// import fs from "fs";

// import App from "./src/App";

// const app = express();
// const port = 5000

// app.use(express.static("./build", { index: false }));


// app.use((req, res) => {

//   const location = new URL(req.url, `http://localhost:${port}`)

//   const reactApp = renderToString(
//     <ServerContainer location={location}>
//       <App />
//     </ServerContainer>
//   );


//   const templateFile = path.resolve("./build/index.html");
//   const data = fs.readFileSync(templateFile, "utf-8")
//   res.send(data.replace('<div dir="rtl" id="root"></div>', `<div dir="rtl" id="root">${reactApp}</div>`))
// });


// app.listen(3000, () => { console.log(`server is running on the ${3000}`) }); 