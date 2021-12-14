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
        <q-btn v-if="modeNow" size="20px" disable no-caps class="bg-grey-6 text-white text-body1"
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
    <!-- </q-card> REGISTER POP-UP -->
    <q-dialog v-model="status">  <!-- Note: v-model operate on copy of isRegOpen -->
      <q-card>
        <q-separator></q-separator>
        <section>
        <regtag></regtag>
        </section>
        <q-separator></q-separator>
        <q-card-section class="text-h6">
          <div class="q-gutter-sm row justify-center">
            <q-btn
              dense
              no-caps
              size="25px"
              align="center"
              @click="gohome()"
              class="full-width q-px-xl q-py-xs center"
              color="grey-6"
              label="Register with Freeos"
            >
            </q-btn><br>
            <q-btn
              flat
              no-caps
              size="25px"
              align="center"
              @click="gohome()"
              class="full-width q-px-xl q-py-xs center"
              color="grey-6"
              label="Sign In"
            >
            </q-btn>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Decline" color="primary" @click="status.set(false)" v-close-popup></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import Register from 'pages/Register'
// import { addRegUser } from 'src/store/svr/actions'
// import notifyAlert from 'src/services/notify-alert'
export default {
  name: 'landing',
  components: {
    regtag: Register
  },
  data () {
    return {
      modeNow: false, // Main button calling S-V-R is
      // regpopup: null, // Variable is copy of isRegOpen from store. todo - consider delete
      interval: null,
      isWaiting: false,
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
      landing_text: [ // The text displayed on the Button.
        // Displayed text is pointed by 'this.mode'
        'System Inactive',
        'Start Survey Now',
        'Wait for Vote',
        'Start Vote Now',
        'Wait for Ratify',
        'Start Ratify Now',
        'Wait for New Iteration'
      ],
      landing_title: [ // Displayed text is pointed by 'this.mode'.
        'System Inactive',
        'Survey Open',
        'Wait for Vote',
        'Vote Open',
        'Wait for Ratify',
        'Ratify Open',
        'Wait for New Iteration'
      ],
      timerMessage: [ // Displayed text is pointed by 'this.mode'.
        'System Inactive',
        'Survey Closing in',
        'Vote Opens in',
        'Vote Closing in',
        'Ratify Opens in',
        'Ratify Closing in',
        'Next Iteration in'
      ]
    }
  },
  computed: {
    ...mapState({
      accountName: state => state.account.accountName,
      isRegOpen: state => state.svr.isRegOpen,
      mode: state => state.svr.user_mode,
      init_time: state => state.svr.initUTC,
      iteration: state => state.svr.currentiteration, // TODO !
      iterationSize: state => state.svr.iterationSize
      // ratifyend: state => state.svr.ratifyend // TODO remove test
    }),
    status: { // serve v-model for the Register pop-up window
      get () {
        return this.$store.state.svr.isRegOpen
      },
      set (value) { // true or false
        this.$store.commit('svr/setRegPopUp', value)
      }
    },
    ...mapGetters('account', ['isAuthenticated', 'connecting']),
    iterationNow: function () { // Actually not used, this computation was made in svr/mutations.js
      // Note that getTime() returns milliseconds, not plain seconds:
      const currentTimeSec = Math.floor((new Date()).getTime() / 1000)
      const diff = Math.floor(((currentTimeSec - this.init_time) / this.iterationSize) + 1)
      // console.log('Correct UTC timestamp ' + currentTimeSec)
      console.log('Iteration = ', diff)
      return this.diff
      // state.iteration = diff // active iteration number
    } // ,
    // modeNow: function (mode) { // disable button if no active mode (Switch to any SVR page is impossible now)
    // return !((mode === 0) || (mode === 2) || (mode === 4) || (mode === 5)) // waiting modes listed
    // } // TODO function probably is not longer necessary. Actually its alternative is used.
  },
  methods: {
    ...mapActions('svr', ['getSvrsTable', 'getParametersTable', 'getUserTable']),
    ...mapActions('svr', ['addRegUser']),
    gohome () { // Register current user to backend (call backend;s register)
      // set trigger in Vuex
      this.addRegUser(this.accountName) // NOTE: Write to Backend - Register this User. This is not getUserTable!
      // TODO write registration data to backend 'users' table.
    },
    ver () { // TODO can be removed
      this.version = process.env.V_STRING
    },
    onSelectMenu (menuItem) {
      (this.$route.path !== menuItem.route) && this.$router.push(menuItem.route)
      this.selectedItemLabel1 = menuItem.label
    },

    allTimers () { // TODO rewrite
      this.expires = (this.expires_at * 1000) // normalize UTC formats
      // http://jsfiddle.net/JamesFM/bxEJd/
      const timestamp = Date.now()
      if (timestamp > this.expires) {
        this.expiration_timer = 0.0
      } else {
        this.expiration_timer = (this.expires - timestamp) / 60000 // display in minutes
        this.expiration_timer = this.expiration_timer.toFixed(2)
      }
      console.log('timestamp:', this.expires, timestamp)
    },
    secondsToHms (a) { // TODO rewrite
      a = Number(a)
      const d = Math.floor(a / 86400)
      const h = Math.floor(a % 86400 / 3600)
      const m = Math.floor(a % 3600 / 60)
      const dDisplay = d > 0 ? d + (h === 1 ? ' hour, ' : ' hours, ') : ''
      const hDisplay = h > 0 ? h + (h === 1 ? ' hour, ' : ' hours, ') : ''
      const mDisplay = m > 0 ? m + (m === 1 ? ' minute, ' : ' minutes, ') : ''
      return dDisplay + hDisplay + mDisplay
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
      // toTime(seconds) {
      // var date = new Date(null);
      // date.setSeconds(seconds);
      // return date.toISOString().substr(11, 8);
      // }
    },
    // TODO add alerts
    submit () { // When pressed button the function interpret selected mode
      console.log('time_init_point=', this.init_time)
      switch (this.mode) { // Jump to pre-determined page when button pushed.
        case 1: // Go to survey
          this.$router.push('/survey')
          break
        case 3: // Go to Vote
          this.$router.push('/vote')
          break
        case 5: // Go to Ratify
          this.$router.push('/ratify')
          break
        default: // Waiting modes are {0, 2, 4, or 6}. Press Buttons are inactive for it.
          // Nothing to do - see function modeNow(mode) in this file
          this.modeNow = true
      }
    }
  },
  created () { // TODO add auto refresh
    this.regpopup = this.isRegOpen
    console.log('isRegOpen=', this.regpopup)
    this.getSvrsTable(this.accountName)
    this.getUserTable(this.accountName)
    console.log('=x=> state.isRegOpen=', this.isRegOpen)
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
