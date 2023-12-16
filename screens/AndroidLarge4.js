import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const AndroidLarge4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge41}>
      <ImageBackground
        style={[styles.androidLarge4Child, styles.androidPosition]}
        resizeMode="cover"
        source={require("../assets/androidlarge5.png")}

      />
      <View style={[styles.androidLarge4Item, styles.frameChildPosition]} />
      <View style={styles.frameParent}>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.rectangleLayout]} />
          <Text style={[styles.text9, styles.textLayout]}>4</Text>
          <Text style={[styles.mon, styles.monLayout]}>Mon</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.rectangleLayout]} />
          <Text style={[styles.text10, styles.textLayout]}>5</Text>
          <Text style={[styles.tues, styles.wedTypo]}>Tues</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.frameInnerLayout]}>
          <View style={[styles.frameInner, styles.frameInnerLayout]} />
          <Text style={styles.text11}>6</Text>
          <Text style={[styles.wed, styles.wedTypo]}>Wed</Text>
        </View>
        <View style={styles.frameView}>
          <View style={[styles.rectangleView, styles.frameChildPosition]} />
          <Text style={[styles.text12, styles.textTypo]}>7</Text>
          <Text style={[styles.thurs, styles.friTypo]}>Thurs</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.frameInnerLayout]}>
          <View style={[styles.frameInner, styles.frameInnerLayout]} />
          <Text style={[styles.text12, styles.textTypo]}>8</Text>
          <Text style={[styles.fri, styles.friTypo]}>Fri</Text>
        </View>
        <View style={[styles.rectangleParent2, styles.frameChild2Layout]}>
          <View style={[styles.frameChild2, styles.frameChild2Layout]} />
          <Text style={[styles.text14, styles.textTypo]}>9</Text>
          <Text style={[styles.sat, styles.friTypo]}>Sat</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.rectangleLayout]} />
          <Text style={[styles.text15, styles.textLayout]}>10</Text>
          <Text style={[styles.sun, styles.friTypo]}>Sun</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.rectangleLayout]} />
          <Text style={[styles.text16, styles.wedTypo]}>11</Text>
          <Text style={[styles.mon1, styles.friTypo]}>Mon</Text>
        </View>
      </View>
      <View style={[styles.frame1, styles.framePosition1]}>
        <Pressable
          style={[styles.framePressable, styles.frameLayout1]}
          onPress={() => navigation.navigate("AndroidLarge5")}
        >
          <View style={[styles.frameChild5, styles.frameChildLayout]} />
          <Text style={[styles.tasks, styles.tasksTypo]}>Tasks</Text>
        </Pressable>
      </View>
      <View style={[styles.frame2, styles.framePosition1]}>
        <Pressable
          style={[styles.rectangleParent5, styles.frameChild6Layout]}
          onPress={() => navigation.navigate("AndroidLarge8")}
        >
          <View style={[styles.frameChild6, styles.frameChild6Layout]} />
          <Text style={[styles.calendarView, styles.tasksTypo]}>
            Calendar View
          </Text>
        </Pressable>
      </View>
      <View style={[styles.frame3, styles.framePosition1]}>
        <View style={[styles.rectangleParent6, styles.frameChild7Layout]}>
          <View style={[styles.frameChild7, styles.frameChild7Layout]} />
          <Text style={[styles.december, styles.tasksTypo]}>December</Text>
          <Image
            style={styles.frameChild8}
            contentFit="cover"
            source={require("../assets/group-1.png")}
          />
        </View>
      </View>
      <View style={[styles.frame4, styles.frame4Layout]}>
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
      </View>
      <View style={[styles.frame5, styles.ellipseLayout]}>
        <Pressable style={[styles.ellipseParent, styles.ellipseLayout]}>
          <Image
            style={[styles.ellipseIcon, styles.ellipseLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.text17, styles.frame4Layout]}>+</Text>
        </Pressable>
      </View>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <View style={styles.frame6}>
        <View
          style={[
            styles.haveAnAmazingDayParent,
            styles.yourBearPlanner1Position,
          ]}
        >
          <Text style={styles.haveAnAmazing1}>Have an amazing day!</Text>
          <Text
            style={[styles.yourBearPlanner1, styles.yourBearPlanner1Position]}
          >
            Your Bear Planner
          </Text>
        </View>
      </View>
      <View style={[styles.frame7, styles.frameLayout]}>
        <View style={[styles.frameChild9, styles.frameLayout]} />
      </View>
      <View style={[styles.frame8, styles.frame8Layout]}>
        <Text
          style={[styles.howAreYou1, styles.frame8Layout]}
          numberOfLines={1}
        >
          How are you feeling right now?
        </Text>
      </View>
      <View style={[styles.frame9, styles.framePosition]}>
        <Button
          radius="5"
          iconPosition="left"
          type="clear"
          color="#fff"
          icon={{ name: "emoticon-happy-outline", type: "material-community" }}
          containerStyle={styles.mdiemoticonHappyOutlineBtn}
          buttonStyle={styles.mdiemoticonHappyOutlineBtn1}
        />
      </View>
      <View style={[styles.frame10, styles.framePosition]}>
        <Button
          radius="5"
          iconPosition="left"
          type="clear"
          color="#fff"
          icon={{
            name: "emoticon-neutral-outline",
            type: "material-community",
          }}
          containerStyle={styles.gravityUifaceNeutralIconBtn}
          buttonStyle={styles.gravityUifaceNeutralIconBtn1}
        />
      </View>
      <View style={[styles.frame11, styles.framePosition]}>
        <Button
          radius="5"
          iconPosition="left"
          type="clear"
          color="#fff"
          icon={{ name: "emoticon-sad-outline", type: "material-community" }}
          containerStyle={styles.gravityUifaceSadIconBtn}
          buttonStyle={styles.gravityUifaceSadIconBtn1}
        />
      </View>
      <View style={[styles.frame12, styles.framePosition]}>
        <Button
          radius="5"
          iconPosition="left"
          type="clear"
          color="#fff"
          icon={{
            name: "emoticon-excited-outline",
            type: "material-community",
          }}
          containerStyle={styles.akarIconsfaceVeryHappyBtn}
          buttonStyle={styles.akarIconsfaceVeryHappyBtn1}
        />
      </View>
      <View style={[styles.frame13, styles.framePosition]}>
        <Button
          radius="5"
          iconPosition="left"
          type="clear"
          color="#fff"
          icon={{
            name: "emoticon-excited-outline",
            type: "material-community",
          }}
          containerStyle={styles.akarIconsfaceVerySadBtn}
          buttonStyle={styles.akarIconsfaceVerySadBtn1}
        />
      </View>
      <View style={[styles.androidLarge4Inner, styles.androidPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  mingcutemenuFillIconBtn: {
    left: 5,
    top: 0,
    position: "absolute",
  },
  mingcutemenuFillIconBtn1: {
    width: 48,
    height: 38,
  },
  mdiemoticonHappyOutlineBtn: {
    left: 242,
    top: 0,
    position: "absolute",
  },
  mdiemoticonHappyOutlineBtn1: {
    width: 22,
    height: 22,
  },
  gravityUifaceNeutralIconBtn: {
    left: 173,
    top: 0,
    position: "absolute",
  },
  gravityUifaceNeutralIconBtn1: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  gravityUifaceSadIconBtn: {
    left: 104,
    top: 0,
    position: "absolute",
  },
  gravityUifaceSadIconBtn1: {
    width: 22,
    height: 22,
  },
  akarIconsfaceVeryHappyBtn: {
    left: 310,
    top: 0,
    position: "absolute",
  },
  akarIconsfaceVeryHappyBtn1: {
    width: 23,
    height: 22,
  },
  akarIconsfaceVerySadBtn: {
    left: 35,
    top: 0,
    position: "absolute",
  },
  akarIconsfaceVerySadBtn1: {
    width: 22,
    height: 22,
  },
  androidPosition: {
    width: 415,
    left: 0,
    position: "absolute",
  },
  frameChildPosition: {
    backgroundColor: Color.gray,
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 50,
    width: 50,
  },
  textLayout: {
    height: 25,
    fontSize: FontSize.size_xl,
    top: 18,
  },
  monLayout: {
    height: 20,
    top: 7,
    fontSize: FontSize.size_sm,
  },
  wedTypo: {
    width: 36,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    position: "absolute",
  },
  frameInnerLayout: {
    width: 49,
    height: 50,
  },
  textTypo: {
    left: 13,
    width: 22,
    height: 25,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  friTypo: {
    height: 14,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    position: "absolute",
  },
  frameChild2Layout: {
    width: 50,
    height: 49,
  },
  framePosition1: {
    height: 31,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout1: {
    width: 64,
    height: 31,
    top: 0,
    position: "absolute",
  },
  frameChildLayout: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray,
  },
  tasksTypo: {
    fontSize: FontSize.size_base,
    top: 6,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    position: "absolute",
  },
  frameChild6Layout: {
    width: 120,
    height: 31,
    top: 0,
    position: "absolute",
  },
  frameChild7Layout: {
    width: 110,
    height: 31,
    top: 0,
    position: "absolute",
  },
  frame4Layout: {
    height: 48,
    position: "absolute",
  },
  ellipseLayout: {
    height: 51,
    position: "absolute",
  },
  yourBearPlanner1Position: {
    width: 330,
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 54,
    position: "absolute",
  },
  frame8Layout: {
    height: 25,
    position: "absolute",
  },
  framePosition: {
    height: 22,
    top: 158,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  androidLarge4Child: {
    top: 0,
    height: 900,
  },
  androidLarge4Item: {
    top: 297,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    width: 415,
    height: 603,
  },
  frameChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray,
    left: 0,
    position: "absolute",
    top: 0,
  },
  text9: {
    width: 21,
    height: 25,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    fontSize: FontSize.size_xl,
    position: "absolute",
    left: 14,
  },
  mon: {
    left: 11,
    width: 29,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    position: "absolute",
  },
  rectangleParent: {
    borderRadius: Border.br_xl,
  },
  text10: {
    left: 15,
    width: 21,
    height: 25,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  tues: {
    left: 7,
    height: 23,
    top: 7,
    fontSize: FontSize.size_sm,
  },
  rectangleGroup: {
    marginLeft: 8,
  },
  frameInner: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray,
    left: 0,
    position: "absolute",
    top: 0,
  },
  text11: {
    width: 22,
    height: 35,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    fontSize: FontSize.size_xl,
    left: 14,
    top: 18,
    position: "absolute",
  },
  wed: {
    left: 6,
    height: 23,
    top: 7,
    fontSize: FontSize.size_sm,
  },
  rectangleContainer: {
    marginLeft: 8,
  },
  rectangleView: {
    height: 49,
    width: 51,
    borderRadius: Border.br_xl,
    top: 0,
  },
  text12: {
    top: 18,
    left: 13,
  },
  thurs: {
    fontSize: FontSize.size_smi,
    width: 37,
    height: 24,
    top: 6,
    left: 7,
  },
  frameView: {
    height: 49,
    width: 51,
    marginLeft: 8,
  },
  fri: {
    width: 37,
    height: 25,
    top: 5,
    left: 6,
    fontSize: FontSize.size_sm,
  },
  frameChild2: {
    height: 49,
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray,
    left: 0,
    position: "absolute",
    top: 0,
  },
  text14: {
    top: 17,
  },
  sat: {
    top: 3,
    width: 37,
    height: 34,
    left: 6,
    fontSize: FontSize.size_sm,
  },
  rectangleParent2: {
    height: 49,
    marginLeft: 8,
  },
  text15: {
    left: 10,
    width: 30,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    height: 25,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  sun: {
    width: 38,
    top: 6,
    left: 6,
    fontSize: FontSize.size_sm,
  },
  text16: {
    left: 7,
    height: 35,
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
  frameParent: {
    top: 240,
    flexDirection: "row",
    alignItems: "flex-end",
    left: 0,
    position: "absolute",
  },
  frameChild5: {
    width: 64,
    height: 31,
    top: 0,
    position: "absolute",
    left: 0,
  },
  tasks: {
    left: 9,
  },
  framePressable: {
    left: 253,
  },
  frame1: {
    width: 317,
    top: 199,
    height: 31,
  },
  frameChild6: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray,
    left: 0,
  },
  calendarView: {
    left: 3,
  },
  rectangleParent5: {
    left: 126,
  },
  frame2: {
    width: 246,
    top: 199,
    height: 31,
  },
  frameChild7: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray,
    left: 0,
  },
  december: {
    left: 6,
  },
  frameChild8: {
    top: 15,
    left: 92,
    width: 10,
    height: 5,
    position: "absolute",
  },
  rectangleParent6: {
    left: 8,
  },
  frame3: {
    top: 200,
    width: 118,
  },
  frame4: {
    top: 26,
    width: 47,
    left: 0,
    overflow: "hidden",
  },
  ellipseIcon: {
    width: 51,
    left: 0,
    top: 5,
  },
  text17: {
    top: 1,
    left: 16,
    fontSize: FontSize.size_21xl,
    color: Color.white,
    width: 20,
    textAlign: "center",
    fontFamily: FontFamily.undefined,
  },
  ellipseParent: {
    left: 293,
    width: 61,
    top: 0,
  },
  frame5: {
    top: 822,
    width: 344,
    left: 50,
    overflow: "hidden",
  },
  frameIcon: {
    top: 32,
    height: 46,
    width: 348,
    left: 50,
    position: "absolute",
    overflow: "hidden",
  },
  haveAnAmazing1: {
    top: 27,
    left: 65,
    fontSize: FontSize.size_mini,
    color: Color.mediumpurple,
    width: 262,
    height: 30,
    textAlign: "center",
    fontFamily: FontFamily.undefined,
    position: "absolute",
  },
  yourBearPlanner1: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.cooperBlack,
    height: 42,
    textAlign: "center",
    color: Color.darkslateblue,
    left: 25,
  },
  haveAnAmazingDayParent: {
    height: 57,
    left: 15,
  },
  frame6: {
    top: 68,
    width: 345,
    height: 57,
    left: 7,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild9: {
    width: 396,
    left: 8,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.gray,
    top: 0,
  },
  frame7: {
    top: 132,
    width: 456,
    left: 0,
    overflow: "hidden",
  },
  howAreYou1: {
    left: 95,
    width: 212,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.darkslateblue,
    fontFamily: FontFamily.undefined,
    top: 0,
  },
  frame8: {
    top: 136,
    width: 387,
    left: 0,
    overflow: "hidden",
  },
  frame9: {
    width: 264,
  },
  frame10: {
    width: 195,
  },
  frame11: {
    width: 126,
  },
  frame12: {
    width: 333,
  },
  frame13: {
    width: 57,
  },
  androidLarge4Inner: {
    top: 334,
    height: 439,
  },
  androidLarge41: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default AndroidLarge4;
