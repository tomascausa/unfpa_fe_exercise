<template>
  <div class="page-liberia">
    <Banner
      title="Liberia"
      :icon="require('@/assets/images/liberia-territory.png')"
      :background="require('@/assets/images/liberia-hero-image.png')"
      :showScrollIndicator="true" />
    
    <ImageText />

    <ParallaxBanner
      :class="'parallax-banner--with-decoration'"
      :background="require('@/assets/images/parallax-image.png')" />

    <ImageText />
  </div>
</template>

<script>
import Banner from '@/components/Banner/Banner.vue';
import ImageText from '@/components/ImageText/ImageText.vue';
import ParallaxBanner from '@/components/ParallaxBanner/ParallaxBanner.vue';

export default {
  name: 'Liberia',
  components: {
    Banner,
    ImageText,
    ParallaxBanner
  }
}
</script>

<style lang="scss">
  .page-liberia {
    background-color: $color-white;

    .banner {
      &__image {
        object-position: 75%;

        @include media('>phone') {
          object-position: center;
        }
      }

      &__title {
        @include media('>phone') {
          font-size: fluid('phone', 'desktop-xlarge', 70px, 140px);
        }

        @include media('>desktop-xlarge') {
          font-size: rem-calc(140);
        }
      }
    }
  }
</style>
