import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@rneui/themed";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const AndroidLarge1 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.androidLarge11}
      resizeMode="cover"
      source={require("../assets/rectangle1.png")}
    >
      <LinearGradient
        style={styles.androidLarge1Child}
        locations={[0, 1]}
        colors={["#f8dd86", "#ffbc7e"]}
      />
      <Text style={styles.welcome1} numberOfLines={1}>
        Welcome!
      </Text>
      <Text
        style={[styles.planYourDay1, styles.planYourDay1Typo]}
        numberOfLines={2}
      >{`Plan your day with Ease
and Consideration`}</Text>
      <ImageBackground
        style={styles.androidLarge1Item}
        resizeMode="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <Pressable
        style={styles.signUp1}
        onPress={() => navigation.navigate("AndroidLarge2")}
      >
        <Text style={[styles.signUp2, styles.signTypo]}>Sign Up</Text>
      </Pressable>
      <TextInput
        style={[styles.androidLarge1Inner, styles.rectangleViewLayout]}
      />
      <TextInput 
        style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Pressable
        style={styles.signInWrapper}
        onPress={() => navigation.navigate("AndroidLarge8")}
      >
        <Text style={[styles.signIn, styles.signTypo]}>Sign in</Text>
      </Pressable>
      <Text style={[styles.username1, styles.username1Typo]} numberOfLines={1}>
        Username
      </Text>
      <Text style={[styles.password1, styles.username1Typo]}>Password</Text>
      <Text style={[styles.forgotPassword, styles.planYourDay1Typo]}>
        Forgot Password?
      </Text>
      <Button
        title="Not a member yet? Sign up here!"
        radius="5"
        iconPosition="left"
        type="clear"
        color="#fbf7e6"
        titleStyle={styles.notAMemberBtn}
        onPress={() => navigation.navigate("AndroidLarge2")}
        containerStyle={styles.notAMemberBtn1}
        buttonStyle={styles.notAMemberBtn2}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-42.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  notAMemberBtn: {
    color: "#fbf7e6",
    fontSize: 16,
    fontFamily: "undefined",
  },
  notAMemberBtn1: {
    left: 75,
    top: 852,
    position: "absolute",
  },
  notAMemberBtn2: {},
  planYourDay1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.undefined,
    position: "absolute",
  },
  signTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    fontFamily: FontFamily.undefined,
  },
  rectangleViewLayout: {
    height: 51,
    width: 350,
    backgroundColor: Color.oldlace_200,
    borderRadius: Border.br_11xl,
    left: 30,
    position: "absolute",
  },
  username1Typo: {
    height: 21,
    color: Color.goldenrod_100,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.undefined,
    position: "absolute",
  },
  androidLarge1Child: {
    top: 317,
    left: 0,
    borderTopLeftRadius: Border.br_14xl,
    borderTopRightRadius: Border.br_14xl,
    width: 410,
    height: 573,
    backgroundColor: "transparent",
    position: "absolute",
  },
  welcome1: {
    top: 60,
    left: 37,
    fontSize: FontSize.size_45xl,
    fontFamily: FontFamily.cooperBlack,
    textAlign: "center",
    width: 316,
    height: 68,
    color: Color.oldlace_100,
    position: "absolute",
  },
  planYourDay1: {
    top: 128,
    left: 50,
    fontSize: FontSize.size_5xl,
    width: 297,
    height: 58,
    textAlign: "center",
    color: Color.oldlace_100,
  },
  androidLarge1Item: {
    top: 218,
    left: 20,
    width: 142,
    height: 129,
    position: "absolute",
  },
  signUp2: {
    color: Color.khaki,
    width: 93,
    height: 36,
  },
  signUp1: {
    left: 229,
    top: 340,
    position: "absolute",
  },
  androidLarge1Inner: {
    top: 421,
  },
  rectangleView: {
    top: 501,
  },
  signIn: {
    color: Color.oldlace_200,
    flex: 1,
  },
  signInWrapper: {
    top: 602,
    left: 70,
    backgroundColor: Color.goldenrod_100,
    width: 257,
    flexDirection: "row",
    paddingHorizontal: Padding.p_42xl,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  username1: {
    top: 398,
    left: 12,
    width: 136,
  },
  password1: {
    top: 478,
    left: 14,
    width: 127,
  },
  forgotPassword: {
    top: 554,
    left: 233,
    fontSize: FontSize.size_base,
    color: "#f6b65b",
    width: 147,
    height: 18,
  },
  groupIcon: {
    width: 141,
    height: 32,
    left: 30,
    top: 340,
    position: "absolute",
  },
  androidLarge11: {
    width: "100%",
    height: 900,
    overflow: "hidden",
    flex: 1,
  },
});

export default AndroidLarge1;
