<template>
  <div class="headings">
    <h1>Heading H1</h1>
    <h2>Heading H2</h2>
    <h3>Heading H3</h3>
    <h4>Heading H4, H5 and H6</h4>
  </div>
  <div class="text">
    <p>
      Regular text with example. Regular text with example. Regular text with example. Regular text with example. Regular text with example. Regular text with example. Regular text with example. Regular text with example. Regular text with example. Regular text with example. Regular text with example. Regular text with example. Regular text with example. Regular text with example. 
    </p>  
  </div>
  <div class="buttons">
    <r-button>Default</r-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RButton from '@/components/Button.vue';
export default defineComponent({
  name: 'App',
  components:{RButton}
});
</script>

<style lang="scss">
#app {
  text-align: center;
  margin: 60px;
}
</style>
