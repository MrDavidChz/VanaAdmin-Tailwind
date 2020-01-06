<template>
    <div class="flex flex-col w-full h-screen items-center justify-center sm:px-5 md:px-24">
        <span class="m-5">
            <img src="/images/logo.png" class="w-24" />
        </span>
        <div class="bg-gray-100 rounded-lg shadow-xl w-full">
        	<h3 class="py-3 text-center font-semibold text-xl">Register an Account</h3>
            <form class="py-5">
                <div class="flex px-5">
	                <div class="flex-1 mr-3">
	                    <label class="form-label" for="first_name">First Name</label>
	                    <input type="text" name="first_name" id="first_name" placeholder="Enter your First Name" class="form-input-text" />
	                </div>
	                <div class="flex-1">
	                    <label class="form-label" for="last_name">Last Name</label>
	                    <input type="text" name="last_name" id="last_name" placeholder="Enter your Last Name" class="form-input-text" />
	                </div>
                </div>
                <div class="px-5">
                    <label class="form-label" for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your Email" class="form-input-text" />
                </div>
                <div class="flex px-5">
	                <div class="flex-1 mr-3">
	                    <label class="form-label" for="password">Password</label>
	                    <input type="password" name="password" id="password" placeholder="Create your Password" class="form-input-text" />
	                </div>
	                <div class="flex-1">
	                    <label class="form-label" for="confirm_password">Confirm Password</label>
	                    <input type="text" name="confirm_password" id="confirm_password" placeholder="Retype your Password" class="form-input-text" />
	                </div>
                </div>
                <div class="px-5 flex items-center">
                    <input type="checkbox" name="accept_tnc" id="accept_tnc" />
                    <label class="text-sm text-grey-darker ml-2" for="accept_tnc">I have read website terms & conditions & I accept.</label>
                </div>

                <div class="px-5 py-5 flex justify-end">
                    <div class="w-1/3">
                        <button type="button" @click="$router.push({name: 'pageLogin'})" class="btn btn-primary">Sign Up</button>
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