<template>
    <div class="h-screen w-full flex">
        <div class="overflow-hidden bg-gray-200">
            <vuescroll :ops="vuescrollOptions">
                <div class="flex w-screen">
                    <div :class="isMobile ? 'hidden' : ''" class="flex-1 w-1/2 bg-gray-100 bg-no-repeat bg-cover" style="background-image: url('/images/guest-background.jpg');">
                    </div>
                    <div :class="isMobile ? 'w-full' : 'w-1/2'" class="flex-1 bg-gray-200">
                        <router-view />
                    </div>
                </div>
            </vuescroll>
        </div>
    </div>
</template>

<script>
    import vuescroll from 'vuescroll';

    export default {
        name: 'guestLayout',
        components: {vuescroll},
        data() {
            return  {
                window: {
                    height: 0,
                    width: 0
                },
                isMobile: false,
                vuescrollOptions: {
                    vuescroll: {
                        mode: 'native',
                    },
                    bar: {
                        background: '#e3e3e3'
                    }
                }
            }
        },
        created() {
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },
        mounted() {
        },
        methods: {
            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;
            }
        },
        computed: {
        },
        watch: {
            'window.width': {
                handler() {
                    if(this.window.width < 768) {
                        this.isMobile = true;
                    } else {
                        this.isMobile = false;
                    }
                }
            }
        }
    }
</script>