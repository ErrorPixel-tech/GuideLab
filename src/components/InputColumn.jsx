import { useSelector } from 'react-redux';
import TextInput from './TextInput';
import style from './InputColumn.module.scss';
import { removeAllInputs } from '../features/inputs/inputs';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';

function InputColumn() {
  const inputsRef = useRef([]);

  const handleKeyDown = (index) => (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault(); // чтобы форма не сабмитилась
      const next = inputsRef.current[index + 1]; // следующий инпут
      if (next) next.focus(); // если есть — фокусим
    }
  };


  const inputs = useSelector((state) => state.inputs.items);

  const dispatch = useDispatch();


  // const handleMoveUp = (id) => {
  //   dispatch(moveInputForward(id));
  // };

  const handleRemoveAll = () => {
    if (confirm("УДАЛИТЬ ВСЁ?")) {
      dispatch(removeAllInputs());
    }
  };


  return (
    <div className={style.column}>
      <div className={style.header}>
        <h2>Инпуты</h2>
        <button className={style.button} onClick={handleRemoveAll}>Очистить всё</button>
      </div>

      <div className={style.list}>
        {inputs.map((input, index) => {


          if (input.type === "hr") {
            return (
              <div key={input.id}>
                {input.tag}<TextInput index={index} id={input.id} value={"[ПЕРЕНОС СТРОКИ]"} />
              </div>
            );
          }
          if (input.type === "screenshot") {
            return (
              <div key={input.id}>
                {input.type}{input.tag}<TextInput disabled index={index} id={input.id} value={"[СКРИНШОТ]"} />
              </div>
            );
          }
          if (input.type === "screenshot-horizontal") {
            return (
              <div key={input.id}>
                {input.type}{input.tag}<TextInput disabled index={index} id={input.id} value={"[СКРИНШОТ]"} />
              </div>
            );
          }
          return (
            <div key={input.id}>
              {input.type}<TextInput
                index={index}
                ref={(el) => (inputsRef.current[input.id] = el)}
                onKeyDown={handleKeyDown(input.id)}
                id={input.id}
                value={input.value} />
            </div>
          );
        }
        )}
      </div>
    </div>
  );
}

export default InputColumn;

