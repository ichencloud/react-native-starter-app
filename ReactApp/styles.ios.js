/**
 * Global App Styles
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* ==============================
  Initialise App
  =============================== */
  // React
  var React = require('react-native');

  // App Globals
  var AppConfig = require('./config.ios');

  var {
    StyleSheet,
  } = React;

/* ==============================
  Styles
  =============================== */
  module.exports = StyleSheet.create({
  	appContainer: {
      backgroundColor: "#000",
  	},

  	/* Default */
  	container: {
      position: 'relative',
      flex: 1,
      backgroundColor: '#FFFFFF',
      height: AppConfig.windowHeight,
      width: AppConfig.windowWidth,
    },
    containerCentered: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    /* Aligning items */
    rightAligned: {
      alignItems: 'flex-end',
    },

	  /* Text Styles */
    baseText: {
      color: AppConfig.textColor,
      fontFamily: AppConfig.baseFont,
    },
    h1: {
      fontFamily: AppConfig.baseFont,
      fontSize: 28,
      lineHeight: 32,
      color: AppConfig.primaryColor,
      margin: 0,
      marginTop: 4,
      marginBottom: 4,
      left: 0,
      right: 0,
    },
    h2: {
      fontFamily: AppConfig.baseFont,
      color: AppConfig.primaryColor,
      fontSize: 24,
      margin: 0,
      marginTop: 4,
      marginBottom: 4,
      left: 0,
      right: 0,
    },
    h3: {
      fontFamily: AppConfig.baseFont,
      fontWeight: '500',
      color: AppConfig.primaryColor,
      fontSize: 18,
      margin: 0,
      marginTop: 4,
      marginBottom: 8,
      left: 0,
      right: 0,
    },
    h4: {
      fontFamily: AppConfig.baseFont,
      fontWeight: '500',
      color: AppConfig.primaryColor,
      fontSize: 16,
      margin: 0,
      marginTop: 4,
      marginBottom: 8,
      left: 0,
      right: 0,
    },
    p: {
      fontFamily: AppConfig.baseFont,
      margin: 0,
      fontWeight: '500',
      color: AppConfig.textColor,
    },
    strong: {
      fontWeight: '900',
    },

	  /* Helper Text Styles */
    centered: {
      textAlign: 'center',
    },
    textRightAligned: {
      textAlign: 'right',
    },

    /* Give me padding */
    paddingHorizontal: {
      paddingHorizontal: 20,
    },
    paddingLeft: {
      paddingLeft: 20,
    },
    paddingRight: {
      paddingRight: 20,
    },
    paddingVertical: {
      paddingVertical: 20,
    },
    paddingTop: {
      paddingTop: 20,
    },
    paddingBottom: {
      paddingBottom: 20,
    },

    /* General Spacing */
    hr: {
      left: 0,
      right: 0,
      borderBottomWidth: 1,
      borderBottomColor: AppConfig.borderColor,
      height: 1,
      backgroundColor: 'transparent',
      marginTop: 20,
      marginBottom: 20,
    },
    spacer_5: {
      left: 0, right: 0, height: 1,
      marginTop: 5,
    },
    spacer_10: {
      left: 0, right: 0, height: 1,
      marginTop: 10,
    },
    spacer_15: {
      left: 0, right: 0, height: 1,
      marginTop: 15,
    },
    spacer_20: {
      left: 0, right: 0, height: 1,
      marginTop: 20,
    },
    spacer_25: {
      left: 0, right: 0, height: 1,
      marginTop: 25,
    },
    spacer_30: {
      left: 0, right: 0, height: 1,
      marginTop: 30,
    },
    spacer_40: {
      left: 0, right: 0, height: 1,
      marginTop: 40,
    },

    /* Grid */
    grid_row: {
      left: 0,
      right: 0,
      flexDirection: 'row',
    },
    grid_full: {
      width: AppConfig.windowWidth,
    },
    grid_half: {
      width: AppConfig.grid_half,
    },
    grid_third: {
      width: AppConfig.grid_third,
    },
    grid_twoThirds: {
      width: AppConfig.grid_twoThirds,
    },
    grid_quarter: {
      width: AppConfig.grid_quarter,
    },
    grid_threeQuarters: {
      width: AppConfig.grid_threeQuarters,
    },

    /* Forms */
    formLabel: {
      textAlign: 'left',
      marginBottom: 10,
    },
    formInputText: {
      height: 36,
      borderColor: '#cccccc',
      borderWidth: 0.75,
      borderRadius: 3,
      paddingVertical: 4,
      paddingHorizontal: 10,
      marginBottom: 10,
      backgroundColor: "#fff",
    },

    /* Messages / alerts */
    msg: {
      right: 0,
      left: 0,
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: "#B0BFA8",
      backgroundColor: "#DEF0D8",
      borderRadius: 4,
    },
    msg_text: {
      textAlign: "center",
      color: "#5F8951",
      fontWeight: "800"
    },

	  /* Nav Bar */
	  navbar: {
	  },
    navbarButton: {
      width: 26,
      height: 26,
      left: 20,
      top: 9,
      tintColor: '#FFFFFF'
    },
    navbarTitle: {
      color: '#FFFFFF',
      bottom: 6,
      fontSize: 13,
    },
  });