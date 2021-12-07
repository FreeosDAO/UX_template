<template>
  <!-- Vote.vue TODO Note that only 'Start' part of a button is sensitive. -->
  <div class="q-gutter-y-md q-mx-auto" style="max-width: 400px">
    <!-- Title/Intro Section -->
    <q-card flat bordered class="mycard">
      <!-- Main Q-card -->
      <q-toolbar>
        <q-toolbar-title class="text-body2 bg-grey-4">
          {{accountName}} &nbsp; &nbsp; <q-btn round flat class="bg-grey-6 text-grey-2">{{iteration}}</q-btn>
          <q-btn dense flat round icon="menu" @click="drawerRight = !drawerRight" />
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
             <!-- Grey Intro Section -->
             <div class="row justify-center" >
               <q-card
                      flat round bordered
                      class="mycard1 bg-grey-4"
               >
                 <div class="text-black q-pa-md text-center">
                   <img width="35" src="~assets/tfreeos.png">
                   <div>Freeos</div>
                 </div>
                 <div class="row justify-center">
                   <div><i>Put some freedom in your pocket</i></div>
                 </div>
               </q-card>
             </div>
             <q-card-section class="text-center">
               <div class="text-h5">Register with Freeos</div><br>
               <div>Before you start, we need to register,
                 <br> or sign into the Freeos Governance App
                 <br> and accept our Terms of Service.
               </div><br><br>
               <div>
                 <div class="q-gutter-sm">
                 <q-checkbox v-model="right" label="I accept Freeos's Terms of Service."></q-checkbox>
               </div>
               </div>
                <!-- go home -->
             </q-card-section>
    </q-card>
  </div>
</template>

<script>
// import notifyAlert from 'src/services/notify-alert'
// import {"las la-circle"} from '@quasar/extras/line-awesome'

export default {
  name: 'Vote',
  data () {
    return {
      drawerRight: false,
      points: '12,235', // TODO read that data from centralized place in Vuex
      freetok: '38,000',
      price: '0.02145',
      price_trend: '0.0025',
      stackedpoints: '1123',
      iteration: 0,
      unlockpercent: '13',
      right: false,
      freeby: '23433.12'
    }
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
  width: 400px;
  max-width: 450px;
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
