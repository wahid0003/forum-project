<template>
  <h2>Welcome to the forum!</h2>
 <CategoryList :categories="categories"/>
</template>

<script>
import CategoryList from '@/components/CategoryList'

export default {
  components: {
    CategoryList
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>

<style scoped>

</style>
