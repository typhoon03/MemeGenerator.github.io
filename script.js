const api_url = "https://meme-api.herokuapp.com/gimme/wholesomemes";

fetch(api_url)
    .then((response) => {
        if(response.ok){
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data =>{
        appendData(data);
        getImage(data);
    })
    .catch((error) => console.log("Fetch Error:", error));

function getImage(data){
    var img = document.createElement("img");
    img.src = data.url;
    var src = document.getElementById("meme-picture");
    src.appendChild(img);

}
function appendData(data){
    const memeName = data.title;
    document.getElementById('meme-container').innerHTML = memeName;
}