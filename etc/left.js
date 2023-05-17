document.write("<ul id='left'>");
var contents = {"아두이노1 - 브레드 보드":"arduino1","아두이노2 - 디지털 핀":"arduino2","아두이노3 - 라이브러리":"arduino3"};
for (var i in contents){
    if (window.location.pathname.indexOf(contents[i])>=0) {
        document.write("<li id='selected'><a href='./"+contents[i]+".html'>"+i+"</a></li>");}
    else{document.write("<li><a href='./"+contents[i]+".html'>"+i+"</a></li>");}
}
document.write("</ul>");