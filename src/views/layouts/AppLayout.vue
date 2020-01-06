<template>
    <div class="h-screen flex">
        <div :class="sidebarClasses" class="h-full overflow-hidden z-30 bg-primary border-r transition-250" @mouseover="onMouseOverSidebar" @mouseleave="onMouseLeaveSidebar">
            <div class="flex justify-between items-center px-5 py-3">
                <div class="flex">
                    <img class="h-9 w-9" src="/images/logo.png">
                </div>
                <span v-show="!isMobile && showSidebarPinIcon">
                    <i class="far fa-dot-circle fa-lg text-white cursor-pointer" v-if="sidebarPinned" @click="showMiniSidebar"></i>
                    <i class="far fa-circle fa-lg text-white cursor-pointer" v-show="! sidebarPinned" @click="showFullSidebar"></i>
                </span>
                <span v-show="isMobile && showMobileSidebar">
                    <i class="fas fa-times fa-lg text-white cursor-pointer" @click="showMobileSidebar = false"></i>
                </span>
            </div>

            <app-nav-bar :showMenuName="showMenuName" />
        </div>
        <div :class="sidebarBodyClasses" class="flex-1 min-w-0 flex flex-col">
            <div class="bg-black">
                <header class="px-6">
                    <div class="flex justify-between items-center py-3 border-gray-200">
                        <img class="h-9 w-9 mr-5 sm:hidden" src="/images/logo.png">
                        <span class="h-4 w-4 mr-5 cursor-pointer sm:hidden" @click="showMobileSidebar = true"><i class="fas fa-bars text-white"></i></span>
                        <div class="flex-1 flex">
                            <div class="relative w-full mr-10">
                                <span class="absolute inset-y-0 left-0 ml-3 flex items-center">
                                    <i class="h-4 w-6 text-white fas fa-search fa-lg"></i>
                                </span>
                                <input class="block w-full pl-10 pr-4 py-2 text-sm bg-transparent text-white placeholder-white border-b border-white focus:outline-none" placeholder="Search" />
                            </div>
                        </div>
                        <div class="flex items-center">
                            <button>
                                <i class="h-4 w-6 text-white fas fa-bell fa-lg"></i>
                            </button>
                            <button class="ml-5">
                                <img class="h-9 w-9 rounded-full object-cover" src="/images/profile.jpeg">
                            </button>
                        </div>
                    </div>
                </header>
            </div>
            <div class="flex-1 h-full overflow-hidden bg-gray-200">
                <div class="h-16 bg-black">
                    <div class="px-10 py-5">
                        <span class="text-white font-semibold">Home</span>
                    </div>
                </div>
                <vuescroll :ops="vuescrollOptions">
                    <div class="h-24 bg-black">
                    </div>
                    <router-view />
                </vuescroll>
            </div>
        </div>
    </div>
</template>

<script>
    import vuescroll from 'vuescroll';
    import appNavBar from './AppNavBar'

    export default {
        name: 'appLayout',
        components: {vuescroll, appNavBar},
        data() {
            return  {
                sidebarPinned: true,
                showSidebarPinIcon: false,
                isMobile: false,
                showMobileSidebar: false,
                sidebarWidth: 'full',
                window: {
                    height: 0,
                    width: 0
                },
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
            onMouseOverSidebar() {
                this.showSidebarPinIcon = true;
            },
            onMouseLeaveSidebar() {
                this.showSidebarPinIcon = false;
            },
            showFullSidebar() {
                this.sidebarPinned = true;
                this.sidebarWidth = 'full';
            },
            showMiniSidebar() {
                this.sidebarPinned = false;
                this.sidebarWidth = 'mini';
            },
            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;
            }
        },
        computed: {
            sidebarClasses() {
                if (this.isMobile && ! this.showMobileSidebar) {
                    return 'w-0';
                } else if (this.isMobile && this.showMobileSidebar) {
                    return 'w-80 absolute inset-y-0 left-0';
                } else if (!this.sidebarPinned) {
                    return 'w-20 absolute inset-y-0 left-0 hover:w-80';
                } else {
                    return 'w-80';
                }
            },
            sidebarBodyClasses() {
                if (this.isMobile) {
                    return '';
                } else if (! this.sidebarPinned) {
                    return 'ml-20';
                }
            },
            showMenuName() {
                if (this.sidebarWidth == 'full' || this.showSidebarPinIcon || this.isMobile) {
                    return true;
                }
                
                return false;
            }
        },
        watch: {
            'window.width': {
                handler() {
                    if (this.window.width < 640) {
                        this.isMobile = true;
                        this.showSidebarPinIcon = false;
                        this.sidebarWidth = 'zero';
                    } else if(this.window.width < 768) {
                        this.isMobile = false;
                        this.showSidebarPinIcon = false;
                        this.sidebarWidth = 'mini';
                    }
                }
            }
        }
    }
</script>