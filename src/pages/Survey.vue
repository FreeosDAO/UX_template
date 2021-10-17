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
    <q-card-section class="bg-grey-6 tx-white">
      <div class="text-h6 text-white text-center">Start the survey</div>
    </q-card-section>
    <!-- -->
    <q-card-section>
      <div class="text-subtitle2 text-center">Wider Crypto Economy Sentiment</div>
      Q1: Do you feel the Bitcoin (BTC) and wider crypto market is growing (bull market),
      shrinking (bear market) or neither (going sideways)?
      <br><br><p>&nbsp; &nbsp; Need more info? &nbsp;  <q-icon size="sm" class="text-grey-6" name="info"></q-icon></p>
      <!-- <div id="q-app" style="min-height: 100vh;"> -->
      <div>
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
      </div>
      <!-- -->
      <q-separator inset class="grey6"></q-separator>
      <p></p>
      <p>Q2: How long will the above Bitcoin and crypto market last before it changes direction?
      </p>
      <div>
        <div class="q-pa-md">
          <q-slider
            v-model="slider1"
            :min="1"
            :max="48"
            :step="1"
            color="grey-6"
            label
            :label-value="'Months:' + slider1"
            label-always
          ></q-slider>
          <div class="row">
            <div class="col">
              1
            </div>
            <div class="col">
              <div class="text-center">
                <q-badge class="text-subtitle2" outline color="grey-8">
                  Months: {{ slider1 }}
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
    <q-card flat bordered class="mycard">
    <!-- Second Group of Questions -->
      <!-- -->
      <q-card-section class="bg-grey-6 tx-white">
        <div class="text-h6 text-white text-center">Next Questions</div>
      </q-card-section>
      <!-- -->
    <q-card-section>
      <div class="text-subtitle2 text-center">Freeos Economy Sentiment</div>
      Q3: Do you feel the Freeos economy is growing (bull market),
      shrinking (bear market) or neither (going sideways)?
      <br><br><p>&nbsp; &nbsp; Need more info? &nbsp;  <q-icon size="sm" class="text-grey-6" name="info"></q-icon></p>
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
      <p>Q4: How long will the above Freeos market last before it changes direction?
      </p>
      <div>
        <div class="q-pa-md">
          <q-slider
            v-model="slider2"
            :min="1"
            :max="48"
            :step="1"
            color="grey-6"
            label
            :label-value="'Months:' + slider2"
            label-always
          ></q-slider>
          <div class="row">
            <div class="col">
              1
            </div>
            <div class="col">
              <div class="text-center">
                <q-badge class="text-subtitle2" outline color="grey-8">
                  Months: {{ slider2 }}
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
    <!-- -->
  </q-card>
<!-- MAIN CARD -->
    <q-card flat bordered class="mycard">
      <!-- -->
      <q-card-section class="bg-grey-6 tx-white">
        <div class="text-h6 text-white text-center">Last Questions</div>
      </q-card-section>
      <!-- -->
      <div class="text-subtitle2 text-center">Priorities</div>
      <div class="q-pa-md">
      <div> Q5: Select the three most priorities for this week:</div><br>
        Ordered, weighted vote for;<br>
        Growing the participants <br>
        Stabilising the price<br>
        Raising the locking threshold<br>
        Burning FREEOS<br>
        Pooling FREEOS in a Liquidity Pool<br>
        Growing the Reserve Pool (to prepare for future price drops/economic crashes)
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
          <q-separator class="grey6"></q-separator>
          <p></p>
          <p>Q6: Not defined question TODO blah last before it changes direction?
          </p>
      </div>
      </div>
    </q-card>
</div>
</template>

<script scooped>
export default {
  name: 'Survey',
  data () {
    return {
      version: '',
      iteration: 0.0,
      // sliders:
      slider1: 1,
      slider2: 1,
      // selectors:
      options: [
        'Ordered, weighted vote for', 'Growing the participants', 'Stabilising the price', 'Raising the locking treshold',
        'Burning FREEOS', 'Pooling FREEOS in a Liquidity Pool', 'Growing the Reserve Pool'
      ],
      selection1: '',
      selection2: '',
      selection3: '',
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
    }
  },
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
</style>
