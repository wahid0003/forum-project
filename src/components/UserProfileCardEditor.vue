<template>
  <div class="profile-card">
    <form @submit.prevent="save">
      <p class="text-center">
        <img :src="user.avatar" :alt="`${user.name} profile picture`" class="avatar-xlarge img-update">
      </p>

      <div class="form-group">
        <input type="text" v-model="activeUser.username" placeholder="Username" class="form-input text-lead text-bold">
      </div>

      <div class="form-group">
        <input type="text" v-model="activeUser.name" placeholder="Full Name" class="form-input text-lead">
      </div>

      <div class="form-group">
        <label for="user_bio">Bio</label>
        <textarea v-model="activeUser.bio" class="form-input" id="user_bio"
                  placeholder="Write a few words about yourself."></textarea>
      </div>

      <div class="stats">
        <span>{{activeUser.postsCount}} posts</span>
        <span>{{activeUser.threadsCount}} threads</span>
      </div>

      <hr>

      <div class="form-group">
        <label class="form-label" for="user_website">Website</label>
        <input v-model="activeUser.website" autocomplete="off" class="form-input" id="user_website">
      </div>

      <div class="form-group">
        <label class="form-label" for="user_email">Email</label>
        <input v-model="activeUser.email" autocomplete="off" class="form-input" id="user_email">
      </div>

      <div class="form-group">
        <label class="form-label" for="user_location">Location</label>
        <input v-model="activeUser.location" autocomplete="off" class="form-input" id="user_location">
      </div>

      <div class="btn-group space-between">
        <button class="btn-ghost" @click="cancel">Cancel</button>
        <button type="submit" class="btn-blue">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserProfileCardEditor',
  data () {
    return {
      activeUser: { ...this.user }
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: { // computed properties
    ...mapGetters({ user: 'authUser' })
  },
  methods: {
    save () {
      this.$store.dispatch('updateUser', this.activeUser)
      this.$router.push({ name: 'Profile' })
    },
    cancel () {
      this.$router.push({ name: 'Profile' })
    }
  }
}
</script>

<style scoped>

</style>
