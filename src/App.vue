<template>
  <div>
    <MainOverlay v-show="showOverlay" :focusImg="focusImg"></MainOverlay>
    <Header></Header>
    <!-- <section style="position: fixed; z-index: 10;">
      <div class="container no-padding">
        <div class="row">
          <div class="col-md-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod excepturi quia facere ullam temporibus tempore perferendis blanditiis, officia similique repudiandae corrupti unde? Aliquam ab ad asperiores quia repellendus, dolorem, enim praesentium maiores pariatur ducimus inventore cupiditate consequatur sint facere iusto doloremque fugit magnam et magni, totam repudiandae minus cum harum saepe. Repellendus nulla magni reiciendis maiores. Ipsam quaerat porro, dolores rerum ratione at dolorem ex, delectus reprehenderit magnam consequuntur ea consequatur. Facere dolore pariatur at, consectetur atque vitae quos alias similique expedita nobis quaerat quo quidem! Asperiores alias incidunt est, veritatis repellendus architecto excepturi eaque quas, laboriosam labore earum, aut consectetur iste. Delectus consequuntur perferendis vitae cumque animi dolore, voluptatibus odio a deserunt earum sed error tempora blanditiis natus commodi soluta possimus recusandae vel, ad aliquam enim asperiores debitis ducimus! Dolores illum at temporibus itaque ipsum minima officiis atque possimus nulla molestiae voluptatibus omnis aliquid error quas, architecto magnam! Praesentium suscipit aliquid nulla molestiae officia facilis facere, id quibusdam! Laborum eius fugit tempora ut laboriosam ad? Laudantium, nobis iure. Repellendus cupiditate corrupti deleniti officiis quos? Delectus vero explicabo adipisci accusantium blanditiis quibusdam hic at dolore dolorum aperiam, repellat animi distinctio fugiat, molestiae sunt possimus velit omnis nulla repudiandae nam!
          </div>
        </div>
      </div>
    </section> -->
    <Body  v-show="!showOverlay"  :imagesSorted="imagesSorted"></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import MainOverlay from './components/MainOverlay'
import Header from './components/layout/Header'
import Body from './components/layout/Body'
import Footer from './components/layout/Footer'
import firebase from './firebase-config.js'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: { MainOverlay, Header, Body, Footer },
  computed: {
    imagesSorted: function () {
      return this.imgsSorted
    },
    ...mapState({
      showOverlay: 'showOverlay',
      lockScroll: 'lockScroll',
    }),
    ...mapMutations({
      loginUser: 'loginUser',
      logoutUser: 'logoutUser',
    })
  },
  data: function () {
    return {
      userData: '',
      status: false,
      focusImg: {},
      currZoom: 100,
      currYPos: 0,
      currXPos: 0,
    }
  },
  firestore () {
    return {
      imageURLs: firebase.firestore.collection('imgURLs'),
      imgsSorted: firebase.firestore.collection('imgURLs').orderBy('timestamp', 'desc')
    }
  },
  created: function () {
    let self = this
    firebase.firebaseApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        self.loginUser
        self.$store.commit('updateUser', user)
      } else {
        // User is signed out.
        self.logoutUser()
      }
    })
  },
  methods: {},
}
</script>

<style>
body {
  background-color: #FFF;
  height: 100vh;
}

.lock-scroll {
  /* height: 100%; */
  overflow: hidden;
}

header {
  position: fixed;
  width: 100%;
  z-index: 999999999;
}

header, section {
  background-color: #FFF;
}

section {
  padding-top: 86px;
}

footer {
  color: #FFF;
  padding: 20px;
  height: 140px;
  background-color: #333;
}

.fake-link {
  display: inline;
}

.fake-link:hover {
  cursor: pointer;
}

.no-padding {
  padding: 0px;
}

</style>
