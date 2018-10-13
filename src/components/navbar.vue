<template>
  <nav class="navbar fixed-top navbar-light navbar-expand-lg navbar-template">
    <router-link class="navbar-brand" to="/">Insultario</router-link>
    <ul class="navbar-nav flex-row">
      <li class="nav-item">
        <router-link class="nav-link px-2" to="/insults"><i class="fas fa-list"></i></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link px-2" to="/about"><i class="fas fa-info"></i></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import Store from '../store'

export default {
  data: function() {
    return {
      text: 'HelloWorld',
      storeData: Store.data
    }
  }
}
</script>
