import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Input } from "@ui-kitten/components";

import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const AndroidLarge2 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.androidLarge21}
      resizeMode="cover"
      source={require("../assets/androidlarge5.png")}

    >
      <LinearGradient
        style={styles.androidLarge2Child}
        locations={[0, 1]}
        colors={["#f8dd86", "#ffbc7e"]}
      />
      <Text style={styles.welcome}>Welcome!</Text>
      <Text style={styles.planYourDay1}>{`Plan your day with Ease
and Consideration`}</Text>
      <Image
        style={styles.androidLarge2Item}
        contentFit="cover"
        source={require("../assets/bearsignin.png")}

      />
      <Pressable
        style={styles.signIn1}
        onPress={() => navigation.navigate("AndroidLarge1")}
      >
        <Text style={styles.signIn2}>Sign in</Text>
      </Pressable>
      <View style={styles.signUpParent}>
        <Text style={[styles.signUp, styles.signTypo]}>Sign Up</Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
      </View>
      <Input style={[styles.androidLarge2Inner, styles.androidChildLayout]} />
      <Input style={[styles.rectangleInput, styles.androidChildLayout]} />

      <Pressable
        style={styles.signUpWrapper}
        onPress={() => navigation.navigate("AndroidLarge8")}
      >
        <Text style={[styles.signUp1, styles.signTypo]}>Sign Up</Text>
      </Pressable>
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.email, styles.nameTypo]}>Email</Text>
      <Input style={[styles.androidLarge2Child1, styles.androidChildLayout]} />
      <Input style={[styles.androidLarge2Child2, styles.androidChildLayout]} />

      <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
      <Text style={[styles.password, styles.usernameTypo]}>Password</Text>
      <Button
        title="Already a member yet? Sign in here!"
        radius="5"
        iconPosition="left"
        type="clear"
        color="#fbf7e6"
        titleStyle={styles.alreadyAMemberBtn}
        onPress={() => navigation.navigate("AndroidLarge1")}
        containerStyle={styles.alreadyAMemberBtn1}
        buttonStyle={styles.alreadyAMemberBtn2}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  alreadyAMemberBtn: {
    color: "#fbf7e6",
    fontSize: 16,
    fontFamily: "undefined",
  },
  alreadyAMemberBtn1: {
    left: 65,
    top: 856,
    position: "absolute",
  },
  alreadyAMemberBtn2: {},
  signTypo: {
    color: Color.oldlace_200,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    fontFamily: FontFamily.undefined,
  },
  androidChildLayout: {
    height: 49,
    width: 352,
    backgroundColor: Color.oldlace_200,
    borderRadius: Border.br_11xl,
    left: 29,
    position: "absolute",
  },
  nameTypo: {
    height: 25,
    color: Color.goldenrod_100,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.undefined,
    textAlign: "left",
    left: 29,
    position: "absolute",
  },
  usernameTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.undefined,
    textAlign: "left",
    left: 29,
    position: "absolute",
  },
  androidLarge2Child: {
    top: 317,
    left: 0,
    borderTopLeftRadius: Border.br_14xl,
    borderTopRightRadius: Border.br_14xl,
    width: 413,
    height: 573,
    backgroundColor: "transparent",
    position: "absolute",
  },
  welcome: {
    top: 59,
    fontSize: FontSize.size_45xl,
    fontFamily: FontFamily.cooperBlack,
    width: 316,
    height: 68,
    textAlign: "left",
    color: Color.oldlace_100,
    left: 57,
    position: "absolute",
  },
  planYourDay1: {
    top: 127,
    left: 52,
    fontSize: FontSize.size_5xl,
    width: 297,
    height: 58,
    textAlign: "center",
    fontFamily: FontFamily.undefined,
    color: Color.oldlace_100,
    position: "absolute",
  },
  androidLarge2Item: {
    top: 218,
    left: 20,
    width: 142,
    height: 129,
    position: "absolute",
  },
  signIn2: {
    color: Color.khaki,
    width: 88,
    height: 30,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    fontFamily: FontFamily.undefined,
  },
  signIn1: {
    left: 54,
    top: 340,
    position: "absolute",
  },
  signUp: {
    width: 93,
    height: 35,
  },
  frameChild: {
    maxHeight: "100%",
    marginTop: 6,
    width: 141,
  },
  signUpParent: {
    top: 337,
    left: 197,
    height: 32,
    alignItems: "center",
    width: 141,
    position: "absolute",
  },
  androidLarge2Inner: {
    top: 411,
  },
  rectangleInput: {

    top: 485,
  },
  signUp1: {
    flex: 1,
  },
  signUpWrapper: {
    top: 698,
    left: 80,
    backgroundColor: Color.goldenrod_100,
    width: 256,
    flexDirection: "row",
    paddingHorizontal: Padding.p_42xl,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    borderRadius: Border.br_11xl,
    alignItems: "center",
    position: "absolute",
  },
  name: {
    top: 388,
    width: 78,
  },
  email: {
    top: 462,
    width: 69,
  },
  androidLarge2Child1: {
    top: 559,
  },
  androidLarge2Child2: {
    top: 634,
  },
  username: {
    top: 537,
    color: "#ffb244",
    width: 118,
    height: 24,
  },
  password: {
    top: 610,
    color: "#ffb143",
    width: 111,
    height: 26,
  },
  androidLarge21: {
    width: "100%",
    height: 900,
    overflow: "hidden",
    flex: 1,
  },
});

export default AndroidLarge2;
