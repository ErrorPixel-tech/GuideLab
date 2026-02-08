import { useTranslation } from "react-i18next";
import style from './LanguageSwitcher.module.scss'

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={style.btnConteiner}>
      <button onClick={() => changeLanguage("ru")}>RU</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
    </div>
  );
}

export default LanguageSwitcher;
