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
  <h2>Default button</h2>
  <div class="buttons">
    <r-button>Default</r-button>
    <r-button type="primery">Default</r-button>
    <r-button type="success">Default</r-button>
    <r-button type="warning">Default</r-button>
    <r-button type="danger">Default</r-button>
    <r-button type="info">Default</r-button>
  </div>
  <h2>Default-disabled button</h2>
  <div class="buttons">
    <r-button disabled>Default</r-button>
    <r-button type="primery" disabled>Default</r-button>
    <r-button type="success" disabled>Default</r-button>
    <r-button type="warning" disabled>Default</r-button>
    <r-button type="danger" disabled>Default</r-button>
    <r-button type="info" disabled>Default</r-button>
  </div>
  <h2>Round button</h2>
  <div class="buttons">
    <r-button round>Default</r-button>
    <r-button round type="primery">Default</r-button>
    <r-button round type="success">Default</r-button>
    <r-button round type="warning">Default</r-button>
    <r-button round type="danger">Default</r-button>
    <r-button round type="info">Default</r-button>
  </div>
  <h2>Round-disabled button</h2>
  <div class="buttons">
    <r-button round disabled>Default</r-button>
    <r-button round type="primery" disabled>Default</r-button>
    <r-button round type="success" disabled>Default</r-button>
    <r-button round type="warning" disabled>Default</r-button>
    <r-button round type="danger" disabled>Default</r-button>
    <r-button round type="info" disabled>Default</r-button>
  </div>
  <h2>Plain button</h2>
  <div class="buttons">
    <r-button plain>Default</r-button>
    <r-button plain type="primery">Default</r-button>
    <r-button plain type="success">Default</r-button>
    <r-button plain type="warning">Default</r-button>
    <r-button plain type="danger">Default</r-button>
    <r-button plain type="info">Default</r-button>
  </div>
  <h2>Plain-disabled button</h2>
  <div class="buttons">
    <r-button plain disabled>Default</r-button>
    <r-button plain type="primery" disabled>Default</r-button>
    <r-button plain type="success" disabled>Default</r-button>
    <r-button plain type="warning" disabled>Default</r-button>
    <r-button plain type="danger" disabled>Default</r-button>
    <r-button plain type="info" disabled>Default</r-button>
  </div>
</template>

<script>
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
.buttons {
  .r-button {
    margin: 0 20px;
  }
}
</style>
