<template>
    <div class="flex flex-col w-full h-screen items-center justify-center sm:px-5 md:px-24">
        <span class="m-5">
            <img src="/images/logo.png" class="w-24" />
        </span>
        <div class="bg-gray-100 rounded-lg shadow-xl w-full">
        	<h3 class="py-3 text-center font-semibold text-xl">Login into your Account</h3>
            <form class="py-5">
                <div class="px-5">
                    <label class="form-label" for="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter your Username" class="form-input-text" />
                </div>
                <div class="px-5">
                    <label class="form-label" for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your Password" class="form-input-text" />
                </div>
                <div class="px-5 flex items-center">
                    <input type="checkbox" name="remember_me" id="remember_me" />
                    <label class="text-sm text-grey-darker ml-2" for="remember_me">Remember Me</label>
                </div>

                <div class="px-5 py-5 flex justify-end">
                    <div class="w-1/3">
                        <button type="button" class="btn btn-primary" @click="$router.push({name: 'home'})">Login</button>
                    </div>
                    <div class="w-2/3 text-sm text-right">
                        <div class="mb-2"><router-link :to="{name: 'pageRegister'}">Don't have an account? Sign Up</router-link></div> 
                        <div><router-link :to="{name: 'pageResetPassword'}">Forget your Password? Reset here!</router-link></div>
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