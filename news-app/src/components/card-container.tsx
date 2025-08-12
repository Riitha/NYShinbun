import Card from "./card"

export default function CardContainer({news} : {news: News[]}) {
    return (
        <>
        <div className="grid grid-cols-4 gap-4">
            {news.map((item) => (
                <Card key={item.id} item={item}/>
            ))}
        </div>
        </>
    )
}