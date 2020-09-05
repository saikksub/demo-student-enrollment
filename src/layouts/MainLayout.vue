<template>
  <q-layout class="app-wrapper" view="lHh Lpr lFf">
    <sidebar />
    <q-page-container class="page-wrapper">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Sidebar from 'components/app-default/Sidebar.vue'

export default {
  components: {
    Sidebar
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style lang="scss">
  .app-wrapper {
    $sidebarWidth: 256px;

    & .sidebar {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      width: $sidebarWidth;
    }
    & .page-wrapper {
      $appbarHeight: 56px;

      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: $sidebarWidth;

       & .page-appbar {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        height: $appbarHeight;
      }
      & .page-content {
        position: absolute;
        top: $appbarHeight;
        right: 0;
        left: 0;
        height: $appbarHeight;
      }
    }
  }
</style>
