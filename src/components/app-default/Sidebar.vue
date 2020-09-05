<template>
  <div class="sidebar">
    <q-toolbar>
      <q-btn flat round dense icon="menu" @click="() => $emit('toggle')" />
      <q-toolbar-title v-show="!compact">
        Student Enrollment
      </q-toolbar-title>
    </q-toolbar>
    <q-list>
      <template v-for="item in menu">
        <q-item :key="item.id" clickable v-ripple>
          <q-item-section avatar>
            <q-icon :name="item.icon" color="primary" />
          </q-item-section>

          <q-item-section v-show="!compact">
            {{ item.title }}
          </q-item-section>
          <q-tooltip v-if="compact" right anchor="center right">
            <span style="text-transform: uppercase;">
              {{ item.title }}
            </span>
          </q-tooltip>
        </q-item>
        </template>
    </q-list>
    <div class="sidebar-options">
      <q-list>
        <template v-for="item in options">
          <q-item :key="item.id" clickable v-ripple>
            <q-item-section avatar>
              <q-icon :name="item.icon" color="primary" />
            </q-item-section>

            <q-item-section v-show="!compact">
              {{ item.title }}
            </q-item-section>
            <q-tooltip v-if="compact" right anchor="center right">
              <span style="text-transform: uppercase;">
                {{ item.title }}
              </span>
            </q-tooltip>
          </q-item>
          </template>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    compact: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  data () {
    return {
      menu: [
        {
          id: 'app-sidebar-menu-item-dashboard',
          title: 'Dashboard',
          icon: 'dashboard'
        },
        {
          id: 'app-sidebar-menu-item-students',
          title: 'Students',
          icon: 'face'
        },
        {
          id: 'app-sidebar-menu-item-classes',
          title: 'Classes',
          icon: 'class'
        }
      ],
      options: [
        {
          id: 'app-sidebar-menu-item-account',
          title: 'Account',
          icon: 'account_circle'
        },
        {
          id: 'app-sidebar-menu-item-logout',
          title: 'Logout',
          icon: 'exit_to_app'
        },
        {
          id: 'app-sidebar-menu-item-about',
          title: 'About',
          icon: 'info'
        }
      ]
    }
  }
}
</script>
