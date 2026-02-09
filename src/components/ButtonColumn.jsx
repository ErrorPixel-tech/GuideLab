import { useDispatch } from 'react-redux';
import { addInput } from '../features/blocks/blocks';
import ButtonType from './ButtonType';
import style from './ButtonColumn.module.scss';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from './LanguageSwitcher';

function ButtonColumn() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleAddInput = (payload) => {
    dispatch(addInput(payload));
  };

  return (
    <div id="buttonColumn" className={style.column}>
      <div className={style.header}>
        <h2>{t("buttons.header")}</h2>
        <LanguageSwitcher></LanguageSwitcher>
      </div>

      <div className={style['container']}>
        {/* ENTER 1 мало */}
        {/* ENTER 2 мало */}
        {/* ENTER 3 чуть-чуть не хватает*/}
        {/* ENTER 4 чуть чуть не*/}
        {/* ENTER 5 */}
        {/* ENTER 6 не вижу разницы*/}
        <div className={style['btns-block']}>
          {/* <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "enter", className: "steam__enter", tag: "", isDisabled: true, enter: "1" })}>Small space</ButtonType> */}
          {/* <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "enter", className: "steam__enter", tag: "", isDisabled: true, enter: "2" })}>Enter-2</ButtonType> */}
          {/* <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "enter", className: "steam__enter", tag: "", isDisabled: true, enter: "3" })}>Enter-3</ButtonType> */}
          {/* <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "enter", className: "steam__enter", tag: "", isDisabled: true, enter: "4" })}>Enter-4</ButtonType> */}
        </div>
        <div className={style['btns-block']}>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "p", className: "steam__paragraph", tag: "p" })}>{t("buttons.buttons.paragraph")}</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "enter", className: "steam__enter", tag: "", isDisabled: true, enter: "5" })}>{t("buttons.buttons.separator")}</ButtonType>
        </div>

        {/* WORK
        <div className={style['btns-block']}>
        <ButtonType className={style['button']} onClick={() => handleAddList({ className: "steam__list" })}>[LIST]</ButtonType>
        </div> */}

        {/* HEADERS */}
        <div className={style['btns-block']}>
          <ButtonType className={`${style['button']} ${style['button--header']}`} onClick={() => handleAddInput({ type: "h1", className: "steam__header-1", tag: "h1" })}>[h1]</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--header']}`} onClick={() => handleAddInput({ type: "h2", className: "steam__header-2", tag: "h2" })}>[h2]</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--header']}`} onClick={() => handleAddInput({ type: "h3", className: "steam__header-3", tag: "h3" })}>[h3]</ButtonType>
        </div>

        {/*LISTS */}
        <div className={style['btns-block']}>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "slist", className: "steam__slist", tag: "slist" })}>{t("buttons.buttons.bulletedList")}</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "numlist", className: "steam__numlist", tag: "numlist" })}>{t("buttons.buttons.numberedList")}</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "list", className: "steam__list", tag: "list" })}>{t("buttons.buttons.bulletedSteamList")}</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "olist", className: "steam__olist", tag: "olist" })}>{t("buttons.buttons.numberedSteamList")}</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "checkbox", className: "steam__checkbox", tag: "checkbox" })}>{t("buttons.buttons.checkboxList")}</ButtonType>
        </div>

        <div className={style['btns-block']}>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "bold", className: "steam__bold", tag: "b" })}>B</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "italic", className: "steam__italic", tag: "i" })}>I</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "underline", className: "steam__underline", tag: "u" })}>U</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "pullquote", className: "steam__pullquote", tag: "pullquote" })}>pullQ</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "strike", className: "steam__strike", tag: "strike" })}>Strike</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "spoiler", className: "steam__spoiler", tag: "spoiler" })}>Spoiler</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "code", className: "steam__code", tag: "code" })}>[code]</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "noparse", className: "steam__noparse", tag: "noparse" })}>[noparse]</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "...", className: "steam__text", tag: "" })}>[...]</ButtonType>
        </div>

        {/* КАРТИНКИ */}
        <div className={style['btns-block']}>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "p-img", className: "steam__paragraph__image" })}>{t("buttons.buttons.imageFloatLeft")}</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "p-img-r", className: "steam__paragraph__image--right" })}>{t("buttons.buttons.imageFloatRight")}</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "screenshot", className: "steam__screenshot", tag: "", isDisabled: true })}>{t("buttons.buttons.1-images")}</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "screenshot-horizontal", className: "steam__screenshot-horizontal", tag: "", isDisabled: true })}>{t("buttons.buttons.2-images")}</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "screenshot-block", className: "steam__screenshot-block", tag: "", isDisabled: true })}>{t("buttons.buttons.4-images")}</ButtonType>
        </div>

        <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "achivment-table", className: "steam__achivment-table", tag: "achivment-table", isDisabled: true })}>{t("buttons.buttons.achivmentTable")}</ButtonType>
        {/* <div className={style['btns-block']}>
        </div> */}

        {/* <div className={style['btns-block']}>
       
        </div> */}

        <div className={style['btns-block']}>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "hr", className: "steam__separator", tag: "hr", isDisabled: true })}>[hr][/hr]</ButtonType>
        </div>
      </div>
    </div >
  );
}



export default ButtonColumn;
