import { useDispatch } from 'react-redux';
import { addInput } from '../features/blocks/blocks';
// import { addList } from '../features/blocks/blocks';
import ButtonType from './ButtonType';
import style from './ButtonColumn.module.scss';

function ButtonColumn() {
  const dispatch = useDispatch();

  const handleAddInput = (payload) => {
    dispatch(addInput(payload));
  };

  // const handleAddList = (payload) => {
  //   dispatch(addList(payload));
  // };

  return (
    <div className={style.column}>
      <div className={style.header}>
        <h2>Кнопки</h2>
      </div>

      <div className={style['container']}>


        <div className={style['btns-block']}>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "p", className: "steam__paragraph", tag: "p" })}>Text</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "enter", className: "steam__enter", tag: "", isDisabled: true })}>Enter</ButtonType>
        </div>

        {/* WORK
        <div className={style['btns-block']}>
        <ButtonType className={style['button']} onClick={() => handleAddList({ className: "steam__list" })}>[LIST]</ButtonType>
        </div> */}

        <div className={style['btns-block']}>
          <ButtonType className={`${style['button']} ${style['button--header']}`} onClick={() => handleAddInput({ type: "h1", className: "steam__header-1", tag: "h1" })}>[h1]</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--header']}`} onClick={() => handleAddInput({ type: "h2", className: "steam__header-2", tag: "h2" })}>[h2]</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--header']}`} onClick={() => handleAddInput({ type: "h3", className: "steam__header-3", tag: "h3" })}>[h3]</ButtonType>
        </div>

        {/*LISTS */}
        <div className={style['btns-block']}>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "list", className: "steam__list", tag: "list" })}>List</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "olist", className: "steam__olist", tag: "olist" })}>oList</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "slist", className: "steam__slist", tag: "slist" })}>-List</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "numlist", className: "steam__numlist", tag: "numlist" })}>numList</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "checkbox", className: "steam__checkbox", tag: "checkbox" })}>Checkbox</ButtonType>
        </div>

        <div className={style['btns-block']}>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "bold", className: "steam__bold", tag: "b" })}>B</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "italic", className: "steam__italic", tag: "i" })}>I</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "underline", className: "steam__underline", tag: "u" })}>U</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "pullquote", className: "steam__pullquote", tag: "pullquote" })}>pQ</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "strike", className: "steam__strike", tag: "strike" })}>Strike</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "spoiler", className: "steam__spoiler", tag: "spoiler" })}>Spoiler</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "code", className: "steam__code", tag: "code" })}>[code]</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "noparse", className: "steam__noparse", tag: "noparse" })}>[noparse]</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "...", className: "steam__text", tag: "" })}>[...]</ButtonType>
        </div>

        {/* КАРТИНКИ */}
        <div className={style['btns-block']}>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "screenshot", className: "steam__screenshot", tag: "", isDisabled: true })}>1 Картинка</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "screenshot-horizontal", className: "steam__screenshot-horizontal", tag: "", isDisabled: true })}>2 Картинки</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "screenshot-block", className: "steam__screenshot-block", tag: "", isDisabled: true })}>4 Картинки</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "p-img", className: "steam__paragraph__image" })}>Слева</ButtonType>
          <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "p-img-r", className: "steam__paragraph__image steam__paragraph__image--right" })}>Справа</ButtonType>
        </div>

        <ButtonType className={`${style['button']} ${style['button--text']}`} onClick={() => handleAddInput({ type: "achivment-table", className: "steam__achivment-table", tag: "achivment-table", isDisabled: true })}>Таблица</ButtonType>
        {/* <div className={style['btns-block']}>
        </div> */}

        {/* <div className={style['btns-block']}>
       
        </div> */}

        <div className={style['btns-block']}>
          <ButtonType className={`${style['button']} ${style['button--something']}`} onClick={() => handleAddInput({ type: "hr", className: "steam__separator", tag: "hr", isDisabled: true })}>Separator</ButtonType>
        </div>
      </div>
    </div >
  );
}



export default ButtonColumn;
