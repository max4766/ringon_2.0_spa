import Vuex from 'vuex';

export const store = new Vuex.Store({
    state: {
        navDrawer: null,
        alarmDrawer: null,
        settingDrawer: null,
        platform: [
          ['Subsidiaries', 'mdi-office-building-plus'],
        ],
        dashboard: [
          ['Call', 'mdi-view-dashboard-outline'],
          ['License', 'mdi-view-dashboard'],
        ],
        myPage: [
          ['Mypage', 'mdi-book-open-variant'],
        ],
        callList: [
          ['AllCallList', 'mdi-list-box'],
        ],
        userManagement: [
          ['UserList', 'mdi-view-list'],
        ],
        languageSelect: ['English', '한국어', '日本語'],
        languageSelected: 'English',
        themeSwitchText: 'Dark Theme Off',
        user: {
          initials: 'YS',
          fullName: 'Youngsuk Hwang',
          email: 'hysgold@ringonservice.com',
        },
    },
    getters: {},
    mutations: {
        toggleNavDrawer(state){
            state.navDrawer = !state.navDrawer;
        },
        toggleAlarmDrawer(state){
            state.alarmDrawer = !state.alarmDrawer;
        },
        toggleSettingDrawer(state){
            state.settingDrawer = !state.settingDrawer;
        },
    },
    actions: {}
});