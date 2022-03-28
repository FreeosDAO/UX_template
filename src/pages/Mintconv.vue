<template>
  <!-- Vote.vue TODO Note that only 'Start' part of a button is sensitive. -->
  <div class="q-gutter-y-md q-mx-auto" style="max-width: 400px">
    <!-- Title/Intro Section -->
    <q-card flat bordered class="mycard">
      <!-- Main Q-card -->
      <q-toolbar>
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
            <div class="text-h5 text-left">Mint / Convert</div>
          </q-card-section>
             <!-- Grey Intro Section -->
             <div class="row justify-center" >
               <q-card
                      flat round bordered
                      class="mycard1 bg-grey-4"
               >
                 <br>
                 <div class="row">
                   <div class="col">
                      <div class="mini text-left">POINTS</div>
                      <div class="text-h6">{{points}}</div>
                      <br>
                      <div class="mini text-left">Freeby</div>
                      <div class="text-h6">{{freeby}}</div>
                   </div>
                   <div class="col-2 box1"></div>
                   <div class="col text-right">
                     <div class="mini1 text-right">Minted FREEOS TOKENS</div>
                     <div class="text-h6">{{freetok}}</div><br>
                   </div>
                 </div>
               </q-card>
             </div>
             <!-- Un-Locked Points -->
             <q-card-section>
               <div class="row justify-center">
                 <q-btn no-caps outline class="full-width text-black" color="grey-6">Unlock {{unlockpercent}}% of your POINTS</q-btn>
               </div>
             </q-card-section>
             <!-- Mint or Convert Card -->
             <div class="row justify-center" >
               <q-card flat bordered class="mycard2 text-black">
                 <q-card-section>
                   <div class="text-h5 text-left">Mint or Convert &nbsp; &nbsp;
                     <q-icon size="sm" class="text-grey-5" name="info">
                     </q-icon>
                   </div><br>
                   <!---->
                   <div class="row">
                     <div class="col">
                       <q-select color="purple-12" v-model="this.model1" :options="this.options1" label="Label">
                       </q-select>
                     </div>
                     <div class="col-2"></div>
                     <div class="col text-right">
                       <q-select color="purple-12" v-model="this.model" :options="this.options" label="Label">
                       </q-select>
                     </div>
                   </div> <!-- div class row -->
                   <!---->
                   <div class="mini row justify-center">Mint<br></div>
                   <div class="row">
                     <div class="col"><q-input outlined dense v-model="text1"></q-input>
                     </div>
                     <div class="col">
                       <div class="row justify-center">
                         <div class="justify-center">
                           <q-btn outline
                                  @click="doit()"
                                  round color="gray-6"
                                  icon="animation">
                           </q-btn>
                         </div>
                       </div>
                     </div>
                     <div class="col">
                       <q-field outlined dense stack-label>
                         <template v-slot:control>
                           <div class="self-center full-width no-outline" tabindex="0">Field content1</div>
                         </template>
                       </q-field>
                     </div>
                   </div>
                 </q-card-section>
                 <!-- Summary Section -->
                 <q-card-section>
                   <div class="row">
                     <div class="col"></div>
                     <div class="col"></div>
                     <div class="col">
                       <q-field outlined dense stack-label>
                         <template v-slot:control>
                           <div class="self-center full-width dense no-outline" tabindex="0">Field1</div>
                         </template>
                       </q-field>
                       <div style="font-size:10px;">- Subject to mint fee &nbsp;
                         <q-icon class="text-grey-5" name="info">
                         </q-icon>
                       </div>
                       <q-field outlined dense stack-label>
                         <template v-slot:control>
                           <div class="self-center full-width dense no-outline" tabindex="0">Field2</div>
                         </template>
                       </q-field>
                     </div>
                   </div>
                 </q-card-section>
                 <!---->
              </q-card>
                <!-- go home -->
                 <q-card-section>
                   <div class="q-gutter-sm row justify-center">
                     <div>Transaction click <i>here</i></div>
                     <q-btn
                           no-caps
                           size="25px"
                           align="center"
                           to="/"
                           class="full-width q-px-xl q-py-xs center"
                           color="grey-6"
                           label="Home"
                           >
                     </q-btn>
                   </div>
                 </q-card-section>
             </div>
    </q-card>
  </div>
</template>

<script>
// import notifyAlert from 'src/services/notify-alert'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Mintconv',
  data () {
    return {
      model: 'FREEOS',
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      model1: 'POINTS',
      options1: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      text1: '',
      onItemClick: '',
      points: '12,235',
      freetok: '38,000',
      price: '0.02145',
      price_trend: '0.0025',
      stackedpoints: '1123',
      iteration: 0,
      unlockpercent: '13',
      freeby: '23433.12',
      targetAccountName: 'billbeaumont',
      targetquantity: '1.0000 FREEOS',
      memostring: 'minted'
    }
  },
  computed: {
    ...mapState({
      accountName: state => state.account.accountName
    })
  },
  methods: {
    ...mapActions('svr', ['mintConvert']),
    doit () {
      this.mintConvert(this.accountName, this.targetAccountName, this.targetquantity, this.memostring)
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
