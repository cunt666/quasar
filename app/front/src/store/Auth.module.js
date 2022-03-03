
  export default {
     namespaced: true,
     state: {
       Auth: [{}]
     },
     mutations: {
       Auth_SET (state, payload) {
         state.Auth = payload
       }
     },
     getters: {
       Auth_GETTER: function (state) {
         return state.Auth
       }
     },
     actions: {
       Auth_REGISTRATION(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.get('/auth/registration', payload)
            .then(res=> {
              context.commit('Auth_SET', res.data)
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       Auth_GET_ALL(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.get('/auth/users')
            .then(res=> {
              context.commit('Auth_SET', res.data)
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       Auth_LOGIN(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.post('/auth/login', payload)
            .then(res=> {
              context.commit('Auth_SET', res.data)
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       Auth_UPDATE(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.update('/auth/update', payload)
            .then(res=> {
              context.commit('Auth_SET', res.data)
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       Auth_DELETE(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.delete('/auth/delete',{params:{ id: payload._id } })
            .then(res=> {
              context.commit('Auth_SET', res.data)
               resolve(res.data)
            }).catch(err=>reject(err))
          })

       }
     }
  }