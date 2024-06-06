<template>
    <div>
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
                        @click="$emit('handleForm', 'none')"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        ></path>
                    </svg>
                </div>
                <form class="space-y-3 md:space-y-3 px-16" @submit.prevent="loginUser">
                    <input type="text" name="hidden-username" autocomplete="username" hidden />
                    <div>
                        <label
                            for="username"
                            class="block mb-2 text-sm font-medium text-slate-900 dark:text-white"
                            >Username</label
                        >
                        <input
                            v-model="username"
                            type="text"
                            name="username"
                            id="username"
                            class="bg-info-content border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-info-content dark:border-zinc-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Username"
                            autocomplete="username"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Password</label
                        >
                        <input
                            v-model="password"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            autocomplete="new-password"
                            class="bg-info-content border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-info-content dark:border-zinc-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input
                                    v-model="remember"
                                    type="checkbox"
                                    id="remember"
                                    class="w-4 h-4 border border-gray-300 rounded bg-info-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                />
                            </div>
                            <div class="ml-3 text-sm">
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
                    >
                        Login<span class="loading loading-spinner loading-xs" v-if="loading"></span>
                    </button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet?
                        <a
                            href="#"
                            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            @click="$emit('handleForm', 'register')"
                            >Register now</a
                        >
                    </p>
                    <div
                        role="alert"
                        class="alert"
                        :class="{
                            'alert-error': messageType === 'error',
                            'alert-success': messageType === 'success'
                        }"
                        v-if="message"
                    >
                        <svg
                            v-if="messageType === 'error'"
                            xmlns="http://www.w3.org/2000/svg"
                            class="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <svg
                            v-else
                            xmlns="http://www.w3.org/2000/svg"
                            class="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>{{ message }}</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../../services/authService'

const emit = defineEmits(['handleForm'])
const router = useRouter()

const username = ref('')
const password = ref('')
const remember = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error'>('success')

const loading = ref(false)

const loginUser = async () => {
    try {
        loading.value = true

        const response = await login(username.value, password.value)

        messageType.value = 'success'
        message.value = 'Login successful'

        localStorage.setItem('token', response.token)

        if (remember.value) {
            localStorage.setItem('username', username.value)
            localStorage.setItem('password', password.value)
        } else {
            localStorage.removeItem('username')
            localStorage.removeItem('password')
        }

        router.push('/summary')
    } catch (error: any) {
        loading.value = false

        messageType.value = 'error'
        message.value = `Error! ${error.response.data.message}` || 'Error logging in'
    }
}

onMounted(() => {
    const storedUsername = localStorage.getItem('username')
    const storedPassword = localStorage.getItem('password')

    if (storedUsername && storedPassword) {
        username.value = storedUsername
        password.value = storedPassword
        remember.value = true
    }
})
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
