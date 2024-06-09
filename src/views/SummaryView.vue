<template>
    <NavBar />
    <div class="relative top-24 w-full max-w-7xl mx-auto p-2 space-y-6">
        <TabTitle
            title="Summary"
            description="The analytical tools in this tab allow you to identify spending trends, helping you better understand financial patterns and make informed budgeting decisions."
        />
        <div data-aos="fade-up" class="stats shadow w-full">
            <div class="stat">
                <div class="stat-figure text-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block w-8 h-8 stroke-current"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                        ></path>
                    </svg>
                </div>
                <div class="stat-title">Total Balance</div>
                <div class="stat-value">$19</div>
            </div>

            <div class="stat">
                <div class="stat-figure text-accent">
                    <svg
                        data-slot="icon"
                        fill="none"
                        stroke-width="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        class="inline-block w-8 h-8 stroke-current"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                        ></path>
                    </svg>
                </div>
                <div class="stat-title">Income</div>
                <div class="stat-value">$4,200</div>
            </div>

            <div class="stat">
                <div class="stat-figure text-error">
                    <svg
                        data-slot="icon"
                        fill="none"
                        stroke-width="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        class="inline-block w-8 h-8 stroke-current"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                        ></path>
                    </svg>
                </div>
                <div class="stat-title">Expense</div>
                <div class="stat-value">$1,200</div>
            </div>
        </div>
        <div data-aos="fade-up" class="flex space-x-6">
            <div class="flex-1 h-96 shadow bg-base-100 rounded-[15px] px-6 py-4 space-y-5 relative">
                <p class="stat-title text-base">Budgets</p>
                <div class="space-y-1">
                    <div>
                        <div class="flex justify-between">
                            <p>Zakupy</p>
                            <p>$250</p>
                        </div>
                        <progress
                            class="progress progress-info h-3"
                            value="20"
                            max="100"
                        ></progress>
                    </div>
                    <div class="text-success">
                        <div class="flex justify-between">
                            <p>Prąd</p>
                            <p>$55</p>
                        </div>
                        <progress
                            class="progress progress-success h-3"
                            value="100"
                            max="100"
                        ></progress>
                    </div>
                    <div>
                        <div class="flex justify-between">
                            <p>Samochód</p>
                            <p>$55</p>
                        </div>
                        <progress
                            class="progress progress-secondary h-3"
                            value="3"
                            max="100"
                        ></progress>
                    </div>
                    <div>
                        <div class="flex justify-between">
                            <p>Osobiste</p>
                            <p>$55</p>
                        </div>
                        <progress
                            class="progress progress-accent h-3"
                            value="33"
                            max="100"
                        ></progress>
                    </div>
                    <div>
                        <div class="flex justify-between">
                            <p>Mieszkanie</p>
                            <p>$55</p>
                        </div>
                        <progress
                            class="progress progress-warning h-3"
                            value="75"
                            max="100"
                        ></progress>
                    </div>
                </div>
                <div class="absolute bottom-4 right-4 flex justify-end cursor-pointer">
                    <span class="text-accent">Zobacz wszystkie</span>
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
            <div class="flex-1 h-96 shadow bg-base-100 rounded-[15px] px-6 py-4">
                <p class="stat-title text-base">Wallets</p>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import TabTitle from '@/components/TabTitle.vue'
</script>
