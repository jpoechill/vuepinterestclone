<template>
  <div>
    <div class="brick-container" v-for="(image, index) in imagesSorted" v-if="(index % 4) === modFactor" v-bind:key="index">
    <!-- <div class="brick-container" v-for="(image, index) in imagesSorted" v-if="(index === 0)" v-bind:key="index"> -->
      <div class="light-overlay"></div>
      <div class="brick" @click="handleClick(image)">
        <!-- <div class="dark-overlay"></div> -->
        <div class="img-controls-overlay">
          <div class="report-image_block-left text-left">
            <span @click="">🖖 Like Pin 123</span> <br>
            <!-- <span @click="addPin(image['.key'])">🖖 Save Pin</span> <br> -->
            <!-- <span @click="deletePin(image['.key'])">🖖 Delete Pin</span> -->
          </div>
        </div>
        <img class="brick-img" :src="image.url" alt="">
      </div>
      <div class="url-container">
        <div>{{ image.url }}</div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import mixins from '../mixins'

export default {
  name: 'Pin',
  mixins: [mixins],
  props: ['imagesSorted', 'modFactor'],
  data () {
    return {
      data: ''
    }
  },
  methods: {
    handleClick (image) {
      console.log(this.$store.state)
      // document.body.classList.add('lock-scroll');
      this.$store.commit('updateCurrPin', image)
      this.$store.commit('toggleOverlay')
    },
    sayHello: function () {
      alert('Hello 123')
      // alert('Hello from component: local component')
    },
    addKudos: function (imgKey) {
      // const currData = this.imgsSorted.filter(x => x['.key'] === imgKey)[0]
      // currData.kudos++
      this.$store.commit('increment')
      // alert('This pin was pinned!')
      // this.$store.dispatch('increment')
      // console.log(this.$store)
      // this.$firestore.imageURLs.doc(imgKey).set(currData);
    },
    ...mapMutations({
      add: 'increment',
      toggleOverlay: 'toggleOverlay' // map `this.add()` to `this.$store.commit('increment')`
    })
  }
}
</script>

<style scoped>
.light-overlay {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 20px;
  /* overflow: hidden; */
  /* margin-bottom: 4px; */
  /* padding: -10px; */
  position: absolute;
  display: block;
  z-index: 1;
  opacity: -1;
  background-color: #EEE;
  transform: scale(.9);
  transition: all .3s;
}

.url-container {
  position: relative;
  z-index: 111111;
}

.dark-overlay {
  display: none;
  position: absolute;
  width: 100%;
  z-index: 2;
  height: 100%;
  /* background-color: rgba(0, 0, 0, .2); */
}

.brick-img {
  width: 100%;
  height: 100%;
  z-index: 100;
}

.brick-container {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 20px;
  padding: 12px 12px 12px 12px;
  margin: 12px 0px 12px 0px;
}

.brick-container div div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.brick-container:hover {
  /* background-color: #DDD; */
  cursor: zoom-in;
}

.brick-container:hover .dark-overlay {
  display: block;
}

.brick-container:hover .light-overlay {
  transform: scale(1);
  opacity: 1;
}

.brick-container:hover .img-controls-overlay {
  display: block;
}

.brick + div {
  padding: 0px 0px 0px 10px;
}

.brick {
  width: 100%;
  border-radius: 20px;
  background-color: blue;
  overflow: hidden;
  margin-bottom: 4px;
  position: relative;
  z-index: 1;
  /* margin: 20px 0px; */
}

.img-controls-overlay {
  display: none;
  position: absolute;
  width: 100%;
  z-index: 2;
  height: 100%;
  background-color: rgba(0, 0, 0, .2);
}

.report-image_block-left {
  position: absolute; 
  bottom: 16px;
  padding: 6px 0px 6px 15px;
  color: #FFF; 
  z-index: 4;
  background-color: darkgrey;
  width: 100%;
}
</style>
