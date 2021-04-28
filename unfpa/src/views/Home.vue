<template>
  <div class="page-home home">
    <Hero :class="['home__section', 'home__section--active', 'home__section-1', 'first']" />
    
    <Banner
      :class="['home__section', 'home__section-2']"
      title="That's 830 women every day."
      :background="require('@/assets/images/banner-image.png')"
      :showCta="true" />
  </div>
</template>

<script>
import { gsap } from 'gsap';

import Hero from '@/components/Hero/Hero.vue';
import Banner from '@/components/Banner/Banner.vue';

export default {
  name: 'Home',
  components: {
    Hero,
    Banner
  },
  // eslint-disable-next-line
  mounted() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero',
            start: 0,
            end: () => innerHeight,
            pin: true,
            scrub: true,
        },
        defaults:{duration:1, ease:'none'}
    });
    tl.set('svg', {autoAlpha:1});
    tl.set('.data', {rotation: -90, transformOrigin: 'center', drawSVG: '0'});
    
    tl.to('.data01', {drawSVG: '100%', duration: 4, ease: 'none'});
     
    tl.to('.home__section-1', {autoAlpha: 0});
    tl.to('.home__section-2', {autoAlpha: 1});
  }
}
</script>

<style lang="scss">
  .home {
    height: 100%;
    
    &__section {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;

      &:not(.first) {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
</style>
