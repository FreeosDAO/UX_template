<template>
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
  created () {
    this.ver()
  }
}
</script>
<style scoped>
  .v-text-field {
    color: grey
  }
</style>
