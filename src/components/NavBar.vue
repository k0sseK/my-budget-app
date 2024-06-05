<template>
    <div class="absolute top-0 left-0 w-full">
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <a class="btn btn-ghost text-xl">Budget Manager</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1 space-x-1">
                    <li :class="isActive('Summary')" @click="navigateTo('/summary')">
                        <a>Summary</a>
                    </li>
                    <li :class="isActive('Transactions')" @click="navigateTo('/transactions')">
                        <a>Transactions</a>
                    </li>
                    <li :class="isActive('Wallets')" @click="navigateTo('/wallets')">
                        <a>Wallets</a>
                    </li>
                </ul>
            </div>
            <div class="navbar-end">
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                        <div class="w-9 rounded-full">
                            <img
                                alt="profile-picture"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            />
                        </div>
                    </div>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a class="justify-between"> Profile </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li @click="logoutUser()"><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { logout } from '../services/authService'

const router = useRouter()
const route = useRoute()

const logoutUser = () => {
    logout()
    router.push('/')
}

const navigateTo = (path: string) => {
    router.push(path)
}

const isActive = (name: string) => {
    return route.name === name ? 'text-accent bg-neutral rounded-lg' : ''
}
</script>
