import React from "react";
import { withTranslation } from "react-i18next";

function Home({ t, i18n }) {
  return (
    <div>
      {t("title")}
      <p>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button onClick={() => i18n.changeLanguage("vi")}>VI</button>
      </p>
    </div>
  );
}

export default withTranslation("translation1")(Home);
