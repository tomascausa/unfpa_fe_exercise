<template>
    <div class="image-text" :class="{'image-text--vertical': isVertical}">
        <div class="image-text__wrapper">
            <div class="image-text__content scroll__reveal" :class="{'scroll__reveal--left': !isVertical}">
                <h2 class="image-text__title">{{ title }}</h2>
                <p class="image-text__text" v-html="text"></p>
            </div>
            <div class="image-text__media scroll__reveal" :class="{'scroll__reveal--right': !isVertical, 'scroll__reveal--left': isVertical}">
                <picture>
                    <img :src="image" class="image-text__image">
                </picture>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./ImageText.ts"></script>
<style lang="scss" src="./ImageText.scss"></style>