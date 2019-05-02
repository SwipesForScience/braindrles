<template>
  <div id="about">
    <h1> About braindrles. </h1>

    <b-container>
      <p>Braindrles is an app to help researchers understand stroke better. Here, we’re asking you to help us check whether computer algorithms have correctly identified stroke lesions on brain images. To do this on our own would take years! 
      </p>

      <h2> What do I do? </h2>
      <p> You will see flashing pictures of stroke lesion masks on brain MRIs. If you believe that the stroke lesion mask correctly captures the lesioned part of the brain, you swipe right. If you believe the mask is wrong, swipe left. You’ll get points for each image you rate. Occasionally, ground truth images are hidden in the database, and you will receive feedback if you make the wrong choice so over time you can learn what a stroke lesion looks like. 
      </p>


      <h2> Why are we doing this? </h2>
      <p> Manual segmentation (e.g., going through each slice of the brain and tracing the outline of the lesion) is the gold standard for lesion analyses; however, this approach is extremely time consuming and requires expertise in neuroanatomy. Emerging big data approaches for stroke rehabilitation research requires analyzing hundreds to thousands of stroke MRIs. A fast, effective, and scalable pipeline for lesion analysis is thus desperately needed. </p>

      <h2> How you are helping? </h2>
      <p> Although all data can be quickly run through lesion segmentation algorithms, they aren’t perfect at how they segment lesions, and sometimes do a really bad job. We need humans to visually inspect the quality of these machine-driven outputs. Computers really struggle to do this sort of thing, but humans are great at it. That's why we need you! We need you to help researchers learn about stroke better! </p>

      <h3> You can unlock the following animals based on the number of points you have. Go unlock them all!! Who doesn't want to be a unicorn &#128526 ? </h3>

      <b-container fluid class="p-4">
        <b-row>
          <b-col v-for="lev in levels" v-if="lev.img">
            <div >
              <b-img fluid class="pokemon" :src="lev.img_grey" alt="Thumbnail"/>
              <br>
              Level {{lev.level}}
              <br>
              <span>{{lev.min}} points</span>
            </div>
          </b-col>
        </b-row>
      </b-container>

    </b-container>

  </div>

</template>

<style>

.pokemon{
  min-width: 25px;
  min-height: 25px;
  width: 100px;
  height: 100px;
}


#about {
  min-height: 100vh;
}

</style>

<script>
export default {
  name: 'about',
  data() {
    return {
      count: 1,
    };
  },
  props: ['levels'],
};
</script>
