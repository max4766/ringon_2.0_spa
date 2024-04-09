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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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
      <v-icon>mdi-cog</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer"
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

</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        platform: [
          ['Subsidiaries', 'mdi-office-building-plus'],
        ],
        dahsboard: [
          ['Call', 'mdi-view-dashboard'],
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
      }
    }
  }
</script>