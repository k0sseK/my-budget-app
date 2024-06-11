<template>
    <div class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
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
