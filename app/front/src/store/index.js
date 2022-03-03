
    import { store } from 'quasar/wrappers'
    import { createStore } from 'vuex'
    import axios from 'axios'
    import settings from '../settings.js'
    /*MODULES*/
     import User from './User.module.js';  import Role from './Role.module.js';  import Category from './Category.module.js';  import Posts from './Posts.module.js';  import Auth from './Auth.module.js'; 

    export default store(function () {
      const Store = createStore({
        modules: {
           User : User,  Role : Role,  Category : Category,  Posts : Posts,  Auth : Auth, 
        },
        strict: process.env.DEBUGGING
      })
      axios.defaults.baseURL = "http://"+settings.api.HOST+":"+settings.api.PORT
      axios.defaults.withCredentials = true;
      Store.$axios = axios
      return Store
    })
