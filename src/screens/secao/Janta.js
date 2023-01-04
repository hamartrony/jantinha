import { useContext } from "react";
import Vitrine from "../../components/vitrine/Vitrine";
import MenuContext from "../../providers/MenuContext";
import ScreenDefault from "../screen_default/ScreenDefault";

export default function Janta({ navigation }) {
  const { menu } = useContext(MenuContext);
  return (
    <ScreenDefault navigation={navigation}>
      <Vitrine data={menu[0].itens} navigation={navigation} />
    </ScreenDefault>
  );
}
