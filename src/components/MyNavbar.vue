<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3 border-bottom">
    <div class="container">
      <a class="navbar-brand">
        <!-- <router-link to="/"><img src="@/assets/logo_kmitl.png" alt="" width="100" height="50" class="d-inline-block align-text-top"></router-link> -->
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link to="/"><a class="nav-link">Home</a></router-link>
          <router-link to="/table"><a class="nav-link">Table</a></router-link>
          <router-link to="/test"><a class="nav-link">Test</a></router-link>
          <router-link to="/finaltable"><a class="nav-link">TrueTable</a></router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MyNavbar',
}
</script>

<style scoped>

</style>