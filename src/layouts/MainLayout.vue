<template>
  <q-layout
    :compact-sidebar="compactSidebar"
    class="app-wrapper"
    view="lHh Lpr lFf"
  >
    <!-- START register components -->
    <about />
    <confirm />
    <!-- END register components -->

    <sidebar
      :compact="compactSidebar"
      @toggle="toggleSidebar"
      @logout="onClickLogout"
      @about="onAbout"
    />
    <q-page-container class="page-wrapper">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import About from 'components/dialogs/About'
import Sidebar from 'components/app-default/Sidebar.vue'
import Confirm from 'components/dialogs/Confirm'

export default {
  components: {
    About,
    Confirm,
    Sidebar
  },
  data () {
    return {
      compactSidebar: true
    }
  },
  methods: {
    onAbout () {
      this.$root.$emit('about/show')
    },
    onClickLogout () {
      this.$root.$emit('confirm/show', {
        title: 'Logout',
        message: 'You are about to logout. Please click YES to loguot your account from the application.',
        callback: this.onLogout
      })
    },
    onLogout () {
      // TODO: use store to logout from the application
    },
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
