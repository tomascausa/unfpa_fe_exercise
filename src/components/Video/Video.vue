<template>
    <div class="video">
        <div class="video__wrapper">
            <video
                id="video__player" 
                :poster="require('@/assets/images/video-thumb.png')">
                <source :src="require('@/assets/videos/unfpa_video.mp4')" type="video/mp4" />
            </video>
        </div>
    </div>
</template>
<script lang="ts" src="./Video.ts"></script>
<style lang="scss" src="./Video.scss"></style>