var i = -1;
var news=["Click to Save in Browser History","Best to do List Ever","Use it Send Reviews"];
function newsFlash() {

    if(i<news.length-1)
    {
        i = i + 1;
    }
    else
    {
        i = 0;
    }
        postMessage(news[i]);
    setTimeout(newsFlash,3000);
}

newsFlash();