import { useDispatch } from 'react-redux';
import { updateInput, removeInput } from '../features/inputs/inputs';
import style from './TextInput.module.scss';
import TextareaAutosize from 'react-textarea-autosize';

function TextInput({ id, value, key, ref, onKeyDown }) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateInput({ id, value: e.target.value }));
  };

  const handleDelete = () => {
    if (confirm("Уверены, что хотите удалить этот элемент?")) {
      dispatch(removeInput({ id }));
    }
  };

  return (
    <div className={style.container}>
      <TextareaAutosize
        minRows={1}
        maxRows={5}
        key={key}
        ref={ref}
        onKeyDown={onKeyDown}

        className={style.input}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Введите текст..."
      ></TextareaAutosize>
      <button onClick={handleDelete}>x</button>
    </div>
  );
}

export default TextInput;
