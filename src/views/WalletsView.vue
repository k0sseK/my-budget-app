<template>
    <TabLayout>
        <TabTitle
            title="Wallets"
            description="Connect accounts from your bank or create virtual wallets to manage them in the manager."
        />
        <div data-aos="fade-up" class="flex space-x-6">
            <div
                class="flex-1 h-[36rem] shadow bg-base-100 rounded-[15px] px-6 py-4 space-y-5 relative"
            >
                <p class="stat-title text-base">Bank accounts</p>
                <div class="space-y-4">
                    <div class="flex justify-center mt-14">
                        <img src="../assets/svg/no-data.svg" class="h-96" />
                    </div>
                </div>
                <div
                    class="absolute bottom-4 right-4 flex space-x-1 justify-end items-center cursor-pointer"
                >
                    <span class="text-accent">Add account</span>
                    <svg
                        data-slot="icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        class="text-accent inline-block w-4 h-4 stroke-current"
                    >
                        <path
                            d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"
                        ></path>
                    </svg>
                </div>
            </div>
            <div
                class="flex-1 h-[36rem] shadow bg-base-100 rounded-[15px] px-6 py-4 space-y-5 relative"
            >
                <p class="stat-title text-base">Virtual Wallets</p>
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
                <div
                    class="absolute bottom-4 right-4 flex space-x-1 justify-end items-center cursor-pointer"
                >
                    <span class="text-accent">Add wallet</span>
                    <svg
                        data-slot="icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        class="text-accent inline-block w-4 h-4 stroke-current"
                    >
                        <path
                            d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    </TabLayout>
</template>

<script setup lang="ts">
import TabLayout from '@/components/Tab/TabLayout.vue'
import TabTitle from '@/components/Tab/TabTitle.vue'
</script>
