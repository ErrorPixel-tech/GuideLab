import { useSelector } from 'react-redux';

import style from './MarkupColumn.module.scss';

function MarkupColumn() {
  const inputs = useSelector((state) => state.inputs.items);

  async function handleCopyClick(event) {
    let code = inputs.reduce((acc, input) => {
      if (input.type === "hr") {
        return acc + `[${input.tag}][/${input.tag}]\n`;
      }
      if (input.type === "screenshot") {
        return acc + `[table]\n[tr]\n[td]\nВставьтеСкриншотСюда\n[/td]\n[/tr][/table]\n`
      }
      if (input.type === "screenshot-horizontal") {
        return acc + (
          `[table]\n[tr]\n[td]\nВставьтеСкриншотСюда\n[/td]\n[td]\nВставьтеСкриншотСюда\n[/td]\n[/tr]\n[/table]\n`
        )
      }
      // if (input.type === "code") {
      //   return acc + (
      //     <pre className={style.pre} key={input.id}>
      //       [{input.tag}]{input.value}[/{input.tag}]
      //     </pre>
      //   )
      // }
      if (input.type === "code") {
        return (
          acc + ("[" + input.tag + "]" + input.value + "[/" + input.tag + "]" + "\n")
        )
      }
      if (input.tag) {
        let raw = ("[" + input.tag + "]" + input.value + "[/" + input.tag + "]" + "\n"
        );

        // let cleaned = raw.replace(/\s+/g, ' ').trim();

        return (
          acc + raw + '\n')
      }
      return (
        acc + (input.value || `\u00A0`) + "\n"
      )

      // return acc + input.value;
    }, "");

    code += "\n[i]Сделано с помощью SteamEditor![/i]\n";



    try {
      await navigator.clipboard.writeText(code);
      // btn.textContent = 'Скопировано!';
      event.target.textContent = 'Скопировано!';
      // через 5 секунд вернуть назад
      setTimeout(() => {
        event.target.textContent = 'Скопировать';
      }, 1000);
    } catch (err) {
      console.error('Не удалось скопировать: ', err);
    }
    return code;
  }

  return (
    <div className="column">
      <div className="header">
        <h2>Разметка</h2>
        <button onClick={handleCopyClick}>Скопировать</button>
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
              <pre key={input.id} className={style.pre}>
                [{input.tag}]{input.value}[/{input.tag}]
              </pre>
            )
          }
          return (
            <pre key={input.id} className={style.pre}>
              {input.value || `\u00A0`}
            </pre>
          )
        })}
        <p>Сделано с помощью SteamEditor!<br></br>www.steam-editor.com
        </p>
      </div>
    </div>
  );
}

export default MarkupColumn;

