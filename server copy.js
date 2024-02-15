import "ignore-styles";

import express from "express"
const app = express();

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { AppRegistry } from 'react-native';
import { ServerContainer } from "@react-navigation/native";

// import App from './src/App';
import Login from "./src/views/user/Login";

app.use(express.static("./build", { index: false }));

AppRegistry.registerComponent('reactNative', () => Login);


app.use((req, res) => {
  const location = new URL(res.url, 'https://localhost:3000');

  const { element, getStyleElement } = AppRegistry.getApplication('reactNative');

  const ref = React.createRef();

  const html = ReactDOMServer.renderToString(
    <ServerContainer
      ref={ref}
      location={location}
    >
      {element}
    </ServerContainer>
  );

  const css = ReactDOMServer.renderToStaticMarkup(getStyleElement());
  const options = ref.current?.getCurrentOptions();

  res.send(`
    <html dir="rtl" lang="fa-IR">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link rel="stylesheet" href="%PUBLIC_URL%/css/font.css">
    <title>دیجی کالا</title>
    <style>
        html {
            overscroll-behavior: none; /* contain */
            overscroll-behavior-block: none;
        }
        body {
            overscroll-behavior: none; /* contain */
            overscroll-behavior-block: none;
        }
        div#root {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            width: 100%;
            height: 100vh;
            overflow: hidden;
        }
    </style>
    ${css}
    <title>${options?.title}</title>
    </head>
    
    <body>
        <div dir="rtl" id="root">${html}</div>
    </body>
    
    <noscript>
        <h4 style="margin:auto;text-align: center;">برای استفاده از این سایت باید جاوااسکریپت مرورگرتان فعال باشد</h4>
    </noscript>
    
    </html>
`)
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
// const port = 3000

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