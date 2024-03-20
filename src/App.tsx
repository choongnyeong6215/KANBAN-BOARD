import { GlobalStyle } from "./styles/GlobalStyle";
import DndSection from "./components/DndSection";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkMode } from "./recoil/atom";
import AddBoardModal from "./components/AddBoardModal";
import { ModalProvider } from "styled-react-modal";

const App = () => {
  const isDark = useRecoilValue(isDarkMode);

  return (
    <>
      <ThemeProvider theme={isDark ? lightTheme : darkTheme}>
        <ModalProvider>
          <GlobalStyle />
          <AddBoardModal />
          <DndSection />
        </ModalProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
