export default {

  // if set to true, the user will be routed to /tutorial instead of /play if
  // they haven't taken a tutorial
  needsTutorial: false,

  // each time the app is run, it will check this manifest and update the firebase database
  // if new entries are there, they will be added, and entries that aren't in the manifest
  // but are in the firebase database will be *removed*
  manifestUrl: 'https://cdn.rawgit.com/SwipesForScience/testConfig/master/textWidgetManifest.json',

  // set the type of widget and its properties here.
  widgetType: 'TemplateWidget',
  widgetProperties: {
    baseUrl: 'https://d2ndgqavqxbnim.cloudfront.net/autism/',
    fileExt: 'json',
  },

  // widgetType: 'ImageSwipe',
  // widgetProperties: {
  //   imageBaseUrl: 'http://himatdata.s3.amazonaws.com/whaledr_renamed',
  //   imageExt: 'jpg',
  //   soundExt: 'wav',
  // },

  // this shows a 'beta' ribbon in the bottom right corner
  betaMode: true,

  // this comes from your firebase console
  firebaseKeys: {
    apiKey: 'AIzaSyBGzjnGrXRSkE1Tk61rgR49TN5PnHqOIU4',
    authDomain: 'brainsplat12.firebaseapp.com',
    databaseURL: 'https://brainsplat12.firebaseio.com',
    projectId: 'brainsplat12',
    storageBucket: '',
    messagingSenderId: '574942180600',
  },

  // Homepage configuration

  // your app's title and tagline
  home: {
    title: 'SwipesForScience',
    tagline: 'Swipe right for results',
    // background image on Homepage
    backgroundUrl: 'https://cdn.rawgit.com/SwipesForScience/testConfig/master/SwipesForScience.svg',
  },

  // Play configuration
  play: {
    blankImage: 'https://cdn.rawgit.com/SwipesForScience/testConfig/master/undraw_blank_canvas.svg',

  },

  // Chats configuration
  chats: {
    blankImage: 'https://cdn.rawgit.com/SwipesForScience/testConfig/master/undraw_no_data.svg',
  },

  // Profile configuration
  profile: {
    blankImage: 'https://cdn.rawgit.com/SwipesForScience/testConfig/master/undraw_chatting.svg',
  },
};