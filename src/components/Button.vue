<template >
    <button class="r-button">
        <span>
            <slot></slot>
        </span>
    </button>
</template>
<script lang="ts">
export default {
    name: 'RButton',
}
</script>
<style lang="scss">
.r-button {
    cursor: pointer;
    padding: 10px 20px;
    border: 1px solid $base-border-color;
    border-radius: 5px;
    background: $basic-color-2;
    color: $regular-text-color;
    &:hover {
        border: 1px solid $brand-color;
        background: $brand-sub-color-8;
        color: $brand-color;
    }
    &__text {
        font-family: 'Roboto';
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
    }
} 
</style>