<template>
  <red>Carregar Componente <b>Vermelho</b></red>
</template>

<script>
import red from '@/components/red.vue'

export default {
	name: 'reds',
  components: { red },
  date(){
    return{
      component:'red'
    }
  }
}

</script>

<style>

</style>