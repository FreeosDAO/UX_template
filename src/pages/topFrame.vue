<template>
  <!-- Vote.vue This project contain now new page topFrame.vue which creates new page organization,
  to last working version, return to version from 30/12/2021 -->
  <div class="q-mx-auto" style="max-width: 400px">
    <!-- Title/Intro Section -->
    <!-- <q-card flat bordered class="mycard"> -->
      <!-- Main Q-card -->
      <q-toolbar>
        <q-toolbar-title class="text-body2 bg-grey-4">
          &nbsp; &nbsp;{{accountName}} &nbsp;  <q-btn round flat class="bg-grey-6 text-grey-2">{{iteration}}</q-btn>
        </q-toolbar-title>
        <q-btn dense flat round icon="menu">
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
    <!-- </q-card> -->
  </div>
</template>

<script>
// import notifyAlert from 'src/services/notify-alert'
// import {"las la-circle"} from '@quasar/extras/line-awesome'
// import landing from './landing.vue'

import { mapState } from 'vuex'

export default {
  name: 'topFrame',
  // components: {
  // landing
  // },
  data () {
    return {
      points: null
    }
  },
  computed: {
    ...mapState({
      accountName: state => state.account.accountName

    })
  },
  methods: {
  }
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
