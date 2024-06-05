<template>
    <div class="not-found">
        <h1
            class="text-9xl font-bold bg-gradient-to-r from-[#11998e] to-[#38ef7d] inline-block text-transparent bg-clip-text"
        >
            Oops!
        </h1>
        <div class="my-3">
            <p class="uppercase font-bold">404 - Page Not Found</p>
            <p>The page you are looking for doesn't exist or has been moved.</p>
        </div>
        <button class="btn btn-outline btn-accent">
            <RouterLink to="/">Go to Home</RouterLink>
        </button>
    </div>
</template>

<style scoped>
.not-found {
    text-align: center;
    margin-top: 50px;
}
</style>
