<template>
  <q-page class="flex flex-center column">

    <q-list bordered separator style="width: 400px">


      <q-expansion-item v-for="(item,i) in items" :key="`${i}`">
        <template v-slot:header>
          <q-item-section>
            <q-item-label>{{item.title}}</q-item-label>
            <q-item-label caption>{{item.content}}</q-item-label>
          </q-item-section>
          <q-item-section top side>
           <div class="text-grey-8 q-gutter-xs">
             <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="()=>remove(item)"/>
             <q-btn class="gt-xs" size="12px" flat dense round icon="description" @click="()=>clone(item)"/>
           </div>
         </q-item-section>
        </template>

        <q-card>
          <q-card-section caption>
            TOTAL: {{total(item)*2}} EUR
          </q-card-section>
          <q-card-section>
            <q-btn class="gt-xs fit" label="add category" @click="newCategory=item" icon="add"/>
            <q-item-section v-show="newCategory">
              <q-input v-model="title" placeholder="name"/>
              <q-input v-model="author" placeholder="price" type="number"/>
              <q-btn class="gt-xs" flat label="save" icon="save" @click="createNewCategory"/>
            </q-item-section>
            <div v-for="(category,j) in item.category" :key="`${j}`" >
              <q-toggle :val="category.name" v-model="category.status" :label="category.name"/>
              - 0{{category.price}} EUR
            <q-badge color="purple" style="cursor: pointer" @click="()=>removeCategory(item,j)">
              <q-icon name="close" color="white" />
            </q-badge>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>

       <q-item class="flex column">
         <q-item-section>
           <q-btn class="gt-xs" size="12px" flat icon="add" @click="add=!add"/>
         </q-item-section>

           <q-item-section v-show="add">
             <q-input v-model="title" placeholder="title"/>
             <q-input v-model="content" placeholder="content"/>
             <q-input v-model="author" placeholder="name"/>
             <q-btn class="gt-xs" flat label="save" icon="save" @click="createNew"/>
           </q-item-section>
       </q-item>

     </q-list>

  </q-page>
</template>

<script>
export default{
  data(){
    return{
      author:null,
      title: null,
      content: null,
      items: null,
      newCategory: false,
      add:false
    }
  },
  methods:{
    getAll(){
      this.$store.dispatch('Posts/Posts_GET_ALL')
      .then(res=>this.items=JSON.parse(JSON.stringify(res)))
    },
    total(e){
      var total = 0;
      e.category.map(el=>total+=(el.status?Number(el.price):0))
      return total
    },
    createNewCategory(){
      var newCat = {name:this.title,price:this.author,status:false}
      this.newCategory.category.push(newCat)
      this.updateData(this.newCategory)
    },
    removeCategory(el,cat){
         el.category = el.category.splice(cat,1)
         this.$store.dispatch('Posts/Posts_UPDATE', el)
         .then(()=>this.getAll())
    },
    createNew(){
        this.$store.dispatch('Posts/Posts_SET',{title:this.title,author:this.author,content:this.content})
        .then(()=>{
          this.add=!this.add
          this.getAll()
        })
    },
    updateData(el){
      this.$store.dispatch('Posts/Posts_UPDATE', el)
      .then(()=>this.getAll())
    },
    remove(el){
      this.$store.dispatch('Posts/Posts_DELETE', el)
      .then(()=>this.getAll())
    },
    clone(el){
      var newEl = JSON.parse(JSON.stringify(el));
      delete newEl._id;
      this.$store.dispatch('Posts/Posts_SET',newEl)
      .then(()=>this.getAll())
    }
  },
  created(){
    this.getAll()
  }
}
</script>
