<template>
  <div class="convite">
    <div class="photo border-blue"></div>
    <div class="title"></div>
    <div class="sub-title"></div>

    <div class="text"></div>

    <div class="paragraph1"></div>
    <div class="paragraph2"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style soped>
.convite{
    background: black;
    width:500px;
    height:500px;
}
.photo{
  /* tamanho */
  width:100px;
  height:100px;

  /* relação de movimento(sem isso não se move) */
  position:relative;
  /* valores de movimento (top,left,right,bottom) */
  /* OBS tambem aceita numeros negativos */
  top:100px;
  left:100px;
}
.title{

}
.sub-title{

}
.text{

}
.paragraph1{

}
.paragraph2{
    
}
.convite{
    width:500px;
    height:500px;
}
.arial{
    border:solid 3px black;
    font-family:Courier, monospace;
    font-size: 4vw;
}
.border-blue{
  border: solid 3px blue;
}
</style>