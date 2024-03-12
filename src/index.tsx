import ReactDOM from "react-dom/client";
import App from "./App";
import { lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={lightTheme}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </ThemeProvider>
);
