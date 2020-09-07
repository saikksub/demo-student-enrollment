<template>
  <q-layout>
    <div class="flex justify-center items-center" style="height: 100vh;">
      <q-inner-loading showing>
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </div>
  </q-layout>
</template>

<script>
export default {
  mounted () {
    this.$nextTick(this.init)
  },
  methods: {
    init () {
      console.log('here')
    }
  }
}
</script>
