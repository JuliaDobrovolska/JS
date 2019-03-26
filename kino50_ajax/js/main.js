var url = 'https://jsonplaceholder.typicode.com/photos';
var numberOfElements = 50;


function request(url){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();

    if (xhr.status != 200) {
        console.log( xhr.status + ': ' + xhr.statusText ); 
    } else {
        return xhr.responseText; 
    }

}

var jsonFromRequest = request(url);
var pictureData = JSON.parse(jsonFromRequest);


var filmList = document.getElementById('film-list');


function downloadPictures(data){
    
    var fragment = document.createDocumentFragment();
    var template = document.getElementById('film-template');
       
    for(var i=0; i<numberOfElements; i++){

        var templateClone = template.content.cloneNode(true);
        var filmFigure = templateClone.querySelector('li');
        var filmTitle = templateClone.querySelector('a');
       
        var img = new Image();
        img.src = data[i].thumbnailUrl;
        img.setAttribute('picture-id', data[i].id);
        img.className = 'film-figure-img';

        filmTitle.textContent = data[i].title;
        filmFigure.insertBefore(img, filmTitle);
        
        
        fragment.appendChild(templateClone);
        
        filmList.appendChild(fragment);
        
    }
    
}

downloadPictures(pictureData);


var newDiv = document.createElement("div");
filmList.onclick = function(event){
    var target = event.target;
    while(target != this){
        if(target.tagName == 'IMG'){
            var imgSrc = target.src;
            for(var i=0; i<numberOfElements; i++){
                if(pictureData[i].thumbnailUrl === imgSrc){
                    var src = pictureData[i].url;
                    newDiv.className = 'popup';
                    newDiv.innerHTML = "<div class='popup_bg' onclick='newDiv.remove()'></div>"+"<img class='popup_img' src='"+src+"'>";
                    document.body.appendChild(newDiv);
                }
            }
        
        } 
        target = target.parentNode;
    }
}
