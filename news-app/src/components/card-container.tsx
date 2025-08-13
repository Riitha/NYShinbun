import Card from "./news-card"

export default function CardContainer({news} : {news: News[]}) {
    return (
        <>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
                <Card key={item.uri} item={item}/>
            ))}
        </div>
        </>
    )
}