<template>
    <div class="background"></div>

    <div class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div class="container bg-zinc-950 w-[36rem] h-[40rem] rounded-xl p-4">
            <div class="flex flex-row items-center justify-between text-slate-50 mb-16">
                <div></div>
                <span class="text-4xl font-semibold tracking-wider">Login</span>
                <svg
                    class="w-7 place-self-start cursor-pointer hover:bg-neutral p-1 rounded-full transition-colors"
                    data-slot="icon"
                    fill="none"
                    stroke-width="2.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    @click="$emit('close')"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                    ></path>
                </svg>
            </div>
            <form class="space-y-4 md:space-y-5 px-16" action="#">
                <div>
                    <label
                        for="username"
                        class="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
                        >Username</label
                    >
                    <input
                        type="username"
                        name="username"
                        v-model="username"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-info-content dark:border-zinc-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="username"
                    />
                </div>
                <div>
                    <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Password</label
                    >
                    <input
                        type="password"
                        name="password"
                        v-model="password"
                        placeholder="••••••••"
                        autocomplete="new-password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-info-content dark:border-zinc-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input type="checkbox" class="w-4 h-4 rounded checkbox" />
                        </div>
                        <div class="ml-2 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300"
                                >Remember me</label
                            >
                        </div>
                    </div>
                    <a
                        href="#"
                        class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >Forgot password?</a
                    >
                </div>
                <button
                    type="submit"
                    class="w-full btn btn-outline text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    :disabled="!username || !password"
                    @click="loginUser"
                >
                    Login
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?
                    <a
                        href="#"
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >Sign up</a
                    >
                </p>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { login } from '../../services/authService'

const username = ref('')
const password = ref('')
const passwordVisible = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error'>('success')

const loginUser = async () => {
    console.log(username.value, password.value)
    try {
        console.log(username.value, password.value)
        const response = await login(username.value, password.value)
        // messageType.value = 'success'
        // message.value = 'Login successful'
        // Store token in localStorage or a state management store
        localStorage.setItem('token', response.token)
    } catch (error: any) {
        messageType.value = 'error'
        message.value = error.response.data.message || 'Error logging in'
    }
}

const close = () => {}
</script>

<style scoped>
.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: oklch(var(--b3));
    opacity: 0.5;
    overflow: hidden;
}
</style>
