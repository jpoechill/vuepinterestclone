<template>
  <section>
    <div class="container no-padding">
      <div class="row gutter-10">
        <div class="col-md-3" v-for="index in 4" :key="index">
          <Pin :imagesSorted="imagesSorted" :modFactor="index-1"></Pin>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Pin from '../Pin'

export default {
  name: 'Body',
  components: { Pin },
  props: ['imagesSorted'],
  data () {
    return {
      data: ''
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.gutter-10.row {
  margin-right: -5px;
  margin-left: -5px;
}

.gutter-10 > [class^="col-"], .gutter-10 > [class^=" col-"] {
  padding-right: 5px;
  padding-left: 5px;
}
</style>
