<template>

  <v-app-bar
    color="teal-darken-4"
    image="https://picsum.photos/1920/1080?random"
  >
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(45,60,148,.8), rgba(72,98,241,.8)"
      ></v-img>
    </template>

    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="navDrawer = !navDrawer"></v-app-bar-nav-icon>
      <v-tooltip
        activator="parent"
        location="bottom"
      >Menu</v-tooltip>
    </template>

    <v-app-bar-title>Ring-On Service</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-menu
      min-width="200px"
      rounded
    >
      <template v-slot:activator="{ props }">
        <v-btn icon>
          <v-icon v-bind="props">mdi-account-circle</v-icon>
          <v-tooltip
            activator="parent"
            location="bottom"
          >Account</v-tooltip>
        </v-btn>
      </template>

      <v-card class="mt-2">
        <v-card-text>
          <div class="mx-auto text-center">
            <v-avatar
              color="indigo"
              class="mb-2" 
            >
              <span class="text-h5">{{ user.initials }}</span>
            </v-avatar>
            <h3>{{ user.fullName }}</h3>
            <p class="text-caption mt-1">
              {{ user.email }}
            </p>
            <v-divider class="mt-3 mb-2"></v-divider>
            <v-btn
              variant="text"
              rounded
            >
              Edit Account
            </v-btn>
            <v-divider class="mt-2 mb-2"></v-divider>
            <v-btn
              variant="text"
              rounded
            >
              Logout
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>

    <v-btn icon>
      <v-icon @click.stop="alarmDrawer = !alarmDrawer">mdi-bell</v-icon>
      <v-tooltip
        activator="parent"
        location="bottom"
      >Alarm</v-tooltip>
    </v-btn>

    <v-btn icon>
      <v-icon @click.stop="settingDrawer = !settingDrawer">mdi-cog</v-icon>
      <v-tooltip
        activator="parent"
        location="bottom"
      >Settings</v-tooltip>
    </v-btn>

  </v-app-bar>

  <v-navigation-drawer v-model="navDrawer"
                        location="left"
                        width="260"
                        temporary
  >  
    <v-list nav>

      <v-list-subheader>Customer View</v-list-subheader>

      <v-divider></v-divider>

      <v-list-group value="platform">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-office-building"
            title="Platform"
          ></v-list-item>
        </template>

        <RouterLink v-for="([title, icon], i) in platform" :key="i" :to="`/${title}`" style="text-decoration: none; color: inherit;">
          <v-list-item
            :prepend-icon="icon"
            :title="title"
            :value="title"
          ></v-list-item>
        </RouterLink>
      </v-list-group>

      <v-list-group value="dashboard">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-monitor-dashboard"
            title="Dashboard"
          ></v-list-item>
        </template>
        
        <RouterLink v-for="([title, icon], i) in dashboard" :key="i" :to="`/${title}`" style="text-decoration: none; color: inherit;">
          <v-list-item
            :prepend-icon="icon"
            :title="title"
            :value="title"
          ></v-list-item>
        </RouterLink>
      </v-list-group>

      <v-list-group value="myPage">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-book-open-page-variant"
            title="My Page"
          ></v-list-item>
        </template>

        <RouterLink v-for="([title, icon], i) in myPage" :key="i" :to="`/${title}`" style="text-decoration: none; color: inherit;">
          <v-list-item
            :prepend-icon="icon"
            :title="title"
            :value="title"
          ></v-list-item>
        </RouterLink>
      </v-list-group>

      <v-list-group value="callList">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-phone"
            title="Call List"
          ></v-list-item>
        </template>

        <RouterLink v-for="([title, icon], i) in callList" :key="i" :to="`/${title}`" style="text-decoration: none; color: inherit;">
          <v-list-item
            :prepend-icon="icon"
            :title="title"
            :value="title"
          ></v-list-item>
        </RouterLink>
      </v-list-group>
      
      <v-list-group value="userManagement">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-group"
            title="User Manangement"
          ></v-list-item>
        </template>

        <RouterLink v-for="([title, icon], i) in userManagement" :key="i" :to="`/${title}`" style="text-decoration: none; color: inherit;">
          <v-list-item
            :prepend-icon="icon"
            :title="title"
            :value="title"
          ></v-list-item>
        </RouterLink>
      </v-list-group>
      
    </v-list>
  </v-navigation-drawer>

  <v-navigation-drawer v-model="settingDrawer"
                        location="right"
                        width="360"
                        temporary
  >  
    <v-list nav>
      
      <v-container>
        <v-row no-gutters>
          <v-col cols="12">
            <v-select
              label="Language Select"
              variant="outlined"
              density="compact"
              :items="languageSelect"
              v-model="languageSelected"
              :value="languageSelected"
            ></v-select>
          </v-col>
        </v-row>

        <v-divider class="pb-2"></v-divider>

        <v-row no-gutters>
          <v-col cols="12">
            <v-switch color="primary" 
                      v-model="themeSwitchText" 
                      :label="themeSwitchText"
                      false-value="Dark Theme Off"
                      true-value="Dark Theme On" 
            ></v-switch>
          </v-col>
        </v-row>
        
      </v-container>
      
      
    </v-list>
  </v-navigation-drawer>

  <v-navigation-drawer v-model="alarmDrawer"
                        location="right"
                        width="360"
                        temporary
  >  
    <v-list nav>

      <v-container>
        <v-row no-gutters>
          <v-col cols="12">
            <v-alert
              text="Enhanced features for better usability and improved performance."
              title="New Update"
              type="info"
            ></v-alert>
          </v-col>
        </v-row>

        <v-divider class="pb-2"></v-divider>

        <v-row no-gutters>
          <v-col cols="12">
            <v-alert
              text="Access granted to your account with seamless authentication."
              title="Login Success"
              type="success"
            ></v-alert>
          </v-col>
        </v-row>
        
      </v-container>
      
      
    </v-list>
  </v-navigation-drawer>

  <v-navigation-drawer v-model="accountDrawer"
                        location="right"
                        width="360"
                        temporary
  >  
    <v-list nav>

      <v-container>
        <v-row no-gutters>
          <v-col cols="12">

          </v-col>
        </v-row>

        <v-divider class="pb-2"></v-divider>

        <v-row no-gutters>
          <v-col cols="12">

          </v-col>
        </v-row>
        
      </v-container>
      
      
    </v-list>
  </v-navigation-drawer>

</template>

<script>
  export default {
    data () {
      return {
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
          ['MyPage', 'mdi-book-open-variant'],
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
      }
    }
  }
</script>