<template>
  <personal-card/>
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
          items: [],
          
      }
  }

}
</script>