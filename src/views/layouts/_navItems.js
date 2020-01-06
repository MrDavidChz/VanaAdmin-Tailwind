export default [
    {
        name: 'dashboard',
        label: '',
        badgeLabel: 'New',
        badgeColor: 'red',
        menus: [
            {   
                name: 'home',
                label: 'Dashboard',
                badgeLabel: 'Badge',
                badgeColor: 'red',
                icon: ['fas', 'fa-home'],
                hasChild: false
            }
        ]
    },
    {
        name: 'design',
        label: 'Design',
        menus: [
            {   
                name: 'pages',
                label: 'Pages',
                badgeLabel: 'New',
                icon: ['fas', 'fa-layer-group'],
                hasChild: true,
                defaultChildrenIcon: ['fas', 'fa-chevron-right'],
                children: [
                    {
                        name: 'pageLogin',
                        label: 'Login Page',
                        icon: ['fas', 'fa-sign-in-alt']
                    },
                    {
                        name: 'pageRegister',
                        label: 'Register Page',
                        icon: ['fas', 'fa-user-plus']
                    },
                    {
                        name: 'pageComingSoon',
                        label: 'Coming Soon',
                        isUpcoming: true,
                        badgeLabel: 'Upcoming',
                        icon: ['fas', 'fa-weight']
                    },
                    {
                        name: 'pageUserProfile',
                        label: 'User Profile',
                        isUpcoming: true,
                        badgeLabel: 'Upcoming',
                        icon: ['fas', 'fa-user']
                    },
                    {
                        name: 'pageInvoice',
                        label: 'Invoice',
                        isUpcoming: true,
                        badgeLabel: 'Upcoming',
                        icon: ['fas', 'fa-file-invoice']
                    },
                    {
                        name: 'pageError404',
                        label: '404 Error',
                        isUpcoming: true,
                        badgeLabel: 'Upcoming',
                        icon: ['fas', 'fa-ban']
                    }
                ]
            },
            {   
                name: 'layout',
                label: 'Layouts',
                icon: ['fas', 'fa-columns'],
                hasChild: true,
                isUpcoming: true,
                defaultChildrenIcon: ['fas', 'fa-chevron-right'],
                children: [
                    {
                        name: 'layoutSingleColumn',
                        badgeLabel: 'Upcoming',
                        label: 'Single Column',
                        isUpcoming: true,
                        badgeLabel: 'Upcoming',
                    },
                    {
                        name: 'layoutTwoColumn',
                        badgeLabel: 'Upcoming',
                        label: 'Two Column',
                        isUpcoming: true,
                        badgeLabel: 'Upcoming',
                    },
                    {
                        name: 'layoutThreeColumn',
                        badgeLabel: 'Upcoming',
                        label: 'Three Column',
                        isUpcoming: true,
                        badgeLabel: 'Upcoming',
                    },
                    {
                        name: 'layoutRtl',
                        badgeLabel: 'Upcoming',
                        label: 'Right to Left',
                        isUpcoming: true,
                        badgeLabel: 'Upcoming',
                    }
                ]
            },
            {   
                name: 'card',
                label: 'Cards',
                badgeLabel: 'Upcoming',
                icon: ['fas', 'fa-id-card'],
                hasChild: false,
                isUpcoming: true,
            },
            {   
                name: 'form',
                label: 'Forms',
                icon: ['fab', 'fa-wpforms'],
                hasChild: true,
                isUpcoming: true,
                defaultChildrenIcon: ['fas', 'fa-chevron-right'],
                children: [
                    {
                        name: 'formSimple',
                        badgeLabel: 'Upcoming',
                        label: 'Simple Form',
                        isUpcoming: true
                    },
                    {
                        name: 'formValidation',
                        badgeLabel: 'Upcoming',
                        label: 'Form Validation',
                        isUpcoming: true
                    },
                    {
                        name: 'formWizard',
                        badgeLabel: 'Upcoming',
                        label: 'Form Wizard',
                        isUpcoming: true
                    }
                ]
            },
            {   
                name: 'component',
                label: 'Components',
                icon: ['fas', 'fa-box-open'],
                hasChild: true,
                isUpcoming: true,
                defaultChildrenIcon: ['fas', 'fa-chevron-right'],
                children: [
                    {
                        name: 'componentAlert',
                        badgeLabel: 'Upcoming',
                        label: 'Alert',
                        isUpcoming: true
                    },
                    {
                        name: 'componentBadge',
                        badgeLabel: 'Upcoming',
                        label: 'Badge',
                        isUpcoming: true
                    },
                    {
                        name: 'componentButton',
                        badgeLabel: 'Upcoming',
                        label: 'Button',
                        isUpcoming: true
                    },
                    {
                        name: 'componentNotification',
                        badgeLabel: 'Upcoming',
                        label: 'Notification',
                        isUpcoming: true
                    },
                    {
                        name: 'componentPagination',
                        badgeLabel: 'Upcoming',
                        label: 'Pagination',
                        isUpcoming: true
                    },
                    {
                        name: 'componentSlider',
                        badgeLabel: 'Upcoming',
                        label: 'Slider',
                        isUpcoming: true
                    },
                    {
                        name: 'componentTab',
                        badgeLabel: 'Upcoming',
                        label: 'Tab',
                        isUpcoming: true
                    }
                ]
            },
            {   
                name: 'table',
                label: 'Tables',
                badgeLabel: 'Upcoming',
                icon: ['fas', 'fa-table'],
                hasChild: false,
                isUpcoming: true,
            },
            {   
                name: 'chart',
                label: 'Charts',
                badgeLabel: 'Upcoming',
                icon: ['fas', 'fa-chart-pie'],
                hasChild: false,
                isUpcoming: true,
            },
            {   
                name: 'map',
                label: 'Maps',
                badgeLabel: 'Upcoming',
                icon: ['fas', 'fa-map-marked-alt'],
                hasChild: false,
                isUpcoming: true,
            },
            {   
                name: 'icon',
                label: 'Icons',
                badgeLabel: 'Upcoming',
                icon: ['fas', 'fa-icons'],
                hasChild: false,
                isUpcoming: true,
            }
        ]
    },
    {
        name: 'advance',
        label: 'Advance',
        menus: [
            {   
                name: 'apps',
                label: 'Apps',
                icon: ['fas', 'fa-boxes'],
                hasChild: true,
                isUpcoming: true,
                defaultChildrenIcon: ['fas', 'fa-chevron-right'],
                children: [
                    {
                        name: 'appCalendar',
                        label: 'Calendar',
                        badgeLabel: 'Upcoming',
                        icon: ['fas', 'fa-calendar'],
                        isUpcoming: true
                    },
                    {
                        name: 'appChat',
                        label: 'Chat',
                        badgeLabel: 'Upcoming',
                        icon: ['fas', 'fa-comments'],
                        isUpcoming: true
                    },
                    {
                        name: 'appInbox',
                        label: 'Inbox',
                        badgeLabel: 'Upcoming',
                        icon: ['fas', 'fa-envelope'],
                        isUpcoming: true
                    },
                    {
                        name: 'appScrumboard',
                        label: 'Scrumboard',
                        badgeLabel: 'Upcoming',
                        icon: ['fas', 'fa-scroll'],
                        isUpcoming: true
                    },
                    {
                        name: 'appTodo',
                        label: 'Todo',
                        badgeLabel: 'Upcoming',
                        icon: ['fas', 'fa-tasks'],
                        isUpcoming: true
                    }
                ]
            },
            {   
                name: 'transition',
                label: 'Transitions',
                badgeLabel: 'Upcoming',
                icon: ['fas', 'fa-magic'],
                hasChild: false,
                isUpcoming: true,
            }
        ]
    }
]