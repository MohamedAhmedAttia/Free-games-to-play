//this class is responsible for show the data on HTML page

export class Ui {
   //a method to display each game of the selected category in to a card and show it on HTML page
   displayGamesData(data) { 
       // a variable that store all the data   
       let allGames = ``;
       for (let i = 0; i < data.length; i++) {
          allGames += `
          <div class="col">
          <div data-id="${data[i].id}"  class="card h-100 bg-transparent" role="button" ">
             <div  class="card-body">
                <div class="position-relative">
                   <img class="card-img-top object-fit-cover h-100" src="${data[i].thumbnail}" />
                
                </div>
    
                <div>
    
                   <div class="d-flex justify-content-between mt-3 mb-2">
                      <h3 class="h6 small text-white">${data[i].title}</h3>
                      <span class="badge text-bg-primary p-2">Free</span>
                   </div>
    
                   <p class="card-text small text-center opacity-50 text-white">
                      ${data[i].short_description}
                   </p>
    
                </div>
             </div>
    
             <div class="card-footer small hstack justify-content-between">
    
                <span class="badge badge-color">${data[i].genre}</span>
                <span class="badge badge-color">${data[i].platform}</span>  
    
             </div>
          </div>
       </div>
          `;
       }
       //put the stored data on the HTML page
       document.getElementById("gameData").innerHTML = allGames;
    }
 
    //this method is responsible for showing the details of specific game
    displayDetails(data) {

      // a variable that store all the data   
       let gameContent = `
       <div class="col-md-4">
       <img src="${data.thumbnail}" class="w-100" alt="image details" />
    </div>
    <div class="col-md-8">
       <h3>Title: ${data.title}</h3>
       <p>Category : <span class="badge text-bg-primary"> ${data.genre}</span> </p>
       <p>Platform : <span class="badge text-bg-primary"> ${data.platform}</span> </p>
       <p>Status : <span class="badge text-bg-primary"> ${data.status}</span> </p>
       <p class="small">${data.description}</p>
       <a class="btn btn-outline-primary" target="_blank" href="${data.game_url}">Show Game</a>
    </div>`;

      //put the stored data on the HTML page
       document.getElementById("detailsContent").innerHTML = gameContent;
    }
 }