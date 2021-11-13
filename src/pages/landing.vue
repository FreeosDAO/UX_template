<template>
  <div class="q-gutter-y-md q-mx-auto centered" style="max-width: 400px">
    <!-- Title/Intro Section -->
    <q-card flat bordered class="mycard">
      <!-- Main Q-card -->
      <q-toolbar>
        <q-toolbar-title class="text-body2 bg-grey-4">
          {{accountName}} &nbsp;Iter:{{iteration}} mode: {{mode}}
        </q-toolbar-title>
        <q-btn dense flat round icon="menu">
          <q-menu anchor="bottom left" self="top right"
            :style="{ backgroundColor: '#eee', color: 'blue'}">
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Home</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>MyFreeos</q-item-section>
              </q-item>
              <q-separator></q-separator>
              <q-item clickable>
                <q-item-section>Mint</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Re-Register</q-item-section>
              </q-item>
              <q-separator></q-separator>
              <q-item clickable>
                <q-item-section>Sign-out</q-item-section>
              </q-item>
              <q-separator></q-separator>
              <q-item clickable>
                <q-item-section>Help &amp; Feedback</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
      <!-- Drawer -->
      <!-- -->
    </q-card>
      <!---->
      <div class="text-black q-pa-md text-center">
       <img width="35" src="~assets/tfreeos.png"> &nbsp;
      </div>
      <div class="row justify-center" style="position:relative;">
      <q-card flat round bordered class="mycard1 bg-grey-4">
        <q-card-section>
        <div class="text-h5 text-grey-7 text-left"><p>{{this.landing_text[mode]}}</p></div>
        <div v-if="mode===0" class="text-subtitle3 bg-grey-2 text-center">Opens in: &nbsp;{{this.countdown_timer}}</div>
        <div v-else class="text-subtitle3 bg-grey-2 text-center">&nbsp;{{this.timerMessage[mode]}}&nbsp;{{this.countdown_timer}}</div>
        <!-- <div class="text-subtitle3 bg-grey-2 text-center">Closes in: {{countdown_timer}}</div> -->
          <div><br></div>
        </q-card-section>
      </q-card>
        <q-btn v-if="mode===0" size="20px" disable no-caps class="bg-grey-6 text-white text-body1"
               style="position: absolute;
          top:100px; center:0px; ">
          <div > &nbsp;{{this.landing_title[mode]}}</div>
         </q-btn>
        <q-btn v-else size="20px" @click="submit()" no-caps class="bg-grey-6 text-white text-body1"
               style="position: absolute;
          top:100px; center:0px; ">
          <div> &nbsp;{{this.landing_text[mode]}}</div>
        </q-btn>
      </div>
      <!-- Central Card -->
      <div class="row justify-center" >
      <q-card
        flat round bordered
        style="position: absolute; top:370px; center:0px;"
        class="mycard1 bg-grey-4">
        <br>
        <div class="row">
          <div class="col">
            <div class="mini text-left">Points</div>
            <div class="text-body1">{{points}}</div>
          </div>
          <div class="col text-center">
            <div  class="mini">Mint</div>
            <div>
              <q-btn outline
                     @click="doit()"
                     round color="gray-6"
                     icon="animation"></q-btn>
            </div>
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
      <!-- <q-card-section>
         <div style="height: 350px" class="bg-grey-6"></div>
      </q-card-section> -->
      <!-- Bottom Card -->
      <div class="row justify-center" >
      <q-card flat round bordered class="mycard1 bg-grey-4"
              style="position: relative; bottom:-165px; center:10px;">
        <br>
        <div style="padding: 0px 5px 5px;">
            <div class="mini text-left">FREEOS Price(USD)</div>
            <div class="text-body1 text-left">${{fprice}}</div>
            <div class="mini">{{btcprice}} (BTC)</div>
        </div>
        <q-btn
          style="position: absolute; bottom:50px; left:127px;"
          size="30px"
          round
          no-caps
          color="grey-6"
        ><div class="mini1">Claimed</div></q-btn>
      </q-card>
      </div>
    <!-- </q-card> -->
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
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
      landing_text: [ // on the Button
        'System Inactive',
        'Start Survey Now',
        'Wait for Vote',
        'Start Vote Now',
        'Wait for Ratify',
        'Wait for New Iteration',
        'Start Ratify Now'],
      landing_title: [
        'System Inactive',
        'Survey Open',
        'Wait for Vote',
        'Vote Open',
        'Wait for Ratify',
        'Wait for New Iteration',
        'Ratify Open'
      ],
      timerMessage: [
        'System Inactive',
        'Survey Closing in',
        'Vote Opens in',
        'Vote Closing in',
        'Ratify Opens in',
        'Next Iteration in',
        'Ratify Closing in'
      ]
    }
  },
  computed: {
    ...mapState({
      accountName: state => state.account.accountName,
      mode: state => state.svr.user_mode,
      init_time: state => state.svr.init_time_seconds,
      iteration: state => state.svr.currentiteration,
      surveyDone: state => state.svr.surveyDone
    }),
    ...mapGetters('account', ['isAuthenticated', 'connecting']),
    iterationNow: function () { // Actually not used
      // Note that getTime() returns milliseconds, not plain seconds:
      const currentTimeSec = Math.floor((new Date()).getTime() / 1000)
      const diff = Math.floor(((currentTimeSec - this.init_time) / 604800) + 1) // TODO myEpoch take from Vuex
      // console.log('Correct UTC timestamp ' + currentTimeSec)
      console.log('Iteration = ', diff)
      return this.diff
      // state.iteration = diff // active iteration number
    },
    callswitcher: function () {
      this.selectPageToGo() // The result will be returned as: 'mode: state => state.svr.user_mode'
      return this
    }
  },
  mounted () {
    // console.log('landing:mounted = ', this.mode)
  },
  methods: {
    ...mapActions('svr', ['getSvrsTable', 'getParametersTable']),
    ver () { // TODO can be removed
      this.version = process.env.V_STRING
    },
    onSelectMenu (menuItem) {
      (this.$route.path !== menuItem.route) && this.$router.push(menuItem.route)
      this.selectedItemLabel1 = menuItem.label
    },
    doit () {
      console.log('DO IT!')
    },
    selectPageToGo () {
      console.log('selectPageToGo')
      // Page Switching Variables
      console.log('@ switcher user = ', this.surveyDone)
      // surveyDone: false,
      // votingDone: false,
      // ratifyDone: false
      // console.log('@ switcher system = ', this.state.isSurveyActive)
      // isSurveyActive: false,
      // isVotingActive: false,
      // isRatifyActive: false
    },
    // TODO need to be rewritten due to changes in mode values meaning
    submit () { // When pressed button the function interpret selected mode
      console.log('time_init_point=', this.init_time)
      switch (this.mode) { // Jump to pre-determined page when button pushed.
        case 1: // Goto survey.vue
          this.$router.push('/survey')
          break
        case 2: // Goto vote.vue
          this.$router.push('/vote')
          break
        case 3: // Goto ratify.vue
          this.$router.push('/ratify')
          break
        default: // catch all cases above 3. or make another branches, whatever seems better?
        // warn that there is:
          // if (){ alert 'Nowhere to go'} with eventually different messages. This branch should catch
          // nonsense uses of Submit button.
      }
    },
    mint () {}
  },
  created () { // TODO consider move to computed()
    this.getSvrsTable(this.accountName)
    // this.getParametersTable() // actually called from layout.vue
    // determine next page to be ready to go
    console.log('landing:created = ', this.mode)
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
.mini1 {
  font-size: 16px;
}
.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
