<template>
    <div class="stories">
        <div class="stories__wrapper">
            <div class="storie__item item scroll__reveal">
                <div class="item__media">
                    <picture>
                        <img :src="require('@/assets/images/kenia-storie.png')" alt="Kenia" class="item__image">
                    </picture>
                </div>
                
                <router-link to="liberia" class="item__cta">Kenia</router-link>
            </div>
            <div class="stories__item item scroll__reveal">
                <div class="item__media">
                    <picture>
                        <img :src="require('@/assets/images/liberia-storie.png')" alt="Liberia" class="item__image">
                    </picture>
                </div>

                <router-link to="liberia" class="item__cta">Liberia</router-link>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./Stories.ts"></script>
<style lang="scss" src="./Stories.scss"></style>