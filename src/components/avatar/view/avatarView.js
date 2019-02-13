// @flow
import * as React from "react";
import { View, Image, Text, SafeAreaView } from "react-native";
import styles from "./avatarStyles";
import type { ImageSourcePropType } from "react-native/Libraries/Image/ImageSourcePropType";
import DEFAULT_AVATAR from "../../../assets/avatars/no_avatar.png";

export default class Avatar extends React.PureComponent {
  render() {
    const { user, avatar: source } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            source={source}
            defaultSource={DEFAULT_AVATAR}
            style={styles.avatar}
          />
          <Text style={styles.username}>{user}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
