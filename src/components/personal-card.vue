<template>
  <div class="personal">
    <div v-for="item in items" :key="item.id">
      <md-card class="md-primary block">
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ item.name.first }}</div>
            <div class="md-subhead">{{ item.name.last }}</div>
          </md-card-header-text>
          <md-card-media>
            <img :src="item.picture.large" :alt="item.name.first" />
          </md-card-media>
        </md-card-header>
        <md-card-actions>
          <md-field>
            <label>countResults</label>
            <md-input v-model="number" @keyup="setSearchVal" type="number"></md-input>
          </md-field>
          <md-field>
            <label for="gender">Gender</label>
            <md-select v-model="gender" name="gender" id="gender">
              <md-option value="male">male</md-option>
              <md-option value="female">female</md-option>
            </md-select>
          </md-field>
          <md-button @click="searchUsers">find</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API_URLS } from "../__data__/constants/api-urls";

export default {
  name: "PersonalCard",
  data() {
    return {
      searchParams: 1,
      gender: 'male',
    };
  },
  computed: {
    items() {
      return this.$store.getters.getUsers
    } 
  },
  created: async function () {
    const { gender, searchParams } = this
      await this.$store.dispatch('getUsers', {gender, searchParams})
  },
  methods: {
    setSearchVal: function(event) {
      this.searchParams = event.target.value;
    },
    searchUsers: async function() {
      const { gender, searchParams } = this
      await this.$store.dispatch('getUsers', {gender, searchParams})
    }
  }
};
</script>

<style scoped>
@import url("./style.css");
</style>