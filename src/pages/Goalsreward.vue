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
          <q-card-section>
            <div class="text-h5 text-left">Goals / Rewards</div>
              </q-card-section>
                 <!-- Grey Intro Section 1 -->
                  <div class="row justify-center" >
                   <q-card
                          flat round bordered
                          class="mycard1 bg-grey-4"
                          style="padding: 8px;"
                   >
                     <br>
                     <div class="row">
                       <div class="col">1. Participation</div>
                       <div class="col text-right"><q-icon style="font-size:18px;" name="info" class="text-grey-6"></q-icon>
                       </div><br>
                     </div>
                     <div class="row">
                       <div class="col">
                          <div class="text-left" style="font-size:10px;">Curently</div>
                          <div class="text-h6">{{points}}</div>
                          <br>
                       </div>
                       <div class="col">
                         <div class="text-left" style="font-size:10px;">Target</div>
                         <div class="text-h6">{{freeby}}</div>
                       </div>
                       <div class="col text-right">
                         <div class="text-left" style="font-size:10px;">&nbsp;</div>
                         <q-icon name="arrow_right_alt" class="text-black"></q-icon>
                         <q-badge color="grey-6">
                           {{part}}%
                         </q-badge>
                       </div>
                     </div>
                   </q-card>
                 </div>
                 <!-- Un-Locked Points -->
                 <q-card-section> <!-- Participation Reward -->
                   <div class="row justify-center">
                     <q-btn no-caps outline class="full-width text-black" color="grey-6">Participation Reward</q-btn>
                   </div>
                 </q-card-section>
                 <!-- Inserted Section end -->
      <!-- Grey Intro Section 2 -->
      <div class="row justify-center" >
        <q-card
          flat round bordered
          class="mycard1 bg-grey-4"
          style="padding: 8px;"
        >
          <br>
          <div class="row">
            <div class="col">2. Freeos Price Reward</div>
            <div class="col text-right"><q-icon style="font-size:18px;" name="info" class="text-grey-6"></q-icon>
            </div><br>
          </div>
          <div class="row">
            <div class="col">
              <div class="text-left" style="font-size:10px;">Curently (USD)</div>
              <div class="text-h6">{{points}}</div>
              <br>
            </div>
            <div class="col">
              <div class="text-left" style="font-size:10px;">Target</div>
              <div class="text-h6">{{freeby}}</div>
            </div>
            <div class="col text-right">
              <div class="text-left" style="font-size:10px;">&nbsp;</div>
              <q-icon name="arrow_right_alt" class="text-black"></q-icon>
              <q-badge color="grey-6">
                {{part}}%
              </q-badge>
            </div>
          </div>
        </q-card>
      </div>
      <!-- Reward -->
      <q-card-section> <!-- Freeos Price Reward -->
        <div class="row justify-center">
          <q-btn no-caps outline class="full-width text-black" color="grey-6">Freeos Price Reward</q-btn>
        </div>
      </q-card-section>
      <!-- Inserted Section end -->
      <!-- go home -->
      <q-separator inset></q-separator>
      <q-card-section>
        <div class="q-gutter-sm row justify-center">
          <br><br>
          <q-btn
            no-caps
            size="25px"
            align="center"
            @click="gohome()"
            class="full-width q-px-xl q-py-xs center"
            color="grey-6"
            label="Home"
          >
          </q-btn>
        </div>
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
      freeby: '23433.12',
      part: '12.5'
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
