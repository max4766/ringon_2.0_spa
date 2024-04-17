<template>
  <v-layout>

    <NavigationSet />

    <RouterView />

    <Footer />
    
  </v-layout>
</template>

<script>
  import NavigationSet from './NavigationSet.vue';
  import Footer from './Footer.vue';
</script>