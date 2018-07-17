

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
    modalBG: tundoraGray,
    modalColor: concreteWhite,
    modalText: tundoraGray,
    buttonText: white,
    formText: tundoraGray,
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
      borderWidth: '1px',
    },

    button: {
      width: '190px',
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
    },
    noteForm: {
      padding: '58px 30px',
      headingPadding: '0 0 28px 0',
      inputBorderRadius: '2px',
      inputWidth: '100%',
      inputTitleMargin: '0 0 14px 0',
      inputTitleHeight: '42px',
      inputTitleWidth: '356px',
      inputTitlePadding: '11px',
      inputTextMinHeight: '348px',
      inputTextLineHeight: '1.8',
      inputTextPadding: '18px 22px ',
      inputTextMargin: '0 0 4px 0',
      borderWidth: '1px',
    },
    noteModal: {
      modalWidth: '530px',
      modalWidthNum: 530,
      modalHeight: '180px',
      modalYOffSet: '170px',
      borderWidth: '1px',
    }
  }
}