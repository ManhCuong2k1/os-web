<template>
    <el-tabs type="card" class="tabs" @tab-click="handleClick">
        <el-tab-pane v-for="tab in OPTION_TABS" :key="tab.title" class="!h-full">
            <template #label>
                <div class="m-8 bg-white shadow rounded py-8 hover:scale-105 transition-all duration-300">
                    <div class="p-4 rounded-full bg-gray-10 w-[58px] h-[58px] m-auto">
                        <img :src="tab.icon" :alt="tab.icon" class="w-[36px] h-[36px] mx-auto">
                    </div>
                    <h4 class="text-[21px] font-bold text-center !text-gray-100">
                        {{ tab.title }}
                    </h4>
                </div>
            </template>
            User
        </el-tab-pane>
    </el-tabs>
</template>
<script>
    import OPTION_TABS from '@/constants/tabs';

    export default {
        data() {
            return {
                activeName: 'first',
                OPTION_TABS,
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
        },
    };
</script>

<style>
.tabs .el-tabs__nav {
    @apply w-full grid grid-cols-4 !border-0;
}

.tabs .el-tabs__nav .el-tabs__item {
    @apply h-full !border-0 !p-0;
}
.tabs .el-tabs__header {
    @apply !border-0;
}
.tabs .is-active {
    @apply !bg-gray-10 rounded-t-lg;
}
</style>
