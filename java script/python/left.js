document.write("<ul id='left'>");
var contents = {"개인 관리 어플":"personal_manage","GUI 연습":"gui_practice"};
for (var i in contents){
    if (window.location.pathname.indexOf(contents[i])>=0) {
        document.write("<li id='selected'><a href='./"+contents[i]+".html'>"+i+"</a></li>");}
    else{document.write("<li><a href='./"+contents[i]+".html'>"+i+"</a></li>");}
}
document.write("</ul>");
