import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { Input } from "@ui-kitten/components";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AndroidLarge7 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.androidLarge71}
      resizeMode="cover"
      source={require("../assets/androidlarge5.png")}

    >
      <Image
        style={styles.androidLarge7Child}
        contentFit="cover"
        source={require("../assets/rectangle-22.png")}
      />
      <Pressable
        style={styles.ionarrowBack}
        onPress={() => navigation.navigate("AndroidLarge8")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ionarrowback.png")}
        />
      </Pressable>
      <Image
        style={styles.androidLarge7Item}
        contentFit="cover"
        source={require("../assets/rectangle-23.png")}
      />
      <Text style={styles.createNewTask1} numberOfLines={2}>
        Create New Task
      </Text>
      <Input style={[styles.androidLarge7Inner, styles.rectangleInputBg]} />
      <Text style={[styles.taskName, styles.taskTypo]}>Task Name</Text>
      <Input style={[styles.rectangleInput, styles.rectangleInputBg]} />
      <Text style={[styles.taskDescription, styles.taskTypo]}>
        Task Description
      </Text>
      <View style={styles.colorParent}>
        <Text style={styles.color}>Color</Text>
        <Button
          radius={5}
          iconPosition="left"
          type="solid"
          color="rgba(255, 140, 140, 0.5)"
          containerStyle={styles.ellipseIconBtn}
          buttonStyle={styles.ellipseIconBtn1}
        />
        <Button
          radius={5}
          iconPosition="left"
          type="solid"
          color="rgba(219, 132, 51, 0.5)"
          containerStyle={styles.ellipseIcon1Btn}
          buttonStyle={styles.ellipseIcon1Btn1}
        />
        <Button
          radius={5}
          iconPosition="left"
          type="solid"
          color="rgba(44, 211, 211, 0.5)"
          containerStyle={styles.ellipseIcon2Btn}
          buttonStyle={styles.ellipseIcon2Btn1}
        />
        <Button
          radius={5}
          iconPosition="left"
          type="solid"
          color="#9ca0fa"
          containerStyle={styles.ellipseIcon3Btn}
          buttonStyle={styles.ellipseIcon3Btn1}
        />
        <Button
          radius={5}
          iconPosition="left"
          type="solid"
          color="rgba(255, 184, 46, 0.5)"
          containerStyle={styles.ellipseIcon4Btn}
          buttonStyle={styles.ellipseIcon4Btn1}
        />
        <Button
          radius={5}
          iconPosition="left"
          type="solid"
          color="rgba(96, 201, 87, 0.5)"
          containerStyle={styles.ellipseIcon5Btn}
          buttonStyle={styles.ellipseIcon5Btn1}
        />
        <Button
          radius={5}
          iconPosition="left"
          type="solid"
          color="rgba(16, 173, 60, 0.5)"
          containerStyle={styles.ellipseIcon6Btn}
          buttonStyle={styles.ellipseIcon6Btn1}
        />
        <Image
          style={styles.mingcutedownFillIcon1}
          contentFit="cover"
          source={require("../assets/mingcutedownfill1.png")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ellipseIconBtn: {
    left: 0,
    top: 26,
    position: "absolute",
  },
  ellipseIconBtn1: {
    width: 29,
    height: 29,
  },
  ellipseIcon1Btn: {
    left: 38,
    top: 26,
    position: "absolute",
  },
  ellipseIcon1Btn1: {
    width: 28,
    height: 29,
  },
  ellipseIcon2Btn: {
    left: 189,
    top: 26,
    position: "absolute",
  },
  ellipseIcon2Btn1: {
    width: 29,
    height: 29,
  },
  ellipseIcon3Btn: {
    left: 227,
    top: 26,
    position: "absolute",
  },
  ellipseIcon3Btn1: {
    width: 28,
    height: 29,
  },
  ellipseIcon4Btn: {
    left: 76,
    top: 26,
    position: "absolute",
  },
  ellipseIcon4Btn1: {
    width: 28,
    height: 29,
  },
  ellipseIcon5Btn: {
    left: 113,
    top: 26,
    position: "absolute",
  },
  ellipseIcon5Btn1: {
    width: 28,
    height: 29,
  },
  ellipseIcon6Btn: {
    left: 151,
    top: 26,
    position: "absolute",
  },
  ellipseIcon6Btn1: {
    width: 29,
    height: 29,
  },
  rectangleInputBg: {
    backgroundColor: Color.oldlace_200,
    position: "absolute",
  },
  taskTypo: {
    height: 24,
    fontFamily: FontFamily.undefined,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.darkslateblue,
    position: "absolute",
  },
  androidLarge7Child: {
    top: 138,
    width: 360,
    height: 662,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  ionarrowBack: {
    top: 34,
    width: 36,
    height: 36,
    left: 15,
    position: "absolute",
  },
  androidLarge7Item: {
    marginLeft: 21,
    top: 9,
    left: "50%",
    width: 129,
    height: 129,
    position: "absolute",
  },
  createNewTask1: {
    top: 67,
    fontSize: 32,
    fontFamily: FontFamily.cooperBlack,
    width: 186,
    height: 80,
    textAlign: "left",
    color: Color.darkslateblue,
    left: 15,
    position: "absolute",
  },
  androidLarge7Inner: {
    top: 202,
    borderRadius: Border.br_11xl,
    width: 300,
    left: 31,
  },
  taskName: {
    top: 179,
    width: 111,
    left: 29,
  },
  rectangleInput: {
    top: 353,
    left: 28,
    borderRadius: Border.br_xl,
    width: 299,
  },
  taskDescription: {
    top: 327,
    width: 168,
    left: 31,
  },
  color: {
    top: 0,
    width: 69,
    height: 26,
    fontFamily: FontFamily.undefined,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.darkslateblue,
    left: 0,
    position: "absolute",
  },
  mingcutedownFillIcon1: {
    top: 25,
    left: 265,
    width: 31,
    height: 31,
    position: "absolute",
  },
  colorParent: {
    top: 258,
    width: 296,
    height: 56,
    left: 29,
    position: "absolute",
  },
  androidLarge71: {
    flex: 1,
    height: 900,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge7;
