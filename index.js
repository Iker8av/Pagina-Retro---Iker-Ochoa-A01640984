let pageJson;
 
fetch('./index.json')
    .then((response) => {return response.json();})
    .then((data) => {
        console.log(data)
        pageJson = data.data;
    });
 
function showDetails(gameInfo){
    document.querySelector(".background").style.display = "block";
    document.querySelector(".game-card-open").style.display = "block";
    document.querySelector(".game-card-open").innerHTML +=
        `
        <div class = "gameDetails">
            <img class="game-poster" src="img/${pageJson[gameInfo].img}" alt="${pageJson[gameInfo].title}" title="${pageJson[gameInfo].title}">
            <div class="gameInfo">
                <h2 class="game-title">${pageJson[gameInfo].title}</h2>
                <p>${pageJson[gameInfo].body}</p>
                <button class="closePopup" onclick="hideDetails()">Close</button>
            </div>
        </div>
    `
}

function hideDetails(){
    document.querySelector(".background").style.display = "none";
    document.querySelector(".game-card-open").style.display = "none";
    document.querySelector(".gameDetails").remove()
}