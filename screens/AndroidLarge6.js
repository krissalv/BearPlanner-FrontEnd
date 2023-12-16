import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const AndroidLarge6 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.androidLarge61}
      resizeMode="cover"
      source={require("../assets/androidlarge5.png")}

    >
      <Image
        style={styles.androidLarge6Child}
        contentFit="cover"
        source={require("../assets/rectangle-22.png")}
      />
      <Button
        radius="20"
        iconPosition="left"
        type="clear"
        color="#fff"
        icon={{ name: "chevron-left", type: "material-community" }}
        onPress={() => navigation.navigate("AndroidLarge8")}
        containerStyle={styles.ionarrowBackIconBtn}
        buttonStyle={styles.ionarrowBackIconBtn1}
      />
      <Text style={styles.settings}>Settings</Text>
      <Text style={styles.general}>General</Text>
      <Text style={styles.feedback}>Feedback</Text>
      <Text style={[styles.account, styles.accountTypo]}>{`Account `}</Text>
      <Image
        style={styles.androidLarge6Item}
        contentFit="cover"
        source={require("../assets/rectangle-23.png")}
      />
      <Image
        style={[styles.mdiaccountIcon2, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/mdiaccount.png")}
      />
      <Image
        style={[styles.androidLarge6Inner, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/line-19.png")}
      />
      <Image
        style={[
          styles.solaraltArrowRightLineDuoIcon6,
          styles.solaraltIconLayout1,
        ]}
        contentFit="cover"
        source={require("../assets/solaraltarrowrightlineduotone.png")}
      />
      <Text style={[styles.notifications, styles.reportABug1Typo]}>
        Notifications
      </Text>
      <Image
        style={[styles.lineIcon, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/line-19.png")}
      />
      <Image
        style={styles.solarbellBoldIcon1}
        contentFit="cover"
        source={require("../assets/solarbellbold.png")}
      />
      <Image
        style={[
          styles.solaraltArrowRightLineDuoIcon7,
          styles.solaraltIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/solaraltarrowrightlineduotone1.png")}
      />
      <Text style={[styles.reportABug1, styles.reportABug1Typo]}>
        Report a bug
      </Text>
      <Image
        style={[styles.mdiaccountIcon3, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/mdiaccount1.png")}
      />
      <Image
        style={[styles.androidLarge6Child1, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/line-19.png")}
      />
      <Image
        style={[
          styles.solaraltArrowRightLineDuoIcon8,
          styles.solaraltIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/solaraltarrowrightlineduotone1.png")}
      />
      <Text
        style={[styles.sendFeedback, styles.reportABug1Typo]}
      >{`Send Feedback  `}</Text>
      <Image
        style={[styles.androidLarge6Child2, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/line-19.png")}
      />
      <Image
        style={[
          styles.solaraltArrowRightLineDuoIcon9,
          styles.solaraltIconLayout1,
        ]}
        contentFit="cover"
        source={require("../assets/solaraltarrowrightlineduotone.png")}
      />
      <Text style={[styles.logOut, styles.accountTypo]}>Log Out</Text>
      <Image
        style={[styles.androidLarge6Child3, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/line-19.png")}
      />
      <Image
        style={[
          styles.solaraltArrowRightLineDuoIcon10,
          styles.solaraltIconLayout1,
        ]}
        contentFit="cover"
        source={require("../assets/solaraltarrowrightlineduotone.png")}
      />
      <Image
        style={[styles.solarlogout2OutlineIcon1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/solarlogout2outline.png")}
      />
      <Text style={[styles.deleteAccount, styles.accountTypo]}>
        Delete Account
      </Text>
      <Image
        style={[styles.androidLarge6Child4, styles.androidChildLayout]}
        contentFit="cover"
        source={require("../assets/line-19.png")}
      />
      <Image
        style={[
          styles.solaraltArrowRightLineDuoIcon11,
          styles.solaraltIconLayout1,
        ]}
        contentFit="cover"
        source={require("../assets/solaraltarrowrightlineduotone.png")}
      />
      <View
        style={[styles.mingcutedelete2Fill1, styles.tablersendIcon1Layout]}
      />
      <View
        style={[styles.mingcutedelete2Fill1, styles.tablersendIcon1Layout]}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.tablersendIcon1, styles.tablersendIcon1Layout]}
        contentFit="cover"
        source={require("../assets/tablersend.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ionarrowBackIconBtn: {
    left: 15,
    top: 34,
    position: "absolute",
  },
  ionarrowBackIconBtn1: {
    width: 36,
    height: 36,
  },
  accountTypo: {
    height: 30,
    left: 86,
    fontFamily: FontFamily.undefined,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.darkslateblue,
    position: "absolute",
  },
  iconLayout1: {
    height: 37,
    width: 36,
    left: 25,
    position: "absolute",
  },
  androidChildLayout: {
    width: 311,
    maxHeight: "100%",
    left: 25,
    position: "absolute",
  },
  solaraltIconLayout1: {
    height: 30,
    left: 300,
    width: 36,
    position: "absolute",
  },
  reportABug1Typo: {
    left: 86,
    height: 30,
    fontFamily: FontFamily.undefined,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.darkslateblue,
    position: "absolute",
  },
  solaraltIconLayout: {
    height: 31,
    left: 300,
    width: 36,
    position: "absolute",
  },
  iconLayout2: {
    width: 36,
    left: 25,
  },
  tablersendIcon1Layout: {
    height: 36,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  androidLarge6Child: {
    top: 138,
    left: 0,
    width: 410,
    height: 752,
    position: "absolute",
  },
  settings: {
    top: 82,
    left: 11,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.cooperBlack,
    width: 175,
    height: 50,
    textAlign: "center",
    color: Color.darkslateblue,
    position: "absolute",
  },
  general: {
    top: 163,
    width: 95,
    height: 27,
    color: Color.mediumpurple,
    fontFamily: FontFamily.undefined,
    fontSize: FontSize.size_5xl,
    left: 25,
    textAlign: "center",
    position: "absolute",
  },
  feedback: {
    top: 464,
    left: 22,
    width: 117,
    height: 30,
    color: Color.mediumpurple,
    fontFamily: FontFamily.undefined,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    position: "absolute",
  },
  account: {
    top: 213,
    width: 100,
  },
  androidLarge6Item: {
    marginLeft: 21,
    top: 9,
    left: "50%",
    width: 229,
    height: 129,
    position: "absolute",
  },
  mdiaccountIcon2: {
    top: 207,
  },
  androidLarge6Inner: {
    top: 252,
  },
  solaraltArrowRightLineDuoIcon6: {
    top: 212,
  },
  notifications: {
    width: 148,
    top: 270,
  },
  lineIcon: {
    top: 313,
  },
  solarbellBoldIcon1: {
    top: 268,
    left: 26,
    width: 32,
    height: 32,
    position: "absolute",
  },
  solaraltArrowRightLineDuoIcon7: {
    top: 270,
  },
  reportABug1: {
    top: 522,
    width: 151,
  },
  mdiaccountIcon3: {
    top: 516,
    height: 38,
    position: "absolute",
  },
  androidLarge6Child1: {
    top: 562,
  },
  solaraltArrowRightLineDuoIcon8: {
    top: 521,
  },
  sendFeedback: {
    top: 579,
    width: 181,
  },
  androidLarge6Child2: {
    top: 622,
  },
  solaraltArrowRightLineDuoIcon9: {
    top: 580,
  },
  logOut: {
    top: 325,
    width: 96,
  },
  androidLarge6Child3: {
    top: 375,
  },
  solaraltArrowRightLineDuoIcon10: {
    top: 332,
  },
  solarlogout2OutlineIcon1: {
    top: 325,
  },
  deleteAccount: {
    top: 395,
    width: 182,
  },
  androidLarge6Child4: {
    top: 441,
  },
  solaraltArrowRightLineDuoIcon11: {
    top: 397,
  },
  mingcutedelete2Fill1: {
    top: 372,
    left: 161,
    width: 37,
  },
  vectorIcon1: {
    height: "3.25%",
    width: "7.78%",
    top: "65.25%",
    right: "84.17%",
    bottom: "31.5%",
    left: "8.06%",
  },
  groupIcon1: {
    height: "4.58%",
    width: "10.17%",
    top: "43.76%",
    right: "82.97%",
    bottom: "46.66%",
    left: "6.00%",
  },
  tablersendIcon1: {
    top: 525,
    width: 36,
    left: 29,
  },
  androidLarge61: {
    flex: 1,
    width: "100%",
    height: 900,
    overflow: "hidden",
  },
});

export default AndroidLarge6;
