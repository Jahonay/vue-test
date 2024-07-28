<template>
    <div class=" mx-auto w-50 p-3">
         <div class="blog columns-1 w-1/2 blog-post block mx-auto bg-green-300 rounded shadow-md w-50 p-3">
      <h2 class="font-bold text-lg">{{ title }}</h2>
      <p>{{ content }}</p>
      <p class="font-bold">{{ author }}</p>
      <p>{{ date }}</p>
    </div>
    </div>
   
  </template>
  
  <script>
  export default {
    name: 'BlogPost',
    props: {
      title: String,
      content: String,
      author: String,
      date: String
    }
  };
  </script>
  
  <style scoped>
  .blog-post {
    padding: 20px;
    border-bottom: 1px solid #ddd;
  }

  @media screen and (max-width:800px) {
  .hero{
  background-position:50% 10%;
  height:35vh;
}
.blog{
    width:90%
}
}
  </style>
  