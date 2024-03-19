import { GlobalStyle } from "./styles/GlobalStyle";
import DndSection from "./components/DndSection";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkMode } from "./recoil/atom";
import AddBoardModal from "./components/AddBoardModal";

const App = () => {
  const isDark = useRecoilValue(isDarkMode);

  return (
    <>
      <ThemeProvider theme={isDark ? lightTheme : darkTheme}>
        <GlobalStyle />
        <AddBoardModal />
        <DndSection />
      </ThemeProvider>
    </>
  );
};

export default App;
