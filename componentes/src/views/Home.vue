<template>
  <div class="home">
    <user name="Júlio César" :funcao="nameAnonimo"/>
    <terminal/>
  </div>
</template>

<script>
// @ is an alias to /src
import user from "@/components/user.vue";
import terminal from "@/components/terminal.vue";

export default {
  name: 'home',
  components: {
    user,
    terminal
  },
  methods:{
    nameAnonimo(){
      alert('função callBack')
    }
  }
}
</script>
