<template>
	<div id="app">
		<span>
			<button class="red" @click="component='reds'">Carregar Componente Vermelho</button>
			<button class="green" @click="component='green'">Carregar Componente Verde</button>
			<button class="blue" @click="component='blue'">Carregar Componente Azul</button>
		</span>
		
    <keep-alive>
      <component :is="component" />
    </keep-alive>
		
		<!-- <green>Carregar Componente <b>Verde</b></green>
		<blue>Carregar Componente <b>Azul</b></blue> -->
	</div>
</template>

<script>
import reds from '@/components/reds.vue'
import green from '@/components/green.vue'
import blue from '@/components/blue.vue'

export default {
	name: 'app',
  components: { reds, green, blue },
  date(){
    return{
      component:''
    }
  }
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	button {
		padding: 10px;
		color: #FFF;
		font-size: 1.3rem;
	}

  .box {
    color: #FFF;
    font-size: 1.8rem;
    padding: 25px;
		margin: 10px 0px;
  }

	.red {
        border: 2px solid red;
        background-color: #f54235;
    }

	.green {
        border: 2px solid green;
        background-color: #49b057;
    }

	.blue {
        border: 2px solid blue;
        background-color: #2594f0;
    }
</style>
