<template name="tutorial">
  <div class="full">
  <v-stepper ref="stepper" :steps="steps" v-model="step"></v-stepper>
  <div  v-for="(s, index) in tutSteps.intro" :key="'i'+index">
    <template v-if="step === index">
      <div class="container">
        <p v-html="s.text" class="mt-3 lead"></p>
        <img :src="s.image" class="pt-3 img"/>
      </div>
    </template>
  </div>

  <div v-for="(s, index) in tutSteps.examples" :key="'e'+index">
    <template v-if="step === index + tutSteps.intro.length">
      <div class="text-center message w-100 full" :id="'example'+index">
        <!-- <vue-typer v-if="currentBin.bin === index+steps.intro.length" :text='step.text' :repeat='0' class="message" :type-delay='50'></vue-typer> -->
        <p class="container lead" v-html="s.text"></p>
        <div v-if="s.pointer" class="mt-3 scaleDown">
          <WidgetSelector :widgetType="widgetType"
           :widgetPointer="s.pointer"
           :widgetProperties="widgetProperties"
           :widgetSummary="widgetSummary"
           :playMode="'tutorial'"
           :userSettings="userSettings"
           :tutorialStep="s.tutorialStep"
           ref="widget"
          />
        </div>
        <div v-if="s.tutorialCompleted">
          <b-button @click="tutorialComplete" class="mt-3" size="lg" variant="success">
            Play now
          </b-button>
        </div>
      </div>
    </template>
  </div>

  <!-- Stepper Controls -->
  <div class="mt-3 pt-3 text-center mx-auto w-100" style="position: absolute; bottom: 10px">
    <b-button variant="secondary" size="lg" @click="$refs.stepper.previous()" v-if="step">Previous</b-button>
    <b-button variant="info" size="lg" @click="$refs.stepper.next()" v-if="step !== steps">Next</b-button>
  </div>

</div>
</template>

<style>

  .v-stepper {
    transform: scale(0.3) translateX(-200px);
  }

  .v-step.is-active .label .index {
    background-color: #dc3545 !important;
    color: white;
  }

  .scaleDown {
    transform: scale(0.8) translateY(-80px);
  }

  .img {
    max-height: 80vh;
    width: 100%;
    max-width: 500px;
  }

  .full {
    height: 100vh;
  }

  .fullpage {
      /* height: 100vh; */
      /* padding: 10px; */
      padding-bottom: 40px;
      padding-top: 20px;
      background: white;
      /* box-shadow: 5px 10px #888888; */
      /* -webkit-box-shadow: 10px 10px 5px -6px rgba(196,196,196,0.48); */
      -moz-box-shadow: 10px 10px 5px -6px rgba(196,196,196,0.48);
      /* box-shadow: 10px 10px 5px -6px rgba(196,196,196,0.48); */
      -webkit-box-shadow: 0px -1px 5px 5px rgba(196,196,196,0.48);
      -moz-box-shadow: 0px -1px 5px 5px rgba(196,196,196,0.48);
      box-shadow: 0px -1px 5px 5px rgba(196,196,196,0.48);
      margin-top: 30px;
  }

  .message {
    position: absolute;
  }

  .invisible {
    opacity: 0;
    white-space: pre-wrap;
  }

  .pbar {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    background: white;
    top: 0;
    z-index: 2;
  }
</style>

<script>
/**
 * TODO: fill this in.
 */
  import _ from 'lodash';
  import Vue from 'vue';
  import { VStepper } from 'vue-stepper-component';
  import Arrow from './Animations/ArrowDown';
  import Bubbles from './Animations/Bubbles';
  import WidgetSelector from './WidgetSelector';

  const VueScrollTo = require('vue-scrollto');

  // You can also pass in the default options
  Vue.use(VueScrollTo, {
    container: 'body',
    duration: 500,
    easing: 'ease',
    offset: -75,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true,
  });

  export default {
    name: 'tutorial',
    components: {
      Arrow,
      Bubbles,
      WidgetSelector,
      VStepper,
    },
    data() {
      return {
        /**
        * The current scroll position
        */
        scrollPosition: 0,
        /**
        * The sample IDs summary (not implemented yet)
        */
        widgetSummary: {}, // TODO: fill this properly
        /**
        * User settings from firebase (not implemented yet)
        */
        userSettings: {}, // TODO: fill this properly
        // steps: 30,
        step: undefined,
      };
    },
    props: {
      /**
       * the various levels, the points need to reach the levels,
       * and the badges (colored and greyed out) to display
       */
      levels: {
        type: Object,
        required: true,
      },
      /**
       * The config object that is loaded from src/config.js.
       * It defines how the app is configured, including
       * any content that needs to be displayed (app title, images, etc)
       * and also the type of widget and where to update pointers to data
       */
      config: {
        type: Object,
        required: true,
      },
    },
    watch: {
    },
    computed: {
      /**
       * The widget type defined in config.
       */
      widgetType() {
        return this.config.widgetType;
      },
      /**
       * The widget properties defined in config.
       */
      widgetProperties() {
        return this.config.widgetProperties;
      },
      /**
       * The steps defined in config, with text and images to display.
       */
      tutSteps() {
        return this.config.tutorial.steps;
      },
      steps() {
        return this.config.tutorial.steps.intro.length +
          (this.config.tutorial.steps.examples.length - 1);
      },
      /**
       * The type of background animation to show.
       */
      backgroundAnimation() {
        return this.config.tutorial.customBackgroundAnimation;
      },
      /**
       * The cutoffs of scrolling,
       * to help map scroll position to the step of the tutorial
       */
      bins() {
        const Nsteps = this.steps.intro.length + this.steps.examples.length;
        const binSize = 1 / Nsteps;
        const bins = [];
        for (let i = 0; i < Nsteps; i += 1) {
          bins.push({ bin: i, from: i * binSize, to: (i + 1) * binSize });
        }
        return bins;
      },
      /**
       * The current bin based on scroll position.
       */
      currentBin() {
        const cBin = _.filter(this.bins,
          b => this.scrollPosition <= b.to && this.scrollPosition > b.from);
        if (cBin.length) {
          return cBin[0];
        }

        return { bin: 0 };
      },
      /**
       * The current stage, either the intro text stage,
       * or the part that shows how the widget works.
       */
      currentStage() {
        if (this.currentBin.bin < this.steps.intro.length) {
          return { ...this.steps.intro[this.currentBin.bin], mode: 'intro' };
        }
        return { ...this.steps.examples[this.currentBin.bin - this.steps.intro.length], mode: 'examples' };
      },
      /**
       * The next step that should be displayed.
       */
      nextStep() {
        if (this.currentBin.bin < this.steps.intro.length - 1) {
          return `#intro${this.currentBin.bin + 1}`;
        }
        return `#example${(this.currentBin.bin - this.steps.intro.length) + 1}`;
      },
    },
    methods: {
      /**
       * When this method is run, we tell the parent component that the
       * user has completed the tutorial.
       */
      tutorialComplete() {
        this.$emit('taken_tutorial', true);
      },
      /**
       * Keep track of the scroll position and save it to the scrollPosition variable.
       */
      handleScroll() {
        const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        const scrollPosition = (window.scrollY - 60) / (this.$refs.tutorial.clientHeight - h);
        if (scrollPosition < 0) {
          this.scrollPosition = 0;
        } else if (scrollPosition > 1) {
          this.scrollPosition = 1;
        } else {
          this.scrollPosition = scrollPosition;
        }
      },
    },
    /**
     * Add a scroll listener when the component is created.
     */
    created() {
      // window.addEventListener('scroll', this.handleScroll);
    },
    /**
     * Remove the scroll listener when the component is destroyed.
     */
    destroyed() {
      // window.removeEventListener('scroll', this.handleScroll);
    },
  };
</script>
