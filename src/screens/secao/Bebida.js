import { useContext } from "react";
import Vitrine from "../../components/vitrine/Vitrine";
import MenuContext from "../../context/MenuContext";

import ScreenDefault from "../screen_default/ScreenDefault";

export default function Bebida({ navigation }) {
  const { state } = useContext(MenuContext);
  return (
    <ScreenDefault navigation={navigation}>
      <Vitrine data={state.menu[4].itens} navigation={navigation} />
    </ScreenDefault>
  );
}
