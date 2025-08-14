import CardContainer from "@/components/card-container";


export default async function CategoryPage({params, } : {params: {tag:string}}) {
    const { tag } = params;
    const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/${tag}.json?api-key=XxRy9SySs4sAs1aTIe8yULS6HKvYbQGA`);
    const data = await res.json()
    const news = data.results
    return (
    <>
    <main className="w-full h-full">
        <div>
            <CardContainer news={news}/>
        </div>
    </main>
    </>
    )
}