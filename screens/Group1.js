import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const Group1 = () => {
  return (
    <View style={[styles.frameParent, styles.userIconFlexBox]}>
      <View style={[styles.subtractParent, styles.brugernavnPosition]}>
        <Image
          style={styles.subtractIcon}
          contentFit="cover"
          source={require("../assets/subtract1.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
        <Text style={[styles.am, styles.amTypo]}>6:12AM</Text>
        <View style={[styles.iphone1415Pro2, styles.iphone1415Position]}>
          <View style={[styles.brugernavnParent, styles.parentPosition]}>
            <Text style={[styles.brugernavn, styles.brugernavnTypo]}>Name</Text>
            <View style={[styles.frameGroup, styles.frameFlexBox]}>
              <View style={[styles.iconsWrapper, styles.frameFlexBox]}>
                <View style={[styles.icons, styles.iconsFlexBox]}>
                  <Image
                    style={[styles.userIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/user.png")}
                  />
                </View>
              </View>
              <Image
                style={[styles.frameChild, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector-946.png")}
              />
              <View style={[styles.william91Wrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.william91, styles.text2Clr]}>
                  Aditya Rikhari
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.telefonNummerParent, styles.parentPosition]}>
            <Text style={[styles.telefonNummer, styles.brugernavnTypo]}>
              Phone number
            </Text>
            <View style={[styles.frameContainer, styles.frameFlexBox]}>
              <View style={[styles.iconsWrapper, styles.frameFlexBox]}>
                <View style={[styles.icons, styles.iconsFlexBox]}>
                  <Image
                    style={[styles.userIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/smartphone.png")}
                  />
                </View>
              </View>
              <Image
                style={[styles.frameChild, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector-946.png")}
              />
              <View style={[styles.wrapper, styles.parentLayout]}>
                <Text style={[styles.william91, styles.text2Clr]}>
                  +91 9898989898
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.telefonNummerGroup, styles.parentPosition]}>
            <Text style={[styles.telefonNummer, styles.brugernavnTypo]}>
              Email
            </Text>
            <View style={[styles.frameContainer, styles.frameFlexBox]}>
              <View style={[styles.iconsWrapper, styles.frameFlexBox]}>
                <Image
                  style={styles.vectorIcon1}
                  contentFit="cover"
                  source={require("../assets/vector1.png")}
                />
              </View>
              <Image
                style={[styles.frameChild, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector-946.png")}
              />
              <View style={[styles.wrapper, styles.parentLayout]}>
                <Text style={[styles.william91, styles.text2Clr]}>
                  aditya@gmail.com
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[styles.telefonNummerContainer, styles.containerPosition]}
          >
            <Text style={[styles.telefonNummer, styles.brugernavnTypo]}>
              Gender
            </Text>
            <View style={[styles.frameContainer, styles.frameFlexBox]}>
              <View style={[styles.iconsWrapper, styles.frameFlexBox]}>
                <Image
                  style={styles.vectorIcon2}
                  contentFit="cover"
                  source={require("../assets/vector2.png")}
                />
              </View>
              <Image
                style={[styles.frameChild, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector-946.png")}
              />
              <View style={styles.parentLayout}>
                <Text style={[styles.text2, styles.text2Clr]}>Male</Text>
                <Image
                  style={styles.vectorIcon3}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.forstWrapper, styles.iconsFlexBox]}>
            <Text style={styles.forst}>Continue</Text>
          </View>
          <Text
            style={[
              styles.byClickingContinueContainer,
              styles.containerPosition,
            ]}
          >
            <Text
              style={styles.byClickingContinue}
            >{`By clicking continue , you are accepting our `}</Text>
            <Text style={styles.policyTypo}>
              <Text
                style={styles.termsConditions1}
              >{`Terms & Conditions`}</Text>
              <Text style={styles.text3}>{` `}</Text>
            </Text>
            <Text style={styles.byClickingContinue}>{`and `}</Text>
            <Text style={[styles.policy, styles.policyTypo]}>policy</Text>
          </Text>
          <Image
            style={[styles.iphone1415Pro2Child, styles.iphone1415Position]}
            contentFit="cover"
            source={require("../assets/rectangle-2413.png")}
          />
          <View style={styles.maskGroupParent}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group1.png")}
            />
            <Text style={[styles.letsGetStarted, styles.tellUsAFlexBox]}>
              Let's Get Started
            </Text>
            <Text style={[styles.tellUsA, styles.tellUsAFlexBox]}>
              Tell us a bit about yourself to finish creating your account.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userIconFlexBox: {
    flex: 1,
    width: "100%",
  },
  brugernavnPosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  amTypo: {
    textAlign: "left",
    fontSize: FontSize.text12MediumTight_size,
  },
  iphone1415Position: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  parentPosition: {
    left: 26,
    width: 370,
    position: "absolute",
  },
  brugernavnTypo: {
    color: Color.textColorsLight,
    fontFamily: FontFamily.metropolis,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0.3,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
    flexDirection: "row",
  },
  text2Clr: {
    color: Color.brandColorsNightPurple,
    fontFamily: FontFamily.metropolis,
  },
  parentLayout: {
    width: 275,
    alignSelf: "stretch",
  },
  containerPosition: {
    left: 29,
    position: "absolute",
  },
  policyTypo: {
    fontFamily: FontFamily.oxygenBold,
    textDecoration: "underline",
    fontWeight: "700",
  },
  tellUsAFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  subtractIcon: {
    width: 425,
    height: 932,
  },
  vectorIcon: {
    height: "1.6%",
    width: "4.47%",
    top: "1.72%",
    right: "17.82%",
    bottom: "96.68%",
    left: "77.72%",
    position: "absolute",
  },
  groupIcon: {
    height: "1.38%",
    width: "4.95%",
    top: "1.95%",
    right: "8.43%",
    bottom: "96.67%",
    left: "86.62%",
    position: "absolute",
  },
  am: {
    marginTop: -428.5,
    top: "50%",
    left: 32,
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    fontWeight: "600",
    position: "absolute",
  },
  brugernavn: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  userIcon: {
    alignSelf: "stretch",
    width: "100%",
    flex: 1,
  },
  icons: {
    width: 30,
    height: 30,
  },
  iconsWrapper: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  frameChild: {
    alignSelf: "stretch",
    width: "100%",
  },
  william91: {
    lineHeight: 18,
    color: Color.brandColorsNightPurple,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  william91Wrapper: {
    alignSelf: "stretch",
  },
  frameGroup: {
    top: 30,
    height: 55,
    width: 336,
    backgroundColor: Color.colorSeashell,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_base,
    left: 0,
    position: "absolute",
  },
  brugernavnParent: {
    top: 184,
    height: 90,
    width: 370,
  },
  telefonNummer: {
    alignSelf: "stretch",
  },
  wrapper: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
    flexDirection: "row",
  },
  frameContainer: {
    marginTop: 16,
    height: 55,
    width: 336,
    backgroundColor: Color.colorSeashell,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_base,
  },
  telefonNummerParent: {
    top: 295,
    width: 370,
  },
  vectorIcon1: {
    width: 32,
    height: 23,
  },
  telefonNummerGroup: {
    top: 403,
    width: 370,
  },
  vectorIcon2: {
    width: 25,
    height: 25,
  },
  text2: {
    top: 19,
    left: 20,
    lineHeight: 18,
    color: Color.brandColorsNightPurple,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon3: {
    top: 22,
    left: 234,
    width: 23,
    height: 12,
    position: "absolute",
  },
  telefonNummerContainer: {
    top: 511,
    width: 370,
  },
  forst: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    lineHeight: 14,
    color: Color.backgroundColorsBackgroundMain,
    fontWeight: "700",
    fontFamily: FontFamily.metropolis,
    textAlign: "left",
  },
  forstWrapper: {
    top: 731,
    backgroundColor: Color.colorDarkorange_200,
    width: 331,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xl,
    borderRadius: Border.br_base,
    justifyContent: "center",
    left: 26,
    position: "absolute",
  },
  byClickingContinue: {
    fontFamily: FontFamily.oxygenRegular,
    color: Color.colorDarkgray_100,
  },
  termsConditions1: {
    color: Color.colorBlack,
  },
  text3: {
    color: Color.colorDarkslategray_100,
  },
  policy: {
    color: Color.colorBlack,
  },
  byClickingContinueContainer: {
    top: 668,
    width: 297,
    textAlign: "left",
    fontSize: FontSize.text12MediumTight_size,
  },
  iphone1415Pro2Child: {
    height: 34,
    top: 0,
  },
  maskGroupIcon: {
    top: -80,
    left: -57,
    width: 544,
    height: 363,
    position: "absolute",
  },
  letsGetStarted: {
    top: 136,
    left: 64,
    fontSize: FontSize.size_17xl,
    width: 302,
    height: 50,
    color: Color.brandColorsNightPurple,
    fontFamily: FontFamily.metropolis,
    fontWeight: "600",
  },
  tellUsA: {
    top: 196,
    left: 53,
    letterSpacing: -0.2,
    lineHeight: 22,
    fontFamily: FontFamily.nunitoMedium,
    width: 324,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontWeight: "500",
    color: Color.colorBlack,
  },
  maskGroupParent: {
    top: -94,
    left: -18,
    width: 430,
    height: 283,
    position: "absolute",
  },
  iphone1415Pro2: {
    top: 33,
    backgroundColor: Color.colorLinen_100,
    height: 852,
    overflow: "hidden",
  },
  subtractParent: {
    borderRadius: Border.br_21xl,
    width: 394,
    overflow: "hidden",
    top: 0,
    height: 885,
  },
  frameParent: {
    height: 885,
    width: "100%",
  },
});

export default Group1;
