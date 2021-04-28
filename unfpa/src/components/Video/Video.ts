import Vue from 'vue';
import Plyr from 'plyr';

export default Vue.extend({
    props: {},
    mounted() {
        const player = new Plyr('#video__player', {
            controls: ['play-large', 'play', 'mute', 'volume', 'fullscreen']
        });
    }
});
