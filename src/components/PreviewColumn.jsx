import { useSelector } from 'react-redux';
import '../steam-style.scss';
import { useDispatch } from 'react-redux';
import { formatAllBlocks } from '../features/blocks/blocks'
// import style from './PreviewColumn.module.scss';

function PreviewColumn() {
  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.blocks.items);

  function handleFormatClick(event) {
    if (!confirm("Вы уверены? Данная опция удалит все лишние пробелы и все переносы строк в блоках. Форматирование не затронет текст в [code]. Мы вас предупреждали.")) { return }
    dispatch(formatAllBlocks());
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
              <div key={input.id} >
                <div className={input.className}>
                </div>
                &nbsp;
              </div>
            )
          }
          if (input.type === "p-img") {
            return (
              <div key={input.id} className={input.className}>
                <span>Картинка</span>
                <pre key={input.id} className={input.className + " pre"}>
                  {input.value || `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus maxime qui repellendus voluptate est reprehenderit vel et.`}
                </pre>
                <div className='footer'></div>
              </div>
            )
          }
          if (input.type === "p-img-r") {
            return (
              <div key={input.id} className={input.className}>
                <span>Картинка</span>
                <pre key={input.id} className={input.className + " pre"}>
                  {input.value || `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus maxime qui repellendus voluptate est reprehenderit vel et.`}
                </pre>
                <div className='footer'></div>
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
              <div key={input.id} className={input.className}>
                <div >
                  <span>Картинка</span>
                </div>
                <div >
                  <span>Картинка</span>
                </div>
              </div>
            )
          }
          if (input.type === "screenshot-block") {
            return (
              <div key={input.id} className={input.className}>
                <div >
                  <span>Картинка</span>
                  <span>Картинка</span>
                </div>
                <div >
                  <span>Картинка</span>
                  <span>Картинка</span>
                </div>
              </div>
            )
          }
          if (input.type === "code") {
            return (
              // <pre className={style.pre} key={input.id} className={input.className}>
              <pre key={input.id} className={input.className}>
                {/* {input.value || `\u00A0`} */}
                {input.value || `Введите текст`}
              </pre>
            )
          }
          if (input.tag === "achivment-table") {
            return (
              <div class="steam__achivment-table">
                <div>Значок</div>
                <div>Название</div>
                <div>Описание</div>
                <div>Картинка</div>
                <div>Название</div>
                <div>Описание</div>
              </div>
            )
          }
          if (input.tag === "p") {
            return (
              <pre key={input.id} className={input.className + " pre"}>
                {input.value || `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus maxime qui repellendus voluptate est reprehenderit vel et.`}
              </pre>
            )
          }
          if (input.tag === "list") {

            if (!input.value.trim()) {
              return (
                <ul className={input.className}>
                  <li key={1}>Lorem ipsum dolor sit amet.</li>
                  <li key={2}>Lorem ipsum dolor sit amet.</li>
                  <li key={3}>Lorem ipsum dolor sit amet.</li>
                </ul>
              )
            }
            const arr = input.value.split(/\r?\n/);
            return (
              <ul className={input.className}>
                {arr.map((str, index) => {
                  return <li key={index}>{str}</li>
                })}
              </ul>
            )
          }
          if (input.tag === "olist") {

            if (!input.value.trim()) {
              return (
                <ol className={input.className}>
                  <li key={1}>Lorem ipsum dolor sit amet.</li>
                  <li key={2}>Lorem ipsum dolor sit amet.</li>
                  <li key={3}>Lorem ipsum dolor sit amet.</li>
                </ol>
              )
            }
            const arr = input.value.split(/\r?\n/);
            return (
              <ol className={input.className}>
                {arr.map((str, index) => {
                  return <li key={index}>{str}</li>
                })}
              </ol>
            )
          }
          if (input.tag === "slist") {

            if (!input.value.trim()) {
              return (
                <ul className={input.className}>
                  <li key={1}>- Lorem ipsum dolor sit amet.</li>
                  <li key={2}>- Lorem ipsum dolor sit amet.</li>
                  <li key={3}>- Lorem ipsum dolor sit amet.</li>
                </ul>
              )
            }
            const arr = input.value.split(/\r?\n/);
            return (
              <ul className={input.className}>
                {arr.map((str, index) => {
                  return <li key={index}>- {str}</li>
                })}
              </ul>
            )
          }
          if (input.tag === "checkbox") {

            if (!input.value.trim()) {
              return (
                <ul className={input.className}>
                  <li key={1}>- [x] Lorem ipsum dolor sit amet.</li>
                  <li key={2}>- [ ] Lorem ipsum dolor sit amet.</li>
                  <li key={3}>- [ ] Lorem ipsum dolor sit amet.</li>
                </ul>
              )
            }
            const arr = input.value.split(/\r?\n/);
            return (
              <ul className={input.className}>
                {arr.map((str, index) => {
                  return <li key={index}>[ ] {str}</li>
                })}
              </ul>
            )
          }
          if (input.tag === "numlist") {

            if (!input.value.trim()) {
              return (
                <ul className={input.className}>
                  <li key={1}>1. Lorem ipsum dolor sit amet.</li>
                  <li key={2}>2. Lorem ipsum dolor sit amet.</li>
                  <li key={3}>3. Lorem ipsum dolor sit amet.</li>
                </ul>
              )
            }
            let i = 1;
            const arr = input.value.split(/\r?\n/);
            return (
              <ul className={input.className}>
                {arr.map((str, index) => {
                  return <li key={index}>{i++}. {str}</li>
                })}
              </ul>
            )
          }


          if (input.tag === "h1" || input.tag === "h2" || input.tag === "h3") {
            return (
              <pre key={input.id} className={input.className + " pre"}>
                {input.value || `Lorem ipsum`}
              </pre>
            )
          }
          if (input.tag) {
            return (
              <pre key={input.id} className={input.className + " pre"}>
                {input.value || `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, illum.`}
              </pre>
            )
          }
          return (
            <pre key={input.id} className={input.className + " pre"}>
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
