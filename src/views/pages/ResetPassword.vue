<template>
    <div class="flex flex-col w-full h-screen items-center justify-center sm:px-5 md:px-24">
        <span class="m-5">
            <img src="/images/logo.png" class="w-24" />
        </span>
        <div class="bg-gray-100 rounded-lg shadow-lg w-full">
            <h3 class="py-3 text-center font-semibold text-xl">Reset your Password</h3>
            <form class="py-5">
                <div class="px-5">
                    <label class="form-label" for="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Enter your Email" class="form-input-text" />
                </div>

                <div class="px-5 py-5 flex justify-end">
                    <div class="w-1/3">
                        <button type="button" class="btn btn-primary" @click="$router.push({name: 'pageLogin'})">Reset Password</button>
                    </div>
                    <div class="w-2/3 text-sm text-right">
                        <div class="mb-2"><router-link :to="{name: 'pageLogin'}">Back to Login</router-link></div> 
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>
  input:checked + svg {
    display: block;
  }
</style>