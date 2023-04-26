document.write("<ul id='left'>");
var pythons = {"심플 블로그":"simpleblog","한/컴 타자 연습":"typing practice","가사 출력기":"lyrics practice"};
for (var i in pythons){
    document.write("<li><a href='./"+pythons[i]+".html'>"+i+"</a></li>");
}
document.write("</ul>");