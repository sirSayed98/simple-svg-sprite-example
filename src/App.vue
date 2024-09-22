<template>
    <div class="flex-mode flex-column-directiom ">
        <div>
            <svg>
                <use xlink:href="#shape-arrow-down" />
            </svg>
        </div>
        <div class="flex-mode">
            <svg>
                <use xlink:href="#shape-arrow-right" />
            </svg>
            <div>
            <h1>Simple Svg Sprite</h1>
            <span>by sirSayed98</span>

            </div>
            <svg>
                <use xlink:href="#shape-arrow-left" />
            </svg>
        </div>
        <div>
            <svg>
                <use xlink:href="#shape-arrow-up" />
            </svg>
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App'
});

</script>

<style scoped>
.flex-column-directiom {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.flex-mode{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>