document.write("<ul id='left'>");
var pythons = {"gif 만들기":"gif maker","GUI 연습":"gui practice","로그인 연습":"login practice"};
for (var i in pythons){
    if (window.location.pathname.indexOf(pythons[i])>=0) {
        document.write("<li id='selected'><a href='./"+pythons[i]+".html'>"+i+"</a></li>");}
    else{document.write("<li><a href='./"+pythons[i]+".html'>"+i+"</a></li>");}
}
document.write("</ul>");
