<template>
  <div class="flex-grid">
    <div class="col-3 push-top">
      <user-profile-card v-if="!edit" :user="user" ></user-profile-card>
      <user-profile-card-editor v-else :user="user" ></user-profile-card-editor>
      <p class="text-xsmall text-faded text-center">Member since june 2003, last visited 4 hours ago</p>

    </div>

    <div class="col-7 push-top">

      <div class="profile-header">
                  <span class="text-lead">
                      Joker's recent activity
                  </span>
        <a href="#">See only started threads?</a>
      </div>

      <hr>
      <PostList :posts="user.posts"/>
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { mapGetters } from 'vuex'
import UserProfileCard from '@/components/UserProfileCard'
import UserProfileCardEditor from '@/components/UserProfileCardEditor'
export default {
  name: 'Profile',
  components: {
    UserProfileCardEditor,
    UserProfileCard,
    PostList
  },
  props: {
    edit: {
      type: Boolean,
      default: false
    }
  },
  computed: { // computed properties
    ...mapGetters({ user: 'authUser' })
  }
}
</script>

<style scoped>

</style>
