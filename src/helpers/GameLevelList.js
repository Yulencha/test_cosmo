import level01 from "./../img/01.svg";
import level02 from "./../img/02.svg";
import level03 from "./../img/03.svg";
import level04 from "./../img/04.svg";
import level05 from "./../img/05.svg";

export const gameLevelList = [
  {
    title: "Приветствие",
    description:
      "Создадим космический корабль, научимся отправлять и принимать сообщения с земли (Ввод/вывод данных).",
    price: "free",
    img: level01,
  },
  {
    title: "Запоминаем имена",
    description:
      "   Научимся управлять кораблем и запишем имя капитана корабля (переменные).",
    price: "free",
    img: level02,
  },
  {
    title: "Автопилот",
    description: "   Научимся облетать астероиды и другие корабли (Условия).",
    price: "paid",
    img: level03,
  },
  {
    title: "Автопилот +",
    description: "   Усовершенствуем наш Автопилот с помощью цикла (Цикл).",
    price: "paid",
    img: level04,
  },
  {
    title: "Функции",
    description: "   Подключим новые модули к нашему кораблю (Функции).",
    price: "paid",
    img: level05,
  },
];
