import { gsap } from 'gsap';

export default {
    props: {
    },
    mounted(): void {
        gsap.set('svg', {autoAlpha:1})

        gsap.timeline({
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: '+=1000px',
                pin: true,
                scrub: true,
            },
            defaults:{duration:1, ease:'none'}
        })
        .set('.data', {rotation: -90, transformOrigin: 'center', drawSVG: '0'})
        .to('.data01', {drawSVG: '100%', duration: 4, ease: 'none'})
    }
}