<template>
	<div>
        <nav class="py-3 h-screen overflow-y-auto">
            <vuescroll :ops="scrollOptions">
                <div :key="navItem.name" v-for="navItem in navItems">
                    <h3 v-if="navItem.label" v-show="showMenuName" class="flex justify-between px-5 py-3 text-white uppercase">
                    	<span>{{navItem.label}}</span>
                    	<span :class="['badge', 'badge-' + navItem.badgeColor, 'mr-2']" v-show="navItem.badgeLabel && showMenuName">{{navItem.badgeLabel}}</span></h3>
                    <ul class="nav-list">
                        <li :class="isActiveMenu(menu.name) ? 'active' : ''" :key="menu.name" v-for="menu in navItem.menus">
                            <component :is="(menu.hasChild || menu.isUpcoming) ? 'a' : 'router-link'" href="#" :to="(menu.hasChild) ? '#' : {name: menu.path || menu.name}" class="flex justify-between" @click="setToggleMenu(menu.name)">
                                <span>
                                    <i :class="['w-10', 'fa-lg', menu.icon, !showMenuName ? 'ml-2' : '']"></i> 
                                    <span v-show="showMenuName">{{menu.label}}</span>
                                </span>
                                <span :class="['badge', 'badge-' + menu.badgeColor, 'mr-8', 'sm:mr-5']" v-show="menu.badgeLabel && showMenuName">{{menu.badgeLabel}}</span>
                                <span v-if="menu.hasChild">
                                    <i v-show="showMenuName" :class="['w-10', 'fas', isActiveMenu(menu.name) ? 'fa-chevron-down' : 'fa-chevron-right', 'fa-sm', 'transition-500']"></i>
                                </span>
                            </component>
                            <template v-if="menu.hasChild">
                                <ul class="nav-sub-list" :class="isActiveMenu(menu.name) ? 'visible' : 'hidden'" v-show="showMenuName">
                                    <li :class="['cursor-pointer', isActiveSubMenu(children.name) ? 'active' : '']" :key="children.name" v-for="children in menu.children" @click="setToggleSubMenu(children.name)">
                                        <component :is="menu.isUpcoming ? 'a' : 'router-link'" href="#" :to="{name: children.path || children.name}">
                                            <i class="w-6 fa-sm" :class="children.icon || menu.defaultChildrenIcon"></i> 
                                            <span>{{children.label}}</span>
                                            <span :class="['badge', 'badge-' + children.badgeColor, 'float-right', 'mr-8', 'sm:mr-5']" v-show="children.badgeLabel">{{children.badgeLabel}}</span>
                                        </component>
                                    </li>
                                </ul>
                            </template>
                        </li>
                    </ul>
                </div>
            </vuescroll>
        </nav>
	</div>
</template>

<script>
	import navItems from './_navItems'
	import vuescroll from 'vuescroll';

	export default {
		name: 'appNavBar',
    	components: {vuescroll},
    	props: {
    		showMenuName: Boolean
    	},
		data() {
			return {
				navItems,
	            activeMenu: '',
	            activeSubMenu: '',
	            scrollOptions: {
	                vuescroll: {
	                    mode: 'native',
	                },
	                bar: {
	                    background: '#e3e3e3'
	                }
	            }
			}
		},
		methods: {
	        isActiveMenu(menu) {
	            return menu === this.activeMenu ? true : false;
	        },
	        isActiveSubMenu(subMenu) {
	            return subMenu === this.activeSubMenu ? true : false;
	        },
	        setToggleMenu(menu) {
	            this.activeMenu = this.activeMenu == menu ? '' : menu;
	        },
	        setToggleSubMenu(subMenu) {
	            this.activeSubMenu = this.activeSubMenu == subMenu ? '' : subMenu;
	        }
		}
	}
</script>