<template>
  <div class="f-container">
    <div>Please reload to see filtered content</div>
    <input class="f-input" type="text" v-model="userInput"/>
    <button class="f-button" @click="clearFilter">Clear</button>
  </div>
</template>

<script>
export default {
  name: "searchFilter",
  data() {
    return {
      userInput: "",
    }
  },
  mounted(){
    const url = new URL(window.location);
    const oldFilter = url.searchParams.get('filter');
    if(oldFilter){
      this.userInput = oldFilter;
    }
  },
  watch:{
    userInput(val){
      const url = new URL(window.location);
      if(val==""){
        url.searchParams.delete('filter');

      }
      else{
        url.searchParams.set('filter', val);
      }
      window.history.pushState({}, '', url);
    }
  },
  methods:{
    clearFilter: function (){
      this.userInput="";
    }
  }
}
</script>

<style scoped>

</style>
