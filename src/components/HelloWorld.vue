<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useGeneralStore } from '@/stores/general';

//let siteName = useGeneralStore.values(sitename);

let store = useGeneralStore();
defineProps<{
  msg: string
}>()
</script>

<template>
  <nav class=" mx-auto p-3 bg-green-700 text-white">
    <div class="lg:container">
    <div class="row-auto flex flex-row">
      <div class="logo mr-auto">
        <RouterLink to="/"> {{store.sitename}}</RouterLink>
      </div>
    <div class="menu ml-auto">
      <ul class="flex flex-row gap-2">
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
        
      </ul>
    </div>
    </div>
  </div>
  </nav>
</template>

<style scoped>

</style>
