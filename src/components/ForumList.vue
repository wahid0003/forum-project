<template>
  <div class="col-full">
      <div class="forum-list">

        <h2 class="list-title">
          <router-link :to="{name:'Category',params:{id:categoryId}}" href="#">{{title}}</router-link>
        </h2>

        <div class="forum-listing" v-for="forum in forums" :key="forum.id">
          <div class="forum-details">
            <router-link :to="{name:'Forum',params:{id:forum.id}}" class="text-xlarge">{{ forum.name }}</router-link>
            <p>{{ forum.description }}</p>
          </div>

          <div class="threads-count">
            <p><span class="count">{{ forum.threads?.length }}</span> {{ getThreadLength(forum.threads) }}</p>
          </div>

          <div class="last-thread">
          </div>
        </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'ForumList',
  props: {
    forums: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: 'Forums'
    },
    categoryId: {
      type: String,
      required: true
    }
  },
  methods: {
    getThreadLength (threads) {
      return threads?.length ? threads?.length > 1 ? 'threads' : 'thread' : 'No Threads'
    }
  }
}
</script>

<style scoped>

</style>
