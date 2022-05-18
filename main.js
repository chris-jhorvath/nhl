


function getRoster() {
    fetch('https://api.sportsdata.io/v3/nhl/scores/json/Players/SJ', {
        credentials: 'include',
        headers: {
            'Ocp-Apim-Subscription-Key': '656110dcba414cdaa2a117c9a95cb33c'
        }
    }).then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data);
    })
    document.getElementById("sharksplayers").innerHTML = "Sharks roster goes here";
}

function getFreeAgents() {
    document.getElementById("freeagents").innerHTML = "NHL free agent list goes here";
}

function getInjured() {
    document.getElementById("injuredlist").innerHTML = "See NHL injured list here";
}

function getStadiums() {
    document.getElementById("stadiums").innerHTML = "NHL stadiums go here";
}

function getCurrentSeason() {
    document.getElementById("currentseason").innerHTML = "Show current season standings here";
}


