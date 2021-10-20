<template>
  <!-- Vote.vue -->
  <div class="q-gutter-y-md q-mx-auto" style="max-width: 550px">
    <!-- Title/Intro Section -->
    <q-card flat bordered class="mycard"> <!-- Main Q-card -->
      <q-toolbar class="bg-grey-4">
        <q-toolbar-title class="text-body2">
          {{accountName}}
        </q-toolbar-title>
        <q-btn flat round dense>
          <q-icon name="menu"></q-icon>
        </q-btn>
      </q-toolbar>
      <!---->
      <div class="text-black q-pa-md text-center">
       <img width="35" src="~assets/tfreeos.png"> &nbsp;
      </div>
      <div class="row justify-center" style="position:relative;">
      <q-card flat round bordered class="mycard1 bg-grey-4">
        <q-card-section>
        <div class="text-h5 text-grey-7 text-left"><p>{{this.landing_text[landing_mode]}}</p></div>
        <div class="text-subtitle3 bg-grey-2 text-center">Closes in: {{countdown_timer}}</div>
          <div><br></div>
        </q-card-section>
      </q-card>
        <q-btn size="20px" no-caps class="bg-grey-6 text-white text-body1" style="position: absolute;
          top:100px; center:0px; ">
          Start &nbsp;{{this.landing_text[landing_mode]}}
        </q-btn>
      </div>
      <!---->
      <div class="row justify-center" >
      <q-card flat round bordered class="mycard1 bg-grey-4" style="position: absolute; top:300px; center:10px;">
        <div class="text-body2 text-black text-left"><br>
        <div class="row">
          <div class="col text-body1">
            yryrtyrtyrty
          </div>
          <div class="col">
          </div>
          <div class="col text-right"> Last Week:
            <q-badge color="grey-6">
              uyyutrut
            </q-badge>
          </div>
        </div>
        </div>
      </q-card>
      </div>
      <q-card-section>
        <div style="height: 350px"></div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'landing',
  data () {
    return {
      landing_mode: 3,
      countdown_timer: '2 days 10 hours 30 min',
      lorem: 'Lorem ipsum dolor sit amet, consectetur' +
        ' adipiscing elit, sed do eiusmod tempor incididunt ' +
        'ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
        ' quis nostrud exercitation ullamco laboris nisi ut aliquip' +
        ' ex ea commodo consequat.',
      landing_text: ['Survey Coming Soon', 'Survey', 'Voting', 'Ratification Vote']
    }
  },
  computed: {
    ...mapState({
      accountName: state => state.account.accountName
    }),
    ...mapGetters('account', ['isAuthenticated', 'connecting'])
  },
  methods: {
    ver () {
      this.version = process.env.V_STRING
    }
  },
  created () {
    this.ver()
  }
}
</script>
<style scoped>
.grey6 {
  background-color: #3B4752;
}
.mycard {
  width: 400px;
  max-width: 450px;
  background-color: #F4F5F4;
  text-color: #FFFFFF;
}
.mycard1 {
  width: 350px;
  max-width: 400px;
}
</style>
