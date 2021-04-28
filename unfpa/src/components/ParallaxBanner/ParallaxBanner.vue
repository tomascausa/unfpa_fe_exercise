<template>
    <div class="parallax-banner">
        <div
            class="parallax-banner__background"
            :style="{ 'background-image': 'url(' + localBackground + ')' }">

            <div v-if="hasDecoration" aria-hidden="true" class="parallax-banner__decoration"></div>
            
            <h2 v-if="!isMultiple" class="parallax-banner__title">Yamah risked her own life to deliver babies during the Ebola outbreak.</h2>
            
            <div v-if="isMultiple" class="parallax-banner__multiple multiple">
                <button
                    v-on:mouseenter="updateMouseEnter(0)"
                    v-on:click="updateBackground(0)"
                    v-on:mouseleave="isMouseEnterActive = false"
                    class="multiple__button"
                    :class="{'multiple__button--active': this.activeBackgroundIndex === 0}">
                    equipped</button>

                <button
                    v-on:click="updateBackground(1)"
                    v-on:mouseenter="updateMouseEnter(1)"
                    v-on:mouseleave="isMouseEnterActive = false"
                    class="multiple__button"
                    :class="{'multiple__button--active': this.activeBackgroundIndex === 1}">
                    unequipped clinic</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./ParallaxBanner.ts"></script>
<style lang="scss" src="./ParallaxBanner.scss"></style>