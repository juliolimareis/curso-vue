<template>
    <div class="quote">
       <slot class="test" name="title"></slot>
       <slot name="body"></slot>
       <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    .quote{
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
