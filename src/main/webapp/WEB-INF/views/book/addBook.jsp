<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>BooksAPI - AdminPanel</title>
    <!-- Custom fonts for this template-->
    <link href="<c:url value="${pageContext.request.contextPath}/theme/vendor/fontawesome-free/css/all.min.css"/>" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
    <!-- Custom styles for this template-->
    <link href="<c:url value="${pageContext.request.contextPath}/theme/css/sb-admin-2.min.css"/>" rel="stylesheet">
</head>

<body id="page-top">
<!-- Page Wrapper -->
<div id="wrapper">
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="${pageContext.request.contextPath}/admin/books">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">Books Database</div>
        </a>
        <!-- Divider -->
        <hr class="sidebar-divider my-0">
        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <a id="listBooks" class="nav-link" href="${pageContext.request.contextPath}/admin/books">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>List of all books</span></a>
        </li>
        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
    </ul>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
            <!-- Topbar -->


            <%--        <%@ include file="header.jsp"%>--%>
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <!-- ZAMIAST HEADERA BO COS NIE DZIALA -->
            </nav>


            <!-- End of Topbar -->

            <!-- Begin Page Content -->
            <div class="container-fluid">
                <!-- Page Heading -->
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">BooksAPI Tester</h1>
                    <a id="addBookButton" href="${pageContext.request.contextPath}/admin/books" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                        <i class="fas fa-download fa-sm text-white-50"></i>All books</a>
                </div>

                <!-- Content Row -->
                <div class="row">
                    <div class="card"  style="width: 100%">
                        <h5 id="contentHeader" class="card-header text-primary">Add Book:</h5>
                        <div id="booksDiv" class="card-body" style="width: 100%">
                            <div class="container-fluid">
                                <jsp:include page="addForm.jsp"/>
                            </div>
                            <hr class="sidebar-divider my-1">
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- End of Main Content -->
        <!-- Footer -->


        <%--      <%@include file="footer.jsp"%>--%>
        <footer class="sticky-footer bg-white">
            <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <span>Copyright &copy; Michał Żarczyński 2022</span>
                    <!-- ZAMIAST FOOTERA BO COS NIE DZIALA -->
                </div>
            </div>
        </footer>


        <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->

</div>
<!-- End of Page Wrapper -->

<!-- Scroll to Top Button-->
<a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
</a>


<!-- Bootstrap core JavaScript-->
<link href="<c:url value="${pageContext.request.contextPath}/theme/css/sb-admin-2.min.css"/>" rel="stylesheet">
<script src="<c:url value="${pageContext.request.contextPath}/theme/vendor/jquery/jquery.min.js"/>"></script>
<script src="<c:url value="${pageContext.request.contextPath}/theme/vendor/bootstrap/js/bootstrap.bundle.min.js"/>"></script>

<!-- Core plugin JavaScript-->
<script src="<c:url value="${pageContext.request.contextPath}/theme/vendor/jquery-easing/jquery.easing.min.js"/>"></script>

<!-- Custom scripts for all pages-->
<script src="<c:url value="${pageContext.request.contextPath}/theme/js/sb-admin-2.min.js"/>"></script>

<!-- Page level plugins -->
<script src="<c:url value="${pageContext.request.contextPath}/theme/vendor/chart.js/Chart.min.js"/>"></script>

<!-- Page level custom scripts -->
<script src="<c:url value="${pageContext.request.contextPath}/theme/js/demo/chart-area-demo.js"/>"></script>
<script src="<c:url value="${pageContext.request.contextPath}/theme/js/demo/chart-pie-demo.js"/>"></script>

<%--<script src="<c:url value="${pageContext.request.contextPath}/theme/js/homepage.js"/>"></script>--%>

</body>

</html>