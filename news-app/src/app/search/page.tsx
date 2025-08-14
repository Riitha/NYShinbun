'use client'

import Image from "next/image";
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
            <div>
                <h1>search page</h1>
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" value={search} onChange={handleOnChange} />
                <button className="btn" onClick={handleSearch}>cari</button>
            </div>
            {result?.map((item, index)=> {
                return (
                    <div key={index}>
                        <Image src={item.multimedia.default.url} width={100} height={100} className="w-30 h-30" alt="ab"/>
                        {item.headline.main}
                    </div>
                )
            })}
        </>
    )
}