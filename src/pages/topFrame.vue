<template>
  <!-- Vote.vue This project contain now new page topFrame.vue which creates new page organization,
  to last working version, return to version from 30/12/2021
   The purpose of this file is to pre-fetch some initial data from the backend, to avoid update gaps, when switching from survey to voting and next to ratify
  Note that automatic update not reading data at first moment but after 60 sec, then after each 60 sec. again (this time also will be shorten after
  adding initial reading in this page) -->
  <div class="q-mx-auto" style="max-width: 400px">
    <!-- Title/Intro Section -->
    <!-- <q-card flat bordered class="mycard"> -->
      <!-- Main Q-card -->
      <q-toolbar>
        <q-toolbar-title class="text-body2 bg-grey-4">
          &nbsp; &nbsp;{{accountName}} &nbsp; <q-btn round flat class="bg-grey-6 text-grey-2">{{iteration}}</q-btn> type: {{account_type}}
        </q-toolbar-title>
        <!-- <div>TEST{{isAuthenticated}}TEST</div> -->
        <q-btn v-if="isAuthenticated" dense flat round icon="menu">
          <q-menu anchor="bottom left" self="top right"
                  :style="{ backgroundColor: '#eee', color: 'blue'}">
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section><q-icon size='md' name="las la-circle"></q-icon></q-item-section>
                <q-item-section>Home</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section><q-icon size='md' name="las la-circle"></q-icon></q-item-section>
                <q-item-section>MyFreeos</q-item-section>
              </q-item>
              <q-separator></q-separator>
              <q-item clickable>
                <q-item-section><q-icon size='md' name="las la-arrow-alt-circle-right"></q-icon></q-item-section>
                <q-item-section>Mint</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section><q-icon size='md' name="las la-chevron-circle-down"></q-icon></q-item-section>
                <q-item-section>Re-Register</q-item-section>
              </q-item>
              <q-separator></q-separator>
              <q-item clickable>
                <q-item-section><q-icon size='md' name="las la-sign-out-alt"></q-icon></q-item-section>
                <q-item-section>Sign-out</q-item-section>
              </q-item>
              <q-separator></q-separator>
              <q-item clickable>
                <q-item-section><q-icon size='md' name="las la-info-circle"></q-icon></q-item-section>
                <q-item-section>Help &amp; Feedback</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
  </div>
</template>

<script>
// This page displays top short toolbar, in the background pre-fetch some initial data for the rest of the pages to avoid data update glitches.
// and timing problems when transmitting to and from Vuex.
// This page also allows remove top short menu from all other pages and place it on centralized position here.
// import notifyAlert from 'src/services/notify-alert'
// import {"las la-circle"} from '@quasar/extras/line-awesome'
// import landing from './landing.vue'

// import Register from 'pages/Register'
import { mapGetters, mapState } from 'vuex'
// import { bus } from 'C:/Users/Andrew/UX_template/.quasar/app.js' // todo experiment
// import { bus } from '../App.vue' // todo added by me

export default {
  name: 'topFrame',
  data () {
    return {
      points: null,
      alert: null,
      acctname: null
    }
  },
  created () {
    // console.log('this.accountName=', this.accountName, 'isAccount?', this.isAccount) // TODO verify is defined -- Not work here !!!
    // TODO Copy that to mounted !
    console.log(' === isRegOpen=>', this.isRegOpen)
    // this.getUserTable(this.accountName)
    // console.log('*** this.accountName=', this.accountName)
    // this.getUserTable(this.accountName)
    // this.getUserTable(this.accountName)
    // console.log('*** this.accountName=', this.accountName)
    // this.getUserTable(this.accountName)
  },
  computed: {
    ...mapState({
      accountName: state => state.account.accountName,
      iteration: state => state.svr.iteration,
      account_type: state => state.svr.account_type,
      isRegOpen: state => state.svr.isRegOpen // todo test
    }),
    ...mapGetters('account', ['isAuthenticated'])
  }
  // ,
  // methods: {
  // ...mapActions('svr', ['getUserTable']) // todo test
  // }
}
</script>
<style scoped>
.grey6 {
  background-color: #3B4752;
}
.mycard {
  width: 380px;
  max-width: 400px;
  background-color: #F4F5F4;
  text-color: #FFFFFF;
}
.mycard1 {
  background-color: #E0E1E1;
  padding: 3px;
  width: 380px;
  max-width: 400px;
}
</style>
