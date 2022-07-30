<template>
  <span class="r-icon" v-html="iconSvg"></span>
</template>
<script>
import feather from 'feather-icons';
export default {
  name: 'RIcon',
  props: {
    type: {
      type: String
    },
    size: {
      type: Number,
      default: 20
    },
    color: {
      type: String,
      default: '#000000'
    }
  },
  computed: {
    iconSvg() {
      return feather.icons[this.type].toSvg({
        width: this.size,
        height: this.size,
        color: this.color
      });
    }
  }
};
</script>
<style lang="scss">
.r-icon {
  display: inline-block;
  font-size: 0;
}
</style>
