# react-native-story

A react native component for toast message

[![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/ue/react-native-story/master/LICENSE)

## Installation

- 1.Run `npm i react-native-story --save` or `yarn add react-native-story`
- 2.`import Story from 'react-native-story'`

![Screenshots](https://media.giphy.com/media/8hYcFmrQgOJVK8FHRB/giphy.gif)

## Getting started

Add `react-native-story` to your js file.

`import Story from 'react-native-story'`

Inside your component's render method, use Story:

```javascript
const stories = [
  {
    id: "6",
    source: require("../../../assets/stories/6.jpg"),
    user: "Ugur Erdal",
    avatar: require("../../../assets/avatars/ugur.png")
  },
  {
    id: "4",
    source: require("../../../assets/stories/4.jpg"),
    user: "Ugur Erdal",
    avatar: require("../../../assets/avatars/ugurerdal.png")
  },
  {
    id: "2",
    source: require("../../../assets/stories/2.jpg"),
    user: "Mustafa",
    avatar: require("../../../assets/avatars/mustafa.png")
  },
  {
    id: "5",
    source: require("../../../assets/stories/5.jpg"),
    user: "Emre Yilmaz",
    avatar: require("../../../assets/avatars/emre.png")
  },
  {
    id: "3",
    source: require("../../../assets/stories/3.jpg"),
    user: "Cenk Gun",
    avatar: require("../../../assets/avatars/cenk.png")
  },
  {
    id: "1",
    source: require("../../../assets/stories/1.jpg"),
    user: "Ayse"
  }
];

 render() {
		return (
			<Story
				unPressedBorderColor="#e95950"
				pressedBorderColor="#ebebeb"
				stories={stories}
				footerComponent={
					<TextInput
						placeholder="Send message"
						placeholderTextColor="white"
						style={styles.footerInput
					/>
				}
			/>
 }

```

## API

| Props                | Type   | Optional | Default   | Description                            |
| -------------------- | ------ | -------- | --------- | -------------------------------------- |
| id                   | string | required | -         | Json story data must have this         |
| unPressedBorderColor | string | true     | "#e95950" | Unpressed Border color                 |
| pressedBorderColor   | string | true     | "#ebebeb" | Pressed border color                   |
| footerComponent      | jsx    | true     | -         | Bottom of the stories footer component |

**MIT Licensed UE**
