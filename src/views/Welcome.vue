<template>
    <div class="flex flex-row items-center gap-6">
        <div class="flex items-center justify-center w-2/4">
            <img class="w-4/5" src="@/assets/img/logo.png" alt="logo" />
        </div>
        <div class="flex flex-col w-2/4 self-start">
            <div class="text-8xl font-bold" style="color: #f2f2f2">Manage your budget</div>
            <div class="text-6xl font-semibold mt-20" style="color: rgba(235, 235, 235, 0.815)">
                Join us today.
            </div>
            <div class="flex flex-col mt-5 gap-2">
                <button
                    class="btn btn-md btn-wide btn-outline btn-accent w-[70%]"
                    @click="handleForm('login')"
                >
                    Login
                </button>
                <button
                    class="btn btn-md btn-wide btn-neutral w-[70%]"
                    @click="handleForm('register')"
                >
                    Register
                </button>
            </div>
        </div>
    </div>

    <!-- <TransitionGroup> -->
    <Login v-if="visible.login" @handleForm="handleForm" />
    <Register v-if="visible.register" @handleForm="handleForm" />
    <!-- </TransitionGroup> -->
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { authenticateToken } from '../services/protectedService'

import Login from '../components/Auth/Login.vue'
import Register from '../components/Auth/Register.vue'

const router = useRouter()
const visible = reactive({
    login: false,
    register: false
})

const autoLogin = async () => {
    try {
        await authenticateToken()
        router.push('/home')
    } catch (error) {
        // console.log('Token invalid or expired', error)
    }
}

onMounted(() => {
    autoLogin()
})

type FormType = 'login' | 'register' | 'none'

const handleForm = (form: FormType) => {
    visible.login = form === 'login'
    visible.register = form === 'register'
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
