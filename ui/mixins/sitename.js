import requester from "@/store/requester";

export default {
    head() {
        return {
            title: requester.BASE.includes('mung') ? 'Munger Capital' : 'Ivcstandard'
        }
    },
    computed: {
        sitename() {
            const { BASE } = requester;

            if (BASE.includes('mung')) {
                return 'Munger Capital'
            } else {
                return 'Ivcstandard'
            }
        }
    }
}