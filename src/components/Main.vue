<template>
  <v-main class="d-flex align-center justify-center" style="min-height: 1000px;">
    <div>
      <h1>Main Page</h1>
      <!-- <p v-for="(item, index) in items">{{ items[index] }}</p> -->
      <p v-for="item in items">{{ item.id }}. {{ item.title }}</p>
    </div>
  </v-main>
</template>

<script>
  export default {
    data() {
      return {
        items: []
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json(); //parse data into json format
          this.items = data; //data = what you bring from API server with fetch API
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      }
    }
  }
</script>
