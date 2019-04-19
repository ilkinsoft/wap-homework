<%--
  Created by IntelliJ IDEA.
  User: Bezir
  Date: 18.04.2019
  Time: 20:10
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page isELIgnored="false" %>
<html>
<head>
    <title>Result</title>
</head>
<body>
<c:forEach var="result" items="${result}">
    <tr>
        try: <td>${result[0]}</td><br>
        try: <td>${result[1]}</td>

    </tr>
</c:forEach>
</body>
</html>
