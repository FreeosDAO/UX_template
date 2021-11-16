<template>
  <!-- Vote.vue -->
  <div class="q-gutter-y-md q-mx-auto" style="max-width: 550px">
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
        {{P1}}<br>
        {{P2}}<br>
        {{P3}}<br>
        <br>
        <q-separator class="grey6"></q-separator>
      </q-card-section>
      <q-card-section>
        <div class="text-h5 text-center">Accept this vote?</div>
        <div class="q-pa-md text-center">
          <div> The ratification vote is to ensure whatever ipsum sophghia lokren ala ma kokota whatever again?</div><br>
          <div class="q-gutter-sm">
            <q-btn
              size="30px"
              align="left"
              @click="submit()"
              no-caps
              class="btn-fixed-width width=45%"
              color="grey-6"
              label="Yes"
            ></q-btn>
          <!-- <q-btn size="30px" align="left"  color="grey-6" label="Yes"></q-btn> -->
          <q-btn size="30px" align="right" class="btn-fixed-width width=45%" color="grey-6" label="No"></q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import notifyAlert from 'src/services/notify-alert'

export default {
  name: 'Vote',
  data () {
    return {
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
      expiration_timer: '2 days 10 hours 30 min',
      lorem: 'Lorem ipsum dolor sit amet, consectetur' +
        ' adipiscing elit, sed do eiusmod tempor incididunt ' +
        'ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
        ' quis nostrud exercitation ullamco laboris nisi ut aliquip' +
        ' ex ea commodo consequat.'
    }
  },
  methods: {
    submit () {
      // const self = this
      // this.submitData.currentAccountName = this.accountName //TODO
      console.log('Ratifying Data = ', this.submitData)
      // TODO Verify entry data here e.g. Is the ratify complete?
      // // this.addSurveyNew(this.submitData) // Submit to back-end to sum with global results
      // // .then(response => { // TODO remove it
      // self.resetForm()
      notifyAlert('success', 'Ratifying Successful.')
      // Set up user_mode in Vuex to enable further landing page actions.
      this.$router.push('/congs')
    },
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
  background-color: #E0E1E1;
}
</style>
