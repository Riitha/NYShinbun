import Link from "next/link"
import DropdownCategory from "./dropdown-section"

export default function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <Link href='/' className="btn btn-ghost text-xl">NHK</Link>
                </div>
                <div className="flex gap-2 items-center">
                    <Link href='/search'>search</Link>
                    <DropdownCategory/>
                </div>
            </div>
        </>
    )
}