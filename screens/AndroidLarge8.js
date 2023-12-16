import * as React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AndroidLarge8 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.androidLarge81}
      resizeMode="cover"
      source={require("../assets/rectangle1.png")}
    >
      <View style={styles.androidLarge8Child} />
      <ScrollView
        style={[styles.frameParent, styles.framePosition1]}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.amParent}>
          <Text style={[styles.am, styles.amTypo]}>{`5 am `}</Text>
          <Image
            style={[styles.frameChild, styles.framePosition]}
            contentFit="cover"
            source={require("../assets/line-2.png")}
          />
        </View>
        <View style={styles.amGroup}>
          <Text style={[styles.am1, styles.amTypo]}>{`6 am `}</Text>
        </View>
        <View style={styles.amContainer}>
          <Text style={[styles.am2, styles.pmTypo]}>{`7 am `}</Text>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/line-4.png")}
          />
        </View>
        <View style={styles.frameView}>
          <Text style={[styles.am, styles.amTypo]}>{`8 am `}</Text>
          <Image
            style={[styles.lineIcon, styles.framePosition]}
            contentFit="cover"
            source={require("../assets/line-5.png")}
          />
        </View>
        <View style={styles.amGroup}>
          <Text style={[styles.am1, styles.amTypo]}>{`9 am `}</Text>
          <Image
            style={[styles.frameChild, styles.framePosition]}
            contentFit="cover"
            source={require("../assets/line-6.png")}
          />
        </View>
        <View style={styles.amParent2}>
          <Text style={[styles.am5, styles.am5Typo]}>{`10 am `}</Text>
          <Image
            style={[styles.frameChild2, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/line-7.png")}
          />
        </View>
        <View style={[styles.amParent3, styles.amParent3Layout]}>
          <Text style={[styles.am6, styles.pmTypo]}>{`11 am `}</Text>
        </View>
        <View style={styles.pmParent}>
          <Text style={[styles.pm, styles.pmTypo]}>{`12 pm `}</Text>
        </View>
        <View style={styles.pmGroup}>
          <Text style={[styles.pm1, styles.pmTypo]}>{`1 pm `}</Text>
          <Image
            style={[styles.frameChild4, styles.frameChildPosition1]}
            contentFit="cover"
            source={require("../assets/line-13.png")}
          />
        </View>
        <View style={[styles.pmContainer, styles.amParent3Layout]}>
          <Text style={[styles.pm2, styles.pmTypo]}>{`2 pm `}</Text>
          <View style={[styles.frameChild5, styles.frameChildPosition]} />
        </View>
        <View style={[styles.pmContainer, styles.amParent3Layout]}>
          <Text style={[styles.pm2, styles.pmTypo]}>{`3 pm `}</Text>
          <Image
            style={[styles.frameChild6, styles.frameChildPosition]}
            contentFit="cover"
            source={require("../assets/line-15.png")}
          />
        </View>
        <View style={styles.pmGroup}>
          <Text style={[styles.pm1, styles.pmTypo]}>{`4 pm `}</Text>
          <Image
            style={[styles.frameChild7, styles.frameChildPosition1]}
            contentFit="cover"
            source={require("../assets/line-16.png")}
          />
        </View>
        <View style={[styles.pmContainer, styles.amParent3Layout]}>
          <Text style={[styles.pm2, styles.pmTypo]}>{`5 pm `}</Text>
          <Image
            style={[styles.frameChild8, styles.frameChildPosition]}
            contentFit="cover"
            source={require("../assets/line-17.png")}
          />
        </View>
        <View style={[styles.vectorParent, styles.vectorLayout]}>
          <Image
            style={[styles.frameChild9, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/line-10.png")}
          />
          <Text style={[styles.pm6, styles.pmTypo]}>{`6 pm `}</Text>
        </View>
        <View style={styles.lineParent}>
          <View style={[styles.lineView, styles.frameChildBorder]} />
          <Text style={[styles.pm7, styles.pmTypo]}>{`7 pm `}</Text>
        </View>
        <View style={[styles.pmContainer, styles.amParent3Layout]}>
          <Text style={[styles.pm2, styles.pmTypo]}>{`8 pm `}</Text>
          <View style={[styles.frameChild5, styles.frameChildPosition]} />
        </View>
        <View style={[styles.pmContainer, styles.amParent3Layout]}>
          <Text style={[styles.pm2, styles.pmTypo]}>{`9 pm `}</Text>
          <Image
            style={[styles.frameChild6, styles.frameChildPosition]}
            contentFit="cover"
            source={require("../assets/line-151.png")}
          />
        </View>
        <View style={styles.pmGroup}>
          <Text style={[styles.pm10, styles.pmTypo]}>{`10 pm `}</Text>
          <Image
            style={[styles.frameChild7, styles.frameChildPosition1]}
            contentFit="cover"
            source={require("../assets/line-161.png")}
          />
        </View>
        <View style={[styles.amParent3, styles.amParent3Layout]}>
          <Text style={[styles.pm11, styles.am5Typo]}>{`11 pm `}</Text>
          <Image
            style={[styles.frameChild14, styles.frameChildPosition]}
            contentFit="cover"
            source={require("../assets/line-171.png")}
          />
        </View>
        <View style={[styles.vectorGroup, styles.vectorLayout]}>
          <Image
            style={[styles.frameChild9, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/line-101.png")}
          />
          <Text style={[styles.am7, styles.am5Typo]}>12 am</Text>
        </View>
        <View style={styles.lineParent}>
          <View style={[styles.lineView, styles.frameChildBorder]} />
          <Text style={[styles.pm7, styles.pmTypo]}>1 am</Text>
        </View>
        <View style={[styles.amParent3, styles.amParent3Layout]}>
          <Text style={[styles.pm11, styles.am5Typo]}>{`2 am `}</Text>
          <Image
            style={[styles.frameChild14, styles.frameChildPosition]}
            contentFit="cover"
            source={require("../assets/line-172.png")}
          />
        </View>
        <View style={[styles.vectorGroup, styles.vectorLayout]}>
          <Image
            style={[styles.frameChild9, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/line-102.png")}
          />
          <Text style={[styles.am7, styles.am5Typo]}>3 am</Text>
        </View>
        <View style={styles.lineParent}>
          <View style={[styles.lineView, styles.frameChildBorder]} />
          <Text style={[styles.pm7, styles.pmTypo]}>4 am</Text>
        </View>
      </ScrollView>
      <Pressable
        style={[styles.ellipseParent, styles.ellipseLayout]}
        onPress={() => navigation.navigate("AndroidLarge5")}
      >
        <Image
          style={[styles.ellipseIcon, styles.ellipseLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Text style={[styles.text9, styles.textTypo1]}>+</Text>
      </Pressable>
      <ScrollView
        style={[styles.frameGroup, styles.framePosition1]}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.frameScrollView1Content}
      >
        <View style={styles.parent}>
          <Text style={[styles.text10, styles.textLayout]}>4</Text>
          <Text style={[styles.mon, styles.monLayout]}>Mon</Text>
        </View>
        <View style={[styles.group, styles.groupLayout]}>
          <Text style={[styles.text11, styles.textLayout]}>5</Text>
          <Text style={[styles.tues, styles.wedTypo]}>Tues</Text>
        </View>
        <View style={[styles.container, styles.groupLayout]}>
          <Text style={[styles.text12, styles.textLayout]}>6</Text>
          <Text style={[styles.wed, styles.wedTypo]}>Wed</Text>
        </View>
        <View style={[styles.parent1, styles.parentLayout]}>
          <Text style={[styles.text13, styles.textLayout]}>7</Text>
          <Text style={[styles.thurs, styles.friTypo]}>Thurs</Text>
        </View>
        <View style={[styles.container, styles.groupLayout]}>
          <Text style={[styles.text13, styles.textLayout]}>8</Text>
          <Text style={[styles.fri, styles.friTypo]}>Fri</Text>
        </View>
        <View style={[styles.parent3, styles.parentLayout]}>
          <Text style={[styles.text15, styles.textLayout]}>9</Text>
          <Text style={[styles.sat, styles.friTypo]}>Sat</Text>
        </View>
        <View style={[styles.group, styles.groupLayout]}>
          <Text style={[styles.text16, styles.textLayout]}>10</Text>
          <Text style={[styles.sun, styles.friTypo]}>Sun</Text>
        </View>
        <View style={[styles.group, styles.groupLayout]}>
          <Text style={[styles.text17, styles.wedTypo]}>11</Text>
          <Text style={[styles.mon1, styles.friTypo]}>Mon</Text>
        </View>
      </ScrollView>
      <Pressable
        style={[styles.tasksWrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("AndroidLarge5")}
      >
        <Text style={[styles.tasks, styles.pmTypo]}>Tasks</Text>
      </Pressable>
      <Pressable
        style={[styles.listViewWrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("AndroidLarge4")}
      >
        <Text style={[styles.listView, styles.monPosition]}>List View</Text>
      </Pressable>
      <View style={[styles.decemberParent, styles.decemberParentPosition]}>
        <Text style={[styles.december, styles.pmTypo]}>December</Text>
        <Image
          style={styles.frameChild20}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
      </View>
      <Button
        radius="5"
        iconPosition="left"
        type="clear"
        color="#6f4a9c"
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
      <View
        style={[styles.haveAnAmazingDayParent, styles.yourBearPlanner1Layout]}
      >
        <Text style={[styles.haveAnAmazing1, styles.pmTypo]}>
          Have an amazing day!
        </Text>
        <Text style={[styles.yourBearPlanner1, styles.yourBearPlanner1Layout]}>
          Your Bear Planner
        </Text>
      </View>
      <View style={[styles.androidLarge8Item, styles.decemberParentPosition]} />
      <Text style={[styles.howAreYou1, styles.pmTypo]}>
        How are you feeling right now?
      </Text>
      <Button
        radius="5"
        iconPosition="left"
        type="clear"
        color="#6f4a9c"
        icon={{ name: "emoticon-happy-outline", type: "material-community" }}
        containerStyle={styles.mdiemoticonHappyOutlineBtn}
        buttonStyle={styles.mdiemoticonHappyOutlineBtn1}
      />
      <Button
        radius="5"
        iconPosition="left"
        type="clear"
        color="#6f4a9c"
        icon={{ name: "emoticon-neutral-outline", type: "material-community" }}
        containerStyle={styles.gravityUifaceNeutralIconBtn}
        buttonStyle={styles.gravityUifaceNeutralIconBtn1}
      />
      <Button
        radius="5"
        iconPosition="left"
        type="clear"
        color="#6f4a9c"
        icon={{ name: "emoticon-sad-outline", type: "material-community" }}
        containerStyle={styles.gravityUifaceSadIconBtn}
        buttonStyle={styles.gravityUifaceSadIconBtn1}
      />
      <Button
        radius="5"
        iconPosition="left"
        type="clear"
        color="#6f4a9c"
        icon={{ name: "emoticon-excited-outline", type: "material-community" }}
        containerStyle={styles.akarIconsfaceVeryHappyBtn}
        buttonStyle={styles.akarIconsfaceVeryHappyBtn1}
      />
      <Button
        radius="5"
        iconPosition="left"
        type="clear"
        color="#6f4a9c"
        icon={{ name: "emoticon-frown-outline", type: "material-community" }}
        containerStyle={styles.akarIconsfaceVerySadBtn}
        buttonStyle={styles.akarIconsfaceVerySadBtn1}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 9,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameScrollView1Content: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  mingcutemenuFillIconBtn: {
    left: 0,
    top: 20,
    position: "absolute",
  },
  mingcutemenuFillIconBtn1: {
    width: 48,
    height: 48,
  },
  mdiemoticonHappyOutlineBtn: {
    left: 242,
    top: 150,
    position: "absolute",
  },
  mdiemoticonHappyOutlineBtn1: {
    width: 22,
    height: 22,
  },
  gravityUifaceNeutralIconBtn: {
    left: 173,
    top: 150,
    position: "absolute",
  },
  gravityUifaceNeutralIconBtn1: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  gravityUifaceSadIconBtn: {
    left: 104,
    top: 150,
    position: "absolute",
  },
  gravityUifaceSadIconBtn1: {
    width: 22,
    height: 22,
  },
  akarIconsfaceVeryHappyBtn: {
    left: 310,
    top: 150,
    position: "absolute",
  },
  akarIconsfaceVeryHappyBtn1: {
    width: 23,
    height: 22,
  },
  akarIconsfaceVerySadBtn: {
    left: 35,
    top: 150,
    position: "absolute",
  },
  akarIconsfaceVerySadBtn1: {
    width: 22,
    height: 22,
  },
  framePosition1: {
    left: 0,
    color: Color.darkslateblue,
    position: "absolute",
  },
  amTypo: {
    width: 39,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    fontSize: FontSize.size_base,
    top: 0,
    left: 0,
    position: "absolute",
  },
  framePosition: {
    left: 42,
    position: "absolute",
  },
  frameChildBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#6f4a9c",
    borderStyle: "solid",
  },
  pmTypo: {
    fontFamily: FontFamily.undefined,
    textAlign: "center",
    position: "absolute",
  },
  am5Typo: {
    width: 48,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    fontSize: FontSize.size_base,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameChildLayout: {
    width: 274,
    position: "absolute",
  },
  amParent3Layout: {
    width: 335,
    marginTop: 57,
  },
  frameChildPosition1: {
    left: 58,
    height: 0,
    width: 280,
    position: "absolute",
  },
  frameChildPosition: {
    left: 55,
    position: "absolute",
  },
  vectorLayout: {
    width: 333,
    marginTop: 57,
  },
  ellipseLayout: {
    height: 58,
    width: 58,
    position: "absolute",
  },
  textTypo1: {
    width: 22,
    textAlign: "center",
    fontFamily: FontFamily.undefined,
    position: "absolute",
  },
  textLayout: {
    height: 25,
    fontSize: FontSize.size_xl,
  },
  monLayout: {
    height: 23,
    top: 7,
    fontSize: FontSize.size_sm,
  },
  groupLayout: {
    marginLeft: 8,
    height: 50,
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray,
  },
  wedTypo: {
    width: 36,
    height: 24,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    position: "absolute",
  },
  parentLayout: {
    height: 49,
    marginLeft: 8,
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray,
  },
  friTypo: {
    height: 24,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    position: "absolute",
  },
  wrapperLayout: {
    borderRadius: Border.br_5xs,
    top: 191,
    height: 31,
    backgroundColor: Color.gray,
    position: "absolute",
  },
  monPosition: {
    left: 11,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    position: "absolute",
  },
  decemberParentPosition: {
    left: 8,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray,
    position: "absolute",
  },
  yourBearPlanner1Layout: {
    width: 330,
    position: "absolute",
  },
  androidLarge8Child: {
    top: 295,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    width: 411,
    height: 593,
    backgroundColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  am: {
    height: 17,
  },
  frameChild: {
    width: 280,
    maxHeight: "100%",
    top: 9,
  },
  amParent: {
    height: 17,
    width: 322,
  },
  am1: {
    height: 18,
  },
  frameItem: {
    width: 281,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#6f4a9c",
    borderStyle: "solid",
    top: 8,
    left: 42,
    position: "absolute",
  },
  amGroup: {
    marginTop: 57,
    height: 18,
    width: 322,
  },
  am2: {
    width: 38,
    textAlign: "center",
    color: Color.darkslateblue,
    fontSize: FontSize.size_base,
    top: 0,
    left: 0,
    height: 17,
  },
  frameInner: {
    left: 41,
    top: 8,
    width: 280,
    maxHeight: "100%",
    position: "absolute",
  },
  amContainer: {
    width: 321,
    marginTop: 57,
    height: 17,
  },
  lineIcon: {
    top: 8,
    width: 280,
    maxHeight: "100%",
  },
  frameView: {
    marginTop: 57,
    height: 17,
    width: 322,
  },
  am5: {
    height: 17,
  },
  frameChild2: {
    left: 53,
    top: 8,
    maxHeight: "100%",
  },
  amParent2: {
    width: 327,
    marginTop: 57,
    height: 17,
  },
  am6: {
    width: 56,
    height: 18,
    textAlign: "center",
    color: Color.darkslateblue,
    fontSize: FontSize.size_base,
    top: 0,
    left: 0,
  },
  lineView: {
    left: 61,
    width: 275,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#6f4a9c",
    borderStyle: "solid",
    top: 10,
    position: "absolute",
  },
  amParent3: {
    height: 18,
  },
  pm: {
    width: 51,
    textAlign: "center",
    color: Color.darkslateblue,
    fontSize: FontSize.size_base,
    top: 0,
    left: 0,
    height: 17,
  },
  frameChild3: {
    left: 60,
    top: 10,
    width: 281,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#6f4a9c",
    borderStyle: "solid",
    position: "absolute",
  },
  pmParent: {
    width: 340,
    marginTop: 57,
    height: 17,
  },
  pm1: {
    width: 44,
    height: 18,
    textAlign: "center",
    color: Color.darkslateblue,
    fontSize: FontSize.size_base,
    top: 0,
    left: 0,
  },
  frameChild4: {
    height: 0,
    top: 9,
  },
  pmGroup: {
    width: 338,
    marginTop: 57,
    height: 18,
  },
  pm2: {
    width: 41,
    textAlign: "center",
    color: Color.darkslateblue,
    fontSize: FontSize.size_base,
    top: 0,
    left: 0,
    height: 17,
  },
  frameChild5: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#6f4a9c",
    borderStyle: "solid",
    width: 281,
    top: 8,
  },
  pmContainer: {
    height: 17,
  },
  frameChild6: {
    height: 0,
    top: 8,
    width: 280,
  },
  frameChild7: {
    height: 0,
    top: 8,
  },
  frameChild8: {
    height: 0,
    width: 280,
    top: 9,
  },
  frameChild9: {
    left: 59,
    height: 0,
    top: 9,
  },
  pm6: {
    width: 42,
    height: 18,
    textAlign: "center",
    color: Color.darkslateblue,
    fontSize: FontSize.size_base,
    top: 0,
    left: 0,
  },
  vectorParent: {
    height: 18,
  },
  pm7: {
    width: 45,
    textAlign: "center",
    color: Color.darkslateblue,
    fontSize: FontSize.size_base,
    top: 0,
    left: 0,
    height: 17,
  },
  lineParent: {
    width: 336,
    marginTop: 57,
    height: 17,
  },
  pm10: {
    width: 55,
    height: 18,
    textAlign: "center",
    color: Color.darkslateblue,
    fontSize: FontSize.size_base,
    top: 0,
    left: 0,
  },
  pm11: {
    height: 18,
  },
  frameChild14: {
    height: 0,
    top: 10,
    width: 280,
  },
  am7: {
    height: 19,
  },
  vectorGroup: {
    height: 19,
  },
  frameParent: {
    top: 319,
    flex: 1,
  },
  ellipseIcon: {
    top: 5,
    left: 0,
  },
  text9: {
    left: 18,
    fontSize: FontSize.size_21xl,
    color: Color.white,
    height: 43,
    top: 8,
  },
  ellipseParent: {
    top: 814,
    left: 332,
  },
  text10: {
    width: 21,
    height: 25,
    fontSize: FontSize.size_xl,
    top: 18,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    position: "absolute",
    left: 14,
  },
  mon: {
    width: 29,
    left: 11,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    position: "absolute",
  },
  parent: {
    height: 50,
    borderRadius: Border.br_xl,
    width: 50,
    backgroundColor: Color.gray,
  },
  text11: {
    left: 15,
    width: 21,
    height: 25,
    fontSize: FontSize.size_xl,
    top: 18,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    position: "absolute",
  },
  tues: {
    left: 7,
    height: 13,
    top: 7,
    fontSize: FontSize.size_sm,
  },
  group: {
    width: 50,
  },
  text12: {
    height: 25,
    fontSize: FontSize.size_xl,
    left: 14,
    top: 18,
    width: 22,
    textAlign: "center",
    fontFamily: FontFamily.undefined,
    position: "absolute",
    color: Color.darkslateblue,
  },
  wed: {
    left: 6,
    height: 13,
    top: 7,
    fontSize: FontSize.size_sm,
  },
  container: {
    width: 49,
  },
  text13: {
    left: 13,
    height: 25,
    fontSize: FontSize.size_xl,
    top: 18,
    width: 22,
    textAlign: "center",
    fontFamily: FontFamily.undefined,
    position: "absolute",
    color: Color.darkslateblue,
  },
  thurs: {
    fontSize: FontSize.size_smi,
    width: 37,
    height: 14,
    top: 6,
    left: 7,
  },
  parent1: {
    width: 51,
  },
  fri: {
    width: 37,
    height: 14,
    top: 6,
    left: 6,
    fontSize: FontSize.size_sm,
  },
  text15: {
    top: 17,
    left: 13,
    height: 25,
    fontSize: FontSize.size_xl,
    width: 22,
    textAlign: "center",
    fontFamily: FontFamily.undefined,
    position: "absolute",
    color: Color.darkslateblue,
  },
  sat: {
    top: 5,
    width: 37,
    height: 14,
    left: 6,
    fontSize: FontSize.size_sm,
  },
  parent3: {
    width: 50,
  },
  text16: {
    left: 10,
    width: 30,
    height: 25,
    fontSize: FontSize.size_xl,
    top: 18,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    position: "absolute",
  },
  sun: {
    top: 6,
    left: 6,
    fontSize: FontSize.size_sm,
    width: 38,
  },
  text17: {
    left: 7,
    height: 25,
    fontSize: FontSize.size_xl,
    top: 18,
  },
  mon1: {
    width: 37,
    height: 14,
    top: 6,
    left: 7,
    fontSize: FontSize.size_sm,
  },
  frameGroup: {
    top: 232,
    width: "100%",
  },
  tasks: {
    left: 9,
    top: 6,
    textAlign: "center",
    color: Color.darkslateblue,
    fontSize: FontSize.size_base,
  },
  tasksWrapper: {
    left: 225,
    width: 64,
    height: 31,
  },
  listView: {
    top: 6,
    fontSize: FontSize.size_base,
  },
  listViewWrapper: {
    left: 126,
    width: 91,
    height: 31,
  },
  december: {
    top: 6,
    left: 6,
    textAlign: "center",
    color: Color.darkslateblue,
    fontSize: FontSize.size_base,
  },
  frameChild20: {
    top: 15,
    left: 92,
    width: 10,
    height: 5,
    position: "absolute",
  },
  decemberParent: {
    top: 192,
    width: 110,
    height: 31,
  },
  codiconaccount1: {
    top: 24,
    left: 340,
    width: 46,
    height: 46,
    position: "absolute",
  },
  haveAnAmazing1: {
    top: 27,
    left: 60,
    fontSize: FontSize.size_mini,
    color: Color.mediumpurple,
    width: 262,
    height: 30,
    textAlign: "center",
  },
  yourBearPlanner1: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.cooperBlack,
    height: 42,
    textAlign: "center",
    color: Color.darkslateblue,
    top: 0,
    left: 25,
  },
  haveAnAmazingDayParent: {
    top: 62,
    height: 57,
    left: 13,
  },
  androidLarge8Item: {
    top: 124,
    width: 388,
    height: 54,
  },
  howAreYou1: {
    top: 128,
    left: 95,
    width: 212,
    height: 25,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.darkslateblue,
  },
  androidLarge81: {
    height: 890,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default AndroidLarge8;
