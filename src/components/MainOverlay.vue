<template>
  <div v-show="showOverlay" class="overlay">
    <div class="container">
      <div class="row">
        <div class="col-md-7 lrg-img-container">
          <div class="panel"> 
            <img :src="currPin.url" alt="">
          </div>
        </div>
        <div class="col-md-5">
            <div class="data-container">
              <!-- Source: xyz <br> -->
              <!-- Details: Lorem ipsum dolor sit amet. <br> -->
              <!-- Uploaded by: {{ focusImg['uploadedBy'] }} <br><br> -->
              Tags: a, typography, letters, bold, smart, athetlic <br><br>
              <input class="col-lg-12" type="text" placeholder="new category tags...">
              <!-- <button class="col-lg-4">Add tags</button> -->
              <br>
              <hr>
              Comments <br>
              <span v-bind:key="index" v-for="(comment, index) in currPin['comments']">
                {{comment.comment}} – {{comment.author}}
              </span>
              <br><br>
              <input class="col-lg-12" type="text" placeholder="Leave a comment...">
              <!-- <button class="col-lg-4">Add comment</button> <br><br> --> <br><br>
              <button @click="toggleOverlay">Close Window</button><br>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainOverlay',
  computed: mapState([
    'showOverlay',
    'currPin',
  ]),
  created: function () {
    console.log(this.$store)
  },
  methods: {
    toggleOverlay() {
      // console.log(this.$state)
      document.body.classList.remove('lock-scroll');
      // document.body.scrollTop = 400
      this.$store.commit('toggleOverlay')
    }
  },
  props: ['focusImg'],
  data () {
    return {
      data: ''
    }
  }
}
</script>

<style scoped>
.data-container {
  position: relative;
  color: #333;
  padding: 12px 0px;
  width: 96%;
  word-wrap: break-word;
}

.overlay {
  padding-top: 86px;
  position: absolute;
  /* margin: auto; */
  z-index: 10;
  left: 50%;
  top: 4%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  /* position: fixed; */
  width: 100%;
  background-color: #FFF;
  /* min-height: 10%; */
  padding-bottom: 20px;
  /* height: 100%; */
}

.panel {
  display: relative;
  width: 100%;
  /* margin: 16px 0px; */
  /* border-radius: 10px; */
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  /* box-shadow: 10px 10px 2px; */
}


img {
  border-radius: 18px;
  width: 100%;
}
</style>
