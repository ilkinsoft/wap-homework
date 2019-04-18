package controller;

import model.Quiz;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/quizcontroller")
public class QuizController extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        HttpSession s = request.getSession();
        Quiz q;
        if(s.getAttribute("quiz") == null)
            s.setAttribute("quiz", q = new Quiz());
        else
            q = (Quiz)s.getAttribute("quiz");

        int index = q.getCurrentIndex();

        String answerParam = request.getParameter("txtAnswer");
        int answer;
        try {
            answer = Integer.parseInt(answerParam);
        }
        catch (Exception ex){
            out.println("Please enter number only!");
            return;
        }

        if(Quiz.controlAnswer(index, answer))
            q.setScore(q.getScore() + 1);

        index++;
        if(index >= q.getQuestions().length ){
            out.println("Quiz finished, you score is " + q.getScore());
            return;
        }
        q.setCurrentIndex(index);
        s.setAttribute("quiz", q);   // writing to session

        RequestDispatcher dispatcher = request.getRequestDispatcher("index.jsp");
        dispatcher.forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        HttpSession s = request.getSession();

        Quiz quiz = new Quiz();
        s.setAttribute("quiz", quiz);

        int index = quiz.getCurrentIndex();

        if(index >= quiz.getQuestions().length ){
            out.println("Quiz finished, no more questions..");
            return;
        }

        RequestDispatcher dispatcher = request.getRequestDispatcher("index.jsp");
        dispatcher.forward(request, response);
    }
}
