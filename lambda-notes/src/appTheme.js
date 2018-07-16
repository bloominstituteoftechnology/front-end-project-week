

const tundoraGray = '#4A4A4A';
const white = '#FFFFFF';
const alto =  '#D8D8D8';
const concreteWhite = '#F3F3F3';
const scooterBlue = '#2BC1C4';
const monzaRed = '#D0021B';
const dustyGray = '#979797';


export default {
  font: {
    heading: "'Roboto', sans-serif",
    body: "'Raleway', sans-serif",
  },
  color: {
    headingText: tundoraGray,
    generalText: tundoraGray,
    buttonText: white,
    sideBarBG: alto,
    mainPaneBG: concreteWhite,
    previewNoteBG: white,
    buttonBG: scooterBlue,
    deleteButtonBG: monzaRed,
    border: dustyGray,
  },
  dimensions: {
    button: {
      width: '100%',
      height: '42px',
      fontSize: '16px',
      margin: '10px 0px',
      borderRadius: '1px',
      borderWidth: '1px',
    },
    sideBar: {
      width: '220px',
      padding: '22px 15px',
      headingFontSize: '36px',
      headingMargin: '0 0 20px 0',
      headingLineHeight: `${30 / 36}`,
      borderWidth: '1px',
    },
  }
}