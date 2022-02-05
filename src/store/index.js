import { createStore } from 'vuex'
import sourceData from '@/data.json'
export default createStore({
  state: {
    ...sourceData,
    authId: 'u4r8XCziZEWEXsj2UIKNHBoDh0n2'
  },
  getters: {
    authUser (state) {
      const user = state.users.find(user => user.id === state.authId)

      // if (!user) return null

      return {
        ...user,
        get posts () {
          return state.posts.filter(post => post.userId === user.id)
        },
        get threads () {
          return state.threads.filter(thread => thread.userId === user.id)
        },
        get postsCount () {
          return this.posts.length
        },
        get threadsCount () {
          return this.threads.length
        }
      }
    }
  },
  actions: {
    createPost ({ commit }, post) {
      post.id = 'ddd' + Math.random()
      post.userId = this.state.authId
      post.publishedAt = Math.floor(Date.now() / 1000)
      commit('setPost', { post })
      commit('addPostToThread', { postId: post.id, threadId: post.threadId })
    },
    updateUser ({ commit }, user) {
      commit('setUser', { userId: user.id, user })
    }
  },
  mutations: {
    setPost (state, { post }) {
      state.posts.push(post)
      console.log(post)
    },
    setUser (state, { userId, user }) {
      const index = state.users.findIndex(user => user.id === userId)
      state.users[index] = user
    },
    addPostToThread (state, { postId, threadId }) {
      const thread = state.threads.find(thread => thread.id === threadId)
      thread.posts.push(postId)
    }
  }
})
