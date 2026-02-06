import { useSelector } from 'react-redux';
import '../steam-style.scss';
// import style from './PreviewColumn.module.scss';

function PreviewColumn() {
  const inputs = useSelector((state) => state.inputs.items);

  return (
    <div className="column">
      <div className="header">
        <h2>Превью</h2>
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
            <div key={input.id} className={input.className}>
              {input.value || `\u00A0`}
            </div>
          )
        })
        }
      </div>
    </div>
  );
}

export default PreviewColumn;
