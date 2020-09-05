<template>
  <q-layout
    :compact-sidebar="compactSidebar"
    class="app-wrapper"
    view="lHh Lpr lFf"
  >
    <sidebar @toggle="toggleSidebar" :compact="compactSidebar" />
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
      compactSidebar: true
    }
  },
  methods: {
    toggleSidebar () {
      this.compactSidebar = !this.compactSidebar
    }
  }
}
</script>

<style lang="scss">
  .app-wrapper {
    $sidebarWidth: 256px;
    $sidebarWidthCompact: 56px;

    &[compact-sidebar] {
      & .sidebar {
        width: $sidebarWidthCompact
      }
      & .page-wrapper {
        left: $sidebarWidthCompact;
      }
    }

    & .sidebar {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      width: $sidebarWidth;
      transition: 0.2s all ease-in-out;

      & .sidebar-options {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        background: #ffffff;
        padding-top: 8px;
      }
    }
    & .page-wrapper {
      $appbarHeight: 56px;

      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: $sidebarWidth;
      transition: 0.2s all ease-in-out;

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
