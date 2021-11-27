<template>
  <!-- Vote.vue TODO Note that only 'Start' part of a button is sensitive. -->
  <div class="q-gutter-y-md q-mx-auto" style="max-width: 400px">
    <!-- Title/Intro Section -->
    <q-card flat bordered class="mycard">
      <!-- Main Q-card -->
      <q-toolbar>
        <q-toolbar-title class="text-body2 bg-grey-4">
          {{accountName}} &nbsp; &nbsp; <q-btn round flat class="bg-grey-6 text-grey-2">{{iteration}}</q-btn>
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
             <!-- Grey Intro Section -->
             <div class="row justify-center" >
               <q-card
                      flat round bordered
                      class="mycard1 bg-grey-4"
               >
                 <br>
                 <div class="row">
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
             </q-card-section>
    </q-card>
  </div>
</template>

<script>
// import notifyAlert from 'src/services/notify-alert'
export default {
  name: 'Vote',
  data () {
    return {
      points: '12,235',
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
    gohome () {
      // tt
    }
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
.mycard2 {
  background-color: #F4F5F4;
  padding: 3px;
  width: 380px;
  max-width: 400px;
  border-width: 3px;
  border-color: #7a747a;
}
.mini {
  size: 12px;
}
.mini1 {
  size: 10px;
}
.mini8 {
  size: 8px;
}
.input_box {
  width: 75px;
  height: 7vh;
  border: 2px solid grey;
}
.box1 {
  width: 5px;
  height: 16vh;
  border-right: 2px solid grey;
}
</style>
