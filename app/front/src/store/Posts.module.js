
  export default {
     namespaced: true,
     state: {
       Posts: [{ author : '',  title : '',  content : '',  picture : '',  category : '',  isPage : '', }]
     },
     mutations: {
       Posts_SET (state, payload) {
         state.Posts = payload
       }
     },
     getters: {
       Posts_GETTER: function (state) {
         return state.Posts
       }
     },
     actions: {
       Posts_GET_SINGLE(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.get('/api/posts', payload)
            .then(res=> {
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       Posts_GET_ALL(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.get('/api/posts')
            .then(res=> {
              context.commit('Posts_SET', res.data)
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       Posts_SET(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.post('/api/posts', payload)
            .then(res=> {
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       Posts_UPDATE(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.put('/api/posts',payload)
            .then(res=> {
               resolve(res.data)
            }).catch(err=>reject(err))
          })
       },
       Posts_DELETE(context, payload) {
         return new Promise((resolve,reject)=>{
           this.$axios.delete('/api/posts/posts',{params:{ id: payload._id } })
            .then(res=> {
               resolve(res.data)
            }).catch(err=>reject(err))
          })

       }
     }
  }