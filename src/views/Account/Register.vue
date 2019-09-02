<template class="account-page">
<!-- Main Wrapper -->
        <div class="main-wrapper">
			<div class="account-content">
				<div class="container">
				
					<!-- Account Logo -->
					<div class="account-logo">
						<router-link to="/"><img src="../../assets/logo.png" alt="RaveShift"></router-link>
					</div>
					<!-- /Account Logo -->
					
					<div class="account-box">
						<div class="account-wrapper">
							<h3 class="account-title">Register</h3>
							
							<!-- Account Form -->
							<form @submit.prevent="onSubmit">
								<div class="form-group">
									<label>Email</label>
									<input class="form-control" type="text">
								</div>
								<div class="form-group">
									<label>Company Username</label>
									<input class="form-control" type="text">
								</div>
								<div class="form-group">
									<label>Password</label>
									<input class="form-control" type="password">
								</div>
								<div class="form-group">
									<label>Repeat Password</label>
									<input class="form-control" type="password">
								</div>
								<div class="form-group text-center">
									<button class="btn btn-primary account-btn" type="submit">Register</button>
								</div>
								<div class="account-footer">
									<p>Already have an account? <router-link to="/login">Login</router-link></p>
								</div>
							</form>
							<!-- /Account Form -->
						</div>
					</div>
				</div>
			</div>
        </div>
</template>
<script>
export default{
    name:"Register"
}
</script>