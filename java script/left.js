document.write("<ul id='left'>");
var contents = {"개인 웹페이지 만들기":"personal_site","html 만들기":"html_maker","naver 로그인":"naver"};
for (var i in contents){
    if (window.location.pathname.indexOf(contents[i])>=0) {
        document.write("<li id='selected'><a href='./"+contents[i]+".html'>"+i+"</a></li>");}
    else{document.write("<li><a href='./"+contents[i]+".html'>"+i+"</a></li>");}
}
document.write("</ul>");