import React, { Component } from "react";
import { View, FlatList } from "react-native";
// Components
import { StoryListItem } from "../../../components";
import styles from "./storyListStyles";

class StoryListView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Component Life Cycles

  // Component Functions

  render() {
    const {
      stories,
      handleStoryItemPress,
      unPressedBorderColor,
      pressedBorderColor
    } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          data={stories}
          horizontal
          renderItem={({ item, index }) => (
            <StoryListItem
              handleStoryItemPress={() =>
                handleStoryItemPress && handleStoryItemPress(item, index)
              }
              unPressedBorderColor={unPressedBorderColor}
              pressedBorderColor={pressedBorderColor}
              item={item}
            />
          )}
        />
      </View>
    );
  }
}

export default StoryListView;
