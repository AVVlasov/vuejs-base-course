<template>
  <personal-card :items="items"/>
</template>

<script>
import axios from 'axios'
import PersonalCard from '../components/personal-card.vue'
import getRick from '../__data__/actions/get-rick-morty'

export default {
  name: 'rick',
  components: {
    PersonalCard
  },
  data() {
      return {
          text: 'Идет загрузка...',
          searchName: 'rick',
          items: []
      }
  },
  created: function () {
    getRick(this.searchName).then((res) => this.items = res)
  }

}
</script>