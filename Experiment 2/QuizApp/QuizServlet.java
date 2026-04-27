import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/QuizServlet")
public class QuizServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int score = 0;
        
        // Retrieve answers from the HTML form
        String q1 = request.getParameter("q1");
        String q2 = request.getParameter("q2");
        String q3 = request.getParameter("q3");
        
        // Calculate the score
        if ("library".equals(q1)) {
            score++;
        }
        if ("delhi".equals(q2)) {
            score++;
        }
        if ("4".equals(q3)) {
            score++;
        }
        
        // Set the response content type
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        // Write the HTML response
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head><title>Quiz Result</title></head>");
        out.println("<body>");
        
        // Display required details
        out.println("<h2>Name: keerthana</h2>");
        out.println("<h2>Roll no: 24071A05F7</h2>");
        out.println("<hr>");
        
        // Display score
        out.println("<h3>Your Score: " + score + " / 3</h3>");
        
        out.println("</body>");
        out.println("</html>");
        
        out.close();
    }
}
