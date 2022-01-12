<template>
  <!-- -->
  <div class="q-gutter-y-md q-mx-auto" style="max-width: 400px">
    <!-- Title/Intro Section -->
    <q-card flat bordered class="mycard">
      <!-- Removed q-toolbar from here -->
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
                      @click="gohome()"
                      class="full-width q-px-xl q-py-xs center"
                      color="grey-6"
                      label="Register with Freeos"
                    >
                  </q-btn><br>
                  <q-btn
                   flat
                   no-caps
                   size="25px"
                   align="center"
                   @click="gohome()"
                   class="full-width q-px-xl q-py-xs center"
                   color="grey-6"
                   label="Sign In"
                   >
                  </q-btn>
                 </div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn label="Logout (Decline)" v-if="isAuthenticated" no-caps flat style="justify-self: flex-end;" @click="() => logout()"></q-btn>
            </q-card-actions>
          </q-card>
    </q-card>
  </div>
</template>

<script>
// import notifyAlert from 'src/services/notify-alert'
// import {"las la-circle"} from '@quasar/extras/line-awesome'
import { mapActions, mapGetters, mapState } from 'vuex'
import notifyAlert from 'src/services/notify-alert'

export default {
  name: 'Vote',
  data () {
    return {
      drawerRight: false,
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
    gohome () { // Register current user to backend (call backend;s register)
      // this.addRegUser(this.accountName) // NOTE: Write to Backend - Register this User. (?This is not getUserTable?)
      // TODO write registration data to backend 'users' table.
      // console.log('isRegOpen=', this.isRegOpen)
      notifyAlert('warning', 'So far this do nothing.')
      this.$router.push('/land') // back to home page
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
