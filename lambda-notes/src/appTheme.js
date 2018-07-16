

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
    main: {
      width: '670px',
      h1FontSize: '22px',
    },

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
      headingMargin: '0 0 15px 0',
      headingLineHeight: `${30 / 36}`,
      borderWidth: '1px',
    },
    notePreview: {
      width: '194px',
      height: '200px',
      padding: ' 13px 18px',
      borderWidth: '1px',
      headingFontSize: '18px',
      headingPadding: '0 0 6px 0',
      textPadding: '10px 0 4px 0',
      textFontSize: '12px',
      textLineHeight: '2',
    },
    noteGrid: {
      headingMargin: '0 0 30px 0',
      padding: '58px 27px',
      gridGap: '24px 16px',
      gridPadding: '1px',
      borderWidth: '1px',
    },
    viewNote: {
      padding: '20px 26px',
      linkFontSize: '14px',
      linkPadding: '0 7px',
      topControlsPadding: '0 0 23px 0',
      headingPadding: '0 0 32px 0',
      textFontSize: '14px',
      textLineHeight: '2',

    }
  }
}