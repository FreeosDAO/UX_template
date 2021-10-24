<template>
  <!-- Vote.vue TODO Note that only 'Start' part of a button is sensitive. -->
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
        <div class="text-h5 text-grey-7 text-left"><p>{{this.landing_text[mode]}}</p></div>
        <div v-if="mode===0" class="text-subtitle3 bg-grey-2 text-center">Opens in: &nbsp;{{this.countdown_timer}}</div>
        <div v-else class="text-subtitle3 bg-grey-2 text-center">Close in: &nbsp;{{this.countdown_timer}}</div>
        <!-- <div class="text-subtitle3 bg-grey-2 text-center">Closes in: {{countdown_timer}}</div> -->
          <div><br></div>
        </q-card-section>
      </q-card>
        <q-btn v-if="mode===0" size="20px" disable no-caps class="bg-grey-6 text-white text-body1"
               style="position: absolute;
          top:100px; center:0px; ">
          <div >Start &nbsp;{{this.landing_text[mode+1]}}</div>
         </q-btn>
        <q-btn v-else size="20px" @click="submit()" no-caps class="bg-grey-6 text-white text-body1"
               style="position: absolute;
          top:100px; center:0px; ">
          <div>Start &nbsp;{{this.landing_text[mode]}}</div>
        </q-btn>
      </div>
      <!---->
      <div class="row justify-center" >
      <q-card flat round bordered class="mycard1 bg-grey-4" style="position: absolute; top:300px; center:10px;">
        <br>
        <div class="row">
          <div class="col">
            <div class="mini text-left">Points</div>
            <div class="text-body1">{{points}}</div>
          </div>
          <div class="col text-center">
            <div  class="mini">Mint</div>
            <div> <q-btn outline round color="gray-6" icon="animation" no-caps/> </div>
          </div>
          <div class="col text-right">
            <div class="mini text-right">FREEOS TOKENS</div>
            <div class="text-body1">{{freetok}}</div><br>
            <div class="mini text-right">Freeby</div>
            <div class="text-body1">{{freeby}}</div>
          </div>
        </div>
      </q-card>
      </div>
      <q-card-section>
        <div style="height: 350px"></div>
      </q-card-section>
      <div class="row justify-center" >
      <q-card flat round bordered class="mycard1 bg-grey-4" style="position: relative; bottom:150px; center:10px;">
        <br>
        <div class="row">
          <div class="col">
            <div class="mini text-left">FREEOS Price(USD)</div>
            <div class="text-body1">${{fprice}}</div>
            <div class="mini">{{btcprice}} (BTC)</div>
          </div>
          <div class="col text-right">

          </div>
        </div>
        <q-btn
          style="position: absolute; bottom:50px; left:120px;"
          size="35px"
          round
          color="grey-6"
          icon="map"
        ></q-btn>
      </q-card>
      </div>
    </q-card>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'landing',
  data () {
    return {
      points: '82345.65',
      freetok: '43555.93',
      fprice: '0.3564434333',
      btcprice: '0.00000000675645',
      freeby: '2435.89',
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
      accountName: state => state.account.accountName,
      mode: state => state.account.user_mode
    }),
    ...mapGetters('account', ['isAuthenticated', 'connecting'])
  },
  methods: {
    ver () {
      this.version = process.env.V_STRING
    },
    submit () {
      switch (this.mode) {
        case 1: // Goto Survey
          this.$router.push('/survey')
          break
        case 2:
          this.$router.push('/vote')
          break
        case 3:
          this.$router.push('/ratify')
          break
        default:
        // default statement or expression;
      }
    },
    mint () {}
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
  border: 1px solid #3B4752;
  padding: 0px 10px 0px;
}
.mini {
  font-size: 12px;
}
</style>
