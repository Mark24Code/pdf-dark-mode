function addCSS(css){
            var style=document.createElement("style");
            style.type='text/css';
            try{
                style.appendChild(document.createTextNode(css));
            }catch(ex){
                style.stylesheet.cssText=css;
            }
            var Head=document.getElementsByTagName("head")[0];
            Head.appendChild(style);
}

addCSS("#viewer.pdfViewer { filter: grayscale(1) invert(1) sepia(1);}");
