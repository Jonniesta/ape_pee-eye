
const baseURL = "https://picsum.photos/v2/list?page=3&limit=40";
const thisIsFine = document.querySelector(".picsum");


fetch(baseURL)
//.then is going to grab results from our database
    .then((result) => { //.then is a promise resolver-guaranteed exchange
        return result.json(); //json = java script object(data object we can dive into) notation(how its written)
    })
//.then thats going to pass to pass json/ a variable for it to be passed to our display function, add in a console of json/ variable name
    .then((json) => { 
        display(json);
    })
//optional catch error

//start a display function, called in fetch and passed json object
function display(passjson) {
    console.log(passjson);
//    console.log(passjson[0]); reference to be able to dive into objects 
//    console.log(passjson[1].author);
//build a forEach to display each object in the array 
    passjson.forEach((photoObject) => {

        //build and create the html tags
        let objectDiv = document.createElement('div');
        let objectImg = document.createElement('img');
        let photographer = document.createElement('h4');

        // set.attribute will give new elements id's or classes
        objectDiv.setAttribute("class", "oDiv");  //oDiv can give margin or padding
        objectImg.setAttribute("class" , "oImg"); //oImg Call to give it a different size

        //set image sources 
        objectImg.src = photoObject.download_url;
        objectImg.alt = photoObject.url;
        photographer.textContent = photoObject.author;

        //appendChild items to where they belong in the html
        thisIsFine.appendChild(objectDiv);
        objectDiv.appendChild(objectImg);
        objectDiv.appendChild(photographer);

    })
}