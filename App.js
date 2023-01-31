// var root = document.getElementById("root");
// var ele = document.createElement("h1");
// ele.innerText = "Hiiii...";

// root.innerHTML = "<h1>Maahi</h1>";
// root.appendChild(ele);

import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";

import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Header />
    <Body />
  </React.Fragment>
);
