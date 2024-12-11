'use client'
import Card from "@/components/Card";
import { Search, Settings } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";


interface GridCardsPros{
    listPokemon:[{ 
        name:string,number:string
    }]
}

export default function GridCards({ listPokemon }:GridCardsPros) {
    const [search, SetSearch] = useState('')

    return (
        <>
        <header className="bg-primary grid grid-cols-header text-white px-10 py-5 gap-5 h-1/12">
            <h1 className="text-5xl font-semibold flex gap-4">
                <Image src="/pokeball.png" height={50} width={50} alt="poke bola"/>
                <span>Pokedex</span>
            </h1>
            <div className="shadow-inner rounded-full w-full h-10 bg-white px-4 flex items-center gap-3">
                <Search className="text-primary"/>
                <input type="text" value={search} onChange={(e)=>SetSearch(e.target.value)} className="text-black bg-transparent h-full w-full outline-none"/>
            </div>
            <div className="col-start-2 row-start-1 row-span-2 flex flex-col justify-between h-full text-primary">
                <div className="h-12 aspect-square bg-white rounded-full mx-auto shadow-inner flex items-center justify-center">
                <Settings />
                </div>
                <div className="h-10 aspect-square bg-white rounded-full mx-auto shadow-inner flex items-center justify-center">
                    #
                </div>
            </div>
        </header>
        <main className="bg-primary h-screen p-10 overflow-hidden">
            <div className="bg-white h-full w-full rounded-lg shadow-inner py-5 flex justify-center gap-10  px-10">
                <div className="flex justify-center content-start items-start flex-wrap w-full overflow-auto gap-5 pb-12">
                    {
                        listPokemon.filter((pok)=> pok.name.includes(search) || pok.number == search).map((pok)=>(
                            <Card key={pok.number} name={pok.name} number={pok.number} img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pok.number}.png`}/>
                        ))
                    }
                </div>
            </div>
        </main>
        </>
    )
}
