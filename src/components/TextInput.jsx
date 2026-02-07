import { useDispatch } from 'react-redux';
import { updateInput, removeInput, moveInputDown, moveInputUp } from '../features/inputs/inputs';
import style from './TextInput.module.scss';
import TextareaAutosize from 'react-textarea-autosize';

function TextInput({ id, value, index, ref, isDisabled, onKeyDown }) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateInput({ id, value: e.target.value }));
  };

  const handleDelete = () => {
    if (confirm("Уверены, что хотите удалить этот элемент?")) {
      dispatch(removeInput({ id }));
    }
  };

  const handleMoveDown = (index) => {
    dispatch(moveInputDown({ index }));
  };
  const handleMoveUp = (index) => {
    dispatch(moveInputUp({ index }));
  };

  return (
    <div className={style.container}>
      <TextareaAutosize
        minRows={1}
        maxRows={5}
        disabled={isDisabled}
        ref={ref}
        onKeyDown={onKeyDown}
        className={style.input}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Введите текст..."
      ></TextareaAutosize>
      <div className={style.container__menu}>
        <button className={style.menu__button} onClick={() => { handleMoveUp(index) }}>↑</button>
        <button className={style.menu__button + " " + style['menu__button--red']} onClick={handleDelete}>x</button>
        <button className={style.menu__button} onClick={() => { handleMoveDown(index) }}>↓</button>
      </div>
    </div>
  );
}
export default TextInput;
