import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8257e5",
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },

  banner: {
    width: "100%",
    resizeMode: "contain",
  },

  title: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    fontSize: 30,
    lineHeight: 30,
    marginTop: 80,
  },

  titleBold: {
    fontWeight: "bold",
  },
});

export default styles;
