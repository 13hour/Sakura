import { Dimensions } from "react-native";

// constants of window
export const windowWith = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
export const windowScale = Dimensions.get("window").fontScale;

// constants of screen
export const screenWith = Dimensions.get("screen").width;
export const screenHeight = Dimensions.get("screen").height;
export const screenScale = Dimensions.get("screen").fontScale;

console.log("window:");
console.log(Dimensions.get("window"));
console.log("screen:");
console.log(Dimensions.get("screen"));
