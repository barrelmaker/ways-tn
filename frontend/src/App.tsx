import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import PlanPage from "./pages/Plan/PlanPage";
import SignInModal from "./pages/Plan/SignInModal";
import { appTheme } from "./themes/theme";

function App() {
  const [name, setName] = useState<string | null>(null);
  const [emoji, setEmoji] = useState<string | null>("😃");
  const [isOpen, setIsOpen] = useState(true);

  return (
    <UserContext.Provider value={{ name, setName, emoji, setEmoji }}>
      <ThemeProvider theme={appTheme}>
        <CssBaseline enableColorScheme />

        <div>
          {name ? (
            <PlanPage />
          ) : (
            <SignInModal open={isOpen} onClose={handleClose} />
          )}
        </div>
      </ThemeProvider>
    </UserContext.Provider>
  );

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }
}

export default App;
