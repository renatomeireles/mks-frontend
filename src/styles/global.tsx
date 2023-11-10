import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

:root {
  --primary: #0F52BA;
  --primary-hover: #2962b7;
  --secondary: #FFFFFF;
  --bg-footer: #EEEEEE;
  --text-card: #2C2C2C;
  --bg-price: #373737;
  --bg-hover-close-button: #2f2f2f;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  font-size: 62.5%;
  background-color: #f9f9f9;
}
`

