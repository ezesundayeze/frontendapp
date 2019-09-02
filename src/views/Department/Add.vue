
<template>
        <div class="main-wrapper">
            <TopMenu/>
            <SideBar/>
            <!-- Page Wrapper -->
            <div class="page-wrapper">
			
				<!-- Page Content -->
                <div class="content container-fluid">

				<!-- Add Employee Modal -->
				<div id="add_employee" class="">
					<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Add Department</h5>
							</div>
							<div class="modal-body">
								<form>
									<div class="row">
                                        <div class="col-md-6">
											<div class="form-group">
												<label>Bank Name <span class="text-danger">*</span></label>
												<select class="select">
													<option>First Bank</option>
													<option>Zenith Bank</option>
													<option>Stanbic IBTC</option>
												</select>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label class="col-form-label">Account Name <span class="text-danger">*</span></label>
												<input class="form-control" type="text">
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label class="col-form-label">Account Number</label>
												<input class="form-control" type="text">
											</div>
										</div>
									    <div class="col-md-6">
											<div class="form-group">
												<label>Bank Name <span class="text-danger">*</span></label>
												<select class="select">
													<option>First Bank</option>
													<option>Zenith Bank</option>
													<option>Stanbic IBTC</option>
												</select>
											</div>
										</div>	
									</div>
									
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Submit</button> &nbsp;&nbsp;
										<button class="btn btn-primary submit-btn btn-next">Next</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- /Add Employee Modal -->
				</div>
				<!-- /Page Content -->

            </div>
			<!-- /Page Wrapper -->
        </div>
    
</template>

<script>
import TopMenu from "@/views/Menu/Top.vue";
import SideBar from "@/views/Sidebar";

export default {
    name:"Dashboard",
    components:{
        TopMenu,
        SideBar
    }
}
</script>

<style scoped>

.btn-next{
	background:#fb0091 !important;
	border-color:#fb0091 !important;
}

</style>