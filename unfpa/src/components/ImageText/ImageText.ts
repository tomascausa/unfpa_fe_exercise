import Vue from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default Vue.extend({
    props: {
        title: {
            type: String,
            required: false
        },
        text: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        isVertical: {
            type: Boolean,
            required: false,
            default: () => false
        },
    },
    mounted() {
        document.querySelectorAll('.scroll__reveal').forEach(elem => {
            this.hide(elem);

            ScrollTrigger.create({
                trigger: elem,
                onEnter: () => {
                    this.animateFrom(elem, 1);
                }
            });
        });
    },
    methods: {
        animateFrom(elem, direction) {
            direction = direction || 1;
            let x = 0, y = direction * 100;
            
            if (elem.classList.contains("scroll__reveal--left")) {
                x = -100;
                y = 0;
            } else if (elem.classList.contains("scroll__reveal--right")) {
                x = 100;
                y = 0;
            }
            
            elem.style.transform = "translate(" + x + "px, " + y + "px)";
            elem.style.opacity = "0";
            gsap.fromTo(
                elem,
                { x: x, y: y, autoAlpha: 0 },
                {
                    duration: 1.25,
                    x: 0,
                    y: 0,
                    autoAlpha: 1,
                    ease: "expo",
                    overwrite: "auto",
                }
            );
        },
        hide(elem) {
            gsap.set(elem, { autoAlpha: 0 });
        }
    }
});
