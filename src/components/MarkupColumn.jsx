import { useSelector } from 'react-redux';

import style from './MarkupColumn.module.scss';
import { useTranslation } from 'react-i18next';

function MarkupColumn() {
  const inputs = useSelector((state) => state.blocks.items);
  const { t } = useTranslation();
  function createMarkUpCodeArray() {
    let code = inputs.map((input) => {
      if (input.type === "hr") {
        return `[${input.tag}][/${input.tag}]\n`;
      }
      if (input.type === "p-img") {
        let imageText = t("markup.floatLeft");
        return (
          `[h1][/h1]\n[p]\n${imageText}\n[/p]\n[p]${input.value}[/p]\n[h1][/h1]\n`
        );
      }
      if (input.type === "p-img-r") {
        let imageText = t("markup.floatRight");
        return (
          `[h1][/h1]\n[p]\n${imageText}\n[/p]\n[p]${input.value}[/p]\n[h1][/h1]\n`
        );
      }
      let imageWideText = t("markup.wideImage");
      if (input.type === "screenshot") {
        return `[p]\n${imageWideText}\n[/p]\n`
      }
      if (input.type === "screenshot-horizontal") {
        return (`[p]\n[table]\n[tr]\n[td]\n${imageWideText}\n[/td]\n[td]\n${imageWideText}\n[/td]\n[/tr]\n[/table]\n[/p]\n`)
      }
      if (input.type === "screenshot-block") {
        return (`[p]\n[table]\n[tr]\n[td]\n${imageWideText}\n[/td]\n[td]\n${imageWideText}\n[/td]\n[/tr]\n[tr]\n[td]\n${imageWideText}\n[/td]\n[td]\n${imageWideText}\n[/td]\n[/tr]\n[/table]\n[/p]\n`)
      }
      if (input.type === "achivment-table") {
        const pattern = '\u00A0 ';
        let result = '';
        // 150 многовато ок
        // 140 ок
        // 130 мало
        // 125 мало
        // 100 многовато
        // 90 маловато
        // 80 маловато
        // при 100 60 на мобиле создают 3 строки
        // при 76 25 символа создало 1 строку
        // при 50
        while (result.length < 140) {
          result += pattern;
        }
        // return (
        //   `[p]\n[table]\n[tr]\n[th]Значок[/th]\n[th]Название[/th]\n[th]Описание${result}[/th]\n[/tr]\n[tr]\n[td]Картинка[/td]\n[td]Название[/td]\n[td]Описание[/td]\n[/tr]\n[/table]\n[/p]\n`
        // )
        return (
          `[p]\n[table]\n[tr]\n[th]${t("markup.achivmentTable.header-1")}[/th]\n[th]${t("markup.achivmentTable.header-2")}[/th]\n[th]${t("markup.achivmentTable.header-3")}[/th]\n[/tr]\n[tr]\n[td]${t("markup.achivmentTable.content-1")}[/td]\n[td]${t("markup.achivmentTable.content-2")}[/td]\n[td]${t("markup.achivmentTable.content-3")}-${result}[/td]\n[/tr]\n[/table]\n[/p]\n`
        )
      }
      if (input.type === "code") {
        return (
          ("[p][" + input.tag + "]" + input.value + "[/" + input.tag + "]" + "[/p]\n")
        )
      }
      if (input.type === "list") {
        let list = "";
        list += '[list]\n';
        list += "[*]";
        const withMarks = input.value.replace(/\n/g, '\n[*]');
        list += withMarks;
        list += '\n[/list]\n';
        return list;
      }
      if (input.type === "olist") {
        let list = "";
        list += '[olist]\n';
        list += "[*]";
        const withMarks = input.value.replace(/\n/g, '\n[*]');
        list += withMarks;
        list += '\n[/olist]\n';
        return list;
      }
      if (input.type === "slist") {
        let list = "";
        list += '[p]\n';
        list += "• ";
        const withMarks = input.value.replace(/\n/g, '\n• ');
        list += withMarks;
        list += '\n[/p]\n';
        return list;
      }
      if (input.type === "checkbox") {
        let list = "";
        list += `[table]\n[code]\n[b]${t("markup.checkboxListTitle")}[/b]\n`;
        list += "- [ ] ";
        const withMarks = input.value.replace(/\n/g, '\n- [ ] ');
        list += withMarks;
        list += '\n[/code]\n[/table]\n';
        return list;
      }
      if (input.type === "numlist") {
        let i = 2;
        let list = ""; list += '[p]\n';
        list += "1. ";
        const withMarks = input.value.replace(/\n/g, `\n${i++}. `);
        list += withMarks;
        list += '\n[/p]\n';
        return list;
      }
      if (input.type === "enter") {
        let str = "";
        for (let index = 0; index < input.enter; index++) {
          str += "\n";
        }
        return str;
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


    return code;
  }

  async function handleCopyClick(event) {
    let a = createMarkUpCodeArray();

    const phrases = [
      { text: t("markup.phrases.text1"), weight: 10 },  // высокий шанс
      { text: t("markup.phrases.text2"), weight: 1 },
      { text: t("markup.phrases.text3"), weight: 1 },  // низкий шанс
    ];
    function getRandomPhrase(phrases) {
      // Суммируем все веса
      const totalWeight = phrases.reduce((sum, p) => sum + p.weight, 0);

      // Берём случайное число от 0 до totalWeight
      let rnd = Math.random() * totalWeight;

      // Идём по массиву и вычитаем веса, пока не "провалимся" в элемент
      for (const phrase of phrases) {
        rnd -= phrase.weight;
        if (rnd <= 0) {
          return phrase.text;
        }
      }

      // На всякий случай, если из-за округлений не сработало
      return phrases[phrases.length - 1].text;
    }

    const randomPhrase = getRandomPhrase(phrases);

    a.push(`[p][i]${randomPhrase}[/i][/p]`);


    let newcode = a.reduce((acc, el) => acc + el, "");

    try {
      await navigator.clipboard.writeText(newcode);
      // btn.textContent = 'Скопировано!';
      event.target.textContent = t("markup.btnTitle2");
      // через 5 секунд вернуть назад
      setTimeout(() => {
        event.target.textContent = t("markup.btnTitle1");
      }, 1000);
    } catch (err) {
      console.error('Не удалось скопировать: ', err);
    }
    return newcode;
  }

  return (
    <div className="column">
      <div className="header">
        <h2>{t("markup.header")}</h2>
        <button onClick={handleCopyClick}>{t("markup.btnTitle1")}</button>
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

