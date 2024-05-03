<template>
  <v-main class="d-flex align-center justify-center" style="min-height: 1000px;">
    <div>
      <h1>Main Page</h1>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item }}</li>
      </ul>
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
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.items = data; // Assuming the response is an array of items
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }
  }
}
</script>
