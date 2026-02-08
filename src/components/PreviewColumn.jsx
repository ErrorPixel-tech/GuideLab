import { useSelector } from 'react-redux';
// import '../steam-style.scss';
import { useDispatch } from 'react-redux';
import { formatAllBlocks } from '../features/blocks/blocks'
import style from './PreviewColumn.module.scss';
import { useTranslation } from 'react-i18next';

function PreviewColumn() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.blocks.items);

  function handleFormatClick(event) {
    let msg = t("preview.formatButtonMsg");
    if (!confirm(msg)) { return }
    dispatch(formatAllBlocks());
    event.target.textContent = t("preview.formatButtonSecondTitle");
    // через 5 секунд вернуть назад
    setTimeout(() => {
      event.target.textContent = t("preview.formatButtonTitle");
    }, 1000);
  }


  return (
    <div className="column">
      <div className="header">
        <h2>Превью</h2>
        <button onClick={handleFormatClick}>{t("preview.formatButtonTitle")}</button>
      </div>
      <div className={style["steam__board"]}>
        {inputs.map((input) => {
          if (input.type === "hr") {
            return (
              <div key={input.id} >
                <div className={style[input.className]}>
                </div>
                &nbsp;
              </div>
            )
          }
          if (input.type === "p-img") {
            return (
              <div key={input.id} className={style[input.className]}>
                <span>{t("preview.imageTitle")}</span>
                <pre key={input.id} className={style[input.className] + " " + style.pre}>
                  {input.value || `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus maxime qui repellendus voluptate est reprehenderit vel et.`}
                </pre>
                <div className='footer'></div>
              </div>
            )
          }
          if (input.type === "p-img-r") {
            return (
              <div key={input.id} className={style[input.className]}>
                <span>{t("preview.imageTitle")}</span>
                <pre key={input.id} className={style[input.className] + " " + style.pre}>
                  {input.value || `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus maxime qui repellendus voluptate est reprehenderit vel et.`}
                </pre>
                <div className='footer'></div>
              </div>
            )
          }
          if (input.type === "screenshot") {
            return (
              <div key={input.id} className={style[input.className]}>
                <span>{t("preview.imageTitle")}</span>
              </div>
            )
          }
          if (input.type === "screenshot-horizontal") {
            return (
              <div key={input.id} className={style[input.className]}>
                <div >
                  <span>{t("preview.imageTitle")}</span>
                </div>
                <div >
                  <span>{t("preview.imageTitle")}</span>
                </div>
              </div>
            )
          }
          if (input.type === "screenshot-block") {
            return (
              <div key={input.id} className={style[input.className]}>
                <div >
                  <span>{t("preview.imageTitle")}</span>
                  <span>{t("preview.imageTitle")}</span>
                </div>
                <div >
                  <span>{t("preview.imageTitle")}</span>
                  <span>{t("preview.imageTitle")}</span>
                </div>
              </div>
            )
          }
          if (input.type === "code") {
            return (
              // <pre className={style.pre} key={input.id} className={style[input.className]}>
              <pre key={input.id} className={style[input.className]}>
                {/* {input.value || `\u00A0`} */}
                {input.value || `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus maxime qui repellendus voluptate est reprehenderit vel et.`}
              </pre>
            )
          }
          if (input.type === "enter") {
            let str = "";
            for (let index = 0; index < input.enter; index++) {
              str += "\n";
            }
            return <pre key={input.id} className={style[input.className] + " " + style.pre}>
              {str}
            </pre>;
          }
          if (input.tag === "achivment-table") {
            return (
              <div key={input.id} className={style["steam__achivment-table"]}>
                <div>{t("preview.achivmentTable.header-1")}</div>
                <div>{t("preview.achivmentTable.header-2")}</div>
                <div>{t("preview.achivmentTable.header-3")}</div>
                <div>{t("preview.achivmentTable.content-1")}</div>
                <div>{t("preview.achivmentTable.content-2")}</div>
                <div>{t("preview.achivmentTable.content-3")}</div>
              </div>
            )
          }
          if (input.tag === "p") {
            return (
              <pre key={input.id} className={style[input.className] + " " + style.pre}>
                {input.value || `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus maxime qui repellendus voluptate est reprehenderit vel et.`}
              </pre>
            )
          }
          if (input.tag === "list") {

            if (!input.value.trim()) {
              return (
                <ul key={input.id} className={style[input.className]}>
                  <li key={1}>Lorem ipsum dolor sit amet.</li>
                  <li key={2}>Lorem ipsum dolor sit amet.</li>
                  <li key={3}>Lorem ipsum dolor sit amet.</li>
                </ul>
              )
            }
            const arr = input.value.split(/\r?\n/);
            return (
              <ul key={input.id} className={style[input.className]}>
                {arr.map((str, index) => {
                  return <li key={index}>{str}</li>
                })}
              </ul>
            )
          }
          if (input.tag === "olist") {

            if (!input.value.trim()) {
              return (
                <ol key={input.id} className={style[input.className]}>
                  <li key={1}>Lorem ipsum dolor sit amet.</li>
                  <li key={2}>Lorem ipsum dolor sit amet.</li>
                  <li key={3}>Lorem ipsum dolor sit amet.</li>
                </ol>
              )
            }
            const arr = input.value.split(/\r?\n/);
            return (
              <ol key={input.id} className={style[input.className]}>
                {arr.map((str, index) => {
                  return <li key={index}>{str}</li>
                })}
              </ol>
            )
          }
          if (input.tag === "slist") {

            if (!input.value.trim()) {
              return (
                <ul key={input.id} className={style[input.className]}>
                  <li>• Lorem ipsum dolor sit amet.</li>
                  <li>• Lorem ipsum dolor sit amet.</li>
                  <li>• Lorem ipsum dolor sit amet.</li>
                </ul>
              )
            }
            const arr = input.value.split(/\r?\n/);
            return (
              <ul key={input.id} className={style[input.className]}>
                {arr.map((str, index) => {
                  return <li key={index}>• {str}</li>
                })}
              </ul>
            )
          }
          if (input.tag === "checkbox") {
            if (!input.value.trim()) {
              return (
                <ul key={input.id} className={style[input.className]}>
                  <div>{t("preview.checkboxTitle")}</div>
                  <li key={1}>- [x] Lorem ipsum dolor sit amet.</li>
                  <li key={2}>- [ ] Lorem ipsum dolor sit amet.</li>
                  <li key={3}>- [ ] Lorem ipsum dolor sit amet.</li>
                </ul>
              )
            }
            const arr = input.value.split(/\r?\n/);
            return (
              <ul key={input.id} className={style[input.className]}>
                <div>СПИСОК ДЕЛ:</div>
                {arr.map((str, index) => {
                  return <li key={index}>- [ ] {str}</li>
                })}
              </ul>
            )
          }
          if (input.tag === "numlist") {

            if (!input.value.trim()) {
              return (
                <ul key={input.id} className={style[input.className]}>
                  <li key={1}>1. Lorem ipsum dolor sit amet.</li>
                  <li key={2}>2. Lorem ipsum dolor sit amet.</li>
                  <li key={3}>3. Lorem ipsum dolor sit amet.</li>
                </ul>
              )
            }
            let i = 1;
            const arr = input.value.split(/\r?\n/);
            return (
              <ul key={input.id} className={style[input.className]}>
                {arr.map((str, index) => {
                  return <li key={index}>{i++}. {str}</li>
                })}
              </ul>
            )
          }


          if (input.tag === "h1" || input.tag === "h2" || input.tag === "h3") {
            return (
              <pre key={input.id} className={style[input.className] + " " + style.pre}>
                {input.value || `Lorem ipsum`}
              </pre>
            )
          }
          if (input.tag) {
            return (
              <pre key={input.id} className={style[input.className] + " " + style.pre}>
                {input.value || `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, illum.`}
              </pre>
            )
          }
          return (
            <pre key={input.id} className={style[input.className] + " " + style.pre}>
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
