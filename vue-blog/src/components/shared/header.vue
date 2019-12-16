<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: rgb(216, 193, 193)">
    <div class="navbar-brand">
        <router-link tag="a" to="/" class="nav-link text-white" exact active-class="bg-danger rounded">E-News</router-link>
        <div class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent"> <span class="navbar-toggler-icon"></span></div>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <router-link tag="li" to="/newsProcesses" class="nav-item" active-class="bg-danger rounded">
            <a class="nav-link">News Purchase</a>
            </router-link>
        </ul>
    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>
.a{
    background-color: 
}
</style>