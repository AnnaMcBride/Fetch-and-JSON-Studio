// TODO: add code here
window.addEventListener("load", function(){
    //let json = [];
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response){
        response.json().then(function(json) {
            let container = document.getElementById("container")
            for(let i = 0; i< json.length; i++) {
            container.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                <h3>First Name: ${json[i].firstName}</h3>
                     <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li>Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                        </ul>

                        
                    
                        <img src=${json[i].picture}>
                </div>
                 
                </div>
                 `;
            } 
        
        });
    });
});