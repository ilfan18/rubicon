<template >
    <button 
        class="r-button" 
        :class="[
            {
            'r-button--round': round,
            'r-button--plain': plain,
            },
            typeClass
        ]"
    >
        <span class="r-button__text">
            <slot></slot>
        </span>
    </button>
</template>
<script>
export default {
    name: 'RButton',
    props: {
        round: {
            type: Boolean,
            default: null
        },
        plain: {
            type: Boolean,
            default: null
        },
        type: {
            type: String,
            default: null
        }
    },
    computed: {
        typeClass() {
            switch (this.type) {
                case 'primery':
                    return 'r-button--primery'
                case 'success':
                    return 'r-button--success'
                case 'warning':
                    return 'r-button--warning'
                case 'danger':
                    return 'r-button--danger'
                case 'info':
                    return 'r-button--info'
                default:
                    return ''
            }
        }
    }
}
</script>
<style lang="scss">
.r-button {
    // default button
    cursor: pointer;
    box-shadow: none;
    line-height: 1;
    padding: 11px 19px;
    border: 1px solid $border-base-color;
    border-radius: 5px;
    background-color: $base-color-2;
    transition: all 0.1s ease-in-out;
    color: $text-regular-color;
    &:hover, &:focus, &:focus-visible {
        border-color: $brand-color;
        background-color: $brand-sub-color-1;
        color: $brand-sub-color-5;
    }
    &:active {
        outline: none;
        border-color: $brand-color;
        background-color: $brand-sub-color-1;
        color: $brand-color;
    }
    &:focus-visible {
        outline: none;
    }
    &__text {
        display: block;
        font-family: 'Roboto';
        font-weight: 600;
        font-size: 16px;
        line-height: 1;
    }
    // Default disabled button
    &:disabled {
        cursor: not-allowed;
        border-color: $border-extra-light-color;
        background-color: $base-color-2;  
        color: $text-placeholder-color;
    }
    // Primery button
    &.r-button--primery {
        border-color: $brand-color;
        background-color: $brand-color;
        color: $base-color-2;
        &:hover, &:focus, &:focus-visible{
            border-color: $brand-sub-color-5;
            background-color: $brand-sub-color-5;
        }
        &:active{
            border-color: $brand-color;
            background-color: $brand-color;
            color: $base-color-2;        
        }
        &:disabled{
            border-color: $brand-sub-color-3;
            background-color: $brand-sub-color-3;  
            color: $base-color-2;
        }
    }
    // Success button
    &.r-button--success {
        border-color: $success-color;
        background-color: $success-color;
        color: $base-color-2;
        &:hover, &:focus, &:focus-visible{
            border-color: $success-sub-color-5;
            background-color: $success-sub-color-5;
        }
        &:active{
            border-color: $success-color;
            background-color: $success-color;
            color: $base-color-2;        
        }
        &:disabled{
            border-color: $success-sub-color-3;
            background-color: $success-sub-color-3;  
            color: $base-color-2;
        }
    }
    // Warning button
    &.r-button--warning {
        border-color: $warning-color;
        background-color: $warning-color;
        color: $base-color-2;
        &:hover, &:focus, &:focus-visible{
            border-color: $warning-sub-color-5;
            background-color: $warning-sub-color-5;
        }
        &:active{
            border-color: $warning-color;
            background-color: $warning-color;
            color: $base-color-2;        
        }
        &:disabled{
            border-color: $warning-sub-color-3;
            background-color: $warning-sub-color-3;  
            color: $base-color-2;
        }
    }
    // Danger button
    &.r-button--danger {
        border-color: $danger-color;
        background-color: $danger-color;
        color: $base-color-2;
        &:hover, &:focus, &:focus-visible{
            border-color: $danger-sub-color-5;
            background-color: $danger-sub-color-5;
        }
        &:active{
            border-color: $danger-color;
            background-color: $danger-color;
            color: $base-color-2;        
        }
        &:disabled{
            border-color: $danger-sub-color-3;
            background-color: $danger-sub-color-3;  
            color: $base-color-2;
        }
    }
    // Info button
    &.r-button--info {
        border-color: $info-color;
        background-color: $info-color;
        color: $base-color-2;
        &:hover, &:focus, &:focus-visible{
            border-color: $info-sub-color-5;
            background-color: $info-sub-color-5;
        }
        &:active{
            border-color: $info-color;
            background-color: $info-color;
            color: $base-color-2;        
        }
        &:disabled{
            border-color: $info-sub-color-3;
            background-color: $info-sub-color-3;  
            color: $base-color-2;
        }
    }
    // Round button
    &--round{
        border-radius: 20px;
    }
    // Circle button
    &--circle{
        border-radius: 50%;
    }
    // Plain button
    &.r-button--plain{
        // TODO: Проверить без этого
        background-color: $base-color-2;
        &:hover, &:focus, &:focus-visible{
            border-color: $brand-color;
            color: $brand-sub-color-5;
        }
        &:active{
            border-color: $brand-color;
            color: $brand-color;
        }
        &:disabled{
            border-color: $border-extra-light-color;
            color: $text-placeholder-color;
        }
        &.r-button--primery {
            border-color: $brand-color;
            background-color: $brand-sub-color-1;
            color: $brand-sub-color-5;
            &:hover, &:focus, &:focus-visible{
                border-color: $brand-sub-color-5;
                background-color: $brand-sub-color-5;
                color: $base-color-2; 
            }
            &:active{
                border-color: $brand-color;
                background-color: $brand-color;
                color: $base-color-2;        
            }
            &:disabled{
                border-color: $brand-sub-color-3;
                background-color: $brand-sub-color-1;
                color: $brand-sub-color-4;
            }
        }
        &.r-button--success {
            border-color: $success-color;
            background-color: $success-sub-color-1;
            color: $success-sub-color-5;
            &:hover, &:focus, &:focus-visible{
                border-color: $success-sub-color-5;
                background-color: $success-sub-color-5;
                color: $base-color-2; 
            }
            &:active{
                border-color: $success-color;
                background-color: $success-color;
                color: $base-color-2;        
            }
            &:disabled{
                border-color: $success-sub-color-3;
                background-color: $success-sub-color-1;
                color: $success-sub-color-4;
            }
        }
        &.r-button--warning {
            border-color: $warning-color;
            background-color: $warning-sub-color-1;
            color: $warning-sub-color-5;
            &:hover, &:focus, &:focus-visible{
                border-color: $warning-sub-color-5;
                background-color: $warning-sub-color-5;
                color: $base-color-2; 
            }
            &:active{
                border-color: $warning-color;
                background-color: $warning-color;
                color: $base-color-2;        
            }
            &:disabled{
                border-color: $warning-sub-color-3;
                background-color: $warning-sub-color-1;
                color: $warning-sub-color-4;
            }
        }
        &.r-button--danger {
            border-color: $danger-color;
            background-color: $danger-sub-color-1;
            color: $danger-sub-color-5;
            &:hover, &:focus, &:focus-visible{
                border-color: $danger-sub-color-5;
                background-color: $danger-sub-color-5;
                color: $base-color-2; 
            }
            &:active{
                border-color: $danger-color;
                background-color: $danger-color;
                color: $base-color-2;        
            }
            &:disabled{
                border-color: $danger-sub-color-3;
                background-color: $danger-sub-color-1;
                color: $danger-sub-color-4;
            }
        }
        &.r-button--info {
            border-color: $info-color;
            background-color: $info-sub-color-1;
            color: $info-sub-color-5;
            &:hover, &:focus, &:focus-visible{
                border-color: $info-sub-color-5;
                background-color: $info-sub-color-5;
                color: $base-color-2; 
            }
            &:active{
                border-color: $info-color;
                background-color: $info-color;
                color: $base-color-2;        
            }
            &:disabled{
                border-color: $info-sub-color-3;
                background-color: $info-sub-color-1;
                color: $info-sub-color-4;
            }
        }
    }
} 
</style>