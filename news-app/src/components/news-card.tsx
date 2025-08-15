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
                    <span className="badge badge-neutral badge-outline text-white">{new Date(item.published_date).toLocaleDateString('id-ID', {year:'numeric', month:'long', day:'numeric'})}</span>
                    <div className="card-actions justify-end">
                        <span className="badge badge-secondary">{item.section}</span>
                    </div>
                </div>
            </div>
        </>
    )
}