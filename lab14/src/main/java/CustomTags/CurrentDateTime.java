package CustomTags;

import javax.servlet.jsp.tagext.*;
import javax.servlet.jsp.*;
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CurrentDateTime extends SimpleTagSupport {

   String color;
   String size;

   public void doTag() throws JspException, IOException {
      JspWriter out = getJspContext().getOut();

      Date dNow = new Date();
      SimpleDateFormat ft = new SimpleDateFormat ("E yyyy.MM.dd 'at' hh:mm:ss a zzz");

      out.write("<span style='color:"+color+"; font-size:" + size + "'>" + ft.format(dNow) + "</span>");
   }

   public void setColor(String color) {
      this.color = color;
   }
   public void setSize(String size) {
      this.size = size;
   }

}