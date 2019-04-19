<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
<%@ page isELIgnored="false" %>

<html>
<body>
<h1>The Number Quiz</h1>
    <p>Your current score is ${quiz.score}</p>
    <p>Guess the next number in the sequence..</p>
    <form action='quizcontroller' method='post'>
            <p>${quiz.getQuestions()[quiz.currentIndex]}</p>
            <p>Your answer:</p>
            <input type='number' name='txtAnswer'/>
            <button type='submit'>Submit</button>
    </form>

</body>
</html>
