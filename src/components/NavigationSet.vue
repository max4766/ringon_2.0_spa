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
    </template>

    <v-app-bar-title>Ring-On Service</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon @click.stop="cogDrawer = !cogDrawer">mdi-cog</v-icon>
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

        <v-list-item
          v-for="([title, icon], i) in platform"
          :key="i"
          :prepend-icon="icon"
          :title="title"
          :value="title"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="dashboard">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-monitor-dashboard"
            title="Dashboard"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon], i) in dahsboard"
          :key="i"
          :prepend-icon="icon"
          :title="title"
          :value="title"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="myPage">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-book-open-page-variant"
            title="My Page"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon], i) in myPage"
          :key="i"
          :prepend-icon="icon"
          :title="title"
          :value="title"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="callList">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-phone"
            title="Call List"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon], i) in callList"
          :key="i"
          :prepend-icon="icon"
          :title="title"
          :value="title"
        ></v-list-item>
      </v-list-group>
      
      <v-list-group value="userManagement">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-group"
            title="User Manangement"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon], i) in userManagement"
          :key="i"
          :prepend-icon="icon"
          :title="title"
          :value="title"
        ></v-list-item>
      </v-list-group>
      
    </v-list>
  </v-navigation-drawer>

  <v-navigation-drawer v-model="cogDrawer"
                        location="right"
                        width="360"
                        temporary
  >  
    <v-list nav>
      
      <v-container>
        <v-row no-gutters>
          <v-col cols="12">
            <v-select
              label="Select"
              :items="languageSelect"
              variant="outlined"
              density="compact"
              v-model="languageSelectDefault"
            ></v-select>
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
        cogDrawer: null,
        platform: [
          ['Subsidiaries', 'mdi-office-building-plus'],
        ],
        dahsboard: [
          ['Call', 'mdi-view-dashboard-outline'],
          ['License', 'mdi-view-dashboard'],
        ],
        myPage: [
          ['My Page', 'mdi-book-open-variant'],
        ],
        callList: [
          ['All Call List', 'mdi-list-box'],
        ],
        userManagement: [
          ['User List', 'mdi-view-list'],
        ],
        languageSelect: ['English', '한국어', '日本語'],
        languageSelectDefault: 'English',
      }
    }
  }
</script>