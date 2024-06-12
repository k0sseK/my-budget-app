<template>
    <TabLayout>
        <TabTitle
            title="Summary"
            description="The analytical tools in this tab allow you to identify spending trends, helping you better understand financial patterns and make informed budgeting decisions."
        />
        <SummaryStats />
        <div data-aos="fade-up" class="flex space-x-6">
            <div class="flex-1 h-96 shadow bg-base-100 rounded-[15px] px-6 py-4 space-y-5 relative">
                <p class="stat-title text-base">Budgets</p>
                <div class="space-y-1">
                    <div>
                        <div class="flex justify-between">
                            <p>Shopping</p>
                            <p>$150</p>
                        </div>
                        <progress
                            class="progress progress-info h-3"
                            value="20"
                            max="100"
                        ></progress>
                    </div>
                    <div class="text-success">
                        <div class="flex justify-between">
                            <p>Electricity</p>
                            <p>$100</p>
                        </div>
                        <progress
                            class="progress progress-success h-3"
                            value="100"
                            max="100"
                        ></progress>
                    </div>
                    <div>
                        <div class="flex justify-between">
                            <p>Car</p>
                            <p>$300</p>
                        </div>
                        <progress
                            class="progress progress-secondary h-3"
                            value="3"
                            max="100"
                        ></progress>
                    </div>
                    <div>
                        <div class="flex justify-between">
                            <p>Personal</p>
                            <p>$250</p>
                        </div>
                        <progress
                            class="progress progress-accent h-3"
                            value="33"
                            max="100"
                        ></progress>
                    </div>
                    <div>
                        <div class="flex justify-between">
                            <p>Flat</p>
                            <p>$120</p>
                        </div>
                        <progress
                            class="progress progress-warning h-3"
                            value="75"
                            max="100"
                        ></progress>
                    </div>
                </div>
                <div class="absolute bottom-4 right-4 flex justify-end cursor-pointer">
                    <span class="text-accent">Check all</span>
                    <svg
                        data-slot="icon"
                        fill="none"
                        stroke-width="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        class="text-accent inline-block w-8 h-6 stroke-current"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        ></path>
                    </svg>
                </div>
            </div>
            <div class="flex-1 h-96 shadow bg-base-100 rounded-[15px] px-6 py-4 space-y-5 relative">
                <p class="stat-title text-base">Wallets</p>
                <div class="space-y-4">
                    <button class="flex justify-between btn btn-neutral w-full">
                        <span>Test Wallet</span>
                        <span>$20</span>
                    </button>
                    <button class="flex justify-between btn btn-neutral w-full">
                        <span>Property Wallet</span>
                        <span>$1,120</span>
                    </button>
                    <button class="flex justify-between btn btn-neutral w-full">
                        <span>Test Wallet</span>
                        <span>$3,213</span>
                    </button>
                    <button class="flex justify-between btn btn-neutral w-full">
                        <span>Test Wallet</span>
                        <span>$223</span>
                    </button>
                </div>
                <div class="absolute bottom-4 right-4 flex justify-end cursor-pointer">
                    <span class="text-accent">Check all</span>
                    <svg
                        data-slot="icon"
                        fill="none"
                        stroke-width="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        class="text-accent inline-block w-8 h-6 stroke-current"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
        <div
            data-aos="fade-up"
            class="flex flex-col space-x-6 px-6 py-4 shadow bg-base-100 rounded-[15px]"
        >
            <div>
                <p class="stat-title text-base">Annual Statement</p>
            </div>
            <BarChart />
        </div>
    </TabLayout>
</template>

<script setup lang="ts">
import TabLayout from '@/components/TabLayout.vue'
import TabTitle from '@/components/TabTitle.vue'

import BarChart from '@/components/BarChart.vue'
import SummaryStats from '@/components/Summary/SummaryStats.vue'
</script>
