 
 
 $('#modal1').modal();


fetch(`https://swapi.dev/api/species/1/`).then(function (data){
  data.json().then(allFilms)
}).catch(function(err){
console.log(err);
})

function allFilms(data){
  console.log(); // profe no pude aqui 
  let films = data.results;
  let template = ` `;
  let listCharacters = ` `;

  films.forEach(function(film,index){then.data  = film.title; //me marca error pero no entiendo ppr que 



    let episode = film.episode_id;


    let characters = film.characters;

    let arrayMovies = [
      '.star.jpg'



     
    ]

    let films = arrayMovies[index];
    console.log(film);
   
    characters.forEach(function(person){
      listCharacters +=
  
      `<a href="#modal1" class="modal-trigger">

      
      <li class="character-list" data-character="${person}" >${person}</li>
      </a> 
      `
    })
    template +=
    `<div class="row">
        <div class="col s12 m12">


          <div class="col s12  m12 card  black darken-1">
            <div class="col s12  m12 card-content white-text">
              <span class="center card-title"><h3>Título de la película:</h3>
              ${title}</span>
              <img src="${films}" class= "col s12 m12">
              <h3 class="center" ><strong>Número de episodio: </strong>
              ${episode}</h3>
              <ul class="center" id"characters"><h4>Conoce a los personajes haciendo click sobre los links: </h4>${listCharacters}</ul>
            </div>
          </div>
        </div>
      </div>
      `
     
  })
  let filmsContainer = document.getElementById("films");
  filmsContainer.innerHTML = template;



  let liCollectionHtml = document.getElementsByClassName("character-list"); 
  getCharacter(liCollectionHtml);


}


function getCharacter(liCollectionHtml){

  let liCharacter = Array.from(liCollectionHtml);

  console.log(liCharacter);
 
  liCharacter.forEach(function(li){
   
  li.addEventListener("click", getDetailsCharacters);
  })
}


function getDetailsCharacters(e){
  e.preventDefault;

let characterUrl = e.target.dataset.character;
console.log(characterUrl);
console.log(e.target.value);

fetch(characterUrl).then(function(response){
  response.json().then(function(result){


    
    paintModall(result);
  })
})
}


function paintModall(item){


  console.log(item);

  $("#name").html("Name: " + item.name);

  $("#height").html("Height: " + item.height);


  $("#hair-color").html("Hair color: " + item.hair_color);

  
  $("#mass").html("Mass: " + item.mass);


  $("#skin-color").html("Skin color: " + item.skin_color);

  console.log(document.getElementById("modal1"))
}


