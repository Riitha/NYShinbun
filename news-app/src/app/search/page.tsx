'use client'

import ListSearch from "@/components/list-search";
// import Image from "next/image";
import { useState } from "react"

export default function SearchPage() {
    const [search, setSearch] = useState<string>('');
    const [result, setResult] = useState<NewsSearch[]>([])
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch((e.target.value))
    }
    const handleSearch = async () => {
        try {
            const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=XxRy9SySs4sAs1aTIe8yULS6HKvYbQGA`)

            const result = await res.json();
            setResult(result.response.docs)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(result)
    return (
        <>
            <main className="w-full h-screen bg-zumthor">
                <h1 className="mt-16 text-firefly text-md md: text-3xl lg:text-4xl text-center font-['Quintessential'] font-bold p-3">search article</h1>

                <div className=" flex justify-center mx-auto">
                    <input type="text" placeholder="Search" className="input input-bordered w-30 md:w-100 h-10 bg-gray-300 border-2 border-black mx-2 text-black" value={search} onChange={handleOnChange} />
                    <button className="btn btn-info rounded-4xl" onClick={handleSearch}>cari</button>
                </div>

                <ListSearch result={result} />
            </main>

        </>
    )
}