
  export default {
     namespaced: true,
     state: {
       Category: [{ value : '', }]
     },
     mutations: {
       Category_SET (state, payload) {
         state.Category = payload
       }
     },
     getters: {
       Category_GETTER: function (state) {
         return state.Category
       }
     },
     actions: {
       Category_GET_SINGLE(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.get('/api/category', payload)
            .then(res=> {
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       Category_GET_ALL(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.get('/api/category')
            .then(res=> {
              context.commit('Category_SET', res.data)
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       Category_SET(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.post('/api/category', payload)
            .then(res=> {
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       Category_UPDATE(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.put('/api/category',payload)
            .then(res=> {
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       Category_DELETE(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.delete('/api/category/category',{params:{ id: payload._id } })
            .then(res=> {
               resolve(res.data)
            }).catch(err=>reject(err))
          })

       }
     }
  }