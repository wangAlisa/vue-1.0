var MINE_TYPES={html:"text/html",xml:"text/xml",txt:"text/plain",css:"text/css",js:"text/javascript",json:"application/json",pdf:"application/pdf",swf:"application/x-shockwave-flash",svg:"image/svg+xml",tiff:"image/tiff",png:"image/png",gif:"image/gif",ico:"image/x-icon",jpg:"image/jpeg",jpeg:"image/jpeg",wav:"audio/x-wav",wma:"audio/x-ms-wma",wmv:"video/x-ms-wmv",woff2:"application/font-woff2"},PORT=3e3,http=require("http"),url=require("url"),fs=require("fs"),path=require("path"),root=process.cwd(),server=http.createServer(function(e,t){var i=decodeURIComponent(url.parse(e.url).pathname),r=path.join(root,i),a=path.extname(r);a||(r=path.join(r,"/index.html"),a=".html"),fs.exists(r,function(e){e?fs.readFile(r,"binary",function(e,i){e?(t.writeHead(500,{"Content-Type":"text/plain"}),t.write("ERROR, the reason of error is "+e.code+"; Error number is "+e.errno+"."),t.end()):(t.writeHead(200,{"Content-Type":MINE_TYPES[a.slice(1)]||"text/plain"}),t.write(i,"binary"),t.end())}):(t.writeHead(404,{"Content-Type":"text/plain"}),t.write("This request URL "+i+" was not found on this server."),t.end())})});server.listen(PORT),console.log("server running at port "+PORT);