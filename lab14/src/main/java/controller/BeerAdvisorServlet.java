package controller;

import model.BeerModel;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/BeerAdvisor")
public class BeerAdvisorServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        String color = req.getParameter("color");
        BeerModel beerModel = new BeerModel();
        List<String> result = beerModel.getBrands(color);

        req.setAttribute("result", result);

        req.getRequestDispatcher("result.jsp").forward(req, resp);


    }
}
