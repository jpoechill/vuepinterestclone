<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <!-- Typetherapy  -->
          Po Rith
          | <span @click="hello">Pinterest Clone</span> |
          <span class="fake-link" @click="sayHello()">+</span>
        </div>
        <div class="col-md-8 text-right">
          <!-- {{ loggedIn }}  -->
          <!-- <span class="fake-link" @click="login">Click</span> -->
          <div class="fake-link" v-if="loggedIn">
            <span @click="$emit('sayHello', 'Go to home')">Home</span> | 
          </div>
          <div v-if="loggedIn" class="fake-link">
            <!-- <span @click="$emit('sayHello', 'Go to pins of followers')">Following</span> | 
            <span @click="$emit('sayHello', 'Show messages in dropdown')">Messages</span> | 
            <span @click="$emit('sayHello', 'Show notifications in dropdown')">Notifications</span> | 
            <span @click="$emit('sayHello', 'Show other options in dropdown')">Extras</span> | -->
            <span @click="$emit('sayHello', 'Go to user page')">{{ currUser.displayName }}</span> | 
            <span @click="logoutWithFirebase">Logout</span>
          </div>
          <div v-else class="fake-link"><span class="fake-link" @click="signInWithGoogle">Login with Google</span></div>
        </div>
      </div>
    </div>
    <AddImageBar v-on:addImage="addImage"></AddImageBar>
  </header>
</template>

<script>
import AddImageBar from '../minor/AddImageBar'
import mixins from '../../mixins'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Header',
  components: { AddImageBar},
  computed: {
    imagesSorted: function () {
      return this.imgsSorted
    },
    ...mapState({
      showOverlay: 'showOverlay',
      loggedIn: 'loggedIn',
      currUser: 'currUser'
    }),
  },
  methods: {
    sayHello () {
      let url = prompt('Enter a url to an image...')

      if (url) {
        this.addImage(url)
      }
    }
  },
  mixins: [mixins],
  data () {
    return {
      data: ''
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #FFF;
  margin: 8px auto 10px auto;
}
</style>
