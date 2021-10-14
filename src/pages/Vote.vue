<template>
  <!-- Survey.vue -->
  <div>
  <q-card dark bordered class="bg-grey-9 my-card">
    <q-card-section>
      <div class="text-h6">Our Changing Planet</div>
      <div class="text-subtitle2">by John Doe</div>
    </q-card-section>

    <q-separator dark inset></q-separator>

    <q-card-section>
      {{ lorem }}
    </q-card-section>
  </q-card>
  </div>
</template>

<script>
export default {
  name: 'Survey',
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

.my-card {
width: 400px;
max-width: 450px;
}
</style>
