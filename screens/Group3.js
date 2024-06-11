import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const Group3 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.subtractParent, styles.frameChildPosition]}>
        <Image
          style={styles.subtractIcon}
          contentFit="cover"
          source={require("../assets/subtract3.png")}
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
        <View style={[styles.iphone1415Pro5, styles.frameChildPosition]}>
          <View
            style={[styles.iphone1415Pro5Child, styles.frameChildPosition]}
          />
          <Image
            style={styles.iphone1415Pro5Item}
            contentFit="cover"
            source={require("../assets/frame-7364.png")}
          />
          <Image
            style={[styles.iphone1415Pro5Inner, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group-37255.png")}
          />
          <LinearGradient
            style={[styles.rectangleParent, styles.frameGroupPosition]}
            locations={[0, 0.14, 0.38, 0.51, 0.6, 0.75, 1]}
            colors={[
              "#f2eee6",
              "#f5d7b6",
              "#f8b978",
              "#fba146",
              "#fb9d3e",
              "#fc9834",
              "#ff7f00",
            ]}
          >
            <View style={[styles.frameChild, styles.frameChildPosition]} />
            <View style={styles.findYourBusParent}>
              <Text style={styles.findYourBus}>Find Your Bus</Text>
              <Image
                style={[styles.vectorIcon1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector4.png")}
              />
              <View style={[styles.groupWrapper, styles.groupLayout1]}>
                <View style={[styles.iconsParent, styles.groupLayout1]}>
                  <Image
                    style={styles.icons}
                    contentFit="cover"
                    source={require("../assets/icons.png")}
                  />
                  <Text style={[styles.whereAreYou, styles.textFlexBox]}>
                    Where are you going ?
                  </Text>
                  <View style={[styles.groupChild, styles.groupChildBorder]} />
                </View>
              </View>
              <View style={styles.groupParent}>
                <View style={[styles.iconsParent, styles.groupLayout1]}>
                  <Image
                    style={[styles.icons1, styles.iconsPosition]}
                    contentFit="cover"
                    source={require("../assets/icons1.png")}
                  />
                  <View style={[styles.groupChild, styles.groupChildBorder]} />
                </View>
                <Text style={[styles.blockDGautam, styles.textFlexBox]}>
                  Block D, Gautam Budh Nagar
                </Text>
                <Image
                  style={[styles.icons2, styles.iconsPosition]}
                  contentFit="cover"
                  source={require("../assets/icons2.png")}
                />
              </View>
              <Image
                style={[styles.icons3, styles.iconsLayout]}
                contentFit="cover"
                source={require("../assets/icons3.png")}
              />
              <Image
                style={[styles.symbolIcon, styles.symbolIconLayout]}
                contentFit="cover"
                source={require("../assets/symbol.png")}
              />
              <Image
                style={[styles.frameItem, styles.iconsLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-102.png")}
              />
              <View style={styles.frameInner} />
              <Image
                style={[styles.frameChild1, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/vector-1.png")}
              />
            </View>
          </LinearGradient>
          <View style={[styles.rectangleView, styles.menuListLayout]} />
          <Image
            style={[styles.iphone1415Pro5Child1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector-46.png")}
          />
          <LinearGradient
            style={[styles.frameGroup, styles.frameGroupPosition]}
            locations={[0, 0.25, 0.5, 0.75, 1]}
            colors={["#f2eee6", "#faecdc", "#fcecd9", "#feebd8", "#ffebd6"]}
          >
            <View style={[styles.frameContainer, styles.wrapperFlexBox]}>
              <View style={styles.tidligereRuterParent}>
                <Text style={styles.tidligereRuter}>Favorite Routes</Text>
                <Text style={[styles.tagMedEn, styles.tagMedEnTypo]}>
                  Bring back one of your previous trips.
                </Text>
              </View>
              <View style={[styles.iconsWrapper, styles.groupChildBorder]}>
                <Image
                  style={styles.iconsLayout}
                  contentFit="cover"
                  source={require("../assets/icons4.png")}
                />
              </View>
            </View>
            <View style={[styles.route1Parent, styles.route1Layout]}>
              <Text style={[styles.route1, styles.routeTypo]}>Route 1</Text>
              <View style={[styles.lineView, styles.lineViewBorder]} />
              <Text style={[styles.pariChowk, styles.pariLayout]}>
                Pari Chowk
              </Text>
              <Text style={[styles.sector18, styles.toTypo]}>Sector 18</Text>
              <Text style={[styles.to, styles.toLayout]}>To</Text>
              <Image
                style={[styles.frameIcon, styles.frameLayout1]}
                contentFit="cover"
                source={require("../assets/frame-7381.png")}
              />
              <View style={[styles.frameView, styles.frameLayout]} />
              <Image
                style={[styles.frameChild2, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/group-37262.png")}
              />
              <Image
                style={[styles.lineIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/line-130.png")}
              />
              <Image
                style={[styles.frameChild3, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/group-37262.png")}
              />
              <Image
                style={[styles.frameChild4, styles.symbolIconLayout]}
                contentFit="cover"
                source={require("../assets/frame-9.png")}
              />
            </View>
            <View style={[styles.route1Group, styles.route1Layout]}>
              <Text style={[styles.route11, styles.routeTypo]}>Route 1</Text>
              <View style={[styles.frameChild5, styles.lineViewBorder]} />
              <Text style={[styles.pariChowk1, styles.to1Typo]}>
                Pari Chowk
              </Text>
              <Text style={[styles.sector181, styles.to1Typo]}>Sector 18</Text>
              <Text style={[styles.to1, styles.to1Typo]}>To</Text>
              <Image
                style={[styles.frameChild6, styles.frameLayout1]}
                contentFit="cover"
                source={require("../assets/frame-73811.png")}
              />
              <View style={[styles.frameChild7, styles.frameLayout]} />
            </View>
          </LinearGradient>
          <View style={[styles.bottomNav, styles.menuListLayout]}>
            <View style={[styles.menuList, styles.menuListLayout]}>
              <View style={[styles.menu1, styles.menuLayout]}>
                <View style={[styles.lihomeWrapper, styles.wrapperSpaceBlock]}>
                  <Image
                    style={[styles.lihomeIcon, styles.iconsLayout]}
                    contentFit="cover"
                    source={require("../assets/lihome.png")}
                  />
                </View>
              </View>
              <View style={[styles.menu4, styles.menuLayout]} />
              <View style={[styles.menu5, styles.menuLayout]}>
                <View style={styles.wrapperSpaceBlock}>
                  <Image
                    style={[styles.lihomeIcon, styles.iconsLayout]}
                    contentFit="cover"
                    source={require("../assets/liuser.png")}
                  />
                </View>
              </View>
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/1.png")}
              />
            </View>
            <View style={[styles.iphoneIndicator, styles.menuListLayout]}>
              <View style={styles.line} />
            </View>
          </View>
          <Text style={[styles.helloAditya, styles.symbolLayout1]}>
            Hello Aditya !
          </Text>
          <View style={[styles.frameParent1, styles.frameChildPosition]}>
            <ImageBackground
              style={styles.mapSettingsParent}
              resizeMode="cover"
              source={require("../assets/frame7496.png")}
            >
              <View style={[styles.mapSettings, styles.wrapperFlexBox]}>
                <Image
                  style={styles.iconsLayout}
                  contentFit="cover"
                  source={require("../assets/icons5.png")}
                />
              </View>
              <View style={[styles.groupContainer, styles.groupLayout]}>
                <View style={[styles.groupView, styles.groupLayout]}>
                  <View style={[styles.groupView, styles.groupLayout]}>
                    <View style={[styles.groupInner, styles.groupLayout]} />
                  </View>
                  <Text
                    style={[styles.nearbyBusStops, styles.frameChildLayout]}
                  >
                    Nearby Bus Stops
                  </Text>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.groupParent1}>
              <View style={[styles.ellipseParent, styles.ellipsePosition]}>
                <Image
                  style={[styles.ellipseIcon, styles.ellipsePosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-10.png")}
                />
                <View style={[styles.symbol, styles.symbolLayout1]}>
                  <View style={[styles.symbolChild, styles.symbolLayout]} />
                  <View style={[styles.symbolItem, styles.symbolLayout]} />
                </View>
              </View>
              <View
                style={[
                  styles.liveTransportIndenticationDParent,
                  styles.liveParentPosition,
                ]}
              >
                <View
                  style={[
                    styles.liveTransportIndenticationD,
                    styles.liveLayout,
                  ]}
                >
                  <Image
                    style={[
                      styles.liveTransportIndenticationDChild,
                      styles.liveLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/frame-7040.png")}
                  />
                  <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.text, styles.toTypo]}>110</Text>
                  </View>
                </View>
                <Image
                  style={[styles.groupChild1, styles.groupChildPosition]}
                  contentFit="cover"
                  source={require("../assets/vector-970.png")}
                />
              </View>
              <View
                style={[
                  styles.liveTransportIndenticationDGroup,
                  styles.livePosition,
                ]}
              >
                <View
                  style={[
                    styles.liveTransportIndenticationD1,
                    styles.liveLayout,
                  ]}
                >
                  <Image
                    style={[
                      styles.liveTransportIndenticationDChild,
                      styles.liveLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/frame-7040.png")}
                  />
                  <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.text, styles.toTypo]}>026</Text>
                  </View>
                </View>
                <Image
                  style={[styles.groupChild2, styles.groupChildPosition]}
                  contentFit="cover"
                  source={require("../assets/vector-9701.png")}
                />
              </View>
              <View
                style={[
                  styles.liveTransportIndenticationDContainer,
                  styles.livePosition,
                ]}
              >
                <View
                  style={[
                    styles.liveTransportIndenticationD2,
                    styles.liveLayout,
                  ]}
                >
                  <Image
                    style={[
                      styles.liveTransportIndenticationDChild,
                      styles.liveLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/frame-7040.png")}
                  />
                  <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.text, styles.toTypo]}>161</Text>
                  </View>
                </View>
                <Image
                  style={styles.groupChild3}
                  contentFit="cover"
                  source={require("../assets/vector-9702.png")}
                />
              </View>
              <View
                style={[
                  styles.liveTransportIndenticationDParent1,
                  styles.liveParentPosition,
                ]}
              >
                <View
                  style={[
                    styles.liveTransportIndenticationD3,
                    styles.liveLayout,
                  ]}
                >
                  <Image
                    style={[
                      styles.liveTransportIndenticationDChild,
                      styles.liveLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/frame-70401.png")}
                  />
                  <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.text, styles.toTypo]}>00L</Text>
                  </View>
                </View>
                <Image
                  style={[styles.groupChild4, styles.groupChildPosition]}
                  contentFit="cover"
                  source={require("../assets/vector-9703.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.arrowIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildPosition: {
    width: 394,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  frameGroupPosition: {
    backgroundColor: "transparent",
    width: 394,
    left: 0,
    position: "absolute",
  },
  groupLayout1: {
    height: 55,
    width: 274,
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  groupChildBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_sm,
  },
  iconsPosition: {
    left: 244,
    height: 20,
    width: 18,
    position: "absolute",
  },
  iconsLayout: {
    width: 24,
    height: 24,
  },
  symbolIconLayout: {
    height: 26,
    width: 26,
    position: "absolute",
  },
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  menuListLayout: {
    width: 393,
    position: "absolute",
  },
  wrapperFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  tagMedEnTypo: {
    fontFamily: FontFamily.helvetica,
    textAlign: "left",
  },
  route1Layout: {
    height: 123,
    width: 342,
    borderRadius: Border.br_xs,
    top: 82,
    left: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  routeTypo: {
    height: 22,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.helvetica,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  lineViewBorder: {
    height: 3,
    borderTopWidth: 3,
    borderRadius: 0.001,
    borderColor: Color.colorBlack,
    borderStyle: "dashed",
    position: "absolute",
  },
  pariLayout: {
    width: 87,
    color: Color.colorBlack,
  },
  toTypo: {
    textAlign: "center",
    fontWeight: "500",
  },
  toLayout: {
    height: 14,
    color: Color.colorSilver_100,
    width: 21,
  },
  frameLayout1: {
    borderRadius: Border.br_5xl,
    overflow: "hidden",
    position: "absolute",
  },
  frameLayout: {
    width: 28,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_4xs,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  frameChildLayout: {
    height: 18,
    position: "absolute",
  },
  to1Typo: {
    top: 61,
    textAlign: "center",
    fontFamily: FontFamily.text12MediumTight,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  menuLayout: {
    width: 74,
    alignItems: "center",
    position: "absolute",
  },
  wrapperSpaceBlock: {
    padding: Padding.p_xs,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
  },
  symbolLayout1: {
    height: 16,
    position: "absolute",
  },
  groupLayout: {
    height: 32,
    width: 126,
    position: "absolute",
  },
  ellipsePosition: {
    width: 240,
    marginTop: -120,
    height: 240,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  symbolLayout: {
    borderRadius: 6499,
    position: "absolute",
  },
  liveParentPosition: {
    width: 67,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  liveLayout: {
    height: 29,
    position: "absolute",
  },
  groupChildPosition: {
    width: 11,
    borderRadius: 0,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  livePosition: {
    height: 36,
    width: 67,
    left: "50%",
    top: "50%",
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
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon: {
    height: "1.38%",
    width: "4.95%",
    top: "1.95%",
    right: "8.43%",
    bottom: "96.67%",
    left: "86.62%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  am: {
    marginTop: -428.5,
    left: 32,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.text12MediumTight_size,
    top: "50%",
    position: "absolute",
  },
  iphone1415Pro5Child: {
    backgroundColor: Color.colorDarkorange_200,
    height: 66,
    top: 0,
  },
  iphone1415Pro5Item: {
    left: 284,
    width: 40,
    height: 40,
    top: 14,
    position: "absolute",
  },
  iphone1415Pro5Inner: {
    height: "3.29%",
    width: "9.14%",
    top: "2.23%",
    right: "5.08%",
    bottom: "94.48%",
    left: "85.79%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameChild: {
    top: 263,
    backgroundColor: Color.colorGainsboro_200,
    height: 195,
  },
  findYourBus: {
    marginLeft: -60,
    top: 13,
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    color: Color.colorDarkorange_100,
    fontFamily: FontFamily.helvetica,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon1: {
    height: "6.5%",
    width: "3.61%",
    top: "70.5%",
    right: "13.06%",
    bottom: "23%",
    left: "83.33%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icons: {
    top: 15,
    left: 10,
    height: 24,
    width: 21,
    position: "absolute",
  },
  whereAreYou: {
    top: 19,
    width: 162,
    alignItems: "center",
    color: Color.colorGray_100,
    lineHeight: 14,
    letterSpacing: 0.3,
    fontSize: FontSize.size_sm,
    display: "flex",
    left: 39,
    fontFamily: FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    borderColor: Color.colorDarkorange_100,
    borderWidth: 2,
    height: 55,
    width: 274,
    position: "absolute",
    left: 0,
    top: 0,
  },
  iconsParent: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 119,
    left: 54,
  },
  icons1: {
    top: 17,
    height: 20,
    width: 18,
  },
  blockDGautam: {
    top: 22,
    width: 199,
    height: 12,
    alignItems: "center",
    color: Color.colorGray_100,
    lineHeight: 14,
    letterSpacing: 0.3,
    fontSize: FontSize.size_sm,
    display: "flex",
    left: 39,
    fontFamily: FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  icons2: {
    top: 18,
    height: 20,
    width: 18,
  },
  groupParent: {
    top: 52,
    height: 55,
    width: 274,
    left: 54,
    position: "absolute",
  },
  icons3: {
    left: 62,
    top: 70,
    width: 24,
    position: "absolute",
  },
  symbolIcon: {
    top: 133,
    left: 17,
  },
  frameItem: {
    left: 18,
    top: 70,
    width: 24,
    position: "absolute",
  },
  frameInner: {
    height: "5%",
    width: "2.78%",
    top: "38.5%",
    right: "90.28%",
    bottom: "56.5%",
    left: "6.94%",
    borderRadius: Border.br_9980xl,
    backgroundColor: "#ff6600",
    position: "absolute",
  },
  frameChild1: {
    left: 30,
    height: 30,
    top: 98,
    position: "absolute",
  },
  findYourBusParent: {
    marginLeft: -180,
    top: 4,
    width: 360,
    height: 200,
    backgroundColor: Color.colorSnow,
    left: "50%",
    borderRadius: Border.br_xl,
    overflow: "hidden",
    position: "absolute",
  },
  rectangleParent: {
    top: 66,
    height: 221,
  },
  rectangleView: {
    top: 768,
    backgroundColor: Color.colorGainsboro_100,
    height: 84,
    left: 0,
  },
  iphone1415Pro5Child1: {
    top: 838,
    left: 143,
    width: 107,
  },
  tidligereRuter: {
    letterSpacing: -0.2,
    color: Color.textColorsMain,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.helvetica,
    textAlign: "left",
  },
  tagMedEn: {
    alignSelf: "stretch",
    lineHeight: 17,
    color: Color.textColorsLight,
    marginTop: 10,
    fontSize: FontSize.text12MediumTight_size,
    fontFamily: FontFamily.helvetica,
  },
  tidligereRuterParent: {
    flex: 1,
  },
  iconsWrapper: {
    borderColor: Color.colorWhitesmoke_200,
    borderWidth: 1,
    padding: Padding.p_3xs,
    marginLeft: 12,
    justifyContent: "center",
  },
  frameContainer: {
    top: 20,
    left: 24,
    width: 346,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  route1: {
    top: 9,
    left: 15,
    width: 75,
  },
  lineView: {
    width: 92,
    top: 94,
    left: 54,
  },
  pariChowk: {
    height: 11,
    textAlign: "center",
    fontWeight: "500",
    fontFamily: FontFamily.text12MediumTight,
    lineHeight: 16,
    fontSize: FontSize.size_base,
    top: 52,
    position: "absolute",
    left: 39,
    width: 87,
  },
  sector18: {
    left: 201,
    width: 80,
    fontFamily: FontFamily.text12MediumTight,
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_base,
    top: 52,
    position: "absolute",
    height: 20,
    color: Color.colorBlack,
  },
  to: {
    left: 153,
    textAlign: "center",
    fontWeight: "500",
    fontFamily: FontFamily.text12MediumTight,
    lineHeight: 16,
    fontSize: FontSize.size_base,
    top: 52,
    position: "absolute",
  },
  frameIcon: {
    left: 275,
    width: 25,
    height: 25,
    top: 12,
  },
  frameView: {
    marginTop: -33.5,
    left: 307,
    height: 67,
  },
  frameChild2: {
    top: 84,
    left: 38,
    width: 18,
  },
  lineIcon: {
    left: 177,
    width: 86,
    top: 94,
  },
  frameChild3: {
    top: 85,
    left: 262,
    width: 18,
  },
  frameChild4: {
    top: 81,
    left: 147,
    borderRadius: 10,
  },
  route1Parent: {
    marginLeft: -173,
    backgroundColor: Color.colorSnow,
  },
  route11: {
    left: 22,
    width: 97,
    top: 18,
  },
  frameChild5: {
    left: 29,
    width: 253,
    top: 98,
  },
  pariChowk1: {
    left: 38,
    height: 11,
    width: 87,
    color: Color.colorBlack,
  },
  sector181: {
    left: 200,
    width: 87,
    color: Color.colorBlack,
    height: 20,
  },
  to1: {
    left: 152,
    height: 14,
    color: Color.colorSilver_100,
    width: 21,
  },
  frameChild6: {
    left: 247,
    width: 30,
    height: 30,
    top: 14,
  },
  frameChild7: {
    marginTop: -28.5,
    left: 301,
    height: 57,
  },
  route1Group: {
    marginLeft: 182,
    backgroundColor: Color.backgroundColorsBackgroundMain,
  },
  frameGroup: {
    top: 525,
    height: 237,
    overflow: "hidden",
  },
  lihomeIcon: {
    overflow: "hidden",
  },
  lihomeWrapper: {
    backgroundColor: Color.colorDarkorange_300,
  },
  menu1: {
    left: 160,
    top: 12,
  },
  menu4: {
    left: 233,
    height: 48,
    top: 12,
  },
  menu5: {
    left: 285,
    top: 11,
  },
  icon: {
    height: "47.03%",
    width: "7.63%",
    top: "26.56%",
    right: "77.35%",
    bottom: "26.41%",
    left: "15.01%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  menuList: {
    bottom: 30,
    height: 64,
    backgroundColor: Color.backgroundColorsBackgroundMain,
    left: 0,
  },
  line: {
    marginLeft: -67.5,
    bottom: 8,
    backgroundColor: Color.textColorsMain,
    width: 135,
    height: 5,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  iphoneIndicator: {
    bottom: 0,
    backgroundColor: Color.backgroundColorsBackgroundMain,
    height: 30,
    left: 0,
  },
  bottomNav: {
    marginLeft: -196,
    top: 758,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 94,
    left: "50%",
    overflow: "hidden",
  },
  helloAditya: {
    top: 23,
    left: 16,
    fontSize: FontSize.size_3xl,
    letterSpacing: 0.4,
    lineHeight: 22,
    width: 146,
    color: Color.backgroundColorsBackgroundMain,
    fontFamily: FontFamily.helvetica,
    textAlign: "left",
  },
  mapSettings: {
    top: 16,
    left: 340,
    borderRadius: Border.br_smi,
    backgroundColor: "rgba(246, 139, 31, 0.9)",
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  groupInner: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  groupView: {
    left: 0,
    top: 0,
  },
  nearbyBusStops: {
    top: 7,
    left: 3,
    letterSpacing: 0.1,
    width: 119,
    textAlign: "center",
    fontWeight: "500",
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkorange_100,
    fontFamily: FontFamily.helvetica,
  },
  groupContainer: {
    left: 9,
    top: 11,
  },
  mapSettingsParent: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  ellipseIcon: {
    marginLeft: -120,
  },
  symbolChild: {
    height: "91.67%",
    width: "91.67%",
    top: "3.85%",
    right: "3.85%",
    bottom: "4.49%",
    left: "4.49%",
    backgroundColor: Color.brandColorsNightPurple1,
  },
  symbolItem: {
    height: "33.33%",
    width: "33.33%",
    top: "33.33%",
    right: "33.33%",
    bottom: "33.33%",
    left: "33.33%",
    backgroundColor: Color.backgroundColorsBackgroundMain,
  },
  symbol: {
    marginTop: -0.8,
    marginLeft: -7.8,
    width: 16,
    left: "50%",
    top: "50%",
    height: 16,
  },
  ellipseParent: {
    marginLeft: -122,
    marginTop: -120,
  },
  liveTransportIndenticationDChild: {
    borderRadius: 12,
    width: 29,
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  text: {
    fontSize: FontSize.size_2xs_2,
    lineHeight: 10,
    width: 20,
    height: 8,
    color: Color.backgroundColorsBackgroundMain,
    fontFamily: FontFamily.text12MediumTight,
    textAlign: "center",
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  wrapper: {
    top: 5,
    left: 34,
    borderRadius: 6,
    backgroundColor: Color.colorGray_200,
    paddingHorizontal: 7,
    paddingVertical: 5,
    overflow: "hidden",
  },
  liveTransportIndenticationD: {
    marginTop: -18.25,
    borderRadius: 848,
    shadowOpacity: 1,
    elevation: 180.78,
    shadowRadius: 180.78,
    shadowOffset: {
      width: 0,
      height: 28.00766372680664,
    },
    shadowColor: "rgba(0, 0, 0, 0.01)",
    marginLeft: -33.5,
    height: 29,
    width: 67,
    left: "50%",
    top: "50%",
  },
  groupChild1: {
    marginTop: 9.75,
    marginLeft: -17.5,
    height: 9,
  },
  liveTransportIndenticationDParent: {
    marginTop: 15,
    marginLeft: -109,
    height: 37,
  },
  liveTransportIndenticationD1: {
    marginTop: -17.85,
    borderRadius: 848,
    shadowOpacity: 1,
    elevation: 180.78,
    shadowRadius: 180.78,
    shadowOffset: {
      width: 0,
      height: 28.00766372680664,
    },
    shadowColor: "rgba(0, 0, 0, 0.01)",
    marginLeft: -33.5,
    height: 29,
    width: 67,
    left: "50%",
    top: "50%",
  },
  groupChild2: {
    marginTop: 7.65,
    marginLeft: -12.3,
    height: 10,
  },
  liveTransportIndenticationDGroup: {
    marginTop: -68,
    marginLeft: -46,
  },
  liveTransportIndenticationD2: {
    marginTop: -17.9,
    borderRadius: 848,
    shadowOpacity: 1,
    elevation: 180.78,
    shadowRadius: 180.78,
    shadowOffset: {
      width: 0,
      height: 28.00766372680664,
    },
    shadowColor: "rgba(0, 0, 0, 0.01)",
    marginLeft: -33.5,
    height: 29,
    width: 67,
    left: "50%",
    top: "50%",
  },
  groupChild3: {
    marginTop: 12.7,
    marginLeft: -24.2,
    width: 10,
    borderRadius: 0,
    height: 5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  liveTransportIndenticationDContainer: {
    marginTop: 44,
    marginLeft: 15,
  },
  liveTransportIndenticationD3: {
    marginTop: -11.85,
    borderRadius: 848,
    shadowOpacity: 1,
    elevation: 180.78,
    shadowRadius: 180.78,
    shadowOffset: {
      width: 0,
      height: 28.00766372680664,
    },
    shadowColor: "rgba(0, 0, 0, 0.01)",
    marginLeft: -33.5,
    height: 29,
    width: 67,
    left: "50%",
    top: "50%",
  },
  groupChild4: {
    marginTop: -16.95,
    marginLeft: -9.7,
    height: 11,
  },
  liveTransportIndenticationDParent1: {
    marginTop: -33,
    marginLeft: 55,
    height: 34,
  },
  groupParent1: {
    marginTop: -116,
    width: 244,
    height: 240,
    marginLeft: -122,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frameParent1: {
    top: 287,
    height: 238,
    overflow: "hidden",
  },
  iphone1415Pro5: {
    top: 33,
    backgroundColor: Color.colorLinen_100,
    height: 852,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  subtractParent: {
    borderRadius: Border.br_21xl,
    overflow: "hidden",
    top: 0,
    height: 885,
  },
  arrowIcon: {
    top: 701,
    left: 338,
    width: 15,
  },
  frameParent: {
    height: 885,
    width: "100%",
    flex: 1,
  },
});

export default Group3;
