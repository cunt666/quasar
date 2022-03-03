<template>
  <q-page class="flex flex-center column">
     <router-link to="/posts">PIZZAS HERE</router-link>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data(){
    return{
      username: 'admin',
      password: 'admin'
    }
  },
  methods: {
    login(){
      this.$store.dispatch('Auth/Auth_LOGIN', {username:this.username,password:this.password})
      .then(res=>{
        this.$store.$axios.defaults.headers.common = {'Authorization': `bearer ${res.token}`}
        this.$router.push('/dashboard')
      })
    }
  }
})
</script>
