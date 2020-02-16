<template>
  <personal-card :items="items"/>
</template>

<script>
import axios from 'axios'
import PersonalCard from '../components/personal-card.vue'
import { API_URLS } from '../__data__/constants/api-urls'


export default {
  name: 'rick',
  components: {
    PersonalCard
  },
  data() {
      return {
          text: 'Идет загрузка...',
          items: []
      }
  },
  created: async function () {
    let res = await axios.get(API_URLS.RANDOM_USERS);
    let { results } = res.data;
    this.items = results
  }

}
</script>