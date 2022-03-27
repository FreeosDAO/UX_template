<template>
  <!-- Vote.vue -->
  <div class="q-gutter-y-md q-mx-auto" style="max-width: 400px">
    <!-- Title/Intro Section -->
    <q-card flat bordered class="mycard">
      <q-card-section>
        <div class="text-h5 text-center">This Weeks Vote</div>
        <div class="text-subtitle1 text-center">Yours vote runs the economy</div>
        <!-- <div class="text-subtitle2 text-center">Voting iteration &nbsp; {{iteration}}</div> TODO ask is needed ? -->
        <div class="text-subtitle2 bg-grey-4 text-center">Closes in: {{secondsToDHms(this.displaytimer)}}</div> <!-- TODO timer -->
      </q-card-section>
      <q-card flat class="mycard1">
        <q-card-section>
          <div class="text-subtitle2 text-center"> About this weeks voting</div>
          {{ lorem }}
        </q-card-section>
      </q-card>
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
    <!-- Start Voting section -->
    <q-card flat bordered class="mycard">
      <q-expansion-item class="text-h6 bg-grey-6 text-white text-center"
                        expand-separator
                        icon="perm_identity"
                        label="Start voting"
      >
    <q-card flat bordered class="mycard">
      <q-card-section class="text-black text-body2">
        <div class="text-subtitle2 text-center">Issuance</div>
        <div class="text-left"> Q1: What percentage of the issuance should be minted this week? </div>
        <br><p>&nbsp; &nbsp; Need more info? &nbsp;  <q-icon size="sm" class="text-grey-6" name="info"></q-icon></p>
      </q-card-section>
        <div class="q-pa-md">
          <q-slider
            v-model="submitData.q1slider"
            :min=voterange1s
            :max=voterange1e
            :step="1"
            color="grey-6"
            label
            :label-value="submitData.q1slider + ' percent'"
            label-always
          ></q-slider>
          <div class="row text-subtitle2 text-black text-left" >
            <div class="col">
              {{voterange1s}}%
            </div>
            <div class="col">
              <div class="text-center">
                <q-badge class="text-subtitle2" outline color="grey-8">
                  {{ submitData.q1slider }} percent
                </q-badge>
              </div>
            </div>
            <div class="col text-right">
              {{voterange1e}}%
            </div>
          </div>
        </div>
    </q-card>
      </q-expansion-item>
    </q-card>
    <!-- end of 'Start Voting' section -->
    <!-- *** 'Next vote' section *** -->
    <q-card flat bordered class="mycard">
      <q-expansion-item class="text-h6 bg-grey-6 text-white text-center"
                        expand-separator
                        icon="perm_identity"
                        label="Next vote"
      >
    <q-card flat bordered class="mycard">
      <q-card-section class="text-black text-body2">
        <div class="text-subtitle2 text-center">Mint Fee</div>
        <div class="text-left">Q2: What should be the mint fee for this week? </div>
        <br><p>&nbsp; &nbsp; Need more info? &nbsp;  <q-icon size="sm" class="text-grey-6" name="info"></q-icon></p>
      </q-card-section>
      <div class="q-pa-md">
        <q-slider
          v-model="submitData.q2slider"
          :min=voterange2s
          :max=voterange2e
          :step="1"
          color="grey-6"
          label
          :label-value="submitData.q2slider + ' percent'"
          label-always
        ></q-slider>
        <div class="row text-subtitle2 text-black text-left" >
          <div class="col">
            {{voterange2s}}%
          </div>
          <div class="col">
            <div class="text-center">
              <q-badge class="text-subtitle2" outline color="grey-8">
                {{ submitData.q2slider }} percent
              </q-badge>
            </div>
          </div>
          <div class="col text-right">
            {{voterange2e}}%
          </div>
        </div>
      </div>
    </q-card>
      </q-expansion-item>
    </q-card>
    <!-- *** end of 'Next vote' section *** -->
    <!---->
    <!-- Start 'Half way there' section-->
    <q-card flat bordered class="mycard">
      <q-expansion-item class="text-h6 bg-grey-6 text-white text-center"
                        expand-separator
                        icon="perm_identity"
                        label="Half way there"
      >
        <q-card flat bordered class="mycard">
      <q-card-section class="text-black text-body2">
        <div class="text-subtitle2 text-center">Locking Threshold</div>
        <div class="text-left"> Q3: What price should the Locking Threshold be this week? </div>
        <br><p>&nbsp; &nbsp; Need more info? &nbsp;  <q-icon size="sm" class="text-grey-6" name="info"></q-icon></p>
      </q-card-section>
      <div class="q-pa-md"> <!-- TODO USE CONST from backend ?? -->
        <q-slider
          v-model="submitData.q3slider"
          :min=voterange3s
          :max=voterange3e
          :step= "0.0001"
          color="grey-6"
          label
          :label-value="submitData.q3slider + ' percent'"
          label-always
        ></q-slider>
        <div class="row text-subtitle2 text-black text-left" >
          <div class="col">
            {{voterange3s}}%
          </div>
          <div class="col">
            <div class="text-center">
              <q-badge class="text-subtitle2" outline color="grey-8">
                {{ submitData.q3slider }} percent
              </q-badge>
            </div>
          </div>
          <div class="col text-right">
            {{voterange3e}}%
          </div>
        </div>
      </div>
    </q-card>
      </q-expansion-item>
    </q-card>
    <!-- end of 'Half way there' section-->
    <!-- duplicated title next vote -->
    <q-card flat bordered class="mycard">
      <q-expansion-item class="text-h6 bg-grey-6 text-white text-center"
                        expand-separator
                        icon="perm_identity"
                        label="Next vote (duplo??)"
      >
        <q-card flat bordered class="mycard">
      <q-card-section class="text-black text-body2">
        <div class="text-subtitle2 text-center">Pool or burn?</div>
        <div class="text-left"> Q4: Should this week's FREEOS used to pay the mint fee to be Burned,
          or sent to Liquidity Pools? </div>
        <br><p>&nbsp; &nbsp; Need more info? &nbsp;  <q-icon size="sm" class="text-grey-6" name="info"></q-icon></p>
        <!-- <div id="q-app" style="min-height: 100vh;"> -->
        <div>
          <div class="example ex1">
            <p><label class="radio greyux">
              <!-- Note: value_radio1 and value_radio2 will be translated to one submitData.q4radio
              before submitting to the back-end. TODO -->
              <input type="radio" id="1" value="1" name="group1" v-model="value_radio1"/>
              <span>Burned</span>
            </label></p>
            <p><label class="radio greyux">
              <input type="radio" id="2" value="2" name="group1" v-model="value_radio1"/>
              <span>Send to Liquidity Pool</span>
              </label></p>
          </div>
        </div>
      </q-card-section>
    </q-card>
      </q-expansion-item>
    </q-card>
    <!-- end of duplicated next vote title -->
    <!-- 'Nearly there' section -->
    <q-card flat bordered class="mycard">
      <q-expansion-item class="text-h6 bg-grey-6 text-white text-center"
                        expand-separator
                        icon="perm_identity"
                        label="Nearly there"
      >
        <q-card flat bordered class="mycard">
          <q-card-section class="text-black text-body2">
        <div class="text-subtitle2 text-center">Reserve Pool % to be released</div>
            <div class="text-left"> Q5: What percentage of the Reserve Pool assets should be released for sale? </div>
        <br><p>&nbsp; &nbsp; Need more info? &nbsp;  <q-icon size="sm" class="text-grey-6" name="info"></q-icon></p>
      </q-card-section>
      <div class="q-pa-md">
        <q-slider
          v-model="submitData.q5slider"
          :min=voterange5s
          :max=voterange5e
          :step="1"
          color="grey-6"
          label
          :label-value="submitData.q5slider + ' percent'"
          label-always
        ></q-slider>
        <div class="row text-subtitle2 text-black text-left" >
          <div class="col">
            {{voterange5s}}%
          </div>
          <div class="col">
            <div class="text-center">
              <q-badge class="text-subtitle2" outline color="grey-8">
                {{ submitData.q5slider }} percent
              </q-badge>
            </div>
          </div>
          <div class="col text-right">
            {{voterange5e}}%
          </div>
        </div>
      </div>
    </q-card>
      </q-expansion-item>
    </q-card>
    <!-- end of 'Nearly there' section-->
    <!-- 'Next vote' section -->
    <q-card flat bordered class="mycard">
      <q-expansion-item class="text-h6 bg-grey-6 text-white text-center"
                        expand-separator
                        icon="perm_identity"
                        label="Next vote (duplo??)"
      >
        <q-card flat bordered class="mycard">
          <q-card-section class="text-black text-body2">
      <div class="text-subtitle2 text-center">Allocate to Partners</div>
      <div class="q-pa-md text-left">
        <div> Q6: Select your top three choices to receive partner founding this week:</div><br>
        - {{this.options[0].label}}<br>
        - {{this.options[1].label}}<br>
        - {{this.options[2].label}}<br>
        - {{this.options[3].label}}<br>
        - {{this.options[4].label}}<br>
        - {{this.options[5].label}}<br>
      </div>
      <p>&nbsp; &nbsp; Need more info? &nbsp;  <q-icon size="sm" class="text-grey-6" name="info"></q-icon></p>
      <div>
        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 350px">
            <q-select clearable filled color="grey-6" v-model="selection1" :options="options" label="Select Priority 1"></q-select>
            <q-select clearable filled color="grey-6" v-model="selection2" :options="options" label="Select Priority 2"></q-select>
            <q-select clearable filled color="grey-6" v-model="selection3" :options="options" label="Select Priority 3"></q-select>
          </div>
        </div>
      </div>
          </q-card-section>
    </q-card>
      </q-expansion-item>
    </q-card>
    <!-- submit -->
    <q-card flat bordered class="mycard">
      <q-card-section class="text-center">
        <q-btn
          size="18px"
          @click="submit()"
          no-caps
          class="q-px-xl q-py-xs center"
          color="grey-6"
          label="Submit"
        ></q-btn>
      </q-card-section>
    </q-card>
    <!-- end of 'Next vote' section -->
  <!-- end -->
    <!-- todo test -->
    <q-dialog v-model="errorpopup" persistent transition-show="flip-down" transition-hide="flip-up">
      <q-card class="bg-grey-6 bordered text-white">
        <q-bar>
          <q-icon color = "red" name="circle"></q-icon>

          <q-space></q-space>

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Alert - Vote Answers Incomplete</div>
        </q-card-section>

        <q-card-section bordered class="q-pt-none">
          <!-- TODO Change whole line to be v-if block -->
          <!-- {{this.errorString1}} <br v-if="this.Q1"> -->
          <!-- {{this.errorString2}} <br v-if="this.Q2"> -->
          <!-- {{this.errorString3}} <br v-if="this.Q3"> -->
          {{this.errorString4}} <br v-if="this.Q4">
          <!-- {{this.errorString5}} <br v-if="this.Q5"> -->
          {{this.errorString6}} <br v-if="this.Q6">
          {{this.errorString7}}
        </q-card-section>
      </q-card>
    </q-dialog>
    <!-- test -->
  </div>
</template>

<script>
import notifyAlert from 'src/services/notify-alert'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Vote',
  data () { // VOTE
    return {
      version: '',
      // Q1: false,
      // Q2: false,
      // Q3: false,
      Q4: false,
      // Q5: false,
      Q6: false,
      errorpopup: false,
      // errorString1: '',
      // errorString2: '',
      // errorString3: '',
      errorString4: '',
      // errorString5: '',
      errorString6: '',
      errorString7: 'The above question(s) are answered incorectly. Try again.',
      displaytimer: 0, // local timer
      selection1: 0,
      selection2: 0,
      selection3: 0,
      options: [
        {
          label: 'The One Planet ... (Obama)',
          value: '1'
        },
        {
          label: 'Nelson Mandela Foundation',
          value: '2'
        },
        {
          label: 'Environmental Education',
          value: '3'
        },
        {
          label: 'Animal Protection',
          value: '4'
        },
        {
          label: 'Open Society Foundation',
          value: '5'
        },
        {
          label: 'Blockchain Charity Fund',
          value: '6'
        }
      ],
      iteration: 0,
      // voterange3s: this.voterange3sA,
      // voterange3s: process.env.HARD_EXCHANGE_RATE_FLOOR,
      // voterange3e: this.voterange3eA,
      // Data passed as a result to the back-end as a result of voting.
      submitData: {
        currentAccountName: '',
        // q1slider: this.voterange1s,
        // q2slider: this.voterange2s, // TODO remove
        // q3slider: this.voterange3s,
        q1slider: 0.0,
        q2slider: 0.0,
        q3slider: 0.0,
        q4radio: '', // string
        // q5slider: this.voterange5s, // todo remove
        q5slider: 0.0,
        q6choice1: 0, // Return number of selected option for each selector.
        q6choice2: 0,
        q6choice3: 0
      },
      // radio buttons:
      group1: 2,
      value_radio1: '', // keep it - used to create submitData.q4radio
      lorem: 'Lorem ipsum dolor sit amet, consectetur' +
        ' adipiscing elit, sed do eiusmod tempor incididunt ' +
        'ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
        ' quis nostrud exercitation ullamco laboris nisi ut aliquip' +
        ' ex ea commodo consequat.'
    }
  },
  created () { // auto refresh of selected backend tables and screen timer.
    // this.getSvrsTable(this.accountName)
    // this.getUserTable(this.accountName)
    this.randomize() // randomize display for question 5.
    this.setIntervalId = setInterval(() => {
      if (!this.localtimer()) {
        clearInterval(this.setIntervalId)
        this.$router.push('/congs') // congratulations page
      } // emergency exit :)
    }, this.scan_interval) // call each 60 sec.
    document.addEventListener('beforeunload', this.handler)
  },
  beforeDestroy () {
    clearInterval(this.setIntervalId)
  },
  mounted () {
    this.fetchSliders()
  },
  methods: {
    ...mapActions('svr', ['addVoteResult']),
    fetchSliders () {
      this.submitData.q1slider = this.votemiddle1
      this.submitData.q2slider = this.votemiddle2
      this.submitData.q3slider = this.votemiddle3
      this.submitData.q5slider = this.votemiddle5
    },
    submit () { // VOTE
      // Export Q1 vote results to back-end as a string.
      console.log('value_radio1', this.value_radio1)
      if (this.value_radio1 === '1') {
        this.submitData.q4radio = 'BURN'
      } else if (this.value_radio1 === '2') {
        this.submitData.q4radio = 'POOL'
      }
      this.submitData.q6choice1 = this.selection1.value
      this.submitData.q6choice2 = this.selection2.value
      this.submitData.q6choice3 = this.selection3.value
      // const self = this
      this.submitData.currentAccountName = this.accountName
      console.log('Vote submitData = ', this.submitData)
      if (this.validate()) {
        this.addVoteResult(this.submitData) // Submit to back-end to sum with global results
        // // .then(response => { // TODO remove it
        // self.resetForm()
        notifyAlert('success', 'Vote Submitted Successfully.')
        // Set up user_mode in Vuex to enable further landing page actions.
        this.$router.push('/congs') // Congratulation page
      }
    },
    validate () { // Vote pre-validation before sending to backend. Backend do full validation.
      // todo modify for parametrized questions e.g. variable slider.
      // todo verify conditions - current are wrong
      let error = false // true if any error, will define this function return value.
      // this.Q1 = false
      // this.Q2 = false
      // this.Q3 = false
      this.Q4 = false
      // this.Q5 = false
      this.Q6 = false
      // this.errorString1 = ''
      // this.errorString2 = ''
      // this.errorString3 = ''
      this.errorString4 = ''
      // this.errorString5 = ''
      this.errorString6 = ''
      // if (this.submitData.q1slider === undefined) {
      //  error = true
      //  this.Q1 = true
      //  this.errorString1 = ' -> Q1: Question not answered.'
      // }
      // console.log('this.submitData.q2slider', this.submitData.q2slider)
      // if (this.submitData.q2slider === undefined) { // todo should be min
      //  error = true
      //  this.Q2 = true
      //  this.errorString2 = ' -> Q2: Question not answered.'
      // }
      // if (this.submitData.q3slider === undefined) {
      //  error = true
      //  this.Q3 = true
      //  this.errorString3 = ' -> Q3: Question not answered. '
      // }
      console.log('this.value_radio1', this.value_radio1)
      if ((this.value_radio1 !== '1') && (this.value_radio1 !== '2')) {
        error = true
        this.Q4 = true
        this.errorString4 = ' -> Q4: Select one Option. '
      }
      // console.log('this.submitData.q5slider', this.submitData.q5slider)
      // if (this.submitData.q5slider === undefined) {
      //  error = true
      //   this.Q5 = true
      //  this.errorString5 = ' -> Q5: Question not answered.'
      //  console.log('q5slider', this.submitData.q5slider)
      // }
      const a = this.submitData.q6choice1
      const b = this.submitData.q6choice2
      const c = this.submitData.q6choice3
      if ((a === b) || (b === c) || (a === c)) {
        error = true
        this.Q6 = true
        this.errorString6 = ' -> Q6: Duplicated or no Answer. '
      }
      // console.log(' ERROR=', error, errorString)
      if (error) { // define function return value
        this.errorpopup = true
        return false // data not validated
      } else { return true }
    },
    randomize () {
      for (let i = this.options.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * i)
        const temp = this.options[i]
        this.$set(this.options, i, this.options[randomIndex])
        this.$set(this.options, randomIndex, temp)
      }
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
    localtimer () {
      // Set up on data the variable: LTimer, (function return isVoteActive),
      let isVoteActive = false
      const LTimer = Math.floor((new Date().getTime() / 1000)) // Current UTC GMT time in sec (msec cut off). TODO use this!
      const currentoffset = (LTimer - this.inittime) % this.iterationSize
      if ((this.votestart <= currentoffset) && (currentoffset <= this.voteend)) {
        console.log('this.votestart', this.votestart, 'this.voteend', this.voteend)
        isVoteActive = true
      } else {
        isVoteActive = false
      }
      console.log('isVoteActive = ', isVoteActive)
      console.log('currentoffset = ', currentoffset)
      this.displaytimer = this.voteend - currentoffset
      return isVoteActive
    },
    resetForm () {
      this.submitData = {
        // TODO function to consider?
      }
    }
  }, // end of methods
  computed: { // TODO consider is necessary?
    ...mapState({
      accountName: state => state.account.accountName,
      // Sliders parametrization
      voterange1s: state => state.svr.voterange1s,
      voterange1e: state => state.svr.voterange1e,
      voterange2s: state => state.svr.voterange2s,
      voterange2e: state => state.svr.voterange2e,
      voterange3s: state => state.svr.voterange3s, // defined in data todo change to number
      voterange3e: state => state.svr.voterange3e, // todo change to number
      voterange5s: state => state.svr.voterange5s,
      voterange5e: state => state.svr.voterange5e,
      inittime: state => state.svr.initUTC,
      iterationSize: state => state.svr.iterationSize,
      voteend: state => state.svr.voteend,
      votestart: state => state.svr.votestart,
      scan_interval: state => state.svr.scan_interval,
      currentprice: state => state.currentprice, // ??
      targetprice: state => state.targetprice, // ??
      ...mapGetters('svr', ['votemiddle1', 'votemiddle2']),
      ...mapGetters('svr', ['votemiddle3', 'votemiddle5'])
    })
  }
}

</script>
<style scoped>
.mycard {
  width: 400px;
  max-width: 450px;
  background-color: #F4F5F4;
  text-color: #FFFFFF;
}
.mycard1 {
  background-color: #E0E1E1;
}
.example {
  margin: 20px;
}
.example input {
  display: none;
}
.example label {
  margin-right: 20px;
  display: inline-block;
  cursor: pointer;
}

.ex1 span {
  display: block;
  padding: 5px 10px 5px 25px;
  border: 2px solid #ddd;
  border-radius: 5px;
  position: relative;
  transition: all 0.25s linear;
  background-color: #e0e1e1;
}
.ex1 span:before {
  content: '';
  position: absolute;
  left: 5px;
  top: 50%;
  -webkit-transform: translatey(-50%);
  transform: translatey(-50%);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #9f9e9f;
  transition: all 0.25s linear;
}
.ex1 input:checked + span {
  background-color: #9f9e9f;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
}
.ex1 .greyux input:checked + span {
  color: #000000;
  border-color: #9F9E9F;
}
.ex1 .greyux input:checked + span:before {
  background-color: #f4f5f4;
}
</style>
