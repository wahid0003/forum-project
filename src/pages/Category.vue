<template>
  <h1>{{ category.name }}</h1>
  <ForumList :title="category.name" :forums="getCategoryForums(category)" :category-id="category.id"/>
</template>

<script>
import ForumList from '@/components/ForumList'
export default {
  name: 'Category',
  components: {
    ForumList
  },
  props: {
    id: {
      type: String,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  },
  computed: {
    category () {
      return this.$store.state.categories.find(category => category.id === this.id)
    }
  },
  methods: {
    getCategoryForums (category) {
      return this.$store.state.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>

<style scoped>

</style>
