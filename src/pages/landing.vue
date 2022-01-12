<template>
  <div class="q-mx-auto" style="max-width: 400px">
    <!-- Title/Intro Section -->
    <div class="text-md-center">
      <img width="40" src="~assets/tfreeos.png"> &nbsp;
    </div>
    <q-card flat bordered class="mycard">
      <!-- Main Q-card -->
      <!-- Drawer -->
    </q-card>
      <!-- -->
      <div class="row justify-center" style="position:relative;">
      <q-card flat round bordered class="mycard1 bg-grey-4">
        <q-card-section>
          <!-- todo button should be locked down if less than 60 sec. todo-->
        <div class="text-h5 text-grey-7 text-left"><p>{{timerOffset}} {{this.landing_text[mode]}}</p></div>
        <div v-if="this.timer <= 60" class="text-subtitle3 bg-grey-2 text-center">{{this.timerMessage[mode]}} <span class="red">
          less then one minute. </span> </div>
        <div v-else class="text-subtitle3 bg-grey-2 text-center">&nbsp;{{this.timerMessage[mode]}}&nbsp;{{secondsToDHms(this.timer)}} {{this.timer}}</div>
          <div><br></div>
        </q-card-section>
      </q-card>
      </div>
      <!-- Central Card -->
      <div class="row justify-center">
      <q-card
        flat round bordered
        style="position: absolute; top:290px; center:0px;"
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
        <!-- <span v-show="!(this.timer <= 60)"> -->
        <q-btn v-if="keylockOn||(this.timer<=60)" size="20px" disable no-caps class="bg-grey-6 text-white text-body1"
               style="position: absolute;
          top:250px; center:0px; ">
          <div > &nbsp;{{this.landing_title[mode]}}</div>
        </q-btn>
        <q-btn v-else size="20px" @click="submit()" no-caps class="bg-grey-6 text-white text-body1"
               style="position: absolute;
          top:250px; center:0px; ">
          <div> &nbsp;{{this.landing_text[mode]}}</div>
        </q-btn>
        <!-- </span> -->
        <!-- -->
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
    <!-- -->
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" @click="alert = false"></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- end -->
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
// import Register from 'pages/Register'
// import { mapFields } from 'vuex-map-fields'
// import notifyAlert from 'src/services/notify-alert'
export default {
  name: 'landing',
  data () {
    return {
      keylockOn: false, // Locks button calling S-V-R
      regpopon: false,
      alert: false,
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
      scan_interval: state => state.svr.scan_interval,
      // Used for timer only:
      timer: state => state.svr.timer, // timer displayed on a page - refreshed each time when 'svrs' table is read.
      timerOffset: state => state.svr.timerOffset,
      surveybase: state => state.svr.surveyend,
      votebase: state => state.svr.voteend,
      ratifybase: state => state.svr.ratifyend
      // ratifyend: state => state.svr.ratifyend // TODO remove test
    }),
    ...mapGetters('account', ['isAuthenticated', 'connecting'])
    // eslint-disable-next-line vue/no-dupe-keys
  }, // End of 'computed' section.
  methods: {
    ...mapActions('svr', ['getSvrsTable', 'getParametersTable', 'getUserTable']),
    // removed 'gohome()' from here.
    ver () { // TODO can be removed
      this.version = process.env.V_STRING
    },
    onSelectMenu (menuItem) {
      (this.$route.path !== menuItem.route) && this.$router.push(menuItem.route)
      this.selectedItemLabel1 = menuItem.label
    },
    modeNow (mode) { // disable button if no active mode (Switch to any SVR page is impossible now)
      if ((mode === 0) || (mode === 2) || (mode === 4) || (mode === 6)) { // blocking modes
        return true // when true lock main key
      } else { return false }
    },
    doit () {
      // serving for mint page TODO
    },
    secondsToDHms (a) { // format given number of seconds 'a' as number of days, hours, and minutes.
      a = Number(a)
      const d = Math.floor(a / 86400)
      const h = Math.floor(a % 86400 / 3600)
      const m = Math.floor(a % 3600 / 60)
      const dDisplay = d > 0 ? d + (h === 1 ? ' day, ' : ' days, ') : ''
      const hDisplay = h > 0 ? h + (h === 1 ? ' hour, ' : ' hours, ') : ''
      const mDisplay = m > 0 ? m + (m === 1 ? ' minute, ' : ' minutes, ') : ''
      return dDisplay + hDisplay + mDisplay
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    },
    //
    submit () { // When pressed button the function interpret selected mode
      // NOTE: This is called only when button is pressed!!!
      // console.log('281-time_init_point=', this.init_time)
      switch (this.mode) { // Jump to pre-determined page when the button is pushed.
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
      }
    }
  },
  created () { // auto refresh of selected backend tables and screen timer.
    console.log('### accountName', this.accountName)
    this.getSvrsTable(this.accountName)
    this.setIntervalId = setInterval(() => {
      if (this.isRegOpen) {
        this.$router.push('/regi')
      }
      this.getSvrsTable(this.accountName)
      this.keylockOn = this.modeNow(this.mode)
      console.log('=> mode=', this.mode, '### this.keylockOn = ', this.keylockOn, this.isRegOpen)
    }, this.scan_interval) // call each 30 sec. // TODO param.
    document.addEventListener('beforeunload', this.handler)
  },
  beforeDestroy () {
    clearInterval(this.setIntervalId) // todo is it necessary here ?
  },
  mounted () {
    this.getSvrsTable(this.accountName)
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

.red {
  color: #C10015;
}
</style>
