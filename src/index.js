import React from "react";
import ReactDom from "react-dom";
import "./index.css"

const name = "Yameen";
let curDate = new Date();
curDate = curDate.getHours();
let greetings = '';
let cssStyle = {};

if(curDate >= 1 && curDate < 12){
  greetings = "Good Morning";
  cssStyle.color = "green";
}else if(curDate >= 12 && curDate < 16){
  greetings = "Good Afternoon";
  cssStyle.color = "yellow";
}else if(curDate >= 16 && curDate < 19){
  greetings = "Good Evening";
  cssStyle.color = "orange";
}else{
  greetings = "Good Night";
}




ReactDom.render(
  <>
    <div>
      <h1>Hello {name}, <span style={cssStyle}>{greetings}</span></h1>
    </div>
  </>,
  document.getElementById('root')
)
