<template>
    <div class="personal" >
    <div v-for="item in items" :key="item.id">
      <md-card class="md-primary block">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title"> {{ item.name }}</div>
          <div class="md-subhead">{{ item.status }}</div>
        </md-card-header-text>
        <md-card-media>
          <img :src="item.image" :alt="item.name">
        </md-card-media>
      </md-card-header>
      <md-card-actions>
        <md-button @click="clicked">Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalCard',
  props: {
    items: Array
  },
  methods: {
    clicked: function() {
      alert('click')
    }
  },

}
</script>

<style scoped>
  @import url('./style.css');
</style>