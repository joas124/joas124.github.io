import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(({ locale }) => {
  const safeLocale = locale || "en"; 

  return {
    locale: safeLocale,
    messages: require(`../messages/${safeLocale}.json`),
  };
});
