<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <input class="col-lg-12" type="text" v-on:keyup.enter="handleClick" v-model="$data._currURL" placeholder="Search something...">
      </div>
      <!-- <div class="col-md-3 text-right"> -->
        <!-- <button class="col-lg-12" @click="handleClick">Add Image to Database</button> -->
      <!-- </div> -->
    </div>
    <!-- <div class="row">
      <div class="col-md-9">
        <input class="col-lg-12" type="text" v-on:keyup.enter="handleClick" v-model="$data._currURL" placeholder="Add something...">
      </div>
      <div class="col-md-3 text-right">
        <button class="col-lg-12" @click="handleClick">Add Image to Database</button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      _currURL: this.currURL
    }
  },
  methods: {
    handleClick: function () {
      this.$emit('addImage', this.$data._currURL)
      this.$data._currURL = ''
    },
    validateURL: function (url) {
      // check is URL is valid, and possibly returns an image
      // if checks pass, return true
      let currURL = this.currURL

      if (currURL !== '') {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style scoped>
button {
  padding: 10px;
}

input[type='text'] {
  margin-top: 8px;
  padding: 8px;
}
</style>
