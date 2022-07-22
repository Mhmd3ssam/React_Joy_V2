import fallback from "./fallback";
import feedback from "./feedback";

import app from "../modules/App/locales";
const resources = {
  ar: {
    fallback: fallback.ar,
    feedback: feedback.ar,

    app: app.ar
  },
  en: {
    fallback: fallback.en,
    feedback: feedback.en,

    app: app.en

  },
};

export default resources;
