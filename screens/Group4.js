import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Group4 = () => {
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
          source={require("../assets/vector5.png")}
        />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group2.png")}
        />
        <Text style={[styles.am, styles.amFlexBox]}>6:12AM</Text>
        <View style={[styles.iphone1415Pro5, styles.frameChildPosition]}>
          <View
            style={[styles.iphone1415Pro5Child, styles.frameChildPosition]}
          />
          <Image
            style={styles.iphone1415Pro5Item}
            contentFit="cover"
            source={require("../assets/frame-73641.png")}
          />
          <Image
            style={[styles.iphone1415Pro5Inner, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group-372551.png")}
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
            <View style={styles.planYourJourneyParent}>
              <Text style={[styles.planYourJourney, styles.sector18PvrTypo]}>
                Plan your journey
              </Text>
              <Image
                style={[styles.vectorIcon1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector6.png")}
              />
              <View style={[styles.groupWrapper, styles.parentGroupLayout]}>
                <View style={[styles.iconsParent, styles.parentGroupLayout]}>
                  <Image
                    style={styles.icons}
                    contentFit="cover"
                    source={require("../assets/icons6.png")}
                  />
                  <Text style={[styles.whereAreYou, styles.busStopsLayout]}>
                    Where are you going ?
                  </Text>
                  <View style={[styles.groupChild, styles.lineViewBorder]} />
                </View>
              </View>
              <View style={[styles.groupParent, styles.parentGroupLayout]}>
                <View style={[styles.iconsParent, styles.parentGroupLayout]}>
                  <Image
                    style={styles.icons1}
                    contentFit="cover"
                    source={require("../assets/icons1.png")}
                  />
                  <View style={[styles.groupChild, styles.lineViewBorder]} />
                </View>
                <Text style={[styles.blockDGautam, styles.busStopsLayout]}>
                  Block D, Gautam Budh Nagar
                </Text>
                <Image
                  style={styles.icons2}
                  contentFit="cover"
                  source={require("../assets/icons7.png")}
                />
              </View>
              <Image
                style={[styles.icons3, styles.iconsLayout]}
                contentFit="cover"
                source={require("../assets/icons8.png")}
              />
              <Image
                style={styles.symbolIcon}
                contentFit="cover"
                source={require("../assets/symbol1.png")}
              />
              <Image
                style={[styles.frameItem, styles.iconsLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-102.png")}
              />
              <View style={styles.frameInner} />
              <Image
                style={[styles.frameChild1, styles.frameChild1Layout]}
                contentFit="cover"
                source={require("../assets/vector-1.png")}
              />
            </View>
          </LinearGradient>
          <View style={styles.rectangleView} />
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
            <View style={[styles.frameContainer, styles.mapSettingsFlexBox]}>
              <View style={styles.tidligereRuterParent}>
                <Text style={styles.tidligereRuter}>Favorite Routes</Text>
                <Text style={styles.tagMedEn}>
                  Bring back one of your previous trips.
                </Text>
              </View>
              <View style={styles.iconsWrapper}>
                <Image
                  style={styles.iconsLayout}
                  contentFit="cover"
                  source={require("../assets/icons4.png")}
                />
              </View>
            </View>
            <View style={[styles.route1Parent, styles.route1Layout]}>
              <Text style={styles.route1}>Route 1</Text>
              <View style={[styles.lineView, styles.lineViewBorder]} />
              <Text style={[styles.pariChowk, styles.toTypo]}>Pari Chowk</Text>
              <Text style={[styles.sector18, styles.toTypo]}>Sector 18</Text>
              <Text style={[styles.to, styles.toTypo]}>To</Text>
              <Image
                style={styles.frameIcon}
                contentFit="cover"
                source={require("../assets/frame-73811.png")}
              />
              <View style={styles.frameView} />
            </View>
            <View style={[styles.route1Group, styles.route1Layout]}>
              <Text style={styles.route1}>Route 1</Text>
              <View style={[styles.lineView, styles.lineViewBorder]} />
              <Text style={[styles.pariChowk, styles.toTypo]}>Pari Chowk</Text>
              <Text style={[styles.sector18, styles.toTypo]}>Sector 18</Text>
              <Text style={[styles.to, styles.toTypo]}>To</Text>
              <Image
                style={styles.frameIcon}
                contentFit="cover"
                source={require("../assets/frame-73812.png")}
              />
              <View style={styles.frameView} />
            </View>
          </LinearGradient>
          <View style={styles.bottomNav}>
            <View style={styles.menuList}>
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
            <View style={[styles.iphoneIndicator, styles.frameChild1Layout]}>
              <View style={styles.line} />
            </View>
          </View>
          <Text style={styles.helloAditya}>Hello Aditya !</Text>
          <View style={[styles.frameParent1, styles.frameChildPosition]}>
            <ImageBackground
              style={styles.mapSettingsParent}
              resizeMode="cover"
              source={require("../assets/frame74961.png")}
            >
              <View style={[styles.mapSettings, styles.mapSettingsFlexBox]}>
                <Image
                  style={styles.iconsLayout}
                  contentFit="cover"
                  source={require("../assets/icons5.png")}
                />
              </View>
              <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <View style={[styles.groupInner, styles.groupLayout]} />
                <Text style={[styles.busStops, styles.textFlexBox]}>
                  Bus Stops
                </Text>
              </View>
            </ImageBackground>
            <View style={styles.groupContainer}>
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
                  styles.groupViewPosition,
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
                  <View style={styles.wrapper}>
                    <Text style={[styles.text, styles.textFlexBox]}>110</Text>
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
                  <View style={styles.wrapper}>
                    <Text style={[styles.text, styles.textFlexBox]}>026</Text>
                  </View>
                </View>
                <Image
                  style={[styles.groupChild2, styles.groupChildPosition]}
                  contentFit="cover"
                  source={require("../assets/vector-9704.png")}
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
                  <View style={styles.wrapper}>
                    <Text style={[styles.text, styles.textFlexBox]}>161</Text>
                  </View>
                </View>
                <Image
                  style={styles.groupChild3}
                  contentFit="cover"
                  source={require("../assets/vector-9702.png")}
                />
              </View>
              <View style={[styles.groupView, styles.groupViewPosition]}>
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
                  <View style={styles.wrapper}>
                    <Text style={[styles.text, styles.textFlexBox]}>00L</Text>
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
        <View style={[styles.frameChild5, styles.frameLayout]} />
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <View style={[styles.subtractGroup, styles.frameLayout]}>
            <Image
              style={styles.subtractIcon}
              contentFit="cover"
              source={require("../assets/subtract4.png")}
            />
            <View style={[styles.iphone1415Pro8, styles.frameChildPosition]}>
              <View style={styles.iphone1415Pro8Inner}>
                <View
                  style={[styles.frameParent2, styles.frameParentSpaceBlock]}
                >
                  <Image
                    style={[styles.frameChild6, styles.icons6Layout]}
                    contentFit="cover"
                    source={require("../assets/frame-17.png")}
                  />
                  <Text style={[styles.senesteRejser, styles.gemteStederTypo]}>
                    Recent Travels
                  </Text>
                </View>
              </View>
              <View style={styles.iphone1415Pro8Child}>
                <View
                  style={[
                    styles.gemteStederParent,
                    styles.frameParentSpaceBlock,
                  ]}
                >
                  <Text style={[styles.gemteSteder, styles.gemteStederTypo]}>
                    Saved Places
                  </Text>
                  <View style={styles.frameParent3}>
                    <View
                      style={[styles.iconsContainer, styles.iconsSpaceBlock]}
                    >
                      <Image
                        style={styles.icons6Layout}
                        contentFit="cover"
                        source={require("../assets/icons9.png")}
                      />
                      <Text style={[styles.hjem, styles.hjemTypo]}>Home</Text>
                    </View>
                    <View style={[styles.iconsParent1, styles.iconsSpaceBlock]}>
                      <Image
                        style={styles.icons6Layout}
                        contentFit="cover"
                        source={require("../assets/icons10.png")}
                      />
                      <Text style={[styles.hjem, styles.hjemTypo]}>
                        Occupation
                      </Text>
                    </View>
                    <View style={[styles.iconsParent1, styles.iconsSpaceBlock]}>
                      <Image
                        style={styles.icons6Layout}
                        contentFit="cover"
                        source={require("../assets/icons11.png")}
                      />
                      <Text style={[styles.hjem, styles.hjemTypo]}>
                        Education
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.iphone1415Pro8Inner1}>
                <View style={[styles.bekrftValgWrapper, styles.bekrftFlexBox]}>
                  <Text style={styles.bekrftValg}>Confirm Selection</Text>
                </View>
              </View>
              <View style={[styles.bekrftValgContainer, styles.bekrftFlexBox]}>
                <Text style={styles.bekrftValg}>Confirm Selection</Text>
              </View>
              <View style={[styles.frameParent4, styles.frameParentSpaceBlock]}>
                <View style={styles.rectangleContainer}>
                  <Image
                    style={styles.rectangleIcon}
                    contentFit="cover"
                    source={require("../assets/rectangle-2047.png")}
                  />
                  <View style={styles.hjstrupvej7b5200OdenseVParent}>
                    <Text
                      style={[styles.hjstrupvej7b5200, styles.sector18PvrClr]}
                    >
                      Højstrupvej 7B, 5200 Odense V
                    </Text>
                    <View style={styles.iconsParent3}>
                      <Image
                        style={styles.symbolLayout1}
                        contentFit="cover"
                        source={require("../assets/icons12.png")}
                      />
                      <Text
                        style={[
                          styles.alexandragade5000Odense,
                          styles.hjemTypo,
                        ]}
                      >
                        Alexandragade, 5000 Odense C
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.rectangleParentSpaceBlock}>
                  <Image
                    style={styles.rectangleIcon}
                    contentFit="cover"
                    source={require("../assets/rectangle-20471.png")}
                  />
                  <View style={styles.hjstrupvej7b5200OdenseVParent}>
                    <Text
                      style={[
                        styles.alexandragade5000Odense1,
                        styles.sector18PvrClr,
                      ]}
                    >
                      Alexandragade, 5000 Odense C
                    </Text>
                    <View style={styles.iconsParent3}>
                      <Image
                        style={styles.symbolLayout1}
                        contentFit="cover"
                        source={require("../assets/icons12.png")}
                      />
                      <Text
                        style={[
                          styles.alexandragade5000Odense,
                          styles.hjemTypo,
                        ]}
                      >
                        Højstrupvej 7B, 5200 Odense V
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.rectangleParentSpaceBlock}>
                  <Image
                    style={styles.rectangleIcon}
                    contentFit="cover"
                    source={require("../assets/rectangle-20472.png")}
                  />
                  <View style={styles.hjstrupvej7b5200OdenseVParent}>
                    <Text
                      style={[
                        styles.alexandragade5000Odense1,
                        styles.sector18PvrClr,
                      ]}
                    >
                      Campusvej 55, 5230 Odense M
                    </Text>
                    <View style={styles.iconsParent3}>
                      <Image
                        style={styles.symbolLayout1}
                        contentFit="cover"
                        source={require("../assets/icons12.png")}
                      />
                      <Text
                        style={[
                          styles.alexandragade5000Odense,
                          styles.hjemTypo,
                        ]}
                      >
                        Alexandragade, 5000 Odense C
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={[
                  styles.sector18PvrDlfMallWrapper,
                  styles.iconsContainerShadowBox,
                ]}
              >
                <Text style={[styles.sector18Pvr, styles.sector18PvrClr]}>
                  Sector 18, PVR DLF Mall
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
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
  amFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  frameGroupPosition: {
    backgroundColor: "transparent",
    width: 394,
    left: 0,
    position: "absolute",
  },
  sector18PvrTypo: {
    fontFamily: FontFamily.helvetica,
    lineHeight: 16,
    fontSize: FontSize.size_base,
    top: 14,
    position: "absolute",
  },
  parentGroupLayout: {
    height: 55,
    width: 274,
    position: "absolute",
  },
  busStopsLayout: {
    lineHeight: 14,
    fontSize: FontSize.size_sm,
  },
  lineViewBorder: {
    borderColor: Color.colorBlack,
    position: "absolute",
  },
  iconsLayout: {
    width: 24,
    height: 24,
  },
  frameChild1Layout: {
    height: 30,
    position: "absolute",
  },
  mapSettingsFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  route1Layout: {
    height: 113,
    width: 342,
    borderRadius: Border.br_xs,
    top: 92,
    backgroundColor: Color.backgroundColorsBackgroundMain,
    left: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  toTypo: {
    textAlign: "center",
    top: 61,
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
  groupLayout: {
    height: 32,
    width: 89,
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    color: Color.backgroundColorsBackgroundMain,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  ellipsePosition: {
    width: 240,
    marginTop: -120,
    height: 240,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  symbolLayout1: {
    width: 16,
    height: 16,
  },
  symbolLayout: {
    borderRadius: 6499,
    position: "absolute",
  },
  groupViewPosition: {
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
  frameLayout: {
    height: 885,
    width: 394,
    position: "absolute",
  },
  frameParentSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xl,
  },
  icons6Layout: {
    height: 28,
    width: 28,
  },
  gemteStederTypo: {
    color: Color.textColorsLighter,
    fontWeight: "700",
    letterSpacing: 0.4,
    fontFamily: FontFamily.metropolis,
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  iconsSpaceBlock: {
    paddingBottom: Padding.p_xs,
    paddingRight: Padding.p_sm,
    paddingTop: Padding.p_xs,
    paddingLeft: Padding.p_xs,
    height: 52,
    borderRadius: Border.br_base,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_200,
    flexDirection: "row",
    borderStyle: "solid",
  },
  hjemTypo: {
    marginLeft: 6,
    fontFamily: FontFamily.metropolis,
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  bekrftFlexBox: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_base,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  sector18PvrClr: {
    color: Color.brandColorsNightPurple,
    textAlign: "left",
  },
  iconsContainerShadowBox: {
    elevation: 150,
    shadowRadius: 150,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 28.00766372680664,
    },
  },
  subtractIcon: {
    width: 425,
    height: 932,
  },
  vectorIcon: {
    height: "1.6%",
    width: "4.47%",
    top: "1.73%",
    right: "17.82%",
    left: "77.72%",
    maxWidth: "100%",
    overflow: "hidden",
    bottom: "96.67%",
    maxHeight: "100%",
  },
  groupIcon: {
    height: "1.37%",
    width: "4.95%",
    top: "1.95%",
    right: "8.43%",
    left: "86.62%",
    maxWidth: "100%",
    overflow: "hidden",
    bottom: "96.67%",
    maxHeight: "100%",
  },
  am: {
    marginTop: -428.5,
    left: 32,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.text12MediumTight_size,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  iphone1415Pro5Child: {
    height: 66,
    backgroundColor: Color.colorDarkorange_200,
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
    width: "10.18%",
    top: "2.23%",
    right: "4.29%",
    bottom: "94.48%",
    left: "85.53%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameChild: {
    top: 263,
    backgroundColor: Color.colorGainsboro_200,
    height: 195,
  },
  planYourJourney: {
    marginLeft: -68,
    left: "50%",
    textAlign: "left",
    color: Color.colorBlack,
  },
  vectorIcon1: {
    height: "6.28%",
    width: "3.61%",
    top: "68.12%",
    right: "13.06%",
    bottom: "25.6%",
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
    top: 21,
    width: 162,
    letterSpacing: 0.3,
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    left: 39,
    fontFamily: FontFamily.helvetica,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChild: {
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_sm,
    borderColor: Color.colorBlack,
    height: 55,
    width: 274,
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
    width: 274,
  },
  icons1: {
    top: 17,
    height: 20,
    width: 18,
    left: 244,
    position: "absolute",
  },
  blockDGautam: {
    top: 22,
    width: 199,
    height: 12,
    letterSpacing: 0.3,
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    left: 39,
    fontFamily: FontFamily.helvetica,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  icons2: {
    top: 18,
    height: 20,
    width: 18,
    left: 244,
    position: "absolute",
  },
  groupParent: {
    top: 52,
    left: 54,
    width: 274,
  },
  icons3: {
    top: 70,
    left: 62,
    position: "absolute",
  },
  symbolIcon: {
    top: 133,
    left: 17,
    width: 26,
    height: 26,
    position: "absolute",
  },
  frameItem: {
    top: 67,
    left: 18,
    position: "absolute",
  },
  frameInner: {
    height: "4.83%",
    width: "2.78%",
    top: "35.75%",
    right: "90.28%",
    bottom: "59.42%",
    left: "6.94%",
    borderRadius: Border.br_9980xl,
    backgroundColor: Color.brandColorsNightPurple,
    position: "absolute",
  },
  frameChild1: {
    left: 30,
    top: 98,
    maxWidth: "100%",
    overflow: "hidden",
  },
  planYourJourneyParent: {
    marginLeft: -180,
    top: 4,
    backgroundColor: "#f7ede0",
    width: 360,
    height: 207,
    left: "50%",
    borderRadius: Border.br_xl,
    overflow: "hidden",
    position: "absolute",
  },
  rectangleParent: {
    top: 66,
    height: 228,
  },
  rectangleView: {
    top: 768,
    backgroundColor: Color.colorGainsboro_100,
    height: 84,
    width: 393,
    left: 0,
    position: "absolute",
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
    lineHeight: 17,
    marginTop: 10,
    color: Color.textColorsLight,
    fontFamily: FontFamily.metropolis,
    alignSelf: "stretch",
    textAlign: "left",
    fontSize: FontSize.text12MediumTight_size,
  },
  tidligereRuterParent: {
    flex: 1,
  },
  iconsWrapper: {
    padding: Padding.p_3xs,
    marginLeft: 12,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_200,
    justifyContent: "center",
    borderStyle: "solid",
    borderRadius: Border.br_sm,
  },
  frameContainer: {
    top: 36,
    width: 346,
    alignItems: "flex-end",
    left: 24,
    justifyContent: "center",
  },
  route1: {
    left: 22,
    width: 97,
    height: 22,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    top: 18,
    fontFamily: FontFamily.helvetica,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  lineView: {
    left: 29,
    borderStyle: "dashed",
    borderRadius: 0.001,
    borderTopWidth: 3,
    width: 253,
    height: 3,
    top: 98,
  },
  pariChowk: {
    left: 38,
    height: 11,
    width: 87,
    top: 61,
    color: Color.colorBlack,
  },
  sector18: {
    left: 200,
    width: 87,
    height: 20,
    top: 61,
    color: Color.colorBlack,
  },
  to: {
    left: 152,
    color: Color.colorSilver_100,
    height: 14,
    width: 21,
    top: 61,
  },
  frameIcon: {
    left: 247,
    width: 30,
    borderRadius: Border.br_5xl,
    height: 30,
    top: 14,
    overflow: "hidden",
    position: "absolute",
  },
  frameView: {
    marginTop: -28.5,
    left: 301,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorBlack,
    height: 57,
    width: 28,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  route1Parent: {
    marginLeft: -173,
  },
  route1Group: {
    marginLeft: 182,
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
    alignItems: "center",
    top: 12,
    width: 74,
  },
  menu4: {
    left: 233,
    height: 48,
    alignItems: "center",
    top: 12,
    width: 74,
  },
  menu5: {
    top: 11,
    left: 285,
    alignItems: "center",
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
    width: 393,
    left: 0,
    position: "absolute",
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
    width: 393,
    left: 0,
  },
  bottomNav: {
    marginLeft: -196,
    top: 758,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 94,
    width: 393,
    left: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  helloAditya: {
    left: 16,
    fontSize: FontSize.size_3xl,
    lineHeight: 22,
    width: 146,
    height: 16,
    color: Color.backgroundColorsBackgroundMain,
    letterSpacing: 0.4,
    top: 23,
    fontFamily: FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  mapSettings: {
    top: 16,
    left: 340,
    borderRadius: Border.br_smi,
    backgroundColor: "#ffad66",
    width: 38,
    height: 38,
    alignItems: "center",
  },
  groupInner: {
    backgroundColor: Color.colorDarkorange_200,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  busStops: {
    top: 3,
    height: 27,
    left: 1,
    position: "absolute",
    width: 87,
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    display: "flex",
    fontFamily: FontFamily.helvetica,
  },
  rectangleGroup: {
    left: 5,
    top: 14,
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
    left: "50%",
    top: "50%",
    width: 16,
    position: "absolute",
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
    fontFamily: FontFamily.text12MediumTight,
    fontWeight: "500",
  },
  wrapper: {
    top: 5,
    left: 34,
    borderRadius: 6,
    backgroundColor: Color.colorGray_200,
    paddingHorizontal: 7,
    paddingVertical: 5,
    flexDirection: "row",
    overflow: "hidden",
    position: "absolute",
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
  groupView: {
    marginTop: -33,
    marginLeft: 55,
    height: 34,
  },
  groupContainer: {
    marginTop: -115.5,
    width: 244,
    height: 240,
    marginLeft: -122,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frameParent1: {
    top: 294,
    height: 231,
    overflow: "hidden",
  },
  iphone1415Pro5: {
    top: 33,
    backgroundColor: Color.colorLinen_100,
    height: 852,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  frameChild5: {
    top: -1087,
    left: 721,
    borderRadius: 32,
    backgroundColor: "rgba(217, 217, 217, 0.3)",
  },
  frameChild6: {
    borderRadius: Border.br_980xl,
  },
  senesteRejser: {
    marginLeft: 16,
  },
  frameParent2: {
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  iphone1415Pro8Inner: {
    top: 87,
    width: 393,
    left: 0,
    position: "absolute",
  },
  gemteSteder: {
    alignSelf: "stretch",
  },
  hjem: {
    letterSpacing: 0.4,
    marginLeft: 6,
    color: Color.textColorsMain,
    fontWeight: "600",
  },
  iconsContainer: {
    elevation: 150,
    shadowRadius: 150,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 28.00766372680664,
    },
  },
  iconsParent1: {
    marginLeft: 16,
  },
  frameParent3: {
    marginTop: 20,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  gemteStederParent: {
    alignSelf: "stretch",
  },
  iphone1415Pro8Child: {
    top: 389,
    width: 393,
    left: 0,
    position: "absolute",
  },
  bekrftValg: {
    fontWeight: "700",
    color: Color.backgroundColorsBackgroundMain,
    letterSpacing: 0.4,
    fontFamily: FontFamily.metropolis,
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  bekrftValgWrapper: {
    backgroundColor: "#fd8224",
    alignSelf: "stretch",
  },
  iphone1415Pro8Inner1: {
    top: 583,
    width: 391,
    paddingTop: Padding.p_base,
    paddingBottom: 28,
    paddingHorizontal: Padding.p_5xl,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  bekrftValgContainer: {
    top: 498,
    left: 19,
    width: 355,
    backgroundColor: Color.colorDarkorange_200,
    position: "absolute",
  },
  rectangleIcon: {
    width: 50,
    height: 50,
    borderRadius: Border.br_xl,
  },
  hjstrupvej7b5200: {
    fontWeight: "500",
    color: Color.brandColorsNightPurple,
    fontFamily: FontFamily.metropolis,
    lineHeight: 14,
    letterSpacing: 0.3,
    fontSize: FontSize.size_sm,
  },
  alexandragade5000Odense: {
    color: Color.textColorsLight,
  },
  iconsParent3: {
    marginTop: 8,
    alignSelf: "stretch",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  hjstrupvej7b5200OdenseVParent: {
    marginLeft: 16,
  },
  rectangleContainer: {
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_xl,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_3xs,
    elevation: 150,
    shadowRadius: 150,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 28.00766372680664,
    },
    alignItems: "center",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.backgroundColorsBackgroundMain,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  alexandragade5000Odense1: {
    textTransform: "capitalize",
    fontFamily: FontFamily.text12MediumTight,
    fontWeight: "500",
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.3,
  },
  rectangleParentSpaceBlock: {
    marginTop: 14,
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_xl,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_3xs,
    elevation: 150,
    shadowRadius: 150,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 28.00766372680664,
    },
    alignItems: "center",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.backgroundColorsBackgroundMain,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameParent4: {
    top: 125,
    left: 1,
    position: "absolute",
    width: 393,
  },
  sector18Pvr: {
    left: 27,
    letterSpacing: 0.5,
    width: 194,
    height: 18,
    fontFamily: FontFamily.helvetica,
    lineHeight: 16,
    fontSize: FontSize.size_base,
    top: 14,
    position: "absolute",
  },
  sector18PvrDlfMallWrapper: {
    width: 345,
    height: 47,
    top: 23,
    elevation: 150,
    shadowRadius: 150,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.backgroundColorsBackgroundMain,
    left: 24,
    position: "absolute",
  },
  iphone1415Pro8: {
    top: 285,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: "#fefefe",
    height: 596,
    overflow: "hidden",
  },
  subtractGroup: {
    overflow: "hidden",
    borderRadius: Border.br_21xl,
    top: 0,
    left: 0,
  },
  frameWrapper: {
    left: 0,
    top: 0,
  },
  subtractParent: {
    overflow: "hidden",
    borderRadius: Border.br_21xl,
    top: 0,
    height: 881,
  },
  frameParent: {
    height: 881,
    width: "100%",
    flex: 1,
  },
});

export default Group4;
