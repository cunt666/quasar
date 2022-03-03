
  export default {
     namespaced: true,
     state: {
       Role: [{ value : '', }]
     },
     mutations: {
       Role_SET (state, payload) {
         state.Role = payload
       }
     },
     getters: {
       Role_GETTER: function (state) {
         return state.Role
       }
     },
     actions: {
       Role_GET_SINGLE(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.get('/api/role', payload)
            .then(res=> {
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       Role_GET_ALL(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.get('/api/role')
            .then(res=> {
              context.commit('Role_SET', res.data)
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       Role_SET(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.post('/api/role', payload)
            .then(res=> {
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       Role_UPDATE(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.put('/api/role',payload)
            .then(res=> {
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       Role_DELETE(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.delete('/api/role/role',{params:{ id: payload._id } })
            .then(res=> {
               resolve(res.data)
            }).catch(err=>reject(err))
          })

       }
     }
  }