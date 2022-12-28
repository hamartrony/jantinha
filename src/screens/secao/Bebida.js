import Vitrine from "../../components/vitrine/Vitrine";

import ant from "../../images/produtos/bebidas/antartica.jpeg";
import bra from "../../images/produtos/bebidas/bramah.jpeg";
import bud from "../../images/produtos/bebidas/bud.jpeg";
import coca from "../../images/produtos/bebidas/coca.jpeg";
import hin from "../../images/produtos/bebidas/hineken.jpeg";
import ScreenDefault from "../screen_default/ScreenDefault";

const menu = [
  {
    id: 1,
    tittle: "Porção de Bolinho de Tilápia 350g",
    description: "Recheado com queijo e alcaparras, serve 2 pessoas",
    price: 30,
    img: coca,
  },
  {
    id: 2,
    tittle: "Porção de Bolinho de Vitão 350g",
    description: "Batata com cheddar e bacon, serve 2 pessoas",
    price: 25,
    img: ant,
  },
  {
    id: 3,
    tittle: "Porção de Bolinho da Casa",
    description: "Frango, guariroba e pequi, serve 2 pessoas",
    price: 25,
    img: bra,
  },
  {
    id: 4,
    tittle: "Porção de Bolinho Big Brother's 350g",
    description: "Mandioca, carne e pimenta, serve 2 pessoas",
    price: 25,
    img: bud,
  },
  {
    id: 5,
    tittle: "Porção de Bolinho de Arroz 350g",
    description: "Recheado com requeijão cremoso, serve 2 pessoas",
    price: 25,
    img: hin,
  },
  {
    id: 6,
    tittle: "Porção de Disquinho de Costela 350g",
    description: "Recheado com cheddar e bacon",
    price: 26,
    img: coca,
  },
  {
    id: 7,
    tittle: "Porção de Lombo de Tilápia 500g",
    description: "Serve 2 pessoas",
    price: 55,
    img: bud,
  },
  {
    id: 8,
    tittle: "Porção de Áneis de Cebola 225g",
    description: "Serve 2 pessoas",
    price: 2,
    img: hin,
  },
  {
    id: 9,
    tittle: "Porção de Iscas de Carne Bovina 300g",
    description: "Serve 2 pessoas",
    price: 35,
    img: ant,
  },
  {
    id: 10,
    tittle: "Porção de Frios 500g",
    description: "Salaminho, ovos de codorna e azeitona, serve 2 pessoas",
    price: 30,
    img: bra,
  },
];

export default function Bebida({ navigation }) {
  return (
    <ScreenDefault navigation={navigation}>
      <Vitrine data={menu} navigation={navigation} />
    </ScreenDefault>
  );
}
