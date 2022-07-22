import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { Typography } from "@mui/material";

import Theme from "./components/Theme";
import AppContainer from "./components/AppContainer";

const Greeting = ({ text }) => {
  const { t } = useTranslation();

  return (
    <Typography
      component="h1"
      variant="h3"
      align="center"
      color="primary"
      sx={{ mt: 4 }}
    >
      {t(text)}
    </Typography>
  );
};

function App() {
  const isLoggedIn = true; // try to change this to false

  return (
    <Theme>
      <Router>
        {isLoggedIn ? (
          <AppContainer>
            <Routes>
              {/* LIST APP ROUTES HERE */}
              <Route index element={<Greeting text="greeting" />} />
            </Routes>
          </AppContainer>
        ) : (
          <Routes>
            {/* LIST PUBLIC ROUTES HERE */}
            <Route index element={<Greeting text="login" />} />
          </Routes>
        )}
      </Router>
    </Theme>
  );
}

export default App;
