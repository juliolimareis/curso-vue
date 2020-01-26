<template>
	<div id="app">
    <span>
      <button @click="components='Quotes'">Quotes</button>
      <button @click="components='About'">About</button>
    </span>
    <!-- manter o objeto sempre vivo -->
    <keep-alive>
      <component :is="components" />
    </keep-alive>
	</div>
</template>

<script>
import Quotes from '@/components/Quotes'
import About from '@/components/About'

export default {
  components: { Quotes, About },
  data(){
    return{
      components: ''
    }
  },//data
}
</script>

<style>
  /* button::-moz-focus-inner {
  border: none;
}

button:focus,
button:active {
  border: none;
  outline: none;
} */
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>