import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

h1,
h2,
h3,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ul,
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

.list, ul {
  list-style: none;
}

button {
  cursor: pointer;
}

body {
  margin: 0;
  font-family: Montserrat,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e5e5e5;

 
}
.blue{
  background-color: #8C72DF;
}
.green{
 background-color: #71DF87;
}
.peach{
  background-color: #FF765F;
}
.yellow{
background-color: #e7e76c;
}
.chestnut{
  background-color: #da8989;
}
.brown{
  background-color: #a07d70;
}
.purple{
  background-color: #bc8fb7;
}
.pink{
  background-color: #cd5886;
}
.white{
  background-color: #ffffff;
}


.blueIcon{
  color: #8C72DF;
}
.greenIcon{
 color: #71DF87;
}
.peachIcon{
  color: #FF765F;
}
.yellowIcon{
color: #e7e76c;
}
.chestnutIcon{
  color: #da8989;
}
.brownIcon{
  color: #a07d70;
}
.purpleIcon{
  color: #bc8fb7;
}
.pinkIcon{
  color: #cd5886;
}
`;


// martyinfuture  
