<template>
  <ForumList v-for="category in categories" :key="category.id" :forums="categoryForums(category)" :title="category.name" :category-id="category.id"/>
</template>

<script>

import ForumList from '@/components/ForumList'
export default {
  name: 'CategoryList',
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  components: {
    ForumList
  },
  methods: {
    categoryForums (category) {
      return this.$store.state.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>

<style scoped>

</style>
