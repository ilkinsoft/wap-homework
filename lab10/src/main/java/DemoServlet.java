import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/DemoServlet")
public class DemoServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        response.setContentType("text/html");
//        PrintWriter out = response.getWriter();
//        out.println("<h3>Hello World! ilkin</h3>");
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        String num1 = request.getParameter("num1");
        String num2 = request.getParameter("num2");
        String num11 = request.getParameter("num11");
        String num22 = request.getParameter("num22");

        int num_1, num_2, num_11, num_22;
        try {
            num_1 = Integer.parseInt(num1);
            num_2 = Integer.parseInt(num2);

            num_11 = Integer.parseInt(num11);
            num_22 = Integer.parseInt(num22);
        }
        catch (Exception ex){
            out.println("<h2>Please fill only numbers!</h2>");
            return;
        }

        out.println("<form id='submitForm' action='DemoServlet' method='post'>");

        out.println("<p><input type='number' name='num1' value='" + num_1 + "'>+");
        out.println("<input type='number' name='num2' value='" + num_2 + "'>=");
        out.println("<input type='number' name='num2' value='" + (num_1 + num_2) + "'></p>");

        out.println("<p><input type='number' name='num11' value='" + num_11 + "'>*");
        out.println("<input type='number' name='num22' value='" + num_22 + "'>=");
        out.println("<input type='number' name='num22' value='" + (num_11 * num_22) + "'></p>");

        out.println("<button type='submit'>Submit</button>");
        out.println("</form>");
    }
}