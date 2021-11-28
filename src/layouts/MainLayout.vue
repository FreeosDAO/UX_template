<template>
  <!-- Version UX_Old -->
  <q-layout view="hHh Lpr fFf">
    <q-header reveal bordered color="grey-2" height-hint="98">
      <q-toolbar style="justify-content: space-between;" bordered class="ux_bar text-uxblue">
        <q-btn :style="'visibility: ' + (isAuthenticated ? 'visible' : 'hidden')" dense flat round icon="menu" @click="drawer = !drawer" />
        <div v-if="isAuthenticated">{{this.version}}</div>
        <div style="display: flex; align-items: center;">
          <img width="35" src="~assets/decentralised.jpg"> &nbsp;
          <div v-if="isAuthenticated" style="margin-right: 1rem;">{{accountName}}</div>
          <q-btn color="grey" label="Login" v-if="!isAuthenticated" @click="() => connectWallet('anchor')">
          </q-btn>
          <q-btn label="Logout" v-if="isAuthenticated" no-caps flat style="justify-self: flex-end;" @click="() => logout()"></q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      :width="200"
      :breakpoint="800"
      bordered
      content-class="bg-grey-0"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList">
            <q-item :key="index" clickable :active="selectedItemLabel === menuItem.label" active-class="bg-grey-4" v-ripple @click="onSelectMenu(menuItem)">
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script>
// import WalletLoginDialog from 'components/accountManagement/WalletLoginDialog'
import { mapState, mapActions, mapGetters } from 'vuex'
// import { getSystemTable } from 'src/store/svr/actions'

const menuList = [
  {
    icon: 'get_app',
    label: 'Claim',
    separator: true,
    route: '/claim'
  },
  {
    icon: 'get_app',
    label: 'Landing',
    separator: true,
    route: '/land'
  },
  {
    icon: 'get_app',
    label: 'My Freeos',
    separator: true,
    route: '/test'
  },
  {
    icon: 'get_app',
    label: 'Freeos Economy',
    separator: true,
    route: '/test'
  },
  {
    icon: 'get_app',
    label: 'terms',
    separator: true,
    route: '/terms'
  },
  {
    icon: 'get_app',
    label: 'Goal/Rewards',
    separator: true,
    route: '/goal'
  },
  {
    icon: 'get_app',
    label: 'Register',
    separator: true,
    route: '/register'
  },
  {
    icon: 'get_app',
    label: 'Transfer',
    separator: true,
    route: '/tran'
  },
  {
    icon: 'get_app',
    label: 'Mint/Convert',
    separator: true,
    route: '/mint'
  },
  {
    icon: 'get_app',
    label: 'Stake',
    separator: true,
    route: '/test'
  },
  {
    icon: 'get_app',
    label: 'Re-Register',
    separator: true,
    route: '/test'
  },
  {
    icon: 'get_app',
    label: 'Proton Swap',
    separator: true,
    route: '/test'
  },
  {
    icon: 'get_app',
    label: 'Info',
    separator: true,
    route: '/test'
  },
  {
    icon: 'get_app',
    label: 'Community Chat',
    separator: true,
    route: '/test'
  },
  {
    icon: 'get_app',
    label: 'Sign-Out',
    separator: true,
    route: '/test'
  },
  {
    icon: 'get_app',
    label: 'Survey',
    separator: true,
    route: '/survey'
  },
  {
    icon: 'get_app',
    label: 'Vote',
    separator: true,
    route: '/vote'
  },
  {
    icon: 'get_app',
    label: 'Ratification',
    separator: true,
    route: '/ratify'
  },
  {
    icon: 'get_app',
    label: 'Test',
    separator: true,
    route: '/test'
  },
  {
    icon: 'get_app',
    label: 'Congratulations',
    separator: true,
    route: '/congs'
  }
]
export default {
  data () {
    return {
      version: '',
      isShowDrawerButton: false,
      drawer: false,
      selectedItemLabel: null,
      tokenType: '',
      menuList
    }
  },
  computed: {
    ...mapState({
      accountName: state => state.account.accountName
    }),
    ...mapGetters('account', ['isAuthenticated', 'connecting'])
  },
  methods: {
    ...mapActions('svr', ['getParametersTable', 'getSystemTable']),
    onSigninFinish (event) {
      if (event.isFinished) {
        this.isShowDrawerButton = true
        this.drawer = true
        this.onSelectMenu(menuList[0])
      }
    },
    onSelectMenu (menuItem) {
      (this.$route.path !== menuItem.route) && this.$router.push(menuItem.route)
      this.selectedItemLabel = menuItem.label
    },
    ...mapActions('account', ['checkIfLoggedIn', 'connectWallet', 'logout']),
    whatever () { // test
      // this.actionWhateverCompute(this.accountName)
    }
  },
  watch: {
    isAuthenticated: {
      immediate: true,
      handler: function (val) {
        // if (val && this.accountName) {
        // this.getAccountBang()
        // this.getActionBoo()
        // }
        if (val && this.$route.query.returnUrl) {
          this.$router.push({ path: this.$route.query.returnUrl })
        }
      }
    }
  },
  created () {
    this.checkIfLoggedIn()
    this.version = process.env.V_STRING
    this.getSystemTable()
    this.getParametersTable()
  }
  // mounted () {
  // this.getTable(this.accountName)
  // }
}
// Photo by Matthew Henry on Unsplash
</script>

<style>
.ux_bar {
  background-color: #3B4752;
}
.uxblue {
  background-color: #00ADEE;
  color: #00ADEE;
}
#site-container {
  margin: 0px auto;
  text-align: left;
  width: 700px;
  zoom: 1;
  position: relative;
}

@font-face {
  font-family: 'MyWebFont';
  src: url('Franklin Gothic Medium Regular/Franklin Gothic Medium Regular.ttf')  format('truetype');
}
.my-font {
  font-family:'MyWebFont'
}

.pex1{
  padding-right: 2em;
}

.bottom-three {
  margin-bottom: 1cm;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #4080b8;
}

li {

  float: left;
}

div.a {
  font-size: 12px;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  float: right;
}

li a:hover {
  background-color: grey;
}

li a:hover:not(.active) {
  background-color: grey;
}

.div-with-bg {
  background-image: url("../assets/SkyColor.jpg");
  background-size: cover;
  height: 100%;
  width: 100%;
}

.text-area {
  font-size: 1.3em;
  margin: 25px;
}

.myDiv{
  width: 190px;
  padding: 10px;
  background: #f99f53;
  text-align: center;
  margin: 0 auto;
  border: 1px solid #f97200;
  color: #fff;
}

body{
  background-image: url("../assets/bridge2.jpeg");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>
