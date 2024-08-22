<template>
  <NavBar />
  <main>
    <HelloWorld />
    <Preferences />
  </main>
</template>

<script setup lang="ts">
import NavBar from '@/components/nav-bar/NavBar.vue'
import HelloWorld from '@/components/hello-world/HelloWorld.vue'
import Preferences from '@/components/preferences/Preferences.vue'
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
}
</style>
