// Theme

const primaryColor = '#0c8985';
const secondaryColor = '#0cbeba';
const dimPrimaryColor = '#017d89';
const listBackgroundColor = '#0fa8a3';

const accentColor = '#93f3e8';
const errorColor = '#FF5252';

const paperColor = '#085b57';


const buttonSecondaryColor = 'rgba(0,0,0,.75)';

const dividerColor = 'rgba(255, 255, 255, 0.54)';
const dimDividerColor = 'rgba(255, 255, 255, 0.2)';

const snackBar= 'rgba(65,65,65,1)';

const primaryBackgroundColor = 'rgba(0,0,0,.75)';
const secondaryBackgroundColor = 'rgba(68,68,68,.9)';

// Fonts
const primaryTextColor = '#FFFFFF';
const secondaryTextColor = 'rgba(255, 255, 255, 0.9)';
const disabledTextColor = 'rgba(255, 255, 255, 0.3)';
const buttonTextColor = 'rgba(255, 255, 255, 0.87)';


export default {
  fontFamily: 'Roboto, sans-serif',


  listBackgroundColor: listBackgroundColor,


  palette: {
    primary1Color: primaryColor,
    primary2Color: primaryColor,
    primary3Color: primaryTextColor,
    accent1Color: accentColor,
    accent2Color: accentColor,
    accent3Color: accentColor,
    textColor: primaryTextColor,
    secondaryTextColor: secondaryTextColor,
    alternateTextColor: buttonTextColor,
    canvasColor: paperColor,
    borderColor: dividerColor,
    disabledColor: disabledTextColor,
    pickerHeaderColor: paperColor,
    clockCircleColor: primaryTextColor
  },


  badge: {
    primaryColor: dimPrimaryColor
  },


  checkbox: {
    boxColor: primaryTextColor,
    checkedColor: primaryTextColor,
    requiredColor: errorColor,
    disabledColor: disabledTextColor,
    labelColor: buttonTextColor,
    labelDisabledColor: disabledTextColor
  },


  card: {
    backgroundColor: primaryColor
  },


  flatButton: {
    textColor: primaryTextColor,
    primaryColor: secondaryBackgroundColor,
    primaryTextColor: buttonTextColor,
    secondaryTextColor: secondaryTextColor,
    disabledTextColor: disabledTextColor,
    secondaryColor: buttonSecondaryColor
  },


  icon: {
    color: primaryTextColor,
    backgroundColor: primaryTextColor
  },


  inkBar: {
    backgroundColor: primaryColor
  },


  raisedButton: {
    textColor: primaryTextColor,
    primaryColor: secondaryColor,
    primaryTextColor: buttonTextColor,
    secondaryTextColor: secondaryTextColor,
    disabledTextColor: disabledTextColor
  },


  paper: {
    backgroundColor: secondaryColor
  },


  tabs: {
    backgroundColor: paperColor
  },


  textField: {
    textColor: primaryTextColor,
    hintColor: disabledTextColor,
    floatingLabelColor: secondaryColor,
    disabledTextColor: secondaryTextColor,
    errorColor: errorColor,
    focusColor: secondaryColor,
    backgroundColor: 'transparent',
    borderColor: dividerColor
  },


  snackbar: {
    textColor: primaryTextColor,
    backgroundColor: snackBar
  },


  stepper: {
    textColor: primaryTextColor,
    disabledTextColor: disabledTextColor
  },


  svgIcon: {
    color: primaryTextColor
  },


  /* styling overrides */


  cardWithMargin: {
    maxWidth: 950, margin: '48px auto'
  },


  cardWithMarginAndPadding: {
    maxWidth: 950, margin: '48px auto', padding: '24px', minHeight: '250px'
  },

  cardShadowOverride: {
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 12px, rgba(0, 0, 0, 0.117647) 0px 1px 6px'
  },

  chipOverride: {
    cursor: 'pointer',
  },


  chipBackgroundColorOverride: primaryColor,


  dividerOverride: {
    backgroundColor: primaryColor,
    height: '2px',
    maxWidth: '80%',
    marginTop: '36px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },


  dividerBackGroundColorOverride: {
    backgroundColor: dimDividerColor
  },


  dropDownLabelOverride: {
    color: secondaryTextColor,
    paddingLeft: '0px'
  },


  dropDownOverride: {
    backgroundColor: secondaryBackgroundColor,
    borderRadius: 2,
    width: 360,
    maxWidth: '100%'
  },


  flatButtonOverride: {
    width: '100%',
    backgroundColour: primaryBackgroundColor,
    transform: 'translate(0, -4px)'
  },


  listItemOverride: {
    paddingLeft: '12px',
    cursor: 'pointer'
  },


  menuItemOverride: {
    color: secondaryTextColor,
    overflowX: 'hidden'
  },


  paperMarginOverride: {
    padding: '12px 24px 24px 24px',
    margin: '24px auto',
    maxWidth: '90%'
  },


  radioButtonMarginTopOverride: {
    marginTop: '6px'
  },


  svgIconOverride: {
    width: '100%',
    height: '100%'
  },


  svgIconMidSizeOverride: {
    width: '50%',
    height: '50%'
  },


  svgIconColorOverride: dividerColor,


  textFieldErrorOverride: {
    float: 'left',
    left: '25%'
  },


  underlineOverride: {
    marginLeft: 0,
    width: '100%'
  },


  usedIconColor: disabledTextColor
};
