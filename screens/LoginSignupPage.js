import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const LoginSignupPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginsignupPage}>
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract2.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <Text style={styles.am}>6:12AM</Text>
      <View style={styles.iphone14Pro10}>
        <Image
          style={styles.iphone14Pro10Child}
          contentFit="cover"
          source={require("../assets/rectangle-32.png")}
        />
        <Image
          style={[styles.iphone14Pro10Item, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-2421.png")}
        />
        <Image
          style={[styles.map11, styles.map11Position]}
          contentFit="cover"
          source={require("../assets/map-1-1.png")}
        />
        <View style={[styles.iphone1415Pro4, styles.map11Position]}>
          <View style={styles.iphone1415Pro4Child} />
          <View style={[styles.loginWrapper, styles.wrapperLayout]}>
            <Text style={[styles.login, styles.loginTypo]}>Login</Text>
          </View>
          <Pressable
            style={[styles.createAccountWrapper, styles.wrapperLayout]}
            onPress={() => navigation.navigate("Group1")}
          >
            <Text style={[styles.createAccount, styles.loginTypo]}>
              Create Account
            </Text>
          </Pressable>
          <View
            style={[
              styles.iphone1415Pro4Inner,
              styles.iphone1415Pro4InnerPosition,
            ]}
          >
            <View style={styles.continueWithoutAccountWrapper}>
              <Text style={styles.continueWithoutAccount}>
                Continue Without Account
              </Text>
            </View>
          </View>
          <Text
            style={[
              styles.welcomeToMyContainer,
              styles.iphone1415Pro4InnerPosition,
            ]}
          >
            <Text style={styles.welcomeTo}>{`Welcome to `}</Text>
            <Text style={styles.myBus}>My Bus</Text>
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
    position: "absolute",
    overflow: "hidden",
  },
  map11Position: {
    top: -2,
    position: "absolute",
    overflow: "hidden",
  },
  wrapperLayout: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_base,
    height: "6.55%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "7.87%",
    right: "8.12%",
    width: "84.01%",
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    lineHeight: 14,
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  iphone1415Pro4InnerPosition: {
    left: "11.68%",
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
    fontSize: FontSize.text12MediumTight_size,
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  iphone14Pro10Child: {
    top: 1824,
    left: -9,
    width: 393,
    height: 575,
    position: "absolute",
  },
  iphone14Pro10Item: {
    height: "60.02%",
    width: "125.89%",
    top: "-0.24%",
    right: "-12.94%",
    bottom: "40.22%",
    left: "-12.94%",
  },
  map11: {
    left: -51,
    width: 496,
    height: 494,
  },
  iphone1415Pro4Child: {
    height: "15.03%",
    top: "74.67%",
    bottom: "10.3%",
    left: "7.87%",
    right: "8.12%",
    width: "84.01%",
    position: "absolute",
  },
  login: {
    color: Color.backgroundColorsBackgroundMain,
  },
  loginWrapper: {
    top: "76.97%",
    bottom: "16.48%",
    backgroundColor: Color.colorDarkorange_200,
  },
  createAccount: {
    color: Color.colorDarkorange_200,
  },
  createAccountWrapper: {
    top: "85.45%",
    bottom: "8%",
    backgroundColor: "rgba(255, 255, 255, 0.44)",
    borderStyle: "solid",
    borderColor: Color.colorDarkorange_200,
    borderWidth: 0.8,
  },
  continueWithoutAccount: {
    fontFamily: FontFamily.nunitoSemiBold,
    color: "#795000",
    width: 202,
    lineHeight: 14,
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontWeight: "600",
  },
  continueWithoutAccountWrapper: {
    flexDirection: "row",
  },
  iphone1415Pro4Inner: {
    height: "4.12%",
    top: "94.79%",
    right: "4.31%",
    bottom: "1.09%",
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    left: "11.68%",
    width: "84.01%",
  },
  welcomeTo: {
    color: Color.brandColorsNightPurple,
  },
  myBus: {
    color: Color.colorDarkorange_200,
  },
  welcomeToMyContainer: {
    height: "14.06%",
    width: "76.65%",
    top: "61.58%",
    fontSize: 44,
    letterSpacing: -0.4,
    lineHeight: 53,
    fontFamily: FontFamily.helvetica,
    textAlign: "center",
  },
  iphone1415Pro4: {
    left: 1,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    height: 825,
    width: 394,
  },
  iphone14Pro10: {
    marginLeft: -197,
    top: 35,
    left: "50%",
    backgroundColor: "#f7e1d4",
    height: 824,
    width: 394,
    position: "absolute",
    overflow: "hidden",
  },
  loginsignupPage: {
    borderRadius: 30,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor:"#F8E4D8",
    
  },
});

export default LoginSignupPage;
