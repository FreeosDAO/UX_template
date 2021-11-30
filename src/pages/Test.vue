<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div>Current Configuration .env
        <table left>
          <tr><td>APP_NAME:</td><td>{{this.app_name}}</td></tr>
          <tr><td>NETWORK_HOST:</td><td>{{this.network_host}}</td></tr>
          <tr><td>NETWORK_PORT:</td><td>{{this.network_port}}</td></tr>
          <tr><td>NETWORK_PROTOCOL:</td><td>{{this.network_protocol}}</td></tr>
          <tr><td>NETWORK_CHAIN_ID:</td><td>{{this.network_chain_id}}</td></tr>
          <tr><td>APP_CHAIN_ENDPOINT:</td><td>{{this.app_chain_endpoint}}</td></tr>
          <tr><td>TOKEN_NAME:</td><td>{{this.token_name}}</td></tr>
          <tr><td>TOKEN_PRECISION:</td><td>{{this.token_precision}}</td></tr>
          <tr><td>V_STRING:</td><td>{{this.v_string}}</td></tr>
          <tr><td>Iteration Length Seconds:</td><td>{{this.iteration}}</td></tr>
          <tr><td>Hard Exchange:</td><td>{{this.hardexchange}}</td></tr>
          <tr><td>Issuance Proportion:</td><td>{{this.issuanceprop}}</td></tr>
        </table>
      </div>

      <div class="text-h2" style="opacity:.4">
      </div>
      <q-btn @click="todo ()">test</q-btn>
      <q-btn class="q-ma-lg" color="orange" no-caps @click="submit()" label="Make Change"/>
      // <q-btn @click="fuk ()">connect test</q-btn>
      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { actionRatifyTest } from 'src/store/svr/actions'
// import { actionOwnerChange } from 'src/store/svr/actions'
// import { onRegisterUser } from 'src/store/svr/actions'
// import { actionRatifyTest } from 'src/store/svr/actions'

export default {
  name: 'Test',
  data () {
    return {
      app_name: process.env.APP_NAME,
      network_host: process.env.NETWORK_HOST,
      network_port: process.env.NETWORK_PORT,
      network_protocol: process.env.NETWORK_PROTOCOL,
      network_chain_id: process.env.NETWORK_CHAIN_ID,
      app_chain_endpoint: process.env.APP_CHAIN_ENDPOINT,
      token_name: process.env.TOKEN_NAME,
      token_precision: process.env.TOKEN_PRECISION,
      v_string: process.env.V_STRING,
      iteration: process.env.ITERATION_LENGTH_SECONDS,
      hardexchange: process.env.HARD_EXCHANGE_RATE_FLOOR,
      issuanceprop: process.env.ISSUANCE_PROPORTION_OF_CLS,
      a: 10,
      b: this.a,
      data_load: {
        accountName: '',
        answer_type: ''
      },
      submitData: {
        currentAccountName: '',
        q1response: 0, // uint8
        q2response: 0, // uint8
        q3response: 0.0, // double
        q4response: '', // string
        q5response: 0, // uint8
        q6choice1: 0, // uint8
        q6choice2: 0, // uint 8
        q6choice3: 0 // uint8
      }
    }
  },
  computed: {
    ...mapState({
      currentAccountName: state => state.account.accountName
    })
  },
  methods: {
    ...mapActions('svr', ['actionVote']), // 'actionOwnerChange']),
    submit () {
      // fill up data for simulation, normally this should happen in template section input form
      this.submitData.q1response = 1 // uint8
      this.submitData.q2response = 0 // uint8
      this.submitData.q3response = 10.0 // double
      this.submitData.q4response = 'BURN' // string
      this.submitData.q5response = 1 // uint8
      this.submitData.q6choice1 = 1 // uint8
      this.submitData.q6choice2 = 2 // uint 8
      this.submitData.q6choice3 = 6 // uint8
      // const self = this
      this.submitData.currentAccountName = this.currentAccountName
      console.log('@@@ account =', this.submitData.currentAccountName)
      console.log('@@@ submitData =', this.submitData)
      this.actionVote(this.submitData)
      actionRatifyTest(this.submitData)
      // .then(response => {
      // console.log('That is OK:', response.statusCode)
      // })
    },
    todo () { // helper for converting time
      // const now = new Date()
      // Note that getTime() returns milliseconds, not plain seconds.
      const currentT = Math.floor((new Date()).getTime() / 1000)
      console.log('Correct UTC timestamp ' + currentT)
      const str = '2021-09-15T00:00:00.000'
      const replaced = str.replace('T', ', ')
      const myDate = new Date(replaced)
      console.log('myDate', replaced)
      const myEpoch = myDate.getTime() / 1000.0
      console.log('epoch', myEpoch) // TODO ... and this
      const diff = Math.floor(((currentT - myEpoch) / 604800) + 1)
      console.log('Iteration = ', diff)
    },
    fuk () { // backend connection TEST
      // const self = this
      // this.data_load.accountName = this.currentAccountName
      // this.data_load.answer_type = true
      // console.log('@ data_load', this.data_load)
      // this.onRegisterUser(this.data_load)
      // self.actionOwnerChange()
      // console.log('@ data_load', this.data_load.accountName, '@ answertype', this.data_load.answer_type)
    }
  }
}
</script>
<style>
table, th, td {
  border: 1px solid black;
}
</style>
