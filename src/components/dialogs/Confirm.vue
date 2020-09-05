<template>
  <q-dialog v-model="show" persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6">
          {{ title }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ message }}
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="NO" color="black" v-close-popup />
        <q-btn flat label="YES" color="primary" @click="this.submit" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      title: '',
      message: '',
      callback: () => {}
    }
  },
  watch: {
    show (value) {
      if (!value) {
        this.title = ''
        this.message = ''
        this.callback = () => {}
      }
    }
  },
  created () {
    this.$root.$on('confirm/show', this.showDialog)
  },
  methods: {
    showDialog (props) {
      const { title, message, callback } = props || {}
      if (!(title && message && typeof callback === 'function')) {
        return
      }
      this.title = title
      this.message = message
      this.callback = callback
      this.show = true
    },
    submit () {
      if (typeof this.callback === 'function') {
        this.callback(true)
      }
      this.show = false
    }
  }
}
</script>
