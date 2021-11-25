<template>
  <main>
    <section id="hero" class="text-center pb-28">
      <div class="container flex flex-col items-center text-[1.15rem]">
        <h1 class="z-10 space-x-28">
          <span class="text-yellow">&ldquo;Hey</span> 
          <span class="text-green">Ada&rdquo;</span>
        </h1>
        <img src="~assets/imgs/ada.png" width="220" class="mx-auto -mt-32" alt="Ada">
        <p class="max-w-md mx-auto my-8">Meet Ada, an intelligent chatbot that makes it easy to get resources for any university course.</p>
        <a href="http://whatsapp.com" target="_blank" class="text-2xl cta" rel="noopener noreferrer">Try It <span>Now</span> 🚀</a>
      </div>
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
  section {
    @apply relative;
  }
  
  section::before {
    @apply absolute top-[-6rem] left-0 bottom-0 right-0;
    content: "";
    background-image: url("~assets/imgs/hero-bg.jpg");
    z-index: -1;
  }
</style>