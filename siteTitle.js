(function (){
    var sitename = "Kyus's Codes";
    var indexpath = '';
    if (window.location.pathname != '/mycodeproject/') {indexpath+='.';}
    indexpath += './index.html';
    document.write("<h1 style='text-align:center'><a href='"+indexpath+"' style='text-decoration-line:none;color=black'>"+sitename+"</a></h1>");
})();
