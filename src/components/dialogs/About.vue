<template>
  <q-dialog v-model="show">
    <q-card>
      <q-card-section>
        <div class="text-h6">
          Student Enroll Application
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <p>
          This is a demo application made by a freelancer at Upwork:<br>
          <a href="https://www.upwork.com/fl/saikksub" target="_blank">
            Kiran Sai Subramanyam K.
          </a>
        </p>
        <p>
          The source code of this project is available on GitHub:<br>
          <a href="https://github.com/saikksub/demo-student-enrollment" target="_blank">
            Source code repository
          </a>
        </p>
        <p>
          <strong>Made with Vue + Quasar</strong>.<br>
          &copy; 2020 saikksub. All rights reserved.
        </p>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="CLOSE" color="black" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  created () {
    this.$root.$on('about/show', () => {
      this.show = true
    })
  }
}
</script>
