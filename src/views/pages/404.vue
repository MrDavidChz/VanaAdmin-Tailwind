<template>
    <div class="flex flex-col w-full h-screen items-center justify-center sm:px-5 md:px-24">
        <span class="m-5">
            <img src="/images/logo.png" class="w-24" />
        </span>
        <h2 class="text-6xl font-bold">404</h2>
        <p class="mt-5 text-4xl">You are lost somewhere!</p>
        <button class="bg-primary mt-5 px-5 py-3 text-white rounded-lg hover:bg-primaryHover" @click="$router.push({name: 'home'})">Back to Home</button>
    </div>
</template>

<script>
    export default {

    }
</script>