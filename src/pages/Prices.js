import axios from "axios";
import React, { useState, useEffect } from "react";
import pageBackground from "../img/background.svg";
import TariffItem from "../components/tariffItem/TariffItem";

const Prices = () => {
  const [tariffs, setTariffs] = useState([]);

  useEffect(() => {
    async function fetchTariff() {
      try {
        const response = await axios.get(
          "https://munchkin.cosmoscript.ru/api/get_tariff/"
        );
        setTariffs(response.data);
      } catch (error) {
        setTariffs([
          {
            name: "Базовый тариф",
            description:
              "Этот тариф идеально подходит для тех, кто хочет начать свой путь. Он предоставляет доступ к основным функциям и услугам, помогая вам экономить и учиться.",
            price: 100,
          },
          {
            name: "Профессиональный тариф",
            description:
              "Наш профессиональный тариф предназначен для тех, кто стремится к высокой производительности и большей функциональности. Получите доступ к продвинутым возможностям и инструментам для достижения ваших целей",
            price: 500,
          },
          {
            name: "Семейный тариф",
            description:
              "Семейный тариф создан для обеспечения всей вашей семьи всем необходимым. С ним вы можете наслаждаться высокоскоростным интернетом, развлечениями и общими ресурсами для всей семьи без ограничений",
            price: 467,
          },
        ]);
      }
    }
    fetchTariff();
  }, []);

  return (
    <div className="page">
      <div className="page__title">Тарифы</div>
      <div className="page__tariffs">
        {tariffs.map((tariff, index) => (
          <TariffItem
            key={index}
            title={tariff.name}
            description={tariff.description}
            price={tariff.price}
          />
        ))}
      </div>
    </div>
  );
};

// const Prices = () => {
//   async function fetchTariff() {
//     const response = await axios.get(
//       "https://munchkin.cosmoscript.ru/api/get_tariff/"
//     );
//     console.log(response.data);
//   }

//   return (
//     <div className="page">

//       <div className="page__title">Тарифы</div>
//       <button style={{ width: "100px", color: "white" }} onClick={fetchTariff}>
//         Get
//       </button>
//     </div>
//   );
// };

export default Prices;

// async function fetchTariff() {
//   const response = await axios({
//     method: "get",
//     url: "http://munchkin.cosmoscript.ru/api/get_tariff/",
//     withCredentials: false,
//   });
//   console.log(response.data);
// }

// async function fetchTariff() {
//   const response = await axios.get(
//     "https://munchkin.cosmoscript.ru/api/get_tariff/"
//   );
//   console.log(response.data);
// }
