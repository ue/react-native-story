import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginVertical: 5
  },
  unPressedAvatar: {
    borderColor: "#e95950"
  },
  pressedAvatar: {
    borderColor: "#ebebeb"
  },
  avatarWrapper: {
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#e95950",
    margin: 8,
    borderRadius: 57 / 2,
    height: 57,
    width: 57
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    borderColor: "white",
    borderWidth: 1
  },
  itemText: {
    textAlign: "center",
    fontSize: 9
  }
});
