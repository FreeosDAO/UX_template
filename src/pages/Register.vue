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
               </div><br><br>
               <div>
                 <div class="q-gutter-sm">
                 <q-checkbox v-model="right" label="I accept Freeos's Terms of Service."></q-checkbox>
               </div>
               </div>
                <!-- go home -->
             </q-card-section>
             <q-card>
               <q-card-section class="text-h6">
                  <div class="q-gutter-sm row justify-center">
                    <q-btn
                      dense
                      no-caps
                      size="25px"
                      align="center"
                      @click="this.registerUser"
                      class="full-width q-px-xl q-py-xs center"
                      color="grey-6"
                      label="Register with Freeos"
                    >
                  </q-btn>
                 </div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn label="Logout (Decline)" no-caps flat style="justify-self: flex-end;" @click="byebye()"></q-btn>
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

export default {
  name: 'Register',
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
      this.addRegUser(this.accountName) // NOTE: Write to Backend - Register this User. todo note that it should setup
      // todo ... isRegOpen to true if go wrong.

      notifyAlert('warning', 'Going to Home page.')
      this.hideModal()
      // this.$router.push('/land') // back to home page todo remove as not necessary
    },
    byebye () {
      this.hideModal()
      notifyAlert('warning', 'Exiting.')
      this.logout()
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
