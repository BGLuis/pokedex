import { ArrowLeft, Ruler, Weight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface PokemonProps{
    params: {id:string}
}

type pokemonType = {
    name:string,
    types:[{
        slot:string,
        type:{
            name:string,
        }
    }],
    sprites:{
        front_default:string
    },
    weight: string,
    height: string,
    abilities:[{
        slot:string,
        ability:{
            name:string,
        }
    }]
    stats :[{
        base_stat: number
        effort: number
        stat: {
            name: string
        }
    }]
}

export default async function Pokemon({ params }:PokemonProps) {
    const poke:pokemonType = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`).then(async (res)=> {
        return await res.json();
    })

    console.log(poke.types[0].type.name)
    return (
        <>
            <div className='hidden 
            bg-bug bg-dark bg-dragon bg-electric bg-fairy bg-fighting bg-fire bg-flying bg-ghost bg-normal bg-grass bg-ground bg-ice bg-poison bg-psychic bg-rock bg-steel bg-water 
            text-bug text-dark text-dragon text-electric text-fairy text-fighting text-fire text-flying text-ghost text-normal text-grass text-ground text-ice text-poison text-psychic text-rock text-steel text-water 
            w-[1%] w-[2%] w-[3%] w-[4%] w-[5%] w-[6%] w-[7%] w-[8%] w-[9%] w-[10%] w-[11%] w-[12%] w-[13%] w-[14%] w-[15%] w-[16%] w-[17%] w-[18%] w-[19%] w-[20%] w-[21%] w-[22%] w-[23%] w-[24%] w-[25%] w-[26%] w-[27%] w-[28%] w-[29%] w-[30%] w-[31%] w-[32%] w-[33%] w-[34%] w-[35%] w-[36%] w-[37%] w-[38%] w-[39%] w-[40%] w-[41%] w-[42%] w-[43%] w-[44%] w-[45%] w-[46%] w-[47%] w-[48%] w-[49%] w-[50%] w-[51%] w-[52%] w-[53%] w-[54%] w-[55%] w-[56%] w-[57%] w-[58%] w-[59%] w-[60%] w-[61%] w-[62%] w-[63%] w-[64%] w-[65%] w-[66%] w-[67%] w-[68%] w-[69%] w-[70%] w-[71%] w-[72%] w-[73%] w-[74%] w-[75%] w-[76%] w-[77%] w-[78%] w-[79%] w-[80%] w-[81%] w-[82%] w-[83%] w-[84%] w-[85%] w-[86%] w-[87%] w-[88%] w-[89%] w-[90%] w-[91%] w-[92%] w-[93%] w-[94%] w-[95%] w-[96%] w-[97%] w-[98%] w-[99%] w-[100%]'
            ></div>
            <header className={"bg-"+poke.types[0].type.name+" flex justify-between px-8 py-5 items-center text-white pb-96 "}>
                <div className='text-5xl font-semibold flex gap-4 items-center capitalize'>
                    <Link href="/"><ArrowLeft className='h-16 w-16'/></Link>
                    {poke.name}
                </div>
                <div className='text-3xl'>#{params.id}</div>
            </header>
            <main className={"bg-"+poke.types[0].type.name+" h-full flex"}>
                <div className='bg-white m-5 w-full rounded-lg shadow-inner p-10 relative flex flex-col items-center gap-10'>
                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${params.id}.png`}width={400} height={400} alt={poke.name} className='object-contain absolute -top-72 mx-auto'/>
                    <div className='flex gap-4 mt-20 relative z-10'>
                        {
                            poke.types.map((type)=>(
                                <div key={type.slot} className={"bg-"+type.type.name+' px-5 py-2 rounded-full text-center text-white'}>{type.type.name}</div>
                            ))
                        }
                    </div>
                    <div>
                        <h1 className={"text-"+poke.types[0].type.name+' text-center font-extrabold text-4xl mb-10'}>About</h1>   
                        <div className='flex gap-10 items-center'>
                            <div>
                                <div className='flex gap-5 py-10'>
                                    <Weight />
                                    <span>{poke.weight} Kg</span>
                                </div>
                                <div className='text-center'>Weight</div>
                            </div>
                            <div className='h-32 w-1 bg-zinc-200'></div>
                            <div>
                                <div className='flex gap-5 py-10'>
                                    <Ruler />
                                    <span>{poke.height} M</span>
                                </div>
                                <div className='text-center'>Height</div>
                            </div>
                            <div className='h-32 w-1 bg-zinc-200'></div>
                            <div>
                                <div className='flex flex-col py-7'>
                                    {
                                        poke.abilities.map((ability)=>(
                                            <>
                                                <span key={ability.slot}>{ability.ability.name}</span>
                                            </>
                                        ))
                                    }
                                </div>
                                <div className='text-center'>Moves</div>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <h1 className={"text-"+poke.types[0].type.name+' text-center font-extrabold text-4xl mb-10'}>Description</h1>
                        <p>{poke.Description}</p>
                    </div> */}
                    <div className='w-3/4'>
                        <h1 className={"text-"+poke.types[0].type.name+' text-center font-extrabold text-4xl mb-10'}>Base Status</h1>
                        <div className=''>
                            {
                                poke.stats.map((stat)=>(
                                    <div key={stat.stat.name}  className='flex w-full'>
                                        <div className={`border-r-4 border-zinc-300 text-${poke.types[0].type.name} font-black text-2xl pr-3 mr-3 w-72 flex-none text-right uppercase`}>{stat.stat.name}</div>
                                        <div className='flex items-center w-full'>
                                            <span className='font-semibold text-sm mr-3'>{stat.base_stat}</span>
                                            <div className={`bg-${poke.types[0].type.name} w-full h-2 bg-opacity-20 rounded-full`}>
                                                <div className={`bg-${poke.types[0].type.name} w-[${((stat.base_stat/200)*100).toFixed(0)}%] h-full rounded-full`}></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}