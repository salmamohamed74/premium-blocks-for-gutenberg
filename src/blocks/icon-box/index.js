import { iconBox } from "../settings";
import { FontAwesomeEnabled } from "../settings";
import PremiumTypo from "../../components/premium-typo";
import PremiumIcon from "../../components/premium-icon";
import PremiumBorder from "../../components/premium-border";
import PremiumPadding from "../../components/premium-padding";
import PremiumMargin from "../../components/premium-margin";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumBackgroud from "../../components/premium-background";

if (iconBox) {
  const className = "premium-icon-box";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const {
    PanelBody,
    Toolbar,
    SelectControl,
    RangeControl,
    ToggleControl
  } = wp.components;

  const {
    InspectorControls,
    RichText,
    PanelColorSettings,
    URLInput
  } = wp.editor;

  const iconBoxAttrs = {
    align: {
      type: "string",
      default: "center"
    },
    iconChecked: {
      type: "boolean",
      default: true
    },
    iconSize: {
      type: "number",
      default: 50
    },
    iconColor: {
      type: "string",
      default: "#6ec1e4"
    },
    iconType: {
      type: "string",
      default: "dash"
    },
    selectedIcon: {
      type: "string",
      default: "dashicons-admin-site"
    },
    titleChecked: {
      type: "boolean",
      default: true
    },
    titleText: {
      type: "array",
      source: "children",
      selector: ".premium-icon-box__title",
      default: __("Awesome Title")
    },
    titleTag: {
      type: "string",
      default: "H2"
    },
    titleColor: {
      type: "string",
      default: "#6ec1e4"
    },
    titleSize: {
      type: "number"
    },
    titleLine: {
      type: "number"
    },
    titleLetter: {
      type: "number"
    },
    titleStyle: {
      type: "string"
    },
    titleUpper: {
      type: "boolean"
    },
    titleWeight: {
      type: "number",
      default: 500
    },
    titleMarginT: {
      type: "number"
    },
    titleMarginB: {
      type: "number"
    },
    descText: {
      type: "array",
      source: "children",
      selector: ".premium-icon-box__desc",
      default:
        "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
    },
    descChecked: {
      type: "boolean",
      default: true
    },
    descColor: {
      type: "string"
    },
    descSize: {
      type: "number"
    },
    descLine: {
      type: "number"
    },
    descWeight: {
      type: "number",
      default: 500
    },
    descMarginT: {
      type: "number"
    },
    descMarginB: {
      type: "number"
    },
    imageID: {
      type: "string"
    },
    imageURL: {
      type: "string"
    },
    backColor: {
      type: "string"
    },
    backgroundRepeat: {
      type: "string",
      default: "no-repeat"
    },
    backgroundPosition: {
      type: "string",
      default: "top center"
    },
    backgroundSize: {
      type: "string",
      default: "auto"
    },
    fixed: {
      type: "boolean",
      default: false
    },
    borderType: {
      type: "string",
      default: "none"
    },
    borderWidth: {
      type: "number",
      default: "1"
    },
    borderRadius: {
      type: "number"
    },
    borderColor: {
      type: "string"
    },
    marginT: {
      type: "number"
    },
    marginR: {
      type: "number"
    },
    marginB: {
      type: "number"
    },
    marginL: {
      type: "number"
    },
    paddingT: {
      type: "number"
    },
    paddingR: {
      type: "number"
    },
    paddingB: {
      type: "number"
    },
    paddingL: {
      type: "number"
    },
    shadowColor: {
      type: "string"
    },
    shadowBlur: {
      type: "number",
      default: "0"
    },
    shadowHorizontal: {
      type: "number",
      default: "0"
    },
    shadowVertical: {
      type: "number",
      default: "0"
    },
    shadowPosition: {
      type: "string",
      default: ""
    }
  };

  const getIconClass = (input, type) => {
    let iconClass =
      "fa" === type
        ? `${input}`.startsWith("fa-")
          ? `fa ${input}`
          : `fa fa-${input}`
        : `dashicons ${input}`;
    return iconClass;
  };

  registerBlockType("premium/icon-box", {
    title: __("Icon Box"),
    icon: "plus",
    category: "premium-blocks",
    attributes: iconBoxAttrs,
    edit: props => {
      const { isSelected, setAttributes } = props;
      const {
        align,
        iconChecked,
        iconType,
        selectedIcon,
        iconSize,
        iconColor,
        titleChecked,
        titleText,
        titleTag,
        titleColor,
        titleSize,
        titleLine,
        titleLetter,
        titleStyle,
        titleUpper,
        titleWeight,
        titleMarginT,
        titleMarginB,
        descChecked,
        descText,
        descColor,
        descSize,
        descLine,
        descWeight,
        descMarginT,
        descMarginB,
        imageID,
        imageURL,
        fixed,
        backColor,
        backgroundRepeat,
        backgroundPosition,
        backgroundSize,
        borderType,
        borderWidth,
        borderRadius,
        borderColor,
        marginT,
        marginR,
        marginB,
        marginL,
        paddingT,
        paddingR,
        paddingB,
        paddingL,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        shadowPosition
      } = props.attributes;

      let iconClass = getIconClass(selectedIcon, iconType);

      const ALIGNS = ["left", "center", "right"];

      return [
        isSelected && (
          <InspectorControls key={"inspector"}>
            <PanelBody
              title={__("Display Options")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <ToggleControl
                label={__("Icon")}
                checked={iconChecked}
                onChange={newValue => setAttributes({ iconChecked: newValue })}
              />
              <ToggleControl
                label={__("Title")}
                checked={titleChecked}
                onChange={newValue => setAttributes({ titleChecked: newValue })}
              />
              <ToggleControl
                label={__("Description")}
                checked={descChecked}
                onChange={newValue => setAttributes({ descChecked: newValue })}
              />
            </PanelBody>
            {iconChecked && (
              <PanelBody
                title={__("Icon")}
                className="premium-panel-body"
                initialOpen={false}
              >
                <PremiumIcon
                  iconType={iconType}
                  selectedIcon={selectedIcon}
                  onChangeType={newType => setAttributes({ iconType: newType })}
                  onChangeIcon={newIcon =>
                    setAttributes({ selectedIcon: newIcon })
                  }
                />
                <RangeControl
                  label={__("Size (PX)")}
                  value={iconSize}
                  onChange={newValue => setAttributes({ iconSize: newValue })}
                />
                <PanelColorSettings
                  title={__("Colors")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: iconColor,
                      onChange: colorValue =>
                        setAttributes({ iconColor: colorValue }),
                      label: __("Icon Color")
                    }
                  ]}
                />
              </PanelBody>
            )}
            {titleChecked && (
              <PanelBody
                title={__("Title")}
                className="premium-panel-body"
                initialOpen={false}
              >
                <PanelBody
                  title={__("Font")}
                  className="premium-panel-body premium-panel-body-inner"
                  initialOpen={false}
                >
                  <p>{__("Title")}</p>
                  <Toolbar
                    controls={"123456".split("").map(tag => ({
                      icon: "heading",
                      isActive: "H" + tag === titleTag,
                      onClick: () => setAttributes({ titleTag: "H" + tag }),
                      subscript: tag
                    }))}
                  />
                  <PremiumTypo
                    components={[
                      "size",
                      "weight",
                      "style",
                      "upper",
                      "spacing",
                      "line"
                    ]}
                    size={titleSize}
                    weight={titleWeight}
                    style={titleStyle}
                    spacing={titleLetter}
                    line={titleLine}
                    upper={titleUpper}
                    onChangeSize={newSize =>
                      setAttributes({ titleSize: newSize })
                    }
                    onChangeWeight={newWeight =>
                      setAttributes({ titleWeight: newWeight })
                    }
                    onChangeStyle={newStyle =>
                      setAttributes({ titleStyle: newStyle })
                    }
                    onChangeSpacing={newValue =>
                      setAttributes({ titleLetter: newValue })
                    }
                    onChangeLine={newValue =>
                      setAttributes({ titleLine: newValue })
                    }
                    onChangeUpper={check =>
                      setAttributes({ titleUpper: check })
                    }
                  />
                </PanelBody>
                <PanelColorSettings
                  title={__("Colors")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: titleColor,
                      onChange: newColor =>
                        setAttributes({ titleColor: newColor }),
                      label: __("Text Color")
                    }
                  ]}
                />
                <PanelBody
                  title={__("Spacings")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                >
                  <PremiumMargin
                    directions={["top", "bottom"]}
                    marginTop={titleMarginT}
                    marginBottom={titleMarginB}
                    onChangeMarTop={value =>
                      setAttributes({
                        titleMarginT: value === undefined ? 0 : value
                      })
                    }
                    onChangeMarBottom={value =>
                      setAttributes({
                        titleMarginB: value === undefined ? 0 : value
                      })
                    }
                  />
                </PanelBody>
              </PanelBody>
            )}

            {titleChecked && (
              <PanelBody
                title={__("Description")}
                className="premium-panel-body"
                initialOpen={false}
              >
                <PanelBody
                  title={__("Font")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                >
                  <PremiumTypo
                    components={["size", "weight", "line"]}
                    size={descSize}
                    weight={descWeight}
                    line={descLine}
                    onChangeSize={newSize =>
                      setAttributes({ descSize: newSize })
                    }
                    onChangeWeight={newWeight =>
                      setAttributes({ descWeight: newWeight })
                    }
                    onChangeLine={newValue =>
                      setAttributes({ descLine: newValue })
                    }
                  />
                </PanelBody>
                <PanelColorSettings
                  title={__("Colors")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: descColor,
                      onChange: newColor =>
                        setAttributes({ descColor: newColor }),
                      label: __("Text Color")
                    }
                  ]}
                />
                <PanelBody
                  title={__("Spacings")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                >
                  <PremiumMargin
                    directions={["top", "bottom"]}
                    marginTop={descMarginT}
                    marginBottom={descMarginB}
                    onChangeMarTop={value =>
                      setAttributes({
                        descMarginT: value === undefined ? 0 : value
                      })
                    }
                    onChangeMarBottom={value =>
                      setAttributes({
                        descMarginB: value === undefined ? 0 : value
                      })
                    }
                  />
                </PanelBody>
              </PanelBody>
            )}
            <PanelBody
              title={__("Container")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <p>{__("Align")}</p>
              <Toolbar
                controls={ALIGNS.map(contentAlign => ({
                  icon: "editor-align" + contentAlign,
                  isActive: contentAlign === align,
                  onClick: () => setAttributes({ align: contentAlign })
                }))}
              />
              <PanelBody
                title={__("Background")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PanelColorSettings
                  title={__("Colors")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: backColor,
                      onChange: colorValue =>
                        setAttributes({ backColor: colorValue }),
                      label: __("Background Color")
                    }
                  ]}
                />
                {imageURL && <img src={imageURL} width="100%" height="auto" />}
                <PremiumBackgroud
                  imageID={imageID}
                  imageURL={imageURL}
                  backgroundPosition={backgroundPosition}
                  backgroundRepeat={backgroundRepeat}
                  backgroundSize={backgroundSize}
                  fixed={fixed}
                  onSelectMedia={media => {
                    setAttributes({
                      imageID: media.id,
                      imageURL: media.url
                    });
                  }}
                  onRemoveImage={value =>
                    setAttributes({ imageURL: "", imageID: "" })
                  }
                  onChangeBackPos={newValue =>
                    setAttributes({ backgroundPosition: newValue })
                  }
                  onchangeBackRepeat={newValue =>
                    setAttributes({ backgroundRepeat: newValue })
                  }
                  onChangeBackSize={newValue =>
                    setAttributes({ backgroundSize: newValue })
                  }
                  onChangeFixed={check => setAttributes({ fixed: check })}
                />
              </PanelBody>
              <PanelBody
                title={__("Border")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumBorder
                  borderType={borderType}
                  borderWidth={borderWidth}
                  borderColor={borderColor}
                  borderRadius={borderRadius}
                  onChangeType={newType =>
                    setAttributes({ borderType: newType })
                  }
                  onChangeWidth={newWidth =>
                    setAttributes({ borderWidth: newWidth })
                  }
                  onChangeColor={colorValue =>
                    setAttributes({ borderColor: colorValue })
                  }
                  onChangeRadius={newrRadius =>
                    setAttributes({ borderRadius: newrRadius })
                  }
                />
              </PanelBody>
              <PremiumBoxShadow
                color={shadowColor}
                blur={shadowBlur}
                horizontal={shadowHorizontal}
                vertical={shadowVertical}
                position={shadowPosition}
                onChangeColor={newColor =>
                  setAttributes({
                    shadowColor:
                      newColor === undefined ? "transparent" : newColor
                  })
                }
                onChangeBlur={newBlur =>
                  setAttributes({
                    shadowBlur: newBlur === undefined ? 0 : newBlur
                  })
                }
                onChangehHorizontal={newValue =>
                  setAttributes({
                    shadowHorizontal: newValue === undefined ? 0 : newValue
                  })
                }
                onChangeVertical={newValue =>
                  setAttributes({
                    shadowVertical: newValue === undefined ? 0 : newValue
                  })
                }
                onChangePosition={newValue =>
                  setAttributes({
                    shadowPosition: newValue === undefined ? 0 : newValue
                  })
                }
              />
              <PanelBody
                title={__("Spacings")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumMargin
                  directions={["all"]}
                  marginTop={marginT}
                  marginRight={marginR}
                  marginBottom={marginB}
                  marginLeft={marginL}
                  onChangeMarTop={value =>
                    setAttributes({
                      marginT: value === undefined ? 0 : value
                    })
                  }
                  onChangeMarRight={value =>
                    setAttributes({
                      marginR: value === undefined ? 0 : value
                    })
                  }
                  onChangeMarBottom={value =>
                    setAttributes({
                      marginB: value === undefined ? 0 : value
                    })
                  }
                  onChangeMarLeft={value =>
                    setAttributes({
                      marginL: value === undefined ? 0 : value
                    })
                  }
                />
                <PremiumPadding
                  paddingTop={paddingT}
                  paddingRight={paddingR}
                  paddingBottom={paddingB}
                  paddingLeft={paddingL}
                  onChangePadTop={value =>
                    setAttributes({
                      paddingT: value === undefined ? 0 : value
                    })
                  }
                  onChangePadRight={value =>
                    setAttributes({
                      paddingR: value === undefined ? 0 : value
                    })
                  }
                  onChangePadBottom={value =>
                    setAttributes({
                      paddingB: value === undefined ? 0 : value
                    })
                  }
                  onChangePadLeft={value =>
                    setAttributes({
                      paddingL: value === undefined ? 0 : value
                    })
                  }
                />
              </PanelBody>
            </PanelBody>
          </InspectorControls>
        ),
        <div
          className={`${className}`}
          style={{
            textAlign: align,
            border: borderType,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius + "px",
            borderColor: borderColor,
            marginTop: marginT,
            marginRight: marginR,
            marginBottom: marginB,
            marginLeft: marginL,
            paddingTop: paddingT,
            paddingRight: paddingR,
            paddingBottom: paddingB,
            paddingLeft: paddingL,
            boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
            backgroundColor: backColor,
            backgroundImage: `url('${imageURL}')`,
            backgroundRepeat: backgroundRepeat,
            backgroundPosition: backgroundPosition,
            backgroundSize: backgroundSize,
            backgroundAttachment: fixed ? "fixed" : "unset"
          }}
        >
          {iconChecked && iconClass && (
            <div className={`${className}__icon_wrap`}>
              {iconType === "fa" && 1 != FontAwesomeEnabled && (
                <p className={`${className}__alert`}>
                  {__("Please Enable Font Awesome Icons from Plugin settings")}
                </p>
              )}
              {(iconType === "dash" || 1 == FontAwesomeEnabled) && (
                <i
                  className={`${iconClass} ${className}__icon`}
                  style={{
                    color: iconColor,
                    fontSize: iconSize
                  }}
                />
              )}
            </div>
          )}
          {titleChecked && titleText && (
            <div
              className={`${className}__title_wrap`}
              style={{
                marginTop: titleMarginT,
                marginBottom: titleMarginB
              }}
            >
              <RichText
                tagName={titleTag.toLowerCase()}
                className={`${className}__title`}
                onChange={newText => setAttributes({ titleText: newText })}
                placeholder={__("Awesome Title")}
                value={titleText}
                style={{
                  color: titleColor,
                  fontSize: titleSize + "px",
                  letterSpacing: titleLetter + "px",
                  textTransform: titleUpper ? "uppercase" : "none",
                  fontStyle: titleStyle,
                  fontWeight: titleWeight,
                  lineHeight: titleLine + "px"
                }}
                keepPlaceholderOnFocus
              />
            </div>
          )}
          {descChecked && descText && (
            <div
              className={`${className}__desc_wrap`}
              style={{
                marginTop: descMarginT,
                marginBottom: descMarginB
              }}
            >
              <RichText
                tagName="p"
                className={`${className}__desc`}
                value={descText}
                isSelected={false}
                placeholder="Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
                onChange={newText => setAttributes({ descText: newText })}
                style={{
                  color: descColor,
                  fontSize: descSize + "px",
                  lineHeight: descLine + "px",
                  fontWeight: descWeight
                }}
                keepPlaceholderOnFocus
              />
            </div>
          )}
        </div>
      ];
    },
    save: props => {
      const {
        align,
        iconType,
        selectedIcon,
        iconChecked,
        iconSize,
        iconColor,
        titleChecked,
        titleText,
        titleTag,
        titleColor,
        titleSize,
        titleLine,
        titleLetter,
        titleStyle,
        titleUpper,
        titleWeight,
        titleMarginT,
        titleMarginB,
        descChecked,
        descText,
        descColor,
        descSize,
        descLine,
        descWeight,
        descMarginT,
        descMarginB,
        backColor,
        imageURL,
        fixed,
        backgroundRepeat,
        backgroundPosition,
        backgroundSize,
        borderType,
        borderWidth,
        borderRadius,
        borderColor,
        marginT,
        marginR,
        marginB,
        marginL,
        paddingT,
        paddingR,
        paddingB,
        paddingL,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        shadowPosition
      } = props.attributes;

      let iconClass = getIconClass(selectedIcon, iconType);

      return (
        <div
          className={`${className}`}
          style={{
            textAlign: align,
            border: borderType,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius + "px",
            borderColor: borderColor,
            marginTop: marginT,
            marginRight: marginR,
            marginBottom: marginB,
            marginLeft: marginL,
            paddingTop: paddingT,
            paddingRight: paddingR,
            paddingBottom: paddingB,
            paddingLeft: paddingL,
            boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
            backgroundColor: backColor,
            backgroundImage: `url('${imageURL}')`,
            backgroundRepeat: backgroundRepeat,
            backgroundPosition: backgroundPosition,
            backgroundSize: backgroundSize,
            backgroundAttachment: fixed ? "fixed" : "unset"
          }}
        >
          {iconChecked && iconClass && (
            <div className={`${className}__icon_wrap`}>
              <i
                className={`${iconClass} ${className}__icon`}
                style={{
                  color: iconColor,
                  fontSize: iconSize
                }}
              />
            </div>
          )}
          {titleChecked && titleText && (
            <div
              className={`${className}__title_wrap`}
              style={{
                marginTop: titleMarginT,
                marginBottom: titleMarginB
              }}
            >
              <RichText.Content
                tagName={titleTag.toLowerCase()}
                className={`${className}__title`}
                value={titleText}
                style={{
                  color: titleColor,
                  fontSize: titleSize + "px",
                  letterSpacing: titleLetter + "px",
                  textTransform: titleUpper ? "uppercase" : "none",
                  fontStyle: titleStyle,
                  fontWeight: titleWeight,
                  lineHeight: titleLine + "px"
                }}
              />
            </div>
          )}
          {descChecked && descText && (
            <div
              className={`${className}__desc_wrap`}
              style={{
                marginTop: descMarginT,
                marginBottom: descMarginB
              }}
            >
              <RichText.Content
                tagName="p"
                className={`${className}__desc`}
                value={descText}
                style={{
                  color: descColor,
                  fontSize: descSize + "px",
                  lineHeight: descLine + "px",
                  fontWeight: descWeight
                }}
              />
            </div>
          )}
        </div>
      );
    },
    deprecated: [
      {
        attributes: iconBoxAttrs,
        save: props => {
          const { selectedIcon } = props.attributes;
        }
      }
    ]
  });
}
