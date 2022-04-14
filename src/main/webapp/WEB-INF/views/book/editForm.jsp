<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<form:form modelAttribute="bookToEdit" action="/admin/edit" method="post">
    <form:hidden path="id"/>
    <div class="form-group">
        <label for="isbn">ISBN</label>
        <form:input path="isbn" id="isbn" cssClass="form-control"/>
        <form:errors path="isbn" cssClass="alert-danger"/>
    </div>
    <div class="form-group">
        <label for="title">Title:</label>
        <form:input path="title" id="title" cssClass="form-control"/>
        <form:errors path="title" cssClass="alert-danger"/>
    </div>
    <div class="form-group">
        <label for="author">Author:</label>
        <form:input path="author" id="author" cssClass="form-control"/>
        <form:errors path="author" cssClass="alert-danger"/>
    </div>
    <div class="form-group">
        <label for="publisher">Publisher:</label>
        <form:input path="publisher" id="publisher" cssClass="form-control"/>
        <form:errors path="publisher" cssClass="alert-danger"/>
    </div>
    <div class="form-group">
        <label for="type">Type:</label>
        <form:input path="type" id="type" cssClass="form-control"/>
        <form:errors path="type" cssClass="alert-danger"/>
    </div>
    <div>
        <input type="submit" value="Save and update" class="btn btn-primary">
        <a href="/admin/books" class="btn btn-primary">Cancel</a>
    </div>
</form:form>