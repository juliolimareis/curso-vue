<template>
	<div id="app">
    
		<span>
			<button class="red" @click="component='red'">
        Carregar Componente Vermelho
      </button>
			<button class="green" @click="component='green'">
        Carregar Componente Verde
      </button>
			<button class="blue" @click="component='blue'">
        Carregar Componente Azul
      </button>
		</span>
		<!-- keep-alive manter objeto vivo -->
    <keep-alive>
      <component :is="component">
        <span>Conteúdo do Componente <strong>{{ component }}</strong></span>
      </component>    
    </keep-alive>

	</div>
</template>

<script>
import red from '@/components/red'
import green from '@/components/green'
import blue from '@/components/blue'

export default {
	name: 'app',
  components: { 
    red, 
    green, 
    blue 
  },
  data(){
    return{
      component:''
    }
  },//data
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
