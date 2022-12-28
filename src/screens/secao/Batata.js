import Vitrine from "../../components/vitrine/Vitrine";

import batata200 from "../../images/produtos/batatas/batata.png";
import batata500 from "../../images/produtos/batatas/batata500.png";
import chedar200 from "../../images/produtos/batatas/chedar.png";
import chedar500 from "../../images/produtos/batatas/chedar500.png";
import ScreenDefault from "../screen_default/ScreenDefault";

const menu = [
  {
    id: 1,
    tittle: "Batata Simples 250g",
    description: "Serve 2 pessoa.",
    price: 9,
    img: batata200,
  },
  {
    id: 2,
    tittle: "Jantinha Padrão",
    description:
      "Arroz, feijão tropeiro, vinagrete, farofa, mandioca, serve 1 pessoa. Não acompanha assado!",
    price: 10,
    img: batata500,
  },
  {
    id: 3,
    tittle: "Arroz",
    description: "Serve 1 pessoa!",
    price: 2,
    img: chedar200,
  },
  {
    id: 4,
    tittle: "Feijao Tropeiro",
    description: "Serve 1 pessoa!",
    price: 5,
    img: chedar500,
  },
];

export default function Batata({ navigation }) {
  return (
    <ScreenDefault navigation={navigation}>
      <Vitrine data={menu} navigation={navigation} />
    </ScreenDefault>
  );
}
