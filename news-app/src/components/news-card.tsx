import Link from "next/link"

export default function Card({ item }: { item: News }) {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={item.multimedia[0].url}
                        alt={item.title}
                        className="w-full aspect-[16/9] object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <span className="badge badge-neutral badge-outline text-white">{item.published_date}</span>
                    <div className="card-actions justify-end">
                        <Link href={'/detail'}><button className="btn btn-primary">read</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}