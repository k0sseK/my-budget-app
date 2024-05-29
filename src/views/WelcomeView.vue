<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
    <v-container>
        <v-row no-gutters>
            <v-col>
                <img src="@/assets/img/logo.png" alt="logo" />
            </v-col>
            <v-col>
                <div class="text-h1 font-weight-bold" style="color: #f2f2f2">
                    Manage your budget
                </div>
                <div
                    class="text-h4 font-weight-bold mt-12"
                    style="color: rgba(235, 235, 235, 0.815)"
                >
                    Join us today.
                </div>
                <div class="d-flex flex-column w-75 mt-5">
                    <v-btn variant="outlined" color="#11998e" class="w-50">Login</v-btn>
                    <v-btn variant="tonal" class="w-50 mt-2">Register</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
