import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardPros{
    img:string,
    number:string,
    name:string,
}

export default function Card({ name, number, img }:CardPros) {
    return (
        <Link href={`/pokemon/${number}`} className='shadow-lg w-48 h-60 flex-none rounded-xl p-4 relative  bg-zinc-100 before:block before:w-full before:h-2/4 before:bg-zinc-200 before:absolute before:bottom-0 before:left-0 before:rounded-xl '>
            <div className='text-end text-zinc-500 z-10 w-full'>#{number}</div>
            <Image src={img} width={400} height={400} alt={name} className='object-contain z-10 relative mx-auto'/>
            <div className='text-center text-zinc-800 text-xl z-10 relative'>{name}</div>
        </Link>
    )
}
