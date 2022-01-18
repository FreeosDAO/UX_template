<template>
  <!-- -->
  <div class="q-gutter-y-md q-mx-auto" style="max-width: 400px">
    <!-- Title/Intro Section -->
    <q-card flat bordered class="mycard">
        <!-- Grey Intro Section -->
             <div class="row justify-center" >
               <q-card
                      flat round bordered
                      class="mycard1 bg-grey-4"
               >
                 <div class="text-black q-pa-md text-center">
                   <img width="35" src="~assets/tfreeos.png">
                   <div>Freeos</div>
                 </div>
                 <div class="row justify-center">
                   <div><i>Put some freedom in your pocket</i></div>
                 </div>
               </q-card>
             </div>
             <q-card-section class="text-center">
               <div class="text-h5">Register with Freeos</div><br>
               <div>Before you start, we need to register,
                 <br> or sign into the Freeos Governance App
                 <br> and accept our Terms of Service.
               </div>
               <div>
                 <div class="q-gutter-sm">
                   <!-- === -->
                   <!--
                   <p class="q-mb-md text-center" style="line-height:1.4;">For more info, <router-link to="/terms">click here</router-link></p>
                   -->
                   <q-checkbox id="termsCheckbox" v-model="termsCheckbox" /><label  for="termsCheckbox">I accept Freeos's <a class="cursor-pointer" style="text-decoration:underline" @click="showTerms = !showTerms">Terms of Service</a></label>
                   <div v-show="showTerms" style="width:100%;max-height:120px;overflow-y: auto;" class="text-left">
                     <terms/>
                   </div>
                  <!-- === -->
               </div>
               </div>
                <!-- go home -->
             </q-card-section>
             <q-card>
               <q-card-section class="text-h6">
                  <div class="q-gutter-sm row justify-center">
                    <q-btn
                      dense
                      :disabled="!termsCheckbox"
                      no-caps
                      size="25px"
                      align="center"
                      @click="this.registerUser"
                      class="full-width q-px-xl q-py-xs center"
                      color="grey-6"
                      label="Register with Freeos"
                    >
                  </q-btn>
                    <q-btn
                      dense
                      :disabled="!termsCheckbox"
                      no-caps
                      size="25px"
                      align="center"
                      @click="this.signIn"
                      class="full-width q-px-xl q-py-xs center"
                      color="grey-6"
                      label="Sign in"
                    >
                    </q-btn>
                 </div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn label="Logout (Decline)" no-caps flat style="justify-self: flex-end;" @click="byebye()"></q-btn>
              <!-- <q-btn label="Back" no-caps flat style="justify-self: flex-end;" @click="back()"></q-btn> -->
            </q-card-actions>
          </q-card>
    </q-card>
  </div>
</template>

<script>
// import notifyAlert from 'src/services/notify-alert'
// import {"las la-circle"} from '@quasar/extras/line-awesome'
import { mapMutations, mapActions, mapGetters, mapState } from 'vuex'
import notifyAlert from 'src/services/notify-alert'
import terms from 'pages/terms'
export default {
  name: 'Register',
  components: {
    terms
  },
  data () {
    return {
      // drawerRight: false,
      points: '12,235', // TODO read that data from centralized place in Vuex
      freetok: '38,000',
      price: '0.02145',
      price_trend: '0.0025',
      stackedpoints: '1123',
      iteration: 0,
      unlockpercent: '13',
      right: false,
      termsCheckbox: false,
      showTerms: false,
      freeby: '23433.12'
    }
  },
  computed: {
    ...mapState({
      accountName: state => state.account.accountName
    }),
    ...mapGetters('account', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('account', ['logout']),
    ...mapActions('svr', ['addRegUser']),
    ...mapMutations('svr', ['hideModal']),
    registerUser () { // Register current user to backend (call backend;s register)
      console.log('==> accountName <==', this.accountName)
      this.addRegUser(this.accountName) // NOTE: Write to Backend - Register this User.
      // todo setup isRegOpen true if registration wrong. OPTIONAL
      notifyAlert('warning', 'Going to Home page.')
      this.hideModal()
      // this.$router.push('/land') // back to home page todo REMOVE
    },
    byebye () {
      this.hideModal()
      notifyAlert('warning', 'Exiting. Logout')
      this.logout()
    },
    // back () {
    // this.hideModal()
    // notifyAlert('warning', 'Back to home page.')
    // },
    signIn () {
      this.hideModal()
      notifyAlert('warning', 'Sign In - operation not defined yet')
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
</style>
