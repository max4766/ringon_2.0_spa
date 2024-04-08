<template>
  <v-layout class="rounded rounded-md">
    
    <NavigationDrawer />

    <AppBar />

    <Main />

  </v-layout>
</template>

<script>
  import NavigationDrawer from './NavigationDrawer.vue';
  import AppBar from './AppBar.vue';
  import Main from './Main.vue';
</script>