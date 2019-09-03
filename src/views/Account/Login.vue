<template class="account-page">
	<!-- Main Wrapper -->
        <div class="main-wrapper">
			<div class="account-content">
				<div class="container">
					<!-- Account Logo -->
					<div class="account-logo">
						<router-link to="/"><img src="../../assets/logo.png" alt="Raveshift"></router-link>
					</div>
					<!-- /Account Logo -->
					
					<div class="account-box">
						<div class="account-wrapper">
							<h3 class="account-title">Login</h3>
							<p class="account-subtitle">Access to our dashboard</p>
							
							<!-- Account Form -->
							<form @submit.prevent="onSubmitLogin">
								<div class="form-group">
									<label>Company Username</label>
									<input class="form-control" v-model="username" type="text">
								</div>
								<div class="form-group">
									<label>Email Address</label>
									<input v-model="email" class="form-control" type="text">
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col">
											<label>Password</label>
										</div>
										<div class="col-auto">
											<router-link class="text-muted" to="/forgot-password">
												Forgot password?
											</router-link>
										</div>
									</div>
									<input class="form-control" v-model="password" type="password">
								</div>
								<div class="form-group text-center">
									<button class="btn btn-primary account-btn" type="submit">Login</button>
								</div>
								<div class="account-footer">
									<p>Don't have an account yet? <router-link to="/register">Register</router-link></p>
								</div>
							</form>
							<!-- /Account Form -->
							
						</div>
					</div>
				</div>
			</div>
        </div>
		<!-- /Main Wrapper -->

</template>

<script>
import {mapActions} from "vuex";

export default{
	name:"Login",
	data:function(){
		return {
			username:'',
			email:'',
			password:''
		}
	},
	methods:{
		...mapActions(["doLogin"]),
		onSubmitLogin(){
			this.doLogin({username:this.username, email:this.email, password:this.password})
			
		}
	}
}
</script>