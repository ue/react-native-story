import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
  storyListContainer: {
    marginTop: 50
  },
  modal: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    flex: 1
  }
});
