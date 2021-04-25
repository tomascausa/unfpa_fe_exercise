<template>
    <div class="hero">
        <div class="hero__background">
            <picture class="hero__picture">
                <img src="../../assets/images/hero-image.png" alt="Hero image" class="hero__image">
            </picture>
        </div>

        <div class="hero__wrapper">
            <div class="hero__circle">
                <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id="gradient_home" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop stop-color="#F33C3C" offset="0%"></stop>
                            <stop stop-color="#FFDC26" offset="50%"></stop>
                            <stop stop-color="#2EFFAE" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    
                    <circle
                        class="data data01"
                        cx="50"
                        cy="50" 
                        r="47" 
                        stroke="url(#gradient_home)"
                        stroke-width="0.5"
                        fill="none"></circle>
                </svg>
            </div>

            <div class="hero__content">
                <h1 class="hero__title">Every 2 minutes, a woman dies giving birth</h1>

                <div class="hero__scroll"></div>
            </div>

            <div class="hero__copywright">
                <p>Safe birth even here ® 2018. <a href="">Privacy Policy</a> and <a href="">Terms of use</a>. Sponsored bys</p>
                <picture>
                    <img src="" alt="" class="hero__copywright-logo">
                </picture>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./Hero.ts"></script>
<style lang="scss" src="./Hero.scss"></style>