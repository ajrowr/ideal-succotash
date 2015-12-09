var showMessage = function (message) {
    var msgElem = document.createElement('div');
    msgElem.innerHTML = message;
    msgElem.style.position = 'fixed';
    msgElem.style.top = '0px';
    msgElem.style.left = '0px';
    msgElem.style.backgroundColor = 'white';
    msgElem.style.border = '1px solid black';
    msgElem.style.padding = '1ex';
    msgElem.style.zIndex = '1000000000';
    document.body.appendChild(msgElem);
    console.log(message);
    return msgElem;
};
var submitter = function (data, targeturl) {
    var xhr = new XMLHttpRequest();
    xhr.open('post', targeturl, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(data));
    xhr.onloadend = function () {
        showMessage('done w/ status '+xhr.status);
        if (xhr.status != 200) {
            alert('Warning! Unexpected status code.')
        }
    };
};
var getImages = function () {
    var imgs = [];
    for (var i=0; i<document.images.length; i++) {
        var this_img = document.images[i];
        var img_rejected_count = 0;
        if (this_img.clientWidth * this_img.clientHeight > 10000) {
            imgs.push(this_img.src);
        }
        else {
            img_rejected_count++;
        }
    }
    console.log(img_rejected_count + ' images rejected');
    return imgs;
};
submitter({'title':document.title, 'url':window.location, 'images':getImages(), 'meta':window._meta ? window._meta : {}}, 'http://falcon.codex.cx/cgi-bin/capt2.pycg');
