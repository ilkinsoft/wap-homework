<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Beer Advisor</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <style>

    </style>
</head>
<body>
<form method="post" action="BeerAdvisor">
    <h1>Beer Selection Page</h1>
    <h4>Select Beer Characteristics</h4>
    Color : <select name="color" size="1">
    <option value="light">light</option>
    <option value="amber">amber</option>
    <option value="brown">brown</option>
    <option value="dark">dark</option>
</select>
    <input type="submit" value="Get Advice"/>
</form>
</body>
</html>
