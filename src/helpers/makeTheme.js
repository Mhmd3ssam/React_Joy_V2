import { createTheme } from "@mui/material/styles";
import { arEG, enUS } from "@mui/material/locale";

import { LANGS, LANGS_DIRS, LANGS_FONTS } from "../constants/global";

const localesMap = {
  [LANGS.ar]: arEG,
  [LANGS.en]: enUS,
};

function makeTheme({ lang }) {
  return createTheme(
    {
      direction: LANGS_DIRS[lang],
      typography: {
        fontFamily: `${LANGS_FONTS[lang]}, Helvetica, Arial, sans-serif`,
      },
      palette: {
        primary: { main: "#1E7AF0" },
        secondary: { main: "#FFA303" },

        success: { main: "#29BF56" },
        warning: { main: "#FFA303" },
        error: { main: "#FC2424" },

        text: { primary: "#0F0F0F", secondary: "#607180" },

        divider: "#DBEAFD",
        background: {
          default: "#FAFBFF",
          backgroundPrimary: "#F7F9FD",
          backgroundSecondary: "#FCFCFC",
        },
      },
    },
    localesMap[lang]
  );
}

export default makeTheme;
