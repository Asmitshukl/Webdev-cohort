// const gvalue="";
function thevalue(){
    const input = document.querySelector(".c-form__input");
    const value = input.value;
    console.log(value);
    showpokemon(value);
    // gvalue=value;
}
async function showpokemon(value){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
        
        const data = await response.json();
        console.log(data); 
        render(data);
}
//this i have copied from claude 

function render(data){
   const img = document.querySelector(".imgBx img");
    const nameElement = document.querySelector(".details h2");
    
    // Update the image source
    img.src = data.sprites.front_default;
    img.alt = data.name;
    
    // Update the name and type
    const pokemonName = data.name.charAt(0).toUpperCase() + data.name.slice(1); // Capitalize first letter
    const pokemonType = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1);
    
    nameElement.innerHTML = `${pokemonName}<br><span>${pokemonType}</span>`;

}