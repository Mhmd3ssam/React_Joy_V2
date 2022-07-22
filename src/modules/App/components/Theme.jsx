import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

import { HelmetProvider, Helmet } from "react-helmet-async";
import { ThemeProvider, CssBaseline } from "@mui/material";

import makeTheme from "../../../helpers/makeTheme";
import { LANGS, LANGS_DIRS, I18N_MAP } from "../../../constants/global";

function Theme({ children }) {
  const lang = "en"; // try to change this to "ar" and check ui/dom

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(I18N_MAP[lang]);
  }, [lang, i18n]);

  const theme = useMemo(() => makeTheme({ lang }), [lang]);
  const cache = useMemo(() => {
    return lang === LANGS.ar
      ? createCache({ key: "css-rtl", stylisPlugins: [prefixer, rtlPlugin] })
      : createCache({ key: "css" });
  }, [lang]);

  return (
    <HelmetProvider>
      <Helmet htmlAttributes={{ dir: LANGS_DIRS[lang], lang: I18N_MAP[lang] }}>
        {lang === LANGS.ar && (
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Tajawal:300,400,500,700&display=swap"
          />
        )}
      </Helmet>

      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {children}
        </ThemeProvider>
      </CacheProvider>
    </HelmetProvider>
  );
}

export default Theme;
