import { View } from "react-native";
import Head from "../../components/header";
import Vitrine from "../../components/vitrine";

import arroz from "../../images/produtos/porcao/pc_arroz.png";
import bigbrother from "../../images/produtos/porcao/pc_bigbrother.png";
import bovina from "../../images/produtos/porcao/pc_bovina.png";
import casa from "../../images/produtos/porcao/pc_casa.png";
import cebola from "../../images/produtos/porcao/pc_cebola.png";
import costela from "../../images/produtos/porcao/pc_costela.png";
import frios from "../../images/produtos/porcao/pc_frios.png";
import tila from "../../images/produtos/porcao/pc_tila.png";
import tilapia from "../../images/produtos/porcao/pc_tilapia.png";
import vitao from "../../images/produtos/porcao/pc_vitao.png";

const porcao = [
  {
    id: 1,
    tittle: "Porção de Bolinho de Tilápia 350g",
    description: "Recheado com queijo e alcaparras, serve 2 pessoas",
    price: 30,
    img: tilapia,
  },
  {
    id: 2,
    tittle: "Porção de Bolinho de Vitão 350g",
    description: "Batata com cheddar e bacon, serve 2 pessoas",
    price: 25,
    img: vitao,
  },
  {
    id: 3,
    tittle: "Porção de Bolinho da Casa",
    description: "Frango, guariroba e pequi, serve 2 pessoas",
    price: 25,
    img: casa,
  },
  {
    id: 4,
    tittle: "Porção de Bolinho Big Brother's 350g",
    description: "Mandioca, carne e pimenta, serve 2 pessoas",
    price: 25,
    img: bigbrother,
  },
  {
    id: 5,
    tittle: "Porção de Bolinho de Arroz 350g",
    description: "Recheado com requeijão cremoso, serve 2 pessoas",
    price: 25,
    img: arroz,
  },
  {
    id: 6,
    tittle: "Porção de Disquinho de Costela 350g",
    description: "Recheado com cheddar e bacon",
    price: 26,
    img: costela,
  },
  {
    id: 7,
    tittle: "Porção de Lombo de Tilápia 500g",
    description: "Serve 2 pessoas",
    price: 55,
    img: tila,
  },
  {
    id: 8,
    tittle: "Porção de Áneis de Cebola 225g",
    description: "Serve 2 pessoas",
    price: 2,
    img: cebola,
  },
  {
    id: 9,
    tittle: "Porção de Iscas de Carne Bovina 300g",
    description: "Serve 2 pessoas",
    price: 35,
    img: bovina,
  },
  {
    id: 10,
    tittle: "Porção de Frios 500g",
    description: "Salaminho, ovos de codorna e azeitona, serve 2 pessoas",
    price: 30,
    img: frios,
  },
];

export default function Porcao({ navigation }) {
  return (
    <View>
      <Head />
      <Vitrine data={porcao} navigation={navigation} />
    </View>
  );
}
