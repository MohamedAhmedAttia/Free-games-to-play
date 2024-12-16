import { Ui } from "./UI.js";
//this class is responsible for fetching the details of a selected game and send it to subject of class Ui to show it. 
export class Details {
   constructor(id) {
      this.ui = new Ui();
      //add a click event to the close icon to show details of the selected game and hide  all games list
      document.getElementById("Close").addEventListener("click", function () {
         document.querySelector(".games").classList.remove("d-none");
         document.querySelector(".details").classList.add("d-none");
      });

      this.getDetails(id);
   }

   getDetails(idGames) {
      //to show the loader spinner while the data is being called
      let loading = document.querySelector(".loading");
      loading.classList.remove("d-none");

      const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd06159e4b0mshf687c9265d9e42cp132b6bjsn0a46bae28856',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
      //fetch the data from the api -details by game id- and send it to method displayDetails from class Ui  
      fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options)
         .then((response) => response.json())
         .then((response) => this.ui.displayDetails(response))
         .then(() => {
               loading.classList.add("d-none");
            });
   }
}