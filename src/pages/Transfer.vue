<template>
  <!-- Transfer.vue -->
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
            <div class="text-h5 text-left">Transfer Tokens</div>
          </q-card-section>
          <!-- Intro Section -->
          <div class="q-pa-md">
            <div class="q-gutter-y-md" style="max-width: 400px">
              <q-tabs
                v-model="tab"
                dense
                narrow-indicator
                no-caps
                align="justify"
                class="text-gray-4"
              >
                <q-tab :ripple="false" name="send" label="Send Tokens">
                </q-tab>
                <q-tab :ripple="false" name="receive" label="Receive Tokens"></q-tab>
              </q-tabs>
            </div>
            <!-- Change-able panel -->
            <q-separator></q-separator>
            <q-card>
              <q-tab-panels v-model="tab" animated>
                <!-- Transfer form -->
                <q-tab-panel name="send">
                  <div>
                    <!-- -->
                    <div class="q-pa-md" style="max-width: 400px">

                      <q-form
                        @submit="onSubmit"
                        @reset="onReset"
                        class="q-gutter-md"
                      >
                        <q-input
                          outlined dense
                          v-model="formdata.account"
                          label="To account *"
                          hint="To account"
                          lazy-rules
                        ></q-input>

                        <q-input
                          outlined dense
                          v-model="formdata.token"
                          label="Type of Token *"
                          hint="Type of Token"
                          lazy-rules
                        ></q-input>
                        <q-input
                          outlined dense
                          v-model="formdata.amount"
                          label="Amount *"
                          hint="Amount"
                          lazy-rules
                        ></q-input>

                        <q-input
                          outlined dense
                          v-model="formdata.comment"
                          label="Comment"
                          hint="Comment"
                          lazy-rules
                        ></q-input>
                        <q-btn outline class="q-ma-lg" style="color:#4fa9e9" no-caps @click="resetForm()" label="Clear"/>
                      </q-form>
                    </div>
                    <!-- -->
                  </div>
                </q-tab-panel>

                <q-tab-panel name="receive">
                  <div></div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>
              </q-tab-panels>
            </q-card>
            <!-- end of change-able panel -->
          </div>
          <!---->
          <!-- make transaction -->
          <q-card-section>
             <div class="q-gutter-sm row justify-center">
                     <q-btn
                           no-caps
                           size="25px"
                           align="center"
                           @click="onSubmit()"
                           class="full-width q-px-xl q-py-xs center"
                           color="grey-6"
                           label="Send Tokens"
                           >
                     </q-btn>
             </div>
          </q-card-section>
    </q-card>
  </div>
</template>

<script>
import notifyAlert from 'src/services/notify-alert'
export default {
  name: 'Transfer',
  data () {
    return {
      tab: 'send',
      points: '12,235',
      freetok: '38,000',
      price: '0.02145',
      price_trend: '0.0025',
      stackedpoints: '1123',
      iteration: 0,
      unlockpercent: '13',
      freeby: '23433.12',
      formdata: {
        account: null,
        token: null,
        amount: null,
        comment: null
      }
    }
  },
  methods: {
    onSubmit () {
      notifyAlert(1, 'Submitted Successfully')
    },
    resetForm () {
      this.formdata = {
        account: '',
        token: '',
        amount: '',
        comment: ''
      }
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
