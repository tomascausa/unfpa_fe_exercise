<template>
    <div class="banner">
        <div class="banner__background">
            <picture class="hero__picture">
                <img :src="background" alt="Banner image" class="banner__image">
            </picture>
        </div>

        <div class="banner__wrapper">
            <div class="banner__content">
                <div v-if="icon" class="banner__icon">
                    <picture>
                        <img :src="icon" class="banner__icon-image">
                    </picture>
                </div>

                <h1 class="banner__title">{{ title }}</h1>

                <div v-if="showCta" class="banner__cta-wrapper">
                    <router-link to="liberia" class="banner__cta">Next</router-link>
                </div>
            </div>
        </div>

        <div v-if="showScrollIndicator" class="banner__scroll-indicator">
            <picture>
                <img :src="require('@/assets/images/scroll-arrow.png')" aria-hidden="true" class="banner__scroll-indicator-image">
            </picture>
        </div>
    </div>
</template>
<script lang="ts" src="./Banner.ts"></script>
<style lang="scss" src="./Banner.scss"></style>