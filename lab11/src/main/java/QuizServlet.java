import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/QuizServlet")
public class QuizServlet extends HttpServlet {
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

        String htmlString =
                        "    <h1>The Number Quiz</h1>" +
                        "    <p>Your current score is " + q.getScore() + "</p>" +
                        "    <p>Guess the next number in the sequence..</p>" +
                        "    <form action='QuizServlet' method='post'>" +
                        "        <p>" + q.getQuestions()[index] + "</p>" +
                        "        <p>Your answer:</p>" +
                        "        <input type='number' name='txtAnswer'/>" +
                        "        <button type='submit'>Submit</button>" +
                        "    </form>";

        out.println(htmlString);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        HttpSession s = request.getSession();
        Quiz q;
        s.setAttribute("quiz", q = new Quiz());

        int index = q.getCurrentIndex();

        if(index >= q.getQuestions().length ){
            out.println("Quiz finished, no more questions..");
            return;
        }

        String htmlString =
                "    <h1>The Number Quiz</h1>" +
                        "    <p>Your current score is " + q.getScore() + "</p>" +
                        "    <p>Guess the next number in the sequence..</p>" +
                        "    <form action='QuizServlet' method='post'>" +
                        "        <p>" + q.getQuestions()[index] + "</p>" +
                        "        <p>Your answer:</p>" +
                        "        <input type='number' name='txtAnswer'/>" +
                        "        <button type='submit'>Submit</button>" +
                        "    </form>";

        out.println(htmlString);
    }
}
