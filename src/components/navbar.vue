<template>
  <div class="navbar navbar-light shadow-sm">
    <div class="col-10 col-md-11">
      <router-link class="navbar-brand" to="/about">
        <img src="/assets/logo.png" height="30" alt="Insultario">
      </router-link>
    </div>
    <div class="col-2 col-md-1 text-right">
      <ul class="navbar-nav flex-row" style="float:right;">
        <li class="nav-item active">
          <router-link class="nav-link px-2" to="/insults"><i class="fas fa-list"></i></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link px-2" to="/about"><i class="fas fa-info"></i></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .navbar {
    z-index: 1;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 0;
    padding-right: 0;

    background-color: #dc9b48;
  }
</style>
