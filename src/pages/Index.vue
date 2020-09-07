<template>
  <q-page>
    <div class="page-appbar">
      <q-toolbar>
        <q-toolbar-title>
          Dashboard
        </q-toolbar-title>
      </q-toolbar>
    </div>
    <div class="page-content">
      <p class="text-weight-medium q-mx-sm text-grey-14">
        Welcome to Student Enrollment Program
      </p>
      <div class="row justify-start">
        <q-card class="col-4 q-mx-sm bg-grey-1" flat bordered>
          <q-card-section class="text-grey-14 text-weight-medium">
            Number of classes
          </q-card-section>
          <q-card-section class="text-h3">
            12
          </q-card-section>
        </q-card>
        <q-card class="col-4 q-mx-sm bg-grey-1 text-weight-medium" flat bordered>
          <q-card-section class="text-grey-14">
            Number of students
          </q-card-section>
          <q-card-section class="text-h3">
            23
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
