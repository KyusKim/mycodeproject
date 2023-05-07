document.write("<ul id='left'>");
var contents = {"심플 블로그":"simpleblog"};
for (var i in contents){
    if (window.location.pathname.indexOf(contents[i])>=0) {
        document.write("<li id='selected'><a href='./"+contents[i]+".html'>"+i+"</a></li>");}
    else{document.write("<li><a href='./"+contents[i]+".html'>"+i+"</a></li>");}
}
document.write("</ul>");