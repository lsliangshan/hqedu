<template>
    <component :is="currentHome"></component>
</template>
<style>

</style>
<script>
  // import utils from '../utils'
  // import * as types from '../store/mutation-types'
  export default {
    name: 'Home',
    data () {
      return {
        eventHub: this.$store.state.eventHub,
        events: this.$store.state.events,
        socket: this.$store.state.socket
      }
    },
    computed: {
      loginInfo () {
        return this.$store.state.loginInfo
      },
      currentHome () {
        let _role = this.loginInfo.role
        let _currentHome = ''
        switch (_role) {
          case 1:
            _currentHome = 'RootHome'
            break
          case 2:
            _currentHome = 'AdminHome'
            break
          case 3:
            _currentHome = 'DeveloperHome'
            break
          case 4:
            _currentHome = 'UserHome'
            break
          default:
            break
        }
        return _currentHome
      }
    },
    created () {
    },
    methods: {
    },
    components: {
    }
  }
</script>
