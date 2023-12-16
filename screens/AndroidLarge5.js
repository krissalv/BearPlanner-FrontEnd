import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AndroidLarge5 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.androidLarge51}
      resizeMode="cover"
      source={require("../assets/androidlarge5.png")}

    >
      <View style={styles.androidLarge5Child} />
      <Image
        style={styles.androidLarge5Item}
        contentFit="cover"
        source={require("../assets/group-20.png")}
      />
      <Pressable
        style={[styles.rectangleParent, styles.frameChildLayout]}
        onPress={() => navigation.navigate("AndroidLarge8")}
      >
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Text style={[styles.calendarView, styles.viewTypo]}>
          Calendar View
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.frameItemLayout]}
        onPress={() => navigation.navigate("AndroidLarge4")}
      >
        <View style={[styles.frameItem, styles.frameItemLayout]} />
        <Text style={[styles.listView, styles.viewTypo]}>List View</Text>
      </Pressable>
      <Button
        radius="5"
        iconPosition="left"
        type="clear"
        color="#fff"
        icon={{ name: "menu", type: "material-community" }}
        onPress={() => navigation.navigate("AndroidLarge6")}
        containerStyle={styles.mingcutemenuFillIconBtn}
        buttonStyle={styles.mingcutemenuFillIconBtn1}
      />
      <Image
        style={styles.codiconaccount1}
        contentFit="cover"
        source={require("../assets/codiconaccount.png")}
      />
      <Image
        style={styles.androidLarge5Inner}
        contentFit="cover"
        source={require("../assets/TitleFrame.png")}
      />
      <View style={[styles.rectangleView, styles.frameLayout]} />
      <Text style={[styles.howAreYou1, styles.viewTypo]}>
        How are you feeling right now?
      </Text>
      <Button
        radius="5"
        iconPosition="left"
        type="clear"
        color="#fff"
        icon={{ name: "emoticon-happy-outline", type: "material-community" }}
        containerStyle={styles.mdiemoticonHappyOutlineBtn}
        buttonStyle={styles.mdiemoticonHappyOutlineBtn1}
      />
      <Button
        radius="5"
        iconPosition="left"
        type="clear"
        color="#fff"
        icon={{ name: "emoticon-neutral-outline", type: "material-community" }}
        containerStyle={styles.gravityUifaceNeutralIconBtn}
        buttonStyle={styles.gravityUifaceNeutralIconBtn1}
      />
      <Button
        radius="5"
        iconPosition="left"
        type="clear"
        color="#fff"
        icon={{ name: "emoticon-sad-outline", type: "material-community" }}
        containerStyle={styles.gravityUifaceSadIconBtn}
        buttonStyle={styles.gravityUifaceSadIconBtn1}
      />
      <Button
        radius="5"
        iconPosition="left"
        type="clear"
        color="#fff"
        icon={{ name: "emoticon-excited-outline", type: "material-community" }}
        containerStyle={styles.akarIconsfaceVeryHappyBtn}
        buttonStyle={styles.akarIconsfaceVeryHappyBtn1}
      />
      <Button
        radius="5"
        iconPosition="left"
        type="clear"
        color="#fff"
        icon={{ name: "emoticon-frown-outline", type: "material-community" }}
        containerStyle={styles.akarIconsfaceVerySadBtn}
        buttonStyle={styles.akarIconsfaceVerySadBtn1}
      />
      <View style={styles.frameView} />
      <Pressable style={[styles.ellipseParent, styles.frameInnerLayout]}>
        <Image
          style={[styles.frameInner, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={[styles.text1, styles.viewTypo]}>+</Text>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mingcutemenuFillIconBtn: {
    left: 5,
    top: 26,
    position: "absolute",
  },
  mingcutemenuFillIconBtn1: {
    width: 48,
    height: 38,
  },
  mdiemoticonHappyOutlineBtn: {
    left: 242,
    top: 158,
    position: "absolute",
  },
  mdiemoticonHappyOutlineBtn1: {
    width: 22,
    height: 22,
  },
  gravityUifaceNeutralIconBtn: {
    left: 173,
    top: 158,
    position: "absolute",
  },
  gravityUifaceNeutralIconBtn1: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  gravityUifaceSadIconBtn: {
    left: 104,
    top: 158,
    position: "absolute",
  },
  gravityUifaceSadIconBtn1: {
    width: 22,
    height: 22,
  },
  akarIconsfaceVeryHappyBtn: {
    left: 310,
    top: 158,
    position: "absolute",
  },
  akarIconsfaceVeryHappyBtn1: {
    width: 23,
    height: 22,
  },
  akarIconsfaceVerySadBtn: {
    left: 35,
    top: 158,
    position: "absolute",
  },
  akarIconsfaceVerySadBtn1: {
    width: 22,
    height: 22,
  },
  frameChildLayout: {
    width: 120,
    height: 31,
    position: "absolute",
  },
  frameLayout: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray,
  },
  viewTypo: {
    textAlign: "center",
    fontFamily: FontFamily.undefined,
    position: "absolute",
  },
  frameItemLayout: {
    width: 78,
    height: 31,
    position: "absolute",
  },
  frameInnerLayout: {
    height: 51,
    width: 51,
    position: "absolute",
  },
  androidLarge5Child: {
    top: 240,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    width: 411,
    height: 650,
    backgroundColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  androidLarge5Item: {
    left: 224,
    width: 64,
    height: 31,
    top: 198,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 0,
    width: 120,
    height: 31,
    position: "absolute",
  },
  calendarView: {
    left: 9,
    color: Color.darkslateblue,
    textAlign: "center",
    fontFamily: FontFamily.undefined,
    fontSize: FontSize.size_base,
    top: 4,
  },
  rectangleParent: {
    left: 95,
    top: 198,
  },
  frameItem: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray,
    top: 0,
    left: 0,
  },
  listView: {
    left: 7,
    color: Color.darkslateblue,
    textAlign: "center",
    fontFamily: FontFamily.undefined,
    fontSize: FontSize.size_base,
    top: 4,
  },
  rectangleGroup: {
    left: 8,
    top: 198,
  },
  codiconaccount1: {
    top: 32,
    left: 342,
    width: 46,
    height: 46,
    position: "absolute",
  },
  androidLarge5Inner: {
    top: 68,
    left: 30,
    width: 330,
    height: 57,
    position: "absolute",
  },
  rectangleView: {
    top: 132,
    width: 398,
    height: 54,
    left: 8,
    position: "absolute",
  },
  howAreYou1: {
    top: 136,
    left: 95,
    fontSize: FontSize.size_sm,
    width: 212,
    height: 25,
    color: Color.darkslateblue,
    textAlign: "center",
    fontFamily: FontFamily.undefined,
  },
  frameView: {
    top: 285,
    width: 360,
    height: 486,
    left: 0,
    position: "absolute",
  },
  frameInner: {
    top: 5,
    left: 2,
  },
  text1: {
    top: 1,
    left: 16,
    fontSize: FontSize.size_21xl,
    color: Color.white,
    width: 20,
    height: 38,
    textAlign: "center",
    fontFamily: FontFamily.undefined,
  },
  ellipseParent: {
    top: 810,
    left: 340,
  },
  androidLarge51: {
    flex: 1,
    width: "100%",
    height: 900,
  },
});

export default AndroidLarge5;
