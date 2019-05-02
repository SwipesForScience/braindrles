import braindrles from '@/assets/braindrles.gif';

export default {

  // if set to true, the user will be routed to /tutorial instead of /play if
  // they haven't taken a tutorial
  needsTutorial: true,
  showConfigure: false,
  needsConsent: false,
    // each time the app is run, it will check this manifest and update the firebase database
    // if new entries are there, they will be added, and entries that aren't in the manifest
    // but are in the firebase database will be *removed*
  manifestS3: {
    bucketURL: 'https://cors-anywhere.herokuapp.com/https://braindrlesgifs.s3-us-west-1.amazonaws.com/?list-type=2&prefix=gifbrles',
    bucket: 'braindrlesgifs',
    prefix: '',
    delimiter: '',
  },
  manifestType: 'S3',
  widgetType: 'ImageSwipe', // 'EvalNHA',
  widgetUsesSecret: false,
  widgetProperties: {
    baseUrlTemplate: 'https://s3-us-west-1.amazonaws.com/braindrlesgifs/{0}.gif',
    delimiter: '__',
    leftSwipeLabel: 'Fail',
    rightSwipeLabel: 'Pass',
  },

/* eslint-enable */
  iconAttribute: {
    name: 'openmoji',
    url: 'http://openmoji.org',
  },

  levels: {
    0: {
      level: 0,
      min: 0,
      max: 10,
      character: null,
      img: null,
      img_grey: null,
      truth_prob: 1,
    },
    1: {
      level: 1,
      min: 11,
      max: 25,
      character: 'snail',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F40C.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F40C.svg?sanitize=true',
      truth_prob: 0.75,
    },
    2: {
      level: 2,
      min: 26,
      max: 50,
      character: 'turtle',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F422.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F422.svg?sanitize=true',
      truth_prob: 0.5,
    },
    3: {
      level: 3,
      min: 51,
      max: 100,
      character: 'panda',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F43C.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F43C.svg?sanitize=true',
      truth_prob: 0.4,
    },
    4: {
      level: 4,
      min: 101,
      max: 300,
      character: 'koala',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F428.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F428.svg?sanitize=true',
      truth_prob: 0.2,
    },
    5: {
      level: 5,
      min: 301,
      max: 600,
      character: 'tiger face',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F42F.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F42F.svg?sanitize=true',
      truth_prob: 0.15,
    },
    6: {
      level: 6,
      min: 601,
      max: 1000,
      character: 'two-hump camel',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F42B.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F42B.svg?sanitize=true',
      truth_prob: 0.1,
    },
    7: {
      level: 7,
      min: 1001,
      max: 2000,
      character: 'blowfish',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F421.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F421.svg?sanitize=true',
      truth_prob: 0.1,
    },
    8: {
      level: 8,
      min: 2001,
      max: 5000,
      character: 'spouting whale',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F433.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F433.svg?sanitize=true',
      truth_prob: 0.1,
    },
    9: {
      level: 9,
      min: 5001,
      max: 10000,
      character: 'octopus',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F419.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F419.svg?sanitize=true',
      truth_prob: 0.01,
    },
    10: {
      level: 10,
      min: 10001,
      max: 100000,
      character: 'unicorn face',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F984.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F984.svg?sanitize=true',
      truth_prob: 0.0001,
    },
  },

    // this shows a 'beta' ribbon in the bottom right corner
  betaMode: false,

    // this comes from your firebase console
  firebaseKeys: {
    apiKey: 'AIzaSyAYB2jWWdStY3yV8FjWo6pwIv6mLt2ezZw',
    authDomain: 'braindrles.firebaseapp.com',
    databaseURL: 'https://braindrles.firebaseio.com',
    projectId: 'braindrles',
    storageBucket: '',
    messagingSenderId: '895217350482',
  },

  app: {
    navbarVariant: 'danger',
  },

    // Homepage configuration
    // your app's title and tagline
  home: {
    title: 'braindrles',
    tagline: 'Help us learn about stroke',
      // background image on Homepage
    backgroundUrl: braindrles,
  },

    // Play configuration
  play: {
    blankImage: 'https://raw.githubusercontent.com/SwipesForScience/testConfig/master/images/undraw_blank_canvas.svg?sanitize=true',

  },

    // Chats configuration
  chats: {
    blankImage: 'https://raw.githubusercontent.com/SwipesForScience/testConfig/master/images/undraw_no_data.svg?sanitize=true',
  },

    // Profile configuration
  profile: {
    blankImage: 'https://raw.githubusercontent.com/SwipesForScience/testConfig/master/images/undraw_chatting.svg?sanitize=true',
  },

    // your app's tutorial page
    // describe your problem and the way you want people to annotate
  tutorial: {
      // there is only 1 available custom animiation right now, and its 'Bubbles'
    customBackgroundAnimation: null,
      // steps have 2 parts, the intro and examples. In the intro you provide
      // text and images. In the examples, you provide text, data pointers, and tutorial steps
      // that the widget will display
    steps: {
      intro: [
        {
            // keep the text really short
          text: 'Stroke causes lesions, aka holes in the brain:',
          image: 'https://braindrles.us/static/img/gifbrles_Intro.bbc77c9.gif',
        },
        {
            // use \n to linebreak the text
          text: `Lesions can be anywhere in the brain and come in all shapes and sizes. \n
          In a passing image, you can clearly see the lesion correctly labeled in red:`,
          image: 'https://braindrles.us/static/img/gifbrles_BigLes.0077eb0.gif',
        },
        {
          // keep the text really short
          //eslint-disable-next-line
          text: `In a failing image, the lesion mask (in red) is incorrectly labeled.
          Sometimes the lesion mask covers healthy tissue:`,
          image: 'https://braindrles.us/static/img/gifbrles_FailTooMuch.9cbbf06.gif',
        },
        {
          // keep the text really short
          //eslint-disable-next-line
          text: `Sometimes you won't see a lesion but there is a lesion mask anyway:`,
          image: 'https://braindrles.us/static/img/gifbrles_FailTooMuch2.6e9cc83.gif',
        },
      ],
      examples: [
        {
            // fill these with examples with respect to the widget you're using
          text: 'Swipe right when the lesion is filled correctly',
          pointer: 'gifbrles_031926',
          answer: 1,
          tutorialStep: 0,
        },
        {
          text: 'Swipe left when its bad',
          pointer: 'gifbrles_c0005s0026t01',
          answer: 0,
          tutorialStep: 1,
        },
        {
            // fill these with examples with respect to the widget you're using
          text: 'Sometimes the lesion is in a different part of the brain, but still correct, so you should swipe right',
          pointer: 'gifbrles_031950',
          answer: 1,
          tutorialStep: 0,
        },
        {
            // fill these with examples with respect to the widget you're using
          text: 'Other times, the lesion is more subtle, but still correct, so you should swipe right',
          pointer: 'gifbrles_031946',
          answer: 1,
          tutorialStep: 0,
        },
        {
            // fill these with examples with respect to the widget you're using
          text: 'Still other times, there may be more than one lesion - make sure the lesion mask covers all of the lesions before you swipe right',
          pointer: 'gifbrles_031947',
          answer: 1,
          tutorialStep: 0,
        },
        {
          text: 'However, if the lesion mask is in the right place but too big (e.g. encompasses a lot of healthy tissue too), swipe left',
          pointer: 'gifbrles_c0011s0009t01',
          answer: 0,
          tutorialStep: 1,
        },
        {
          text: 'And sometimes, the computer generates REALLY CRAZY lesion masks! Like this one. Definitely swipe left.',
          pointer: 'gifbrles_c0007s0032t01',
          answer: 0,
          tutorialStep: 1,
        },
        {
          text: `Finally, if you're not sure, click 'help' \n to discuss with scientists ${''}`,
          pointer: 'gifbrles_031899',
          answer: 0,
          tutorialStep: 2,
        },
        {
          text: 'Are you ready to play?',
          tutorialCompleted: true,
        },
      ],
    },
  },
};
