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
        <div class="text-h5 text-left">Freeos Economy</div><br>
        <div class="row justify-center"> <!-- TODO buttons should be conditionally highlighted
         TODO rather use transparent tabs for simplicity -->
        <q-btn no-caps flat class="mini" text-color="black" label="Current state"></q-btn>
        <q-btn no-caps flat class="mini" text-color="grey-6" label="Last week"></q-btn>
        <q-btn no-caps flat class="mini" text-color="grey-6" label="Last month"></q-btn>
        <q-btn no-caps flat class="mini" text-color="grey-6" label="Last year"></q-btn>
        </div>
      </q-card-section>
      <!-- expansion item -->
      <q-separator inset></q-separator>
      <q-expansion-item
        expand-separator
        icon="perm_identity"
        label="Show All"
      >
        <q-card>
          <q-card-section>
            Whatever will be here :)<br>
            Questions:
            Precise what means "show all"<br>
            It should be here expansion item or just boxed link to another page?
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator inset></q-separator>
      <q-space style="min-height: 2vh;"></q-space>
      <!--  -->
    <!-- Start Informative sections --- TODO This section will be rewritten to make one function with
    TODO changed texts according to the information read from the backend -->
      <!-- FREEOS Price -->
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
      <!-- Freeos Community -->
      <div class="row justify-center">
        <q-card flat round bordered class="mycard1 justify-center bg-grey-4">
          <q-card-section>
            <div class="row">
              <div class="col text-body1">
                <div class="text-body2 text-black text-left">FREEOS Community (Size)</div>
                <div>${{comsize}}</div>
                <div class="mini">Members @11.59 yesterday</div>
              </div>
              <div class="col text-right">
                <div><q-icon name="info"></q-icon></div>
                <div>
                  <q-icon name="arrow_upward" class="text-black"></q-icon>
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
      <!-- Last Weeks Participants -->
      <div class="row justify-center">
        <q-card flat round bordered class="mycard1 justify-center bg-grey-4">
          <q-card-section>
            <div class="row">
              <div class="col text-body1">
                <div class="text-body2 text-black text-left">Last Weeks Participants</div>
                <div>${{lastwpart}}</div>
                <div class="mini">Members participating @last weeks activity</div>
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
      <!-- Issuance -->
      <div class="row justify-center">
        <q-card flat round bordered class="mycard1 justify-center bg-grey-4">
          <q-card-section>
            <div class="row">
              <div class="col text-body1">
                <div class="text-body2 text-black text-left">Issuance</div>
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
      <!-- Mint Fee -->
      <div class="row justify-center">
        <q-card flat round bordered class="mycard1 justify-center bg-grey-4">
          <q-card-section>
            <div class="row">
              <div class="col text-body1">
                <div class="text-body2 text-black text-left">Mint Fee</div>
                <div>{{price}}%</div>
                <div class="mini">Previous weeks mint fee {{price}}</div>
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
      <!-- Locking Threshold -->
      <div class="row justify-center">
        <q-card flat round bordered class="mycard1 justify-center bg-grey-4">
          <q-card-section>
            <div class="row">
              <div class="col text-body1">
                <div class="text-body2 text-black text-left">Locking Threshold</div>
                <div>${{price}}</div>
                <div class="mini">Previous weeks Locking Threshold {{price}}</div>
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
      <!-- Reserve Pool Artitrage -->
      <div class="row justify-center">
        <q-card flat round bordered class="mycard1 justify-center bg-grey-4">
          <q-card-section>
            <div class="row">
              <div class="col text-body1">
                <div class="text-body2 text-black text-left">Reserve Pool Artitrage</div>
                <div>${{price}}</div>
                <div class="mini">{{price}}</div>
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
      <!-- Liquidity Pool -->
      <div class="row justify-center">
        <q-card flat round bordered class="mycard1 justify-center bg-grey-4">
          <q-card-section>
            <div class="row">
              <div class="col text-body1">
                <div class="text-body2 text-black text-left">Liquidity Pool</div>
                <div>${{price}} Fr</div>
                <div class="mini">{{price}}</div>
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
        <!-- <q-card class="row justify-center mycard1 bg-grey-2"> -->
          <q-card-section>
            <q-btn
              no-caps
              class="mycard2 bg-grey-6 text-grey-2">Home</q-btn>
          </q-card-section>
        <!-- </q-card> -->
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
      iteration: 0,
      price: '0.0324222',
      price_trend: '0.0000032',
      comsize: '12,457,278', // Community Size
      lastwpart: '1,000,000' // Last weeks participants
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
  font-size: 12px;
  text-color: #000000;
}
.mycard1 {
  background-color: #E0E1E1;
  width: 380px;
  max-width: 450px;
}
.mycard2 {
  height: 52px;
  width: 360px;
  max-width: 380px;
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
.box {
  width: 360px;
  padding: 3px;
  border: 2px solid gray;
  margin: 0;
}
</style>
