export default {
    props: {
        title: {
            type: String,
            required: true
        },
        background: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: false
        },
        showCta: {
            type: Boolean,
            required: false,
            default: false
        },
        showScrollIndicator: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}