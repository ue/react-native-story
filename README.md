# react-native-story

A react native component instagram stories

[![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/ue/react-native-story/master/LICENSE)
[ ![NPM version](http://img.shields.io/npm/v/react-native-story.svg?style=flat)](https://www.npmjs.com/package/react-native-story)

## Installation

- 1.Run `npm i react-native-story --save` or `yarn add react-native-story`
- 2.`import Story from 'react-native-story'`

![Screenshots](https://media.giphy.com/media/f9RH5B7kYeFvQFhRq7/giphy.gif)

## Getting started

Add `react-native-story` to your js file.

`import Story from 'react-native-story'`

Inside your component's render method, use Story:

```javascript
const stories = [
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
| stories              | object | required | -         | As above example        |
| unPressedBorderColor | string | true     | "#e95950" | Unpressed Border color                 |
| pressedBorderColor   | string | true     | "#ebebeb" | Pressed border color                   |
| footerComponent      | jsx    | true     | -         | Bottom of the stories footer component |

**MIT Licensed UE**
