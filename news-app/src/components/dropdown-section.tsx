import Link from "next/link"

export default function DropdownCategory() {
    return (
        <details className="dropdown">
            <summary className="btn m-1">kategori</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><Link href={`/category/${"arts"}`}>arts</Link></li>
                <li><Link href={`/category/${"automobiles"}`}>automobiles</Link></li>
                <li><Link href={`/category/${"fashion"}`}>fashion</Link></li>
                <li><Link href={`/category/${"food"}`}>food</Link></li>
                <li><Link href={`/category/${"health"}`}>health</Link></li>
            </ul>
        </details>
    )
}