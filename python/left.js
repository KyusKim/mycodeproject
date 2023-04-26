document.write("<ul id='left'>");
var pythons = {"gif 만들기":"gif maker","GUI 연습":"gui practice","로그인 연습":"login practice"};
for (var i in pythons){
    document.write("<li><a href='./"+pythons[i]+".html'>"+i+"</a></li>")
}
document.write("</ul>");