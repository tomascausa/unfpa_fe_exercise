<template>
  <div class="home">
    <Hero v-bind:class="['home__section', 'home__section--active', 'home__section-1', 'first']" />
    <Banner v-bind:class="['home__section', 'home__section-2']" />
  </div>
</template>

<script>
import { gsap } from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
import Timer from "easytimer.js";

import Hero from '@/components/Hero/Hero.vue';
import Banner from '@/components/Banner/Banner.vue';

export default {
  name: 'Home',
  // data() {
  //   return {
  //     isFirst: true
  //   };
  // },
  components: {
    Hero,
    Banner
  },
  mounted() {
    // First section timeline
    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero',
            start: 0,
            end: () => innerHeight,
            pin: true,
            scrub: true,
        },
        defaults:{duration:1, ease:'none'}
    });
    tl1.set('svg', {autoAlpha:1});
    // tl1.set('.clock', {xPercent: -50, yPercent: -50, x: innerWidth / 2, y: innerHeight / 2});
    tl1.set('.data', {rotation: -90, transformOrigin: 'center', drawSVG: '0'});
    
    tl1.to('.data01', {drawSVG: '100%', duration: 4, ease: 'none'});
     
    tl1.to('.home__section-1', {autoAlpha: 0});
    tl1.to('.home__section-2', {autoAlpha: 1});

    // tl1.from('.clock', {scale: 1});
    // tl1.to('.clock', {y: 60, scale: 0.5});
  },
  // methods: {
  //   updateIsFirst(state){
  //     this.isFirst = state;
  //   }
  // }
}
</script>

<style lang="scss">
  .home {
    // position: relative;
    height: 100%;
    
    &__section {
      // position: absolute;
      // top: 0;
      // left: 0;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      // transition: opacity 250ms ease-in-out;

      &:not(.first) {
        opacity: 0;
        visibility: hidden;
        // transform: scale(0.8);
      } 
      // opacity: 0;

      // &--active {
      //   opacity: 1;
      // }
    }

    // &__section {
    //   width: 100%;
    //   height: 100%;
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;
    // }
  }
</style>
