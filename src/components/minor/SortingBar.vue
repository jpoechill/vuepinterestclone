<template>
  <section>
    <div class="container sub-nav">
      <div class="row">
        <div class="col-md-12">
          <span class="fake-link" @click="alert('Sort by last uploaded')">Recently Uploaded</span> |
          <span class="fake-link" @click="alert('Sort by most kudos')">Most Kudos</span> | 
          <span class="fake-link" @click="alert('Show all recently deleted')">Recently Deleted</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SortingBar',
  data () {
    return {
      data: ''
    }
  }
}
</script>

<style scoped>
.sub-nav {
  padding-top: 12px;
}
</style>
