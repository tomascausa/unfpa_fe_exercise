import Vue, { PropType } from 'vue';
import { gsap } from 'gsap';


export default Vue.extend({
    props: {
        isMultiple: {
            type: Boolean,
            required: false,
            default: () => false
        },
        background: {
            type: String,
            required: false
        },
        backgrounds: {
            type: Array as PropType<Array<string>>,
            required: false
        },
        hasDecoration: {
            type: Boolean,
            required: false,
            default: () => false
        }
    },
    data() {
        return {
            activeBackgroundIndex: this.isMultiple ? 0 : null,
            localBackground: !this.isMultiple ? this.background : this.backgrounds[0],
            isMouseEnterActive: false
        }
    },
    mounted() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#parallax-1',
                scrub: true,
                start: "top bottom",
                end: "center center",
                // end: () => innerHeight / 2
            },
            defaults:{duration:1, ease:'none'}
        });
        tl.set('.parallax-banner__decoration', {y: -innerHeight/1.2});

        tl.to('.parallax-banner__decoration', {y: -innerHeight/2.6});
    },
    methods: {
        updateBackground(index: number) {
            if (index !== this.activeBackgroundIndex) {
                this.activeBackgroundIndex = index;
                this.localBackground = this.backgrounds[index];
            }
        },
        updateMouseEnter(index: number) {
            if (!this.isMouseEnterActive && index !== this.activeBackgroundIndex) {
                this.isMouseEnterActive = true;
                this.activeBackgroundIndex = index;
                this.localBackground = this.backgrounds[index];
            }
        }
    }
});