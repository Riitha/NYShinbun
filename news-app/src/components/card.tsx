import Link from "next/link"

export default function Card({ item }: { item: News }) {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={item.poster}
                        alt={item.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <span className="badge badge-neutral badge-outline text-white">{item.publishedAt}</span>
                    <div className="card-actions justify-end">
                        <Link href={'/detail'}><button className="btn btn-primary">read</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}