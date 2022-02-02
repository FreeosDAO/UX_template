<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <b>Current Web based on commit cce4d09 1/02/2022 10:37 pm</b>
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
      <q-btn
        @click="PushTest()"
        style="color: #FF0080"
        label="Push User Clean"
      ></q-btn>
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
import { mapState, mapMutations } from 'vuex'
// import { clearuser } from 'src/store/svr/mutations'
// import { actionRatifyTest } from 'src/store/svr/actions'
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
    ...mapMutations('svr', ['clearuser']),
    PushTest () {
      // this.clearuser()
      // Unpack slider ranges for Vote displays here:
      const vstr = 'q1:0-100,q2:6-30,q5:0-50'
      const vcommapos1 = vstr.indexOf(',')
      const vcommapos2 = vstr.lastIndexOf(',')
      console.log('$ vcommapos1', vcommapos1)
      console.log('$ vcommapos2', vcommapos2)
      const vpart1 = vstr.slice(3, vcommapos1) // before first comma
      console.log('$ vpart1', vpart1)
      const vpart2 = vstr.slice(vcommapos1 + 4) // after first comma (before second)
      console.log('$ vpart2', vpart2)
      // cut at comma position
      const vcommapos3 = vpart2.indexOf(',')
      const vpart2a = vpart2.slice(0, vcommapos3)
      console.log('$ vpart2a', vpart2a)
      const vpart3 = vstr.slice(vcommapos2 + 4) // after second comma
      console.log('$ vpart3', vpart3)
      // separate from first part
      const commapos1v = vpart1.indexOf('-')
      const vsnum1 = vpart1.slice(0, commapos1v)
      const vsnum2 = vpart1.slice(commapos1v)
      // separate from second part
      const commapos2v = vpart2a.indexOf('-')
      const vsnum3 = vpart2a.slice(0, commapos2v)
      const vsnum4 = vpart2a.slice(commapos2v)
      // separate third part
      const commapos3v = vpart3.indexOf('-')
      const vsnum5 = vpart3.slice(0, commapos3v)
      const vsnum6 = vpart3.slice(commapos3v)
      //
      const vnum1 = vsnum1.replace(/\D/g, '')
      const vnum2 = vsnum2.replace(/\D/g, '')
      const vnum3 = vsnum3.replace(/\D/g, '')
      const vnum4 = vsnum4.replace(/\D/g, '')
      const vnum5 = vsnum5.replace(/\D/g, '')
      const vnum6 = vsnum6.replace(/\D/g, '')
      //
      console.log('$ vnums', vnum1, vnum2, vnum3, vnum4, vnum5, vnum6)
      // state.voterange1s = parseFloat(vnum1)
      // state.voterange1e = parseFloat(vnum2)
      // state.voterange2s = parseFloat(vnum3)
      // state.voterange2e = parseFloat(vnum4)
      // state.voterange5s = parseFloat(vnum5)
      // state.voterange5e = parseFloat(vnum6)
    } // === end of parameters table service ===
    //
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
  }
}
// https://stackoverflow.com/questions/39973087/javascript-date-object-without-time-zone
</script>
<style>
table, th, td {
  border: 1px solid black;
}
</style>
