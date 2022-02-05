<template>
    <div class="col-full push-top">
      <div class="forum-header">
        <div class="forum-details">
          <h1>{{forum.name}}</h1>
          <p class="text-lead">{{forum.description}}</p>
        </div>
        <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
      </div>
    </div>

    <div class="col-full push-top">
      <ThreadList :threads="getThreads"/>
    </div>

</template>

<script>
import ThreadList from '@/components/ThreadList'

export default {
  name: 'Forum',
  components: { ThreadList },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      forums: this.$store.state.forums,
      threads: this.$store.state.threads
    }
  },
  computed: {
    forum: function () {
      return this.forums.find(forum => forum.id === this.id)
    },
    getThreads: function () {
      return this.threads.filter(thread => thread.forumId === this.id)
    }
  }
}
</script>

<style scoped>

</style>
