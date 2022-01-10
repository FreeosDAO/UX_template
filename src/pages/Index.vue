<template>
  <!-- NOTE: Index is calling landing page at the beginning of whole service -->
  <div class="text-center q-pa-lg v-text-field">
    <!-- <div class="text-h4 text-weight-medium q-mb-md">Proton DFinity Bridge</div> -->
    <div class="text-h6 text-weight-regular">
      <div>
        <!-- Welcome at {{this.version}} -->
      </div>
      <div class="q-mt-sm q-mb-sm v-text-field">
        <!--This website is for testing purposes only. It is not public and not official,
        however feel invited to https://freeos.io -->
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

// import { isAuthenticated } from 'src/store/account/getters'
// import { mapGetters } from 'vuex'

import { mapGetters, mapState } from 'vuex'

export default {
  name: 'PageIndex',
  data () {
    return {
      version: ''
    }
  },
  methods: {
    ver () {
      this.version = process.env.V_STRING
    }
  },
  computed: {
    ...mapState({
      accountName: state => state.account.accountName
    }),
    ...mapGetters('account', ['isAuthenticated'])
  },
  watch: {
    isAuthenticated: { // gather info from users table on registration when account name changes.
      immediate: true,
      handler: function (val) {
        if (val && this.accountName) {
          // this.getUserTable(this.accountName)
          this.$router.push('/land') // back to home page
          console.log('***index.vue this.accountName=', this.accountName)
        }
        if (val && this.$route.query.returnUrl) {
          this.$router.push({ path: this.$route.query.returnUrl })
        }
      }
    }
  }
}
</script>
<style scoped>
  .v-text-field {
    color: grey
  }
</style>
