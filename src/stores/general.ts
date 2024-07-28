//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', () => {
    const sitename = "Website Name";
    const hero_img = './src/assets/bg.jpg';
    const name = 'John';
    const hero = 'Hello, ';

  return { sitename, hero_img, name , hero}
})
