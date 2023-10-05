import axios from "axios";
import React from "react";

const Prices = () => {
  async function fetchTariff() {
    const response = await axios.get(
      "https://munchkin.cosmoscript.ru/api/get_tariff/"
    );
    console.log(response.data);
  }

  return (
    <div className="page">
      <div className="page__title">Тарифы</div>
      <button style={{ width: "100px", color: "white" }} onClick={fetchTariff}>
        Get
      </button>
    </div>
  );
};

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
