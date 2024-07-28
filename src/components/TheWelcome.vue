<script setup lang="ts">
import { useGeneralStore } from '@/stores/general';
let store = useGeneralStore();
import BlogPost from './BlogPost.vue';
</script>

<script lang="ts">
export default {
  name: 'TheWelcome',
  data() {
    return {
      posts: [],
      loading: true
    };
  },
  created() {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => {
        this.posts = data;
        this.loading = false;
        console.log(data);
      });
  }
};
  
</script>


<template>
  <main class="w-100  bg-black " :style="{backgroundImage: 'url('+store.hero_img+')'}" >
    <section class="lg:container mx-auto">
    
    <div class="lg:container w-100 mx-auto" >
      <section class="hero mx-auto row-auto flex flex-row py-10" >
        <div class=" m-auto text-lg font-bold"> {{ store.name }}'s Blog</div>
      </section>
    </div>
    </section>
    <section class="bg-green-100  row-auto flex flex-row py-10">
          <!--<BlogPost
            title="My First Blog Post"
            content="This is my first blog post" 
            author="John Mackey"

            />
          <BlogPost
          title="My second Blog Post"
          content="This is my second blog post" 
          />-->

        <div v-if="loading">Loading...</div>
        <div v-else>
          <BlogPost
            v-for="post in posts"
            :key="post.id"
            :title="post.title"
            :content="post.content"
            :author="post.author"
            :date="post.date"
          />
        </div>
    </section>
  </main>
</template>

<style scoped>
.hero{
  background-position:50% 10%;
  height:25vw;
}
.hero div{
  font-size:4rem;

}
@media screen and (max-width:800px) {
  .hero{
  background-position:50% 10%;
  height:35vh;
}
}
main{
  margin-bottom:2rem;
}

</style>