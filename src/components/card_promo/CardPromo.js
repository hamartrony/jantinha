import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import img1 from "../../images/produtos/promos/img1.jpg";
import img2 from "../../images/produtos/promos/img2.jpeg";
import img3 from "../../images/produtos/promos/img3.jpeg";
import img4 from "../../images/produtos/promos/img4.jpeg";

const menu = [img1, img2, img3, img4];

export default function Promos() {
  const [num, setNum] = useState(0);

  setTimeout(() => {
    num < 3 ? setNum(num + 1) : setNum(0);
  }, 3000);

  return (
    <View style={styles.container}>
      <Image source={menu[num]} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 15,
    alignSelf: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
});
