<template>
  <!-- Vote.vue -->
  <div class="q-gutter-y-md q-mx-auto" style="max-width: 550px">
    <!-- Title/Intro Section -->
    <q-card flat bordered class="mycard">
      <q-card-section>
        <div class="text-h5 text-center">This Weeks Vote</div>
        <div class="text-subtitle2 text-center">Voting iteration &nbsp; {{iteration}}</div>
        <div class="text-subtitle2 bg-grey-4 text-center">Closes in: {{expiration_timer}}</div>
      </q-card-section>
      <q-card flat class="mycard1">
        <q-card-section>
          <div class="text-subtitle2 text-center"> About this weeks survey</div>
          {{ lorem }}
        </q-card-section>
      </q-card>
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
    </q-card>
    <!-- end of Title/Intro section -->
    <!-- Start Voting section-->
    <q-card flat bordered class="mycard">
      <q-card-section class="bg-grey-6 tx-white">
        <div class="text-h6 text-white text-center">Start Voting</div>
      </q-card-section>
      <q-card-section>
        <div class="text-subtitle2 text-center">Issuance</div>
        Q1: What percentage of the issuance should be minted this week?
        <br><br><p>&nbsp; &nbsp; Need more info? &nbsp;  <q-icon size="sm" class="text-grey-6" name="info"></q-icon></p>
      </q-card-section>
        <div class="q-pa-md">
          <q-slider
            v-model="slider1"
            :min="1"
            :max="100"
            :step="1"
            color="grey-6"
            label
            :label-value="slider1 + ' percent'"
            label-always
          ></q-slider>
          <div class="row">
            <div class="col">
              0%
            </div>
            <div class="col">
              <div class="text-center">
                <q-badge class="text-subtitle2" outline color="grey-8">
                  {{ slider1 }} percent
                </q-badge>
              </div>
            </div>
            <div class="col text-right">
              100%
            </div>
          </div>
        </div>
    </q-card>
    <!-- end of 'Start Voting' section-->
    <!-- 'Next vote' section-->
    <q-card flat bordered class="mycard">
      <q-card-section class="bg-grey-6 tx-white">
        <div class="text-h6 text-white text-center">Next Vote</div>
      </q-card-section>
      <q-card-section>
        <div class="text-subtitle2 text-center">Mint Fee</div>
        Q2: What should be the mint fee for this week?
        <br><br><p>&nbsp; &nbsp; Need more info? &nbsp;  <q-icon size="sm" class="text-grey-6" name="info"></q-icon></p>
      </q-card-section>
      <div class="q-pa-md">
        <q-slider
          v-model="slider2"
          :min="6"
          :max="30"
          :step="1"
          color="grey-6"
          label
          :label-value="slider2 + ' percent'"
          label-always
        ></q-slider>
        <div class="row">
          <div class="col">
            6%
          </div>
          <div class="col">
            <div class="text-center">
              <q-badge class="text-subtitle2" outline color="grey-8">
                {{ slider2 }} percent
              </q-badge>
            </div>
          </div>
          <div class="col text-right">
            30%
          </div>
        </div>
      </div>
    </q-card>
    <!-- end of 'Next vote' section-->
    <!-- Start 'Half way there' section-->
    <q-card flat bordered class="mycard">
      <q-card-section class="bg-grey-6 tx-white">
        <div class="text-h6 text-white text-center">Half way there...</div>
      </q-card-section>
      <q-card-section>
        <div class="text-subtitle2 text-center">Locking Threshold</div>
        Q3: What price should the Locking Threshold be this week?
        <br><br><p>&nbsp; &nbsp; Need more info? &nbsp;  <q-icon size="sm" class="text-grey-6" name="info"></q-icon></p>
      </q-card-section>
      <div class="q-pa-md">
        <q-slider
          v-model="slider3"
          :min="6"
          :max="30"
          :step="1"
          color="grey-6"
          label
          :label-value="slider3 + ' percent'"
          label-always
        ></q-slider>
        <div class="row">
          <div class="col">
            6%
          </div>
          <div class="col">
            <div class="text-center">
              <q-badge class="text-subtitle2" outline color="grey-8">
                {{ slider3 }} percent
              </q-badge>
            </div>
          </div>
          <div class="col text-right">
            30%
          </div>
        </div>
      </div>
    </q-card>
    <!-- end of 'Half way there' section-->
    <!-- 'Next vote' section -->
    <q-card flat bordered class="mycard">
      <q-card-section class="bg-grey-6 tx-white">
        <div class="text-h6 text-white text-center">Next vote</div>
      </q-card-section>
      <q-card-section>
        <div class="text-subtitle2 text-center">Pool or burn?</div>
        Q4: Should this week's FREEOS used to pay the mint fee to be Burned, or sent to Liquidity Pools?
        <br><br><p>&nbsp; &nbsp; Need more info? &nbsp;  <q-icon size="sm" class="text-grey-6" name="info"></q-icon></p>
        <!-- <div id="q-app" style="min-height: 100vh;"> -->
        <div>
          <div class="example ex1">
            <p><label class="radio greyux">
              <input type="radio" id="1" value="1" name="group1" v-model="value_radio1"/>
              <span>Burned</span>
            </label></p>
            <p><label class="radio greyux">
              <input type="radio" id="2" value="2" name="group1" v-model="value_radio1"/>
              <span>Send to Liquidity Pool</span>
              </label></p>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <!-- 'Nearly there' section -->
    <q-card flat bordered class="mycard">
      <q-card-section class="bg-grey-6 tx-white">
        <div class="text-h6 text-white text-center">Nearly there...</div>
      </q-card-section>
      <q-card-section>
        <div class="text-subtitle2 text-center">Reserve Pool % to be released</div>
        Q5: What percentage of the Reserve Pool assets should be released for sale?
        <br><br><p>&nbsp; &nbsp; Need more info? &nbsp;  <q-icon size="sm" class="text-grey-6" name="info"></q-icon></p>
      </q-card-section>
      <div class="q-pa-md">
        <q-slider
          v-model="slider4"
          :min="0"
          :max="50"
          :step="1"
          color="grey-6"
          label
          :label-value="slider4 + ' percent'"
          label-always
        ></q-slider>
        <div class="row">
          <div class="col">
            0%
          </div>
          <div class="col">
            <div class="text-center">
              <q-badge class="text-subtitle2" outline color="grey-8">
                {{ slider4 }} percent
              </q-badge>
            </div>
          </div>
          <div class="col text-right">
            50%
          </div>
        </div>
      </div>
    </q-card>
    <!-- end of 'Nearly there' section-->
    <!-- 'Next vote' section -->
    <q-card flat bordered class="mycard">
      <!-- -->
      <q-card-section class="bg-grey-6 tx-white">
        <div class="text-h6 text-white text-center">Next vote</div>
      </q-card-section>
      <!-- -->
      <div class="text-subtitle2 text-center">Allocate to Partners</div>
      <div class="q-pa-md">
        <div> Select your top three choices to receive partner founding this week:</div><br>
        - ABC<br>
        - XYZ<br>
        - DEF<br>
        - HIJ<br>
        - KLM<br>
        - NMO<br>
        - PQU
      </div>
      <p>&nbsp; &nbsp; Need more info? &nbsp;  <q-icon size="sm" class="text-grey-6" name="info"></q-icon></p>
      <div>
        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 350px">
            <q-select clearable filled color="grey-6" v-model="selection1" :options="options" label="Select Priority 1"></q-select>
            <q-select clearable filled color="grey-6" v-model="selection2" :options="options" label="Select Priority 2"></q-select>
            <q-select clearable filled color="grey-6" v-model="selection3" :options="options" label="Select Priority 3"></q-select>
          </div>
        </div>
      </div>
    </q-card>
    <q-card flat bordered class="mycard">
      <q-card-section class="text-center">
      <q-btn
        size="18px"
        disabled
        no-caps
        class="q-px-xl q-py-xs center"
        color="grey-6"
        label="Submit"
      ></q-btn>
      </q-card-section>
    </q-card>
    <!-- end of 'Next vote' section -->
  <!-- end -->
  </div>
</template>

<script>
export default {
  name: 'Vote',
  data () {
    return {
      version: '',
      options: [
        'Pink Coin Panda', 'Robin Hood', 'Night Glut', 'BabokOne',
        'Square Tire', 'Pooling Idiot', 'Liquid Support', 'Usable Monkey'
      ],
      iteration: 0,
      expiration_timer: '2 days 10 hours 30 min',
      slider1: 1,
      slider2: 6,
      slider3: 6,
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
