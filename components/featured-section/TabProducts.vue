<template>
    <div>
        <el-tabs type="card" class="tabs lg:block hidden" @tab-click="handleClick">
            <el-tab-pane v-for="tab in OPTION_TABS" :key="tab.title" class="!h-full">
                <template #label>
                    <div class="m-8 bg-white shadow rounded py-8 hover:scale-105 transition-all duration-300">
                        <div class="p-4 rounded-full bg-gray-10 w-[58px] h-[58px] m-auto flex items-center">
                            <img :src="tab.icon" :alt="tab.icon" class="w-[36px] h-[36px] mx-auto">
                        </div>
                        <h4 class="text-[21px] font-bold text-center !text-gray-100">
                            {{ tab.title }}
                        </h4>
                    </div>
                </template>
                <ContentTab />
            </el-tab-pane>
        </el-tabs>
        <el-collapse
            v-model="activeNames"
            class="lg:hidden block !border-0"
            accordion
            @change="handleChange"
        >
            <el-collapse-item
                v-for="(tab, index) in OPTION_TABS"
                :key="tab.title"
                :name="`${index + 1}`"
                class="bg-gray-10 rounded-md p-2 mb-2"
            >
                <template #title>
                    <div class="flex items-center">
                        <div class="p-4 rounded-full bg-gray-10 w-[50px] h-[50px] m-auto flex items-center">
                            <img :src="tab.icon" :alt="tab.icon" class="w-[32px] h-[32px] mx-auto">
                        </div>
                        <h4 class="text-[21px] font-bold text-center !text-gray-100 ml-2">
                            {{ tab.title }}
                        </h4>
                    </div>
                </template>
                <ContentTab />
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
    import OPTION_TABS from '@/constants/tabs';
    import ContentTab from '@/components/featured-section/ContentTab.vue';

    export default {
        components: {
            ContentTab,
        },
        data() {
            return {
                activeName: 'first',
                OPTION_TABS,
                activeNames: ['1'],
            };
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
    @apply !border-0 mb-0;
}
.tabs .is-active {
    @apply !bg-gray-10 rounded-t-lg;
}
.el-collapse-item__header {
    @apply h-full border-0 rounded-md p-2;
}
.el-collapse-item__content {
    @apply pb-0
}
</style>
