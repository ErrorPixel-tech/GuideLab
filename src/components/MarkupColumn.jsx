import { useSelector } from 'react-redux';

import style from './MarkupColumn.module.scss';

function MarkupColumn() {
  const inputs = useSelector((state) => state.inputs.items);

  return (
    <div className="column">
      <div className="header">
        <h2>Разметка</h2>
      </div>
      <div className="markup-list">
        {inputs.map((input) => {
          if (input.type === "hr") {
            return (
              <div key={input.id}>
                [{input.tag}][/{input.tag}]
              </div>
            )
          }
          if (input.type === "screenshot") {
            return (
              <div key={input.id}>
                [table]<br></br>
                [tr]<br></br>
                [td]<br></br>
                {`ВставьтеСкриншотСюда`}<br></br>
                [/td]<br></br>
                [/tr]<br></br>
                [/table]<br></br>
              </div>
            )
          }
          if (input.type === "screenshot-horizontal") {
            return (
              <div key={input.id}>
                [table]<br></br>
                [tr]<br></br>
                [td]<br></br>
                ВставьтеСкриншотСюда<br></br>
                [/td]<br></br>
                [td]<br></br>
                ВставьтеСкриншотСюда<br></br>
                [/td]<br></br>
                [/tr]<br></br>
                [/table]<br></br>
              </div>
            )
          }
          if (input.type === "code") {
            return (
              <pre className={style.pre} key={input.id}>
                [{input.tag}]{input.value}[/{input.tag}]
              </pre>
            )
          }
          if (input.tag) {
            return (
              <div key={input.id}>
                [{input.tag}]{input.value}[/{input.tag}]
              </div>
            )
          }
          return (
            <div key={input.id}>
              {input.value || `\u00A0`}
            </div>
          )
        })}
        <p>Сделано с помощью SteamEditor!<br></br>www.steam-editor.com
        </p>
      </div>
    </div>
  );
}

export default MarkupColumn;

