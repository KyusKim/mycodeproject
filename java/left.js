document.write("<ul id='left'>");
var pythons = {"심플 블로그":"simpleblog"};
for (var i in pythons){
    document.write("<li><a href='./"+pythons[i]+".html'>"+i+"</a></li>");
}
document.write("</ul>");