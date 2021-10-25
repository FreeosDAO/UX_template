<template>
  <!-- Vote.vue TODO Note that only 'Start' part of a button is sensitive. -->
  <div class="q-gutter-y-md q-mx-auto" style="max-width: 400px">
    <!-- Title/Intro Section -->
    <q-card flat bordered class="mycard">
      <!-- Main Q-card -->
      <q-toolbar>
        <q-toolbar-title class="text-body2 bg-grey-4">
          {{accountName}}
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
    <!-- Start Informative sections -->
      <!-- Issuance -->
      <div class="row justify-center">
      <q-card flat round bordered class="mycard1 justify-center bg-grey-4">
      <q-card-section>
        <div class="row">
          <div class="col text-body1">
            <div class="text-body2 text-black text-left">FREEOS Price (USD)</div>
            <div>${{price}}</div>
            <div class="mini">{{price}} (BTC)</div>
            <div class="mini">{{price}} ETH</div>
          </div>
          <div class="col text-right">
            <div><q-icon name="info"></q-icon></div>
            <div>
              <q-icon name="arrow_downward" class="text-black"></q-icon>
              <q-badge color="grey-6">
                {{price_trend}}%
              </q-badge>
            </div>
          </div>
        </div>
      </q-card-section>
      </q-card>
      </div>
      <q-card-section class="bg-gray-2">
      </q-card-section>
      <!---->
      <div class="row justify-center">
        <q-card flat round bordered class="mycard1 bg-grey-4">
          <q-card-section>
            <div>dfgfd fdgdfgdf fdgfdgfdg fdgfdgfdg fggdgdf<br>
            fghfg fgdhjfg fghgfh gfhgfh gfhfgh gfhfghgf ghg</div>
          </q-card-section>
        </q-card>
      </div>
      <!-- end -->
    </q-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Economy',
  data () {
    return {
      price: '0.0324222',
      price_trend: '0.0000032'
    }
  },
  methods: {
    ver () {
      this.version = process.env.V_STRING
    }
  }, // end of methods
  created () {
    this.ver()
  },
  computed: { // TODO consider is necessary?
    ...mapState({
      accountName: state => state.account.accountName
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
.mini {
  font-size: 10px;
}
.mycard1 {
  background-color: #E0E1E1;
  width: 380px;
  max-width: 450px;
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
</style>
