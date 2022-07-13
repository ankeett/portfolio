package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handlers")
public class FormHandlerServlet extends HttpServlet {

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String subject = request.getParameter("subject");
        String message = request.getParameter("message");
        sendResponse(response, String.format("%s\n%s\n%s\n%s", name, email, subject, message));
    }

    private void sendResponse(HttpServletResponse response, String responseText) throws IOException {
        System.out.println(responseText);
        String[] arrOfStr = responseText.split("\n",4);

        response.getWriter().println("Name: "+arrOfStr[0]);
        response.getWriter().println("Email: "+arrOfStr[1]);
        response.getWriter().println("Subject: "+arrOfStr[2]);
        response.getWriter().println("Message:\n "+arrOfStr[3]);
    }
}
