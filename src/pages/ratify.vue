<template>
  <!-- Vote.vue -->
  <div class="q-gutter-y-md q-mx-auto" style="max-width: 400px">
    <!-- Title/Intro Section -->
    <q-card flat bordered class="mycard">
      <q-card-section>
        <div class="text-h5 text-center">Please ratify</div>
        <div class="text-subtitle2 text-center">Ratification iteration &nbsp; {{iteration}}</div>
        <div class="text-subtitle2 bg-grey-4 text-center">Closes in: {{expiration_timer}}</div>
      </q-card-section>
      <q-card-section>
        <q-separator inset class="grey6"></q-separator>
        <q-expansion-item
          expand-separator
          icon="perm_identity"
          label="FAQ's"
        >
          <q-card>
            <q-card-section>
              {{lorem}}
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-separator inset class="grey6"></q-separator>
      </q-card-section>
    </q-card>
    <!-- end of Title/Intro section -->
    <!-- Start Voting section-->
    <q-card flat bordered class="mycard">
      <q-card-section class="bg-grey-6 tx-white">
        <div class="text-h6 text-white text-center">Start ratifying this weeks vote</div>
      </q-card-section>
      <!-- Issuance -->
      <q-card-section>
        <div class="text-body2 text-black text-left">Issuance</div><br>
        <div class="row">
          <div class="col text-body1">
            {{issuance}}
          </div>
          <div class="col">
          </div>
          <div class="col text-right">
            <q-icon name="arrow_downward" class="text-black"></q-icon>
            <q-badge color="grey-6">
              {{issuatrend}}
            </q-badge>
          </div>
        </div>
        <br>
        <q-separator class="grey6"></q-separator>
      </q-card-section>
      <!---->
      <!-- Mint Fees -->
      <q-card-section>
        <div class="text-body2 text-black text-left">Mint Fees</div><br>
        <div class="row">
          <div class="col text-body1">
            {{mintfees}}%
          </div>
          <div class="col">
          </div>
          <div class="col text-right">
            <q-icon name="arrow_upward" class="text-black"></q-icon>
            <q-badge color="grey-6">
              {{minttrend}}%
            </q-badge>
          </div>
        </div>
        <br>
        <q-separator class="grey6"></q-separator>
      </q-card-section>
      <!---->
      <!-- Locking Threshold -->
      <q-card-section>
        <div class="text-body2 text-black text-left">Locking threshold</div><br>
        <div class="row">
          <div class="col text-body1">
            {{lockfees}}%
          </div>
          <div class="col">
          </div>
          <div class="col text-right">
            <q-icon name="arrow_right_alt" class="text-black"></q-icon>
            <q-badge color="grey-6">
              {{locktrend}}%
            </q-badge>
          </div>
        </div>
        <br>
        <q-separator class="grey6"></q-separator>
      </q-card-section>
      <!-- Pooled or Burn -->
      <q-card-section>
        <div class="text-body2 text-black text-left">Pool or Burn</div><br>
        <div class="row">
          <div class="col text-body1">
            {{poolburn}}
          </div>
          <div class="col">
          </div>
          <div class="col text-right"> Last Week:
            <q-badge color="grey-6">
              {{pooltrend}}
            </q-badge>
          </div>
        </div>
        <br>
        <q-separator class="grey6"></q-separator>
      </q-card-section>
      <!-- Reserve Pool to be Released -->
      <q-card-section>
        <div class="text-body2 text-black text-left">Reserve Pool % to be released</div><br>
        <div class="row">
          <div class="col text-body1">
            {{reserve}}%
          </div>
          <div class="col">
          </div>
          <div class="col text-right">
            <q-icon name="arrow_upward" class="text-black"></q-icon>
            <q-badge color="grey-6">
              {{reservetrend}}%
            </q-badge>
          </div>
        </div>
        <br>
        <q-separator class="grey6"></q-separator>
      </q-card-section>
      <!-- Allocation to Partners -->
      <q-card-section>
        <div class="text-body2 text-black text-left">Allocation to partners</div><br>
        <!-- TODO This should be read from backend. -->
        {{P1}}<br>
        {{P2}}<br>
        {{P3}}<br>
        <br>
        <q-separator class="grey6"></q-separator>
      </q-card-section>
      <q-card-section>
        <div class="text-h5 text-center">Accept this vote?</div>
        <div class="q-pa-md text-center">
          <div> The ratification vote is to ensure whatever ipsum sophghia lokjren ala ma kokota whatever again?</div><br>
          <div class="q-gutter-sm">
            <q-btn
              size="30px"
              align="left"
              @click="submit(true)"
              no-caps
              class="btn-fixed-width width=45%"
              color="grey-6"
              label="Yes"
            ></q-btn>
          <!-- <q-btn size="30px" align="left"  color="grey-6" label="Yes"></q-btn> -->
          <q-btn size="30px" align="right" @click="submit(false)" class="btn-fixed-width width=45%"
                 color="grey-6" label="No"></q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import notifyAlert from 'src/services/notify-alert'
// import { addRatifyResult } from 'src/store/svr/actions'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Vote',
  data () {
    return { // TODO Note: These data values should be read from somewhere:
      issuance: '12,235,167',
      issuatrend: '-0.2%',
      mintfees: '7.33',
      minttrend: '0.63',
      lockfees: '21.25',
      locktrend: '0.00',
      poolburn: 'Pooled',
      pooltrend: 'Burn',
      reserve: '31.25',
      reservetrend: '0.52',
      P1: 'ABC',
      P2: 'DEF',
      P3: 'FGH',
      version: '',
      iteration: 0,
      submitData: {
        currentAccountName: '',
        answer: false
      },
      expiration_timer: '2 days 10 hours 30 min', // TODO !!!
      lorem: 'Lorem ipsum dolor sit amet, consectetur' +
        ' adipiscing elit, sed do eiusmod tempor incididunt ' +
        'ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
        ' quis nostrud exercitation ullamco laboris nisi ut aliquip' +
        ' ex ea commodo consequat.'
    }
  },
  computed: {
    ...mapState({
      accountName: state => state.account.accountName,
      inittime: state => state.svr.initUTC,
      iterationSize: state => state.svr.iterationSize
    })
  },
  methods: {
    ...mapActions('svr', ['addRatifyResult']),
    submit (answer) {
      const self = this
      if (answer) {
        notifyAlert('success', 'You have ratified the presented information.')
      } else {
        notifyAlert('warning', 'You not ratified the presented information.')
      }
      // Should we prevent another voting, even if ratify is active?
      // I assume only one ratify attempt allowed.
      console.log('### Ratify results:', self.accountName, answer)
      this.submitData.answer = answer
      this.submitData.currentAccountName = self.accountName
      console.log('@Ratify submitData=', self.currentAccountName, ' submitData=', this.submitData)
      this.addRatifyResult(this.submitData)
      this.$router.push('/congs')
    },
    // Efficiency Note: This should be made in the future as a globally accessible function (in mixins or plugins)
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
      // toTime(seconds) {
      // var date = new Date(null);
      // date.setSeconds(seconds);
      // return date.toISOString().substr(11, 8);
      // }
    },
    localtimer () { // todo rewrite
      // Set up on data the variable: LTimer, (function return isSurveyActive),
      let isRatifyActive = false
      const LTimer = Math.floor((new Date().getTime() / 1000)) // Current UTC GMT time in sec (msec cut off). TODO use this!
      const currentoffset = (LTimer - this.inittime) % this.iterationSize
      if ((this.surveystart <= currentoffset) && (currentoffset <= this.surveyend)) {
        isRatifyActive = true
      } else {
        isRatifyActive = false
      }
      console.log('survey.line394: isRatifyActive (?) = ', isRatifyActive)
      console.log('survey.line395: currentoffset (?) = ', currentoffset)
      this.displaytimer = this.surveyend - currentoffset
      return isRatifyActive
    },
    // ===
    ver () {
      this.version = process.env.V_STRING
    }
  },
  created () { // auto refresh of selected backend tables and screen timer.
    // this.getSvrsTable(this.accountName)
    // this.getUserTable(this.accountName)
    this.randomize() // randomize display for question 5.
    this.setIntervalId = setInterval(() => {
      // todo call local timer
      if (!this.localtimer()) {
        this.greetcode = 0 // means exit due to survey timeout :(
        clearInterval(this.setIntervalId)
        this.$router.push('/congs') // congratulations page // todo add parameter for congratulations (greetcode).
      } // emergency exit :)
    }, 60000) // call each 60 sec.
    document.addEventListener('beforeunload', this.handler)
  },
  beforeDestroy () {
    clearInterval(this.setIntervalId)
  }
}
// TODO Where to go if ratify is not accepted?
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
  background-color: #E0E1E1;
}
</style>
