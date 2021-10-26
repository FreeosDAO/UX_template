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
        <div class="text-h5 text-left">My Freeos</div>
      </q-card-section>
    <!-- Grey Intro Section with Mint Button -->
      <div class="row justify-center" >
        <q-card
          flat round bordered
          class="mycard1 bg-grey-4">
          <br>
          <div class="row"><div class="col text-right text-h5"><q-icon name="info"></q-icon></div></div>
          <div class="row">
            <div class="col">
              <div class="mini text-left">POINTS</div>
              <div class="text-h5">{{points}}</div>
            </div>
            <div class="col text-center">
              <div  class="mini">Mint</div>
              <div>
                <q-btn outline
                       @click="doit()"
                       round color="gray-6"
                       icon="animation"></q-btn>
              </div>
              <br>
            </div>
            <div class="col text-right">
              <div class="mini text-right">FREEOS TOKENS</div>
              <div class="text-h5">{{freetok}}</div><br>
            </div>
          </div>
        </q-card>
      </div>
      <!-- Liquid XPR -->
      <q-card-section>
        <div class="row">
          <div class="col text-body1">
            <div class="mini text-black text-left">Liquid XPR</div>
            <div class="text-h5">${{price}}</div>
          </div>
          <div class="col text-right">
            <div class="text-h5"><q-icon name="info"></q-icon></div>
            <div>
              <q-icon name="arrow_downward" class="text-black"></q-icon>
              <q-badge color="grey-6">
                {{price_trend}}%
              </q-badge>
            </div>
          </div>
        </div>
      </q-card-section>
      <q-separator inset class="text-black"></q-separator>
      <!-- Stacked XPR -->
      <q-card-section>
        <div class="row">
          <div class="col text-body1">
            <div class="mini text-black text-left">Stacked XPR</div>
            <div class="text-h5">${{stackedpoints}}</div>
          </div>
          <div class="col text-right">
            <div class="text-h5"><q-icon name="info"></q-icon></div>
            <div>
              <q-icon name="arrow_downward" class="text-black"></q-icon>
              <q-badge color="grey-6">
                {{price_trend}}%
              </q-badge>
            </div>
          </div>
        </div>
      </q-card-section>
      <q-separator inset class="text-black"></q-separator>
      <!-- Locked Points -->
      <q-card-section>
        <div class="row">
          <div class="col text-body1">
            <div class="mini text-black text-left">Locked Points</div>
            <div class="text-h5">${{price}}</div>
          </div>
          <div class="col text-right">
            <div class="text-h5"><q-icon name="info"></q-icon></div>
            <div>
              <q-icon name="arrow_downward" class="text-black"></q-icon>
              <q-badge color="grey-6">
                {{price_trend}}%
              </q-badge>
            </div>
          </div>
        </div><br>
        <div class="row justify-center"><q-btn no-caps>Unlock {{unlockpercent}}% of your POINTS</q-btn></div>
      </q-card-section>
      <q-separator inset class="text-black"></q-separator>
      <!-- go home -->
      <q-card-section>
        <br><br>
        <div class="q-gutter-sm row justify-center">
            <q-btn
              no-caps
              size="25px"
              align="center"
              @click="gohome()"
              class="q-px-xl q-py-xs center"
              color="grey-6"
              label="Home"
            ></q-btn>
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
      unlockpercent: '13'
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
.mini {
  size: 12px;
}
</style>
