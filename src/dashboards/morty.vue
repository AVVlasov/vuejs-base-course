<template>
  <personal-card  :items="items"/>
</template>

<script>
import axios from 'axios'
import PersonalCard from '../components/personal-card.vue'
import getMorty from '../__data__/actions/get-rick-morty'

export default {
  name: 'morty',
  components: {
    PersonalCard
  },
  data() {
      return {
          text: 'Идет загрузка...',
          searchName: 'morty',
          items: []

      }
  },
  methods: {
    clicked: function() {
      alert('click')
    }
  },
  created: function () {
    getMorty(this.searchName).then((res) => this.items = res)
  }

}
</script>
