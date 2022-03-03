
  export default {
     namespaced: true,
     state: {
       User: [{ username : '',  password : '',  roles : '', }]
     },
     mutations: {
       User_SET (state, payload) {
         state.User = payload
       }
     },
     getters: {
       User_GETTER: function (state) {
         return state.User
       }
     },
     actions: {
       User_GET_SINGLE(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.get('/api/user', payload)
            .then(res=> {
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       User_GET_ALL(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.get('/api/user')
            .then(res=> {
              context.commit('User_SET', res.data)
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       User_SET(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.post('/api/user', payload)
            .then(res=> {
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       User_UPDATE(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.put('/api/user',payload)
            .then(res=> {
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       User_DELETE(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.delete('/api/user/user',{params:{ id: payload._id } })
            .then(res=> {
               resolve(res.data)
            }).catch(err=>reject(err))
          })

       }
     }
  }