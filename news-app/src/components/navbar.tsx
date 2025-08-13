import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <Link href='/' className="btn btn-ghost text-xl">NHK</Link>
                </div>
                <div className="flex gap-2">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
            </div>
        </>
    )
}