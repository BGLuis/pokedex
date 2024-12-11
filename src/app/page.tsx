import GridCards from "@/components/GridCards";

type pokeApi= {
  count: Number,
  next: String,
  previous:null ,
  results: [{
      name:string,
      url:string
  }]
}

export default async function Home() {  
  const poke = await fetch("https://pokeapi.co/api/v2/pokemon/?generation=1&limit=151").then(async (res)=> {
    const body:pokeApi = await res.json();
    const pokemons = body.results.map((poken)=>{
      const num = poken.url.split("/")[6]
      const p:{ name:string,number:string } ={
        name: poken.name,
        number: num,
      }
      return p
    })
  
    return pokemons
  })

  return (
    <>
      <GridCards listPokemon={poke}/>
    </>
  );
}
