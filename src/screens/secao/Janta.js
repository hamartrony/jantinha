import Vitrine from "../../components/vitrine/Vitrine";
import arroz from "../../images/produtos/janta/arroz.png";
import farofa from "../../images/produtos/janta/farofa.png";
import feijao from "../../images/produtos/janta/feijao.png";
import jantinha_kids from "../../images/produtos/janta/JantinhaKids.jpeg";
import jantinha_padrao from "../../images/produtos/janta/JantinhaPadrao.jpeg";
import mandioca from "../../images/produtos/janta/mandioca.png";
import vinagrete from "../../images/produtos/janta/vinagrete.png";
import ScreenDefault from "../screen_default/ScreenDefault";

const menu = [
  {
    id: 1,
    tittle: "Jantinha Kids",
    description:
      "Arroz, feijão tropeiro, vinagrete, farofa, mandioca, serve 1 pessoa. Não acompanha assado!",
    price: 7,
    img: jantinha_kids,
  },
  {
    id: 2,
    tittle: "Jantinha Padrão",
    description:
      "Arroz, feijão tropeiro, vinagrete, farofa, mandioca, serve 1 pessoa. Não acompanha assado!",
    price: 10,
    img: jantinha_padrao,
  },
  {
    id: 3,
    tittle: "Arroz",
    description: "Serve 1 pessoa!",
    price: 2,
    img: arroz,
  },
  {
    id: 4,
    tittle: "Feijao Tropeiro",
    description: "Serve 1 pessoa!",
    price: 5,
    img: feijao,
  },
  {
    id: 5,
    tittle: "Vinagrete",
    description: "Serve 1 pessoa!",
    price: 2,
    img: vinagrete,
  },
  {
    id: 6,
    tittle: "Farofa",
    description: "Serve 1 pessoa!",
    price: 2,
    img: farofa,
  },
  {
    id: 7,
    tittle: "Mandioca",
    description: "Serve 1 pessoa",
    price: 2,
    img: mandioca,
  },
];

export default function Janta({ navigation }) {
  return (
    <ScreenDefault navigation={navigation}>
      <Vitrine data={menu} navigation={navigation} />
    </ScreenDefault>
  );
}
