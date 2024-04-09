<template>

  <v-app-bar
    color="teal-darken-4"
    image="https://picsum.photos/1920/1080?random"
  >
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
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

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer"
                        location="left"
                        temporary
  >  
    <v-list nav>
      <v-list-subheader>Customer View</v-list-subheader>
      <v-divider></v-divider>
      <v-list-item prepend-icon="mdi-office-building" title="Platform" value="platform"></v-list-item>
      <v-list-item prepend-icon="mdi-home" title="Dashboard" value="dashboard"></v-list-item>
      <v-list-item prepend-icon="mdi-book-open-page-variant" title="My Page" value="myPage"></v-list-item>
      <v-list-item prepend-icon="mdi-phone" title="Call List" value="callList"></v-list-item>
      <v-list-item prepend-icon="mdi-account-group" title="User Manangement" value="userManagement"></v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
      }
    },
  }
</script>