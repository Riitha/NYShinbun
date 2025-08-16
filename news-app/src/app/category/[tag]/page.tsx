import CardContainer from "@/components/card-container";


export default async function CategoryPage(props: { params: Promise<{ tag: string }> }) {
    const params = await props.params;
    const { tag } = params;
    const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/${tag}.json?api-key=XxRy9SySs4sAs1aTIe8yULS6HKvYbQGA`);
    const data = await res.json()
    const news = data.results
    return (
        <>
            <main className="w-full h-full bg-zumthor">
                <div>
                    <h1 className="mt-16 text-black text-center font-['Quintessential'] text-md sm:text-xl md:text-3xl lg:text-4xl font-bold p-2 my-10">{tag} News!</h1>
                    <CardContainer news={news} />
                </div>
            </main>
        </>
    )
}