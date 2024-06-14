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
                    onclick="addWallet.showModal()"
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
                <dialog id="addWallet" class="modal">
                    <div class="modal-box w-[28rem] overflow-hidden">
                        <h3 class="font-bold text-xl">Add Virtual Wallet</h3>
                        <div class="py-6 space-y-3">
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium"
                                    >Name</label
                                >
                                <input
                                    type="text"
                                    placeholder="Name"
                                    v-model="name"
                                    class="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label for="balance" class="block mb-2 text-sm font-medium"
                                    >Balance</label
                                >
                                <input
                                    type="text"
                                    placeholder="0,00"
                                    class="input input-bordered w-full"
                                    v-model="balance"
                                    @input="formatBalance"
                                />
                                <div class="dropdown dropdown-end absolute right-6">
                                    <div
                                        tabindex="0"
                                        role="button"
                                        class="w-20 btn btn-active btn-ghost"
                                    >
                                        {{ currency }}
                                    </div>
                                    <ul
                                        tabindex="0"
                                        class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li @click="setCurrency('USD')"><a>USD</a></li>
                                        <li @click="setCurrency('EUR')"><a>EUR</a></li>
                                        <li @click="setCurrency('PLN')"><a>PLN</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="modal-action">
                            <form method="dialog" class="space-x-2">
                                <button class="btn w-32" @click="resetModal()">Close</button>
                                <button
                                    class="btn btn-accent w-32"
                                    :class="{ 'btn-disabled': !name || !balance }"
                                    @click="resetModal(), addWallet()"
                                >
                                    Add
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    </TabLayout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { add } from '../services/walletsService'

import TabLayout from '@/components/Tab/TabLayout.vue'
import TabTitle from '@/components/Tab/TabTitle.vue'

const name = ref<string>('')
const balance = ref<string>('')
const currency = ref<string>('USD')

const resetModal = () => {
    setTimeout(() => {
        name.value = ''
        balance.value = ''
        currency.value = 'USD'
    }, 1000)
}

const addWallet = async () => {
    try {
        const response = await add(name.value, balance.value, currency.value)
        console.log(response)
    } catch (error: any) {
        console.error('Error adding wallet:', error)
    }
}

const setCurrency = (newCurrency: string) => {
    currency.value = newCurrency
}

const formatBalance = () => {
    let value = balance.value.replace(/[^\d,]/g, '')

    const commaIndex = value.indexOf(',')
    if (commaIndex !== -1) {
        value = value.slice(0, commaIndex + 1) + value.slice(commaIndex + 1).replace(/,/g, '')
    }

    const parts = value.split(',')
    if (parts[1] && parts[1].length > 2) {
        parts[1] = parts[1].slice(0, 2)
    }

    balance.value = parts.join(',')
}

watch(balance, formatBalance)
</script>
