<template>
<!-- Congratulations Survey Page -->
  <div class="q-gutter-y-md q-mx-auto" style="max-width: 550px">
    <!-- Title/Intro Section -->
    <q-card flat bordered class="mycard">
      <q-card-section>
        <div class="text-h5 text-center">Congratulations!</div>
      </q-card-section>
      <q-card flat class="mycard1">
        <q-card-section>
          {{ lorem }}
        </q-card-section>
        <q-card-section>
          <q-img
            :src="'https://placeimg.com/500/300/nature'"
            spinner-color="white"
            class="center"
          ></q-img>
        </q-card-section>
        <q-card-section></q-card-section>
      </q-card>
    </q-card>
    <q-card flat bordered class="mycard">
      <q-card-section class="text-center">
        <q-btn
          size="18px"
          no-caps
          class="q-px-xl q-py-xs center"
          color="grey-6"
          @click="handleClick()"
          label="Back Home"
        ></q-btn>
      </q-card-section>
    </q-card>
    <!-- end of Title/Intro section -->
  </div>
</template>
<script>
export default {
  name: 'congrats',
  data () {
    return {
      version: '',
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
    },
    handleClick () {
      this.$router.push('/land')
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
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}
</style>
