<template>
  <div class="border">
      <h1>Usuário</h1>
      <div @click="funcao()"> {{ name }} </div>
  </div>
</template>

<script>
export default {
    props:{
        name:{
            type: String,
            default(){
                return 'Anonimo'
            }
        },
        funcao:{
            type:Function,
            required:true
        }
    },
}
</script>

<style>

</style>