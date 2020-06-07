import generateCSS from './../icon-list/generateCss'
import generateCSSUnit from './../icon-list/generateCssUnit'

function styling(props) {

  const {
    classMigrate,
    frontShadowBlur,
    frontShadowColor,
    frontShadowHorizontal,
    frontShadowVertical,
    frontShadowPosition,
    iconSizeFront,
    iconSizeFrontType,
    iconSizeFrontMobile,
    iconSizeFrontTablet,
    iconfrontColor,
    iconfrontBGColor,
    iconfrontborderType,
    iconfrontborderRadius,
    iconfrontborderWidth,
    iconfrontborderColor,
    iconfrontShadowBlur,
    iconfrontShadowColor,
    iconfrontShadowHorizontal,
    iconfrontShadowVertical,
    titlefrontColor,
    titlefrontWeight,
    titlefrontLetter,
    titlefrontUpper,
    titlefrontStyle,
    titlefrontfontSize,
    titlefrontfontSizeMobile,
    titlefrontfontSizeTablet,
    titlefrontfontSizeType,
    titlefrontBGColor,
    titlefrontshadowBlur,
    titlefrontshadowColor,
    titlefrontshadowHorizontal,
    titlefrontshadowVertical,
    descfrontColor,
    descfrontWeight,
    descfrontLetter,
    descfrontUpper,
    descfrontStyle,
    descfrontfontSize,
    descfrontfontSizeMobile,
    descfrontfontSizeTablet,
    descfrontfontSizeType,
    descfrontBGColor,
    descfrontshadowBlur,
    descfrontshadowColor,
    descfrontshadowHorizontal,
    descfrontshadowVertical,
    backShadowBlur,
    backShadowColor,
    backShadowHorizontal,
    backShadowVertical,
    backShadowPosition,
    iconbackColor,
    iconbackBGColor,
    iconbackborderType,
    iconbackborderRadius,
    iconbackborderWidth,
    iconbackborderColor,
    iconbackShadowBlur,
    iconbackShadowColor,
    iconbackShadowHorizontal,
    iconbackShadowVertical,
    titlebackColor,
    titlebackWeight,
    titlebackLetter,
    titlebackUpper,
    titlebackStyle,
    titlebackfontSize,
    titlebackfontSizeMobile,
    titlebackfontSizeTablet,
    titlebackfontSizeType,
    titlebackBGColor,
    titlebackshadowBlur,
    titlebackshadowColor,
    titlebackshadowHorizontal,
    titlebackshadowVertical,
    descbackColor,
    descbackWeight,
    descbackLetter,
    descbackUpper,
    descbackStyle,
    descbackfontSize,
    descbackfontSizeMobile,
    descbackfontSizeTablet,
    descbackfontSizeType,
    descbackBGColor,
    descbackshadowBlur,
    descbackshadowColor,
    descbackshadowHorizontal,
    descbackshadowVertical,
    iconSizeBack,
    iconSizeBackType,
    iconSizeBackMobile,
    iconSizeBackTablet,
    height,
    heightType,
    heightMobile,
    heightTablet,
    iconFrontMargin,
    iconFrontMarginType,
    iconFrontMarginMobile,
    iconFrontMarginTablet,
    iconFrontPadding,
    iconFrontPaddingTablet,
    iconFrontPaddingType,
    iconFrontPaddingMobile,
    titleFrontMargin,
    titleFrontMarginType,
    titleFrontMarginMobile,
    titleFrontMarginTablet,
    titleFrontPadding,
    titleFrontPaddingTablet,
    titleFrontPaddingType,
    titleFrontPaddingMobile,
    descFrontMargin,
    descFrontMarginType,
    descFrontMarginMobile,
    descFrontMarginTablet,
    descFrontPadding,
    descFrontPaddingTablet,
    descFrontPaddingType,
    descFrontPaddingMobile,
    iconBackMargin,
    iconBackMarginType,
    iconBackMarginMobile,
    iconBackMarginTablet,
    iconBackPadding,
    iconBackPaddingTablet,
    iconBackPaddingType,
    iconBackPaddingMobile,
    titleBackMargin,
    titleBackMarginType,
    titleBackMarginMobile,
    titleBackMarginTablet,
    titleBackPadding,
    titleBackPaddingTablet,
    titleBackPaddingType,
    titleBackPaddingMobile,
    descBackMargin,
    descBackMarginType,
    descBackMarginMobile,
    descBackMarginTablet,
    descBackPadding,
    descBackPaddingTablet,
    descBackPaddingType,
    descBackPaddingMobile
  } = props.attributes

  var selectors = {}
  var tablet_selectors = {}
  var mobile_selectors = {}

  selectors = {
    " .premium-flip-front":{
      "box-shadow": `${frontShadowHorizontal}px ${frontShadowVertical}px ${frontShadowBlur}px ${frontShadowColor} ${frontShadowPosition}`,
    },
    " .premium-flip-box":{
      "height": generateCSSUnit(height, heightType),
    },
    " .premium-flip-front-icon": {
      "font-size": generateCSSUnit(iconSizeFront, iconSizeFrontType),
      "color": iconfrontColor,
      "border-style": iconfrontborderType,
      "border-width": generateCSSUnit(iconfrontborderWidth, "px"),
      "border-color": iconfrontborderColor,
      "border-radius": generateCSSUnit(iconfrontborderRadius, "px"),
      "background": iconfrontBGColor,
      "text-shadow": `${iconfrontShadowHorizontal}px ${iconfrontShadowVertical}px ${iconfrontShadowBlur}px ${iconfrontShadowColor}`,
      "margin": generateCSSUnit(iconFrontMargin, iconFrontMarginType),
      "padding": generateCSSUnit(iconFrontPadding, iconFrontPaddingType),
    },
    " .premium-flip-text-wrapper img": {
      "width": generateCSSUnit(iconSizeFront, iconSizeFrontType),
      "height": generateCSSUnit(iconSizeFront, iconSizeFrontType),
      "color": iconfrontColor,
      "border-style": iconfrontborderType,
      "border-width": generateCSSUnit(iconfrontborderWidth, "px"),
      "border-color": iconfrontborderColor,
      "border-radius": generateCSSUnit(iconfrontborderRadius, "px"),
      "background": iconfrontBGColor,
      "text-shadow": `${iconfrontShadowHorizontal}px ${iconfrontShadowVertical}px ${iconfrontShadowBlur}px ${iconfrontShadowColor}`,
      "margin": generateCSSUnit(iconFrontMargin, iconFrontMarginType),
      "padding": generateCSSUnit(iconFrontPadding, iconFrontPaddingType),
    },
    " .premium-flip-front-title": {
      "font-size": generateCSSUnit(titlefrontfontSize, titlefrontfontSizeType),
      "color": titlefrontColor,
      "font-weight": titlefrontWeight,
      "letter-spacing": titlefrontLetter + "px" + "!important",
      "text-transform": titlefrontUpper ? "uppercase" : "none" + "!important",
      "font-style": titlefrontStyle + "!important",
      "background": titlefrontBGColor,
      "text-shadow": `${titlefrontshadowHorizontal}px ${titlefrontshadowVertical}px ${titlefrontshadowBlur}px ${titlefrontshadowColor}`,
      "margin": generateCSSUnit(titleFrontMargin, titleFrontMarginType),
      "padding": generateCSSUnit(titleFrontPadding, titleFrontPaddingType),
    },
    " .premium-flip-front-description": {
      "font-size": generateCSSUnit(descfrontfontSize, descfrontfontSizeType),
      "color": descfrontColor,
      "font-weight": descfrontWeight,
      "letter-spacing": descfrontLetter + "px" + "!important",
      "text-transform": descfrontUpper ? "uppercase" : "none" + "!important",
      "font-style": descfrontStyle + "!important",
      "background": descfrontBGColor,
      "text-shadow": `${descfrontshadowHorizontal}px ${descfrontshadowVertical}px ${descfrontshadowBlur}px ${descfrontshadowColor}`,
      "margin": generateCSSUnit(descFrontMargin, descFrontMarginType),
      "padding": generateCSSUnit(descFrontPadding, descFrontPaddingType),
    },
    " .premium-flip-back": {
      "box-shadow": `${backShadowHorizontal}px ${backShadowVertical}px ${backShadowBlur}px ${backShadowColor} ${backShadowPosition}`,
    },
    " .premium-flip-back-icon": {
      "font-size": generateCSSUnit(iconSizeBack, iconSizeBackType),
      "color": iconbackColor,
      "border-style": iconbackborderType,
      "border-width": generateCSSUnit(iconbackborderWidth, "px"),
      "border-color": iconbackborderColor,
      "border-radius": generateCSSUnit(iconbackborderRadius, "px"),
      "background": iconbackBGColor,
      "text-shadow": `${iconbackShadowHorizontal}px ${iconbackShadowVertical}px ${iconbackShadowBlur}px ${iconbackShadowColor}`,
      "margin": generateCSSUnit(iconBackMargin, iconBackMarginType),
      "padding": generateCSSUnit(iconBackPadding, iconBackPaddingType),
    },
    " .premium-flip-back-text-wrapper img": {
      "width": generateCSSUnit(iconSizeBack, iconSizeBackType),
      "height": generateCSSUnit(iconSizeBack, iconSizeBackType),
      "color": iconbackColor,
      "border-style": iconbackborderType,
      "border-width": generateCSSUnit(iconbackborderWidth, "px"),
      "border-color": iconbackborderColor,
      "border-radius": generateCSSUnit(iconbackborderRadius, "px"),
      "background": iconbackBGColor,
      "text-shadow": `${iconbackShadowHorizontal}px ${iconbackShadowVertical}px ${iconbackShadowBlur}px ${iconbackShadowColor}`,
      "margin": generateCSSUnit(iconBackMargin, iconBackMarginType),
      "padding": generateCSSUnit(iconBackPadding, iconBackPaddingType),
    },
    " .premium-flip-back-title": {
      "font-size": generateCSSUnit(titlebackfontSize, titlebackfontSizeType),
      "color": titlebackColor,
      "font-weight": titlebackWeight,
      "letter-spacing": titlebackLetter + "px" + "!important",
      "text-transform": titlebackUpper ? "uppercase" : "none" + "!important",
      "font-style": titlebackStyle + "!important",
      "background": titlebackBGColor,
      "text-shadow": `${titlebackshadowHorizontal}px ${titlebackshadowVertical}px ${titlebackshadowBlur}px ${titlebackshadowColor}`,
      "margin": generateCSSUnit(titleBackMargin, titleBackMarginType),
      "padding": generateCSSUnit(titleBackPadding, titleBackPaddingType),
    },
    " .premium-flip-back-description": {
      "font-size": generateCSSUnit(descbackfontSize, descbackfontSizeType),
      "color": descbackColor,
      "font-weight": descbackWeight,
      "letter-spacing": descbackLetter + "px" + "!important",
      "text-transform": descbackUpper ? "uppercase" : "none" + "!important",
      "font-style": descbackStyle + "!important",
      "background": descbackBGColor,
      "text-shadow": `${descbackshadowHorizontal}px ${descbackshadowVertical}px ${descbackshadowBlur}px ${descbackshadowColor}`,
      "margin": generateCSSUnit(descBackMargin, descBackMarginType),
      "padding": generateCSSUnit(descBackPadding, descBackPaddingType),
    }
  }

  mobile_selectors = {
    " .premium-flip-front-icon": {
      "font-size": generateCSSUnit(iconSizeFrontMobile, iconSizeFrontType),
      "margin": generateCSSUnit(iconFrontMarginMobile, iconFrontMarginType),
      "padding": generateCSSUnit(iconFrontPaddingMobile, iconFrontPaddingType),
    },
    " .premium-flip-text-wrapper img": {
      "margin": generateCSSUnit(iconFrontMarginMobile, iconFrontMarginType),
      "padding": generateCSSUnit(iconFrontPaddingMobile, iconFrontPaddingType),
    },
    " .premium-flip-box":{
      "height": generateCSSUnit(heightMobile, heightType),
    },
    " .premium-flip-front-title": {
      "font-size": generateCSSUnit(titlefrontfontSizeMobile, titlefrontfontSizeType),
      "margin": generateCSSUnit(titleFrontMarginMobile, titleFrontMarginType),
      "padding": generateCSSUnit(titleFrontPaddingMobile, titleFrontPaddingType),
    },
    " .premium-flip-front-description": {
      "font-size": generateCSSUnit(descfrontfontSizeMobile, descfrontfontSizeType),
      "margin": generateCSSUnit(descFrontMarginMobile, descFrontMarginType),
      "padding": generateCSSUnit(descFrontPaddingMobile, descFrontPaddingType),
    },
    " .premium-flip-back-icon": {
      "font-size": generateCSSUnit(iconSizeBackMobile, iconSizeBackType),
      "margin": generateCSSUnit(iconBackMarginMobile, iconBackMarginType),
      "padding": generateCSSUnit(iconBackPaddingMobile, iconBackPaddingType),
    },
    " .premium-flip-back-text-wrapper img": {
      "margin": generateCSSUnit(iconBackMarginMobile, iconBackMarginType),
      "padding": generateCSSUnit(iconBackPaddingMobile, iconBackPaddingType),
    },
    " .premium-flip-back-title": {
      "font-size": generateCSSUnit(titlebackfontSizeMobile, titlebackfontSizeType),
      "margin": generateCSSUnit(titleBackMarginMobile, titleBackMarginType),
      "padding": generateCSSUnit(titleBackPaddingMobile, titleBackPaddingType),
    },
    " .premium-flip-back-description": {
      "font-size": generateCSSUnit(descbackfontSizeMobile, descbackfontSizeType),
      "margin": generateCSSUnit(descBackMarginMobile, descBackMarginType),
      "padding": generateCSSUnit(descBackPaddingMobile, descBackPaddingType),
    },
  }

  tablet_selectors = {
    " .premium-flip-front-icon": {
      "font-size": generateCSSUnit(iconSizeFrontTablet, iconSizeFrontType),
      "margin": generateCSSUnit(iconFrontMarginTablet, iconFrontMarginType),
      "padding": generateCSSUnit(iconFrontPaddingTablet, iconFrontPaddingType),
    },
    " .premium-flip-text-wrapper img": {
      "margin": generateCSSUnit(iconFrontMarginTablet, iconFrontMarginType),
      "padding": generateCSSUnit(iconFrontPaddingTablet, iconFrontPaddingType),
    },
    " .premium-flip-box":{
      "height": generateCSSUnit(heightTablet, heightType),
    },
    " .premium-flip-front-title": {
      "font-size": generateCSSUnit(titlefrontfontSizeTablet, titlefrontfontSizeType),
      "margin": generateCSSUnit(titleFrontMarginTablet, titleFrontMarginType),
      "padding": generateCSSUnit(titleFrontPaddingTablet, titleFrontPaddingType),
    },
    " .premium-flip-front-description": {
      "font-size": generateCSSUnit(descfrontfontSizeTablet, descfrontfontSizeType),
      "margin": generateCSSUnit(descFrontMarginTablet, descFrontMarginType),
      "padding": generateCSSUnit(descFrontPaddingTablet, descFrontPaddingType),
    },
    " .premium-flip-back-icon": {
      "font-size": generateCSSUnit(iconSizeBackTablet, iconSizeBackType),
      "margin": generateCSSUnit(iconBackMarginTablet, iconBackMarginType),
      "padding": generateCSSUnit(iconBackPaddingTablet, iconBackPaddingType),
    },
    " .premium-flip-back-text-wrapper img": {
      "margin": generateCSSUnit(iconBackMarginTablet, iconBackMarginType),
      "padding": generateCSSUnit(iconBackPaddingTablet, iconBackPaddingType),
    },
    " .premium-flip-back-title": {
      "font-size": generateCSSUnit(titlebackfontSizeTablet, titlebackfontSizeType),
      "margin": generateCSSUnit(titleBackMarginTablet, titleBackMarginType),
      "padding": generateCSSUnit(titleBackPaddingTablet, titleBackPaddingType),
    },
    " .premium-flip-back-description": {
      "font-size": generateCSSUnit(descbackfontSizeTablet, descbackfontSizeType),
      "margin": generateCSSUnit(descBackMarginTablet, descBackMarginType),
      "padding": generateCSSUnit(descBackPaddingTablet, descBackPaddingType),
    },
  }

  var styling_css = ""
  var id = `#premium-flip-box-${props.clientId}`
  if (classMigrate) {
    id = `.premium-block-${props.clientId}`
  }

  styling_css = generateCSS(selectors, id)
  styling_css += generateCSS(tablet_selectors, id, true, "tablet")

  styling_css += generateCSS(mobile_selectors, id, true, "mobile")

  return styling_css
}

export default styling