import { useSelector } from 'react-redux';
import TextInput from './TextInput';
import style from './InputColumn.module.scss';
import { removeAllBlocks } from '../features/blocks/blocks';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import ListItemInput from './ListItemInput';

function InputColumn() {
  const inputsRef = useRef([]);

  const handleKeyDown = (index) => (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault(); // чтобы форма не сабмитилась
      const next = inputsRef.current[index + 1]; // следующий инпут
      if (next) next.focus(); // если есть — фокусим
    }
  };


  const blocks = useSelector((state) => state.blocks.items);

  const dispatch = useDispatch();


  // const handleMoveUp = (id) => {
  //   dispatch(moveInputForward(id));
  // };

  const handleRemoveAll = () => {
    if (confirm("УДАЛИТЬ ВСЁ?")) {
      dispatch(removeAllBlocks());
    }
  };


  return (
    <div className={style.column}>
      <div className={style.header}>
        <h2>Инпуты</h2>
        <button className={style.button} onClick={handleRemoveAll}>Очистить всё</button>
      </div>

      <div className={style.list}>
        {blocks.map((block, index) => {
          if (block.type === "listBlock") {
            let list = block.items;
            let listId = block.id;
            console.log(list);
            let jsx = list.map((item, index) => {
              console.log(item);
              return (
                <div key={index}>
                  <ListItemInput listId={listId} id={item.id} value={item.value}></ListItemInput>
                </div>
              );
            });
            return jsx;
          }

          if (block.type === "hr") {
            return (
              <div key={block.id}>
                {block.tag}<TextInput isDisabled={block.isDisabled} index={index} id={block.id} value={"[ПЕРЕНОС СТРОКИ]"} />
              </div>
            );
          }
          if (block.type === "screenshot") {
            return (
              <div key={block.id}>
                {block.type}{block.tag}<TextInput isDisabled={block.isDisabled} index={index} id={block.id} value={"[СКРИНШОТ]"} />
              </div>
            );
          }
          if (block.type === "screenshot-horizontal") {
            return (
              <div key={block.id}>
                {block.type}{block.tag}<TextInput isDisabled={block.isDisabled} index={index} id={block.id} value={"[ГАЛЕРЕЯ 2 КАРТИНКИ]"} />
              </div>
            );
          }
          if (block.type === "screenshot-block") {
            return (
              <div key={block.id}>
                {block.type}{block.tag}<TextInput isDisabled={block.isDisabled} index={index} id={block.id} value={"[ГАЛЕРЕЯ 4 КАРТИНКИ]"} />
              </div>
            );
          }
          if (block.isDisabled) {
            return (
              <div key={block.id}>
                {block.type}<TextInput
                  index={index}
                  isDisabled={block.isDisabled}
                  ref={(el) => (inputsRef.current[block.id] = el)}
                  onKeyDown={handleKeyDown(block.id)}
                  id={block.id}
                  value={"[ENTER]"} />
              </div>
            );
          }
          return (
            <div key={block.id}>
              {block.type}<TextInput
                index={index}
                isDisabled={block.isDisabled}
                ref={(el) => (inputsRef.current[block.id] = el)}
                onKeyDown={handleKeyDown(block.id)}
                id={block.id}
                value={block.value} />
            </div>
          );
        }
        )}
      </div>
    </div>
  );
}

export default InputColumn;

