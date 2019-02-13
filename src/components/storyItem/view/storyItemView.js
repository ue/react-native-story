// @flow
import React, { Fragment, PureComponent } from "react";
import { View, Image } from "react-native";

import styles from "./storyItemStyles";

import Avatar from "../../avatar/view/avatarView";

export default class extends PureComponent {
  render() {
    const {
      story: { source, user, avatar, id },
      selectedStory,
      handleSelectedStoryOnLoaded,
      footerComponent
    } = this.props;
    return (
      <Fragment>
        <View style={styles.container}>
          <Image
            onLoad={() =>
              selectedStory &&
              selectedStory.id === id &&
              handleSelectedStoryOnLoaded()
            }
            style={styles.image}
            {...{ source }}
          />
          <Avatar {...{ user, avatar }} />
        </View>
        {footerComponent && (
          <View style={styles.footer}>{footerComponent}</View>
        )}
      </Fragment>
    );
  }
}
