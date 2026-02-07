import { useSelector } from 'react-redux';
import '../steam-style.scss';
import { useDispatch } from 'react-redux';
import { formatAllInputs } from '../features/inputs/inputs'
// import style from './PreviewColumn.module.scss';

function PreviewColumn() {
  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.inputs.items);

  function handleFormatClick(event) {
    if (!confirm("Вы уверены? Данная опция удалит все лишние пробелы и все переносы строк в блоках. Форматирование не затронет текст в [code]. Мы вас предупреждали.")){return}
    dispatch(formatAllInputs());
    event.target.textContent = 'Отформатировано!';
    // через 5 секунд вернуть назад
    setTimeout(() => {
      event.target.textContent = 'Отформатировать';
    }, 1000);
  }

  return (
    <div className="column">
      <div className="header">
        <h2>Превью</h2>
        <button onClick={handleFormatClick}>Отформатировать</button>
      </div>
      <div className="steam__board">
        {inputs.map((input) => {
          if (input.type === "hr") {
            return (
              <div>
                <div key={input.id} className={input.className}>
                </div>
                &nbsp;
              </div>
            )
          }
          if (input.type === "screenshot") {
            return (
              <div key={input.id} className={input.className}>
                <span>Картинка</span>
              </div>
            )
          }
          if (input.type === "screenshot-horizontal") {
            return (
              <div className={input.className}>
                <div key={input.id}>
                  <span>Картинка</span>
                </div>
                <div key={input.id}>
                  <span>Картинка</span>
                </div>
              </div>
            )
          }
          if (input.type === "code") {
            return (
              // <pre className={style.pre} key={input.id} className={input.className}>
              <pre key={input.id} className={input.className}>
                {input.value || `\u00A0`}
              </pre>
            )
          }
          return (
            <pre key={input.id} className={input.className  + " pre"}>
              {input.value || `\u00A0`}
            </pre>
          )
        })
        }
      </div>
    </div>
  );
}

export default PreviewColumn;
