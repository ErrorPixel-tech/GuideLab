import { useSelector } from 'react-redux';

import style from './MarkupColumn.module.scss';

function MarkupColumn() {
  const inputs = useSelector((state) => state.blocks.items);

  function createMarkUpCodeArray() {
    let code = inputs.map((input) => {
      if (input.type === "hr") {
        return `[${input.tag}][/${input.tag}]\n`;
      }
      let imageText10 = "ВполшириныПоЛевомуКраю";
      if (input.type === "p-img") {
        return (
          `[h1][/h1]\n[p]\n${imageText10}\n[/p]\n[p]${input.value}[/p]\n[h1][/h1]\n`
        );
      }
      let imageText20 = "ВполшириныПоПравомуКраю";
      if (input.type === "p-img-r") {
        return (
          `[h1][/h1]\n[p]\n${imageText20}\n[/p]\n[p]${input.value}[/p]\n[h1][/h1]\n`
        );
      }
      let imageText = "ВоВсюШиринуПоЦентру";
      if (input.type === "screenshot") {
        return `[p]\n[table]\n[tr]\n[td]\n${imageText}\n[/td]\n[/tr]\n[/table]\n[/p]\n`
      }
      if (input.type === "screenshot-horizontal") {
        return (`[p]\n[table]\n[tr]\n[td]\n${imageText}\n[/td]\n[td]\n${imageText}\n[/td]\n[/tr]\n[/table]\n[/p]\n`)
      }
      if (input.type === "screenshot-block") {
        return (`[p]\n[table]\n[tr]\n[td]\n${imageText}\n[/td]\n[td]\n${imageText}\n[/td]\n[/tr]\n[tr]\n[td]\n${imageText}\n[/td]\n[td]\n${imageText}\n[/td]\n[/tr]\n[/table]\n[/p]\n`)
      }
      if (input.type === "code") {
        return (
          ("[" + input.tag + "]" + input.value + "[/" + input.tag + "]" + "\n")
        )
      }
      if (input.type === "list") {
        let list = "";
        list += '[list]\n';
        list += "[*]";
        const withMarks = input.value.replace(/\n/g, '\n[*]');
        list +=withMarks;
        list += '\n[/list]\n';
        return list;
      }
      if (input.type === "olist") {
        let list = "";
        list += '[olist]\n';
        list += "[*]";
        const withMarks = input.value.replace(/\n/g, '\n[*]');
        list +=withMarks;
        list += '\n[/olist]\n';
        return list;
      }
      if (input.type === "slist") {
        let list = "";
        list += "- ";
        const withMarks = input.value.replace(/\n/g, '\n- ');
        list +=withMarks;
        list += '\n';
        return list;
      }
      if (input.tag === "u"
        || input.tag === "b"
        || input.tag === "i"
        || input.tag === "pullquote"
        || input.tag === "strike"
        || input.tag === "spoiler"
        || input.tag === "noparse"
      ) {
        let raw = ("[" + input.tag + "]" + input.value + "[/" + input.tag + "]"
        );
        return (
          "[p]" + raw + '[/p]\n')
      }
      if (input.tag) {
        let raw = ("[" + input.tag + "]" + input.value + "[/" + input.tag + "]"
        );
        return (
          raw + '\n')
      }
      return (
        (input.value || `\u00A0`) + "\n"
      )
    });
    code.push("\n[i]Сделано с помощью GuideForge![/i]\n");

    return code;
  }

  async function handleCopyClick(event) {
    let a = createMarkUpCodeArray();

    let newcode = a.reduce((acc, el) => acc + el, "");

    try {
      await navigator.clipboard.writeText(newcode);
      // btn.textContent = 'Скопировано!';
      event.target.textContent = 'Скопировано!';
      // через 5 секунд вернуть назад
      setTimeout(() => {
        event.target.textContent = 'Скопировать';
      }, 1000);
    } catch (err) {
      console.error('Не удалось скопировать: ', err);
    }
    return newcode;
  }

  return (
    <div className="column">
      <div className="header">
        <h2>Разметка</h2>
        <button onClick={handleCopyClick}>Скопировать</button>
      </div>
      <div className='markup-list'>
        {createMarkUpCodeArray().map((el, index) => {
          return (
            <pre className={style.pre} key={index}>{el}</pre>)
        })}
      </div>
    </div>
  );
}

export default MarkupColumn;

