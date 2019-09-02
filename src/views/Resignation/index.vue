<template>
        <div class="main-wrapper">
            <TopMenu/>
            <SideBar/>
        <!-- Page Wrapper -->
            <div class="page-wrapper">
				<!-- Page Content -->
                <div class="content container-fluid">
       					<!-- Page Title -->
					<div class="row">
						<div class="col-sm-5 col-5">
							<h4 class="page-title">Resignation</h4>
						</div>
						<div class="col-sm-7 col-7 text-right m-b-30">
							<a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_resignation"><i class="fa fa-plus"></i> Add Resignation</a>
						</div>
					</div>
					<!-- /Page Title -->
					
					<div class="row">
						<div class="col-md-12">
							<div class="table-responsive">
								<table class="table table-striped custom-table mb-0 datatable">
									<thead>
										<tr>
											<th>#</th>
											<th>Resigning Employee </th>
											<th>Department </th>
											<th>Reason </th>
											<th>Notice Date </th>
											<th>Resignation Date </th>
											<th class="text-right">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>
												<h2 class="table-avatar blue-link">
													<a href="profile.html" class="avatar"><img alt="" src="assets/img/profiles/avatar-02.jpg"></a>
													<a href="profile.html">John Doe</a>
												</h2>
											</td>
											<td>Web Development</td>
											<td>Lorem ipsum dollar</td>
											<td>28 Feb 2019</td>
											<td>28 Feb 2019</td>
											<td class="text-right">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_resignation"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_resignation"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
                </div>
				<!-- /Page Content -->

				
		</div>
			<!-- /Page Wrapper -->
    </div>
</template>

<script>
import TopMenu from "@/views/Menu/Top.vue";
import SideBar from "@/views/Sidebar";
import AddEmployee from "@/views/Employee/Add.vue";


export default {
    name:"EmployeeList",
    components:{
        TopMenu,
		SideBar,
		AddEmployee
    }
    
}
</script>
