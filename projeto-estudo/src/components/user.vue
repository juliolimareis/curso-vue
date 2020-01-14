<template>
    <div>
        <h1>User</h1>
        <div> {{ nome }} </div>
    </div>
</template>

<script>
export default {
    props:{
        nome:{
            type:String,
            // required:true
            default:'Anonimo'
        }
    }
}
</script>

<style>

</style>