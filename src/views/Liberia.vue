<template>
  <div class="page-liberia">
    <Banner
      title="Liberia"
      :icon="require('@/assets/images/liberia-territory.png')"
      :background="require('@/assets/images/liberia-hero-image.png')"
      :showScrollIndicator="true" />
    
    <ImageText
      title="I can work to save my people."
      text="Yamah, a midwife and supervisor of a maternal health clinic"
      :image="require('@/assets/images/image-text-image.png')" />

    <ParallaxBanner
      id="parallax-1"
      :hasDecoration="true"
      :background="require('@/assets/images/parallax-image.png')" />

    <ImageText
      text="The epidemic devastated Liberia’s fragile healthcare system. Maternal deaths surged. But <span>even here</span>, midwives like Yamah persevered in tending to mothers and their newborns."
      :image="require('@/assets/images/image-text-image-2.png')"
      :isVertical="true" />

    <Video />

    <ParallaxBanner
      :backgrounds="[require('@/assets/images/parallax-image-2.png'), require('@/assets/images/parallax-image.png')]"
      :isMultiple="true" />

    <SafeBirth />

    <Stories />
  </div>
</template>

<script>
import Banner from '@/components/Banner/Banner.vue';
import ImageText from '@/components/ImageText/ImageText.vue';
import ParallaxBanner from '@/components/ParallaxBanner/ParallaxBanner.vue';
import Video from '@/components/Video/Video.vue';
import SafeBirth from '@/components/SafeBirth/SafeBirth.vue';
import Stories from '@/components/Stories/Stories.vue';

export default {
  name: 'Liberia',
  components: {
    Banner,
    ImageText,
    ParallaxBanner,
    Video,
    SafeBirth,
    Stories
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

    .video {
      &__wrapper {
        padding-bottom: rem-calc(50);
        
        @include media('>phone') {
          padding-bottom: fluid('phone', 'desktop-xlarge', 50px, 200px);
        }

        @include media('>desktop-xlarge') {
          padding-bottom: rem-calc(200);
        }
      }
    }
  }
</style>
