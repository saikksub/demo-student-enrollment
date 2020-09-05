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
        <q-item :key="item.id" clickable v-ripple @click="item.callback">
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
          <q-item :key="item.id" clickable v-ripple @click="item.callback">
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
          icon: 'dashboard',
          callback: () => this.$router.push({ path: '/' })
        },
        {
          id: 'app-sidebar-menu-item-students',
          title: 'Students',
          icon: 'face',
          callback: () => this.$router.push({ path: '/students' })
        },
        {
          id: 'app-sidebar-menu-item-classes',
          title: 'Classes',
          icon: 'class',
          callback: () => this.$router.push({ path: '/classes' })
        }
      ],
      options: [
        {
          id: 'app-sidebar-menu-item-account',
          title: 'Account',
          icon: 'account_circle',
          callback: () => this.$router.push({ path: '/account' })
        },
        {
          id: 'app-sidebar-menu-item-logout',
          title: 'Logout',
          icon: 'exit_to_app',
          callback: () => this.$emit('logout')
        },
        {
          id: 'app-sidebar-menu-item-about',
          title: 'About',
          icon: 'info',
          callback: () => this.$emit('about')
        }
      ]
    }
  }
}
</script>
