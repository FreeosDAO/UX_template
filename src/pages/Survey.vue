<template>
  <!-- Survey.vue -->
  <div class="q-gutter-y-md q-mx-auto" style="max-width: 550px">
  <q-card flat bordered class="mycard">
    <q-card-section>
      <div class="text-h5 text-center">This Weeks Survey</div>
      <div class="text-subtitle2 text-center">Survey iteration &nbsp; {{iteration}}</div>
    </q-card-section>
    <!--  -->
    <q-card flat class="mycard1">
      <q-card-section>
        <div class="text-subtitle2 text-center"> About this weeks survey</div>
        {{ lorem }}
      </q-card-section>
    </q-card>
    <!-- -->
    <q-card-section>
      <q-separator inset class="grey6"></q-separator>
      <q-expansion-item
        expand-separator
        icon="perm_identity"
        label="FAQ's"
      >
        <q-card>
          <q-card-section>
            {{lorem}}
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator inset class="grey6"></q-separator>
    </q-card-section>
    <!-- -->
    <q-expansion-item class="text-h6 bg-grey-6 text-white text-center"
      expand-separator
      icon="perm_identity"
      label="Start the survey"
     >
       <q-card>
         <!-- -->
         <q-card-section class="text-black text-body2">
           <div class="text-subtitle2 text-center">Wider Crypto Economy Sentiment</div>
           <div class="text-left"> Q1: Do you feel the Bitcoin (BTC) and wider crypto market is growing (bull market),
             shrinking (bear market) or neither (going sideways)? </div>
           <br><p>&nbsp; &nbsp; Need more info? &nbsp;  <q-icon size="sm" clickable class="text-grey-6" @click="bar2 = true" name="info"></q-icon></p>
           <!-- Modal Dialog -->
           <q-dialog v-model="bar2" persistent transition-show="flip-down" transition-hide="flip-up">
             <q-card class="bg-grey6 text-black" style="max-width: 400px">
               <q-bar>
                 <q-icon class="text-blue" name="info"></q-icon>
                 <div>Considerable Markets</div>

                 <q-space></q-space>

                 <q-btn dense flat icon="close" v-close-popup>
                   <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                 </q-btn>
               </q-bar>

               <q-card-section>
                 <div class="text-h6">Bear Markets Meaning</div>
               </q-card-section>
               <q-card-section class="q-pt-none">
                 {{lorem}} <br> {{lorem}}
               </q-card-section>
               <q-card-section>
                 <div class="text-h6">Skunk Markets Meaning</div>
               </q-card-section>
               <q-card-section class="q-pt-none" style="min-height: 50vh;">
                 {{lorem}} <br> {{lorem}}
               </q-card-section>
             </q-card>
           </q-dialog>
           <!-- end of modal dialog -->
           <div class="example ex1">
              <p><label class="radio greyux">
               <input type="radio" id="1" value="1" name="group1" v-model="value_radio1"/>
               <span>Growing (bull market)</span>
             </label></p>
             <p><label class="radio greyux">
               <input type="radio" id="2" value="2" name="group1" v-model="value_radio1"/>
               <span>Shrinking (bear market)</span>
             </label></p>
             <p><label class="radio greyux">
               <input type="radio" id="3" value="3" name="group1" v-model="value_radio1"/>
               <span>Neither (going sideways)</span>
             </label></p>
           </div>
           <q-separator inset class="grey6"></q-separator>
           <p></p>
           <div class="text-left"> Q2: How long will the above Bitcoin and crypto market last before it changes direction?
           </div><br>
           <div>
            <div class="q-pa-md">
              <q-slider
                v-model="submitData.slider1"
                :min="1"
                :max="48"
                :step="1"
                color="grey-6"
                label
                :label-value="'Months:' + submitData.slider1"
                label-always
              ></q-slider>
              <div class="row">
                <div class="col">
                   1
                </div>
                <div class="col">
                  <div class="text-center">
                    <q-badge class="text-subtitle2" outline color="grey-8">
                      Months: {{ submitData.slider1 }}
                    </q-badge>
                  </div>
                </div>
                <div class="col text-right">
                  48
                </div>
              </div>
            </div>
           </div>
         </q-card-section>
       </q-card>
      </q-expansion-item>
    </q-card>
    <q-card flat bordered class="mycard">
    <!-- Second Group of Questions -->
    <q-card>
    <q-expansion-item class="text-h6 bg-grey-6 text-white text-center"
                        expand-separator
                        icon="perm_identity"
                        label="Next Questions"
    >
      <q-card>
        <q-card-section class="text-black text-body2">
        <div class="text-subtitle2 text-center">Freeos Economy Sentiment</div>
        <div class="text-left"> Q3: Do you feel the Freeos economy is growing (bull market),
          shrinking (bear market) or neither (going sideways)? </div>
        <br><p>&nbsp; &nbsp; Need more info? &nbsp;  <q-icon size="sm" class="text-grey-6" name="info"></q-icon></p>
        <!-- <div id="q-app" style="min-height: 100vh;"> -->
        <div>
          <div class="example ex1">
            <p><label class="radio greyux">
              <input type="radio" value="radio-1" v-model="value_radio2" name="group2"/>
              <span>Growing (bull market)</span>
            </label></p>
            <p><label class="radio greyux">
              <input type="radio" value="radio-2" v-model="value_radio2" name="group2"/>
              <span>Shrinking (bear market)</span>
            </label></p>
            <p><label class="radio greyux">
              <input type="radio" value="radio-3" v-model="value_radio2" name="group2"/>
              <span>Neither (going sideways)</span>
            </label></p>
          </div>
        </div>
        <!-- -->
        <q-separator inset class="grey6"></q-separator>
        <p></p>
        <div class="text-left">Q4: How long will the above Freeos market last before it changes direction?
        </div><br>
        <div>
          <div class="q-pa-md">
            <q-slider
              v-model="submitData.slider2"
              :min="1"
              :max="48"
              :step="1"
              color="grey-6"
              label
              :label-value="'Months:' + submitData.slider2"
              label-always
            ></q-slider>
            <div class="row">
              <div class="col">
                1
              </div>
              <div class="col">
                <div class="text-center">
                  <q-badge class="text-subtitle2" outline color="grey-8">
                    Months: {{ submitData.slider2 }}
                  </q-badge>
                </div>
              </div>
              <div class="col text-right">
                48
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
    </q-expansion-item>
    </q-card>
    </q-card>
    <!-- MAIN CARD -->
    <!-- -->
    <q-card flat bordered class="mycard">
      <q-expansion-item class="text-h6 bg-grey-6 text-white text-center"
                        expand-separator
                        icon="perm_identity"
                        label="Last Question"
      >
        <q-card class="text-black text-body2">
          <!-- -->
          <div class="text-subtitle2 text-center">Priorities</div>
          <div class="q-pa-md text-left">
            <div> Q5: Select the three most priorities for this week. <br>
              Ordered, weighted vote for:<br></div><br>
            - Growing the participants <br>
            - Stabilising the price<br>
            - Raising the locking threshold<br>
            - Burning FREEOS<br>
            - Pooling FREEOS in a Liquidity Pool<br>
            - Growing the Reserve Pool (to prepare for future price drops/economic crashes)
          </div>
          <p>&nbsp; &nbsp; Need more info? &nbsp;  <q-icon size="sm" class="text-grey-6" name="info"></q-icon></p>
          <div>
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 350px">
                <q-select clearable filled color="grey-6" v-model="selection1" :options="options" label="Select Priority 1"></q-select>
                <q-select clearable filled color="grey-6" v-model="selection2" :options="options" label="Select Priority 2"></q-select>
                <q-select clearable filled color="grey-6" v-model="selection3" :options="options" label="Select Priority 3"></q-select>
              </div>
              <!-- -->
              <br>
            </div>
          </div>
        </q-card>
      </q-expansion-item>
    </q-card>
    <q-card flat bordered class="mycard">
      <q-card-section class="text-center">
        <q-btn
          size="18px"
          @click="submit()"
          no-caps
          class="q-px-xl q-py-xs center"
          color="grey-6"
          label="Submit"
        ></q-btn>
      </q-card-section>
    </q-card>
</div>
</template>

<script>
import notifyAlert from 'src/services/notify-alert'
export default {
  name: 'Survey',
  data () {
    return {
      version: '',
      iteration: 0.0,
      submitData: { // results to be passed to the backend
        slider1: 1,
        slider2: 1
      },
      // selectors:
      options: [
        'Growing the participants', 'Stabilising the price', 'Raising the locking treshold',
        'Burning FREEOS', 'Pooling FREEOS in a Liquidity Pool',
        'Growing the Reserve Pool (to prepare for future price drops/economic crashes'
      ],
      selection1: '',
      selection2: '',
      selection3: '',
      bar2: false,
      // radio buttons:
      radio: 2,
      radio2: 1,
      group1: 2,
      group2: 2,
      value_radio1: '',
      value_radio2: '',
      lorem: 'Lorem ipsum dolor sit amet, consectetur' +
        ' adipiscing elit, sed do eiusmod tempor incididunt ' +
        'ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
        ' quis nostrud exercitation ullamco laboris nisi ut aliquip' +
        ' ex ea commodo consequat.'
    }
  },
  methods: {
    ver () {
      this.version = process.env.V_STRING
    },
    submit () {
      // const self = this
      this.submitData.currentAccountName = this.accountName
      console.log('Survey Data = ', this.submitData)
      // TODO Verify entry data here e.g. Is the survey complete?
      // // this.addSurveyNew(this.submitData) // Submit to back-end to sum with global results
      // // .then(response => { // TODO remove it
      // self.resetForm()
      notifyAlert('success', 'Survey Submit Successful.')
      // Set up user_mode in Vuex to enable further landing page actions.
      this.$router.push('/congs')
    },
    resetForm () {
      this.submitData = {
        // TODO is that necessary ??
      }
    }
  }, // end of methods
  created () {
    this.ver()
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

.ex1 span {
  display: block;
  padding: 5px 10px 5px 25px;
  border: 2px solid #ddd;
  border-radius: 5px;
  position: relative;
  transition: all 0.25s linear;
  background-color: #e0e1e1;
}
.ex1 span:before {
  content: '';
  position: absolute;
  left: 5px;
  top: 50%;
  -webkit-transform: translatey(-50%);
  transform: translatey(-50%);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #9f9e9f;
  transition: all 0.25s linear;
}
.ex1 input:checked + span {
  background-color: #9f9e9f;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
}
.ex1 .greyux input:checked + span {
  color: #000000;
  border-color: #9F9E9F;
}
.ex1 .greyux input:checked + span:before {
  background-color: #f4f5f4;
}
.dial1 {
  color: #a3a3a3;
}
.dial2 {
  color: #999999;
}
.dial3 {
  color: #5b4d47;
}
.dial4 {
  color: #c4ccd4;
}
</style>
