import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const Group = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.subtractParent}>
        <Image
          style={styles.subtractIcon}
          contentFit="cover"
          source={require("../assets/subtract.png")}
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
        <Text style={styles.am}>6:12AM</Text>
        <View style={[styles.iphone1415Pro2, styles.iphone1415Position]}>
          <View style={styles.forstWrapper}>
            <Text style={styles.forst}>Continue</Text>
          </View>
          <Image
            style={[styles.iphone1415Pro2Child, styles.iphone1415Position]}
            contentFit="cover"
            source={require("../assets/rectangle-2413.png")}
          />
          <View style={styles.maskGroupParent}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group.png")}
            />
            <Text style={[styles.enterTheCode, styles.codeFlexBox]}>
              Enter the Code
            </Text>
            <Text style={[styles.aConfirmationCode, styles.resendOtpTypo]}>
              A confirmation code has been sent to your phone number: +91
              9898989898
            </Text>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.wrapperBorder}>
              <Text style={[styles.text, styles.textTypo]}>5</Text>
            </View>
            <View style={[styles.container, styles.wrapperBorder]}>
              <Text style={[styles.text, styles.textTypo]}>8</Text>
            </View>
            <View style={[styles.container, styles.wrapperBorder]}>
              <Text style={[styles.text, styles.textTypo]}>1</Text>
            </View>
            <View style={[styles.container, styles.wrapperBorder]}>
              <Text style={[styles.text, styles.textTypo]}>4</Text>
            </View>
            <View style={[styles.container, styles.wrapperBorder]}>
              <Text style={[styles.text, styles.textTypo]}>9</Text>
            </View>
          </View>
          <Text style={[styles.didntYouReceiveContainer, styles.codeFlexBox]}>
            <Text style={styles.didntYouReceiveTheOtp}>
              <Text style={styles.didntYouReceive}>
                Didn’t you receive the OTP?
              </Text>
              <Text style={styles.text5}>{` `}</Text>
            </Text>
            <Text style={[styles.resendOtp, styles.resendOtpTypo]}>
              Resend OTP
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iphone1415Position: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  codeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  resendOtpTypo: {
    fontWeight: "500",
    color: Color.colorBlack,
  },
  textTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.metropolis,
  },
  wrapperBorder: {
    padding: Padding.p_base,
    height: 68,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    backgroundColor: Color.colorSeashell,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_base,
    flex: 1,
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
  },
  groupIcon: {
    height: "1.38%",
    width: "4.95%",
    top: "1.95%",
    right: "8.43%",
    bottom: "96.67%",
    left: "86.62%",
  },
  am: {
    marginTop: -428.5,
    top: "50%",
    left: 32,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "600",
    fontSize: FontSize.text12MediumTight_size,
    position: "absolute",
  },
  forst: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    lineHeight: 14,
    fontWeight: "700",
    color: Color.backgroundColorsBackgroundMain,
    fontFamily: FontFamily.metropolis,
    textAlign: "left",
  },
  forstWrapper: {
    top: 731,
    left: 26,
    backgroundColor: Color.colorDarkorange_200,
    width: 331,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_base,
    flexDirection: "row",
    position: "absolute",
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
  enterTheCode: {
    top: 79,
    left: 64,
    fontSize: FontSize.size_17xl,
    color: Color.brandColorsNightPurple,
    width: 302,
    height: 50,
    fontFamily: FontFamily.metropolis,
    fontWeight: "600",
  },
  aConfirmationCode: {
    top: 139,
    left: 53,
    fontSize: FontSize.size_lg,
    letterSpacing: -0.2,
    lineHeight: 22,
    fontFamily: FontFamily.nunitoMedium,
    width: 324,
    textAlign: "center",
    position: "absolute",
  },
  maskGroupParent: {
    left: -18,
    width: 430,
    height: 283,
    top: 0,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_9xl,
    letterSpacing: -0.3,
    lineHeight: 28,
    color: Color.textColorsMain,
    width: 18,
    height: 23,
    fontFamily: FontFamily.metropolis,
    textAlign: "left",
  },
  container: {
    marginLeft: 10,
  },
  frameGroup: {
    top: 316,
    left: 23,
    width: 348,
    flexDirection: "row",
    position: "absolute",
  },
  didntYouReceive: {
    color: "#b9b9b9",
  },
  text5: {
    color: "#3a3a3a",
  },
  didntYouReceiveTheOtp: {
    fontFamily: FontFamily.montserratRegular,
  },
  resendOtp: {
    fontFamily: FontFamily.montserratMedium,
  },
  didntYouReceiveContainer: {
    top: 426,
    left: 82,
    lineHeight: 12,
    width: 254,
    fontSize: FontSize.text12MediumTight_size,
    textAlign: "center",
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
    left: 0,
    top: 0,
    position: "absolute",
    height: 885,
  },
  frameParent: {
    width: "100%",
    height: 885,
    flex: 1,
  },
});

export default Group;
