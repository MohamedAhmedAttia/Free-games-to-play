import { Details } from "./Details.js";
import { Ui } from "./UI.js";
//this class is responsible for categories and interactions
export class ShowGames {
   //constructor for subjects of class ShowGames
   constructor() {
      //to start the website with the first category as a default
      this.getGames("mmorpg");
     
      //to remove active from the link in navbar and add it to selected target and run method getGames that brings all the games of the selected category
      document.querySelectorAll("a").forEach((link) => {
         link.addEventListener("click", (e) => {
            document.querySelector(".active").classList.remove("active");
            e.target.classList.add("active");
            this.getGames(e.target.dataset.category);
         });
      });
      //create subject of class Ui to manage HTML
      this.ui = new Ui();
   }

   async getGames(category) {
      //to show the loader spinner while the data is being called
      let loading = document.querySelector(".loading");
      loading.classList.remove("d-none");
      const options = {
         method: "GET",
         headers: {
            'x-rapidapi-key': 'd06159e4b0mshf687c9265d9e42cp132b6bjsn0a46bae28856',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
         },
      };
      //fetch the data from the api -categories- and send it to method displayGamesData from class Ui  
      let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
      let response = await api.json();

      this.ui.displayGamesData(response);
      this.clickOnGame();
      loading.classList.add("d-none");
   }
   //this method is responsible for showing the details of the selected game.
   clickOnGame() {
      document.querySelectorAll(".card").forEach((item) => {
         item.addEventListener("click", () => {
            let id = item.dataset.id;
            this.showDetails(id);
         });
      });
   }

   showDetails(idGame) {
      //create a subject of class Details then hide the list of all games and show the selected games
      let details = new Details(idGame);
      document.querySelector(".games").classList.add("d-none");
      document.querySelector(".details").classList.remove("d-none");
   }
}