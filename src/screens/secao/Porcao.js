import { useContext } from "react";
import Vitrine from "../../components/vitrine/Vitrine";
import MenuContext from "../../providers/MenuContext";

import ScreenDefault from "../screen_default/ScreenDefault";

export default function Porcao({ navigation }) {
  const { menu } = useContext(MenuContext);
  return (
    <ScreenDefault navigation={navigation}>
      <Vitrine data={menu[3].itens} navigation={navigation} />
    </ScreenDefault>
  );
}
