<template>
  <!-- Claim.vue -->
  <div class="q-gutter-y-md q-mx-auto" style="max-width: 400px">
    <!-- Title/Intro Section -->
    <q-card flat bordered class="mycard">
      <!-- Main Q-card -->
      <!-- <q-toolbar>
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
      </q-toolbar> -->
        <q-card-section>
            <div class="text-h5 text-left">Claim</div>
            <div>Select the weeks you wish to Claim first</div>
       </q-card-section>
          <!-- Dynamic Menu Section -->
      <div class="row justify-center" >
      <q-card-section class="mycard1 bg-grey-4" style="min-height: 50vh;">
        <q-list>
          <template v-for="(menuItem, index) in menuList">
            <q-item :key="index" clickable :active="selectedItemLabel === menuItem.label" active-class="bg-grey-6" v-ripple @click="onSelectMenu(menuItem)">
              <q-item-section avatar>
              </q-item-section>
              <q-item-section>
                <div>Week {{ menuItem.label }}</div>
                  <div class="text-h6">{{menuItem.points}} POINTS</div>
                <q-separator></q-separator>
              </q-item-section>
            </q-item>
          </template>
        </q-list>
      </q-card-section>
      </div>
      <!---->
      <!-- End scroll area -->
      <q-card-section class="bg-grey-4 mycard1 q-gutter-sm" style="position: relative; top:10px; left:18px;">
        <div>Current Week</div>
        <div>{{CurrentWeek}}</div>
      </q-card-section>
      <div><br><br><br><br><br></div>
      <q-btn
        style="position: absolute; bottom:135px; left:150px;"
        size="30px"
        round
        no-caps
        color="grey-6"
      ><div style="font-size: medium;">Claimed</div></q-btn>
          <q-card-section>
             <div class="q-gutter-sm row justify-center">
                     <q-btn
                           no-caps
                           size="25px"
                           align="center"
                           @click="onSubmit()"
                           class="full-width q-px-xl q-py-xs center"
                           color="grey-6"
                           label="Home"
                           >
                     </q-btn>
             </div>
          </q-card-section>
    </q-card>
  </div>
</template>

<script>
import notifyAlert from 'src/services/notify-alert'
const menuList = [
  {
    label: '12',
    points: '512'
  },
  {
    label: '13',
    points: '5112'
  },
  {
    label: '14',
    points: '5312'
  },
  {
    label: '15',
    points: '5120'
  },
  {
    label: '16',
    points: '512'
  },
  {
    label: '17',
    points: '12'
  },
  {
    label: '18',
    points: '1112'
  },
  {
    label: '19',
    points: '3512'
  }
]
export default {
  name: 'Claim',
  data () {
    return {
      accountName: 'placeHolder',
      tab: 'send',
      drawer: true,
      points: '12,235',
      freetok: '38,000',
      price: '0.02145',
      price_trend: '0.0025',
      stackedpoints: '1123',
      iteration: 0,
      unlockpercent: '13',
      CurrentWeek: '16',
      freeby: '23433.12',
      formdata: {
        account: null,
        token: null,
        amount: null,
        comment: null
      },
      selectedItemLabel: null,
      menuList
    }
  },
  methods: {
    onSubmit () {
      notifyAlert(1, 'Claim Data Updated')
      this.$router.push('/land') // back to home page
    },
    onSelectMenu (menuItem) {
      // (this.$route.path !== menuItem.route) && this.$router.push(menuItem.route)
      this.selectedItemLabel = menuItem.label
      console.log('Selected Item', menuItem.label)
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
