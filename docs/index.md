<script setup>
  import Hero from './components/Hero.vue'
  import ArticleCard from './components/ArticleCard.vue'
</script>

<Hero name="Nemo" subtitle="Welcome to my blog. This one is built with Vitepress and Vue.js. Vitepress is super cool." />

<ArticleCard title="Article 1" excerpt="Lorem i" image="https://images.unsplash.com/photo-1664663751485-c58e9276ccce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80" author="John Doe" href="/articles/article1" date="2022-08-01" />
