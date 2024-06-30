<template>
    <TabLayout>
        <TabTitle
            title="Transactions"
            description="Here you can check history of your all transactions."
        />
        <div class="flex items-center space-x-5">
            <div class="shadow bg-base-100 rounded-[15px] w-96 h-[44rem] py-4">
                <p class="stat-title text-2xl font-medium pb-5 mx-6">Categories</p>
                <ul>
                    <li
                        v-for="category in categories"
                        :key="category.name"
                        class="hover:cursor-pointer hover:bg-base-200 px-5 py-2"
                    >
                        <a class="flex items-center gap-2"
                            ><div
                                v-if="category.icon"
                                v-html="category.icon"
                                class="inline-block w-8 h-8 p-1 rounded-md"
                                :style="{ color: category.color, background: category.background }"
                            ></div>
                            {{ category.name }}</a
                        >
                    </li>
                </ul>
            </div>
            <div class="shadow bg-base-100 rounded-[15px] w-full h-[44rem] px-6 py-4">
                <p class="stat-title text-2xl font-medium">Transactions</p>
            </div>
        </div>
    </TabLayout>
</template>

<script setup lang="ts">
import TabLayout from '@/components/Tab/TabLayout.vue'
import TabTitle from '@/components/Tab/TabTitle.vue'

import categories from '@/config/categories'
</script>
