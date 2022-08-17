import Link from "next/link"

function Button({link, children, className = ' hover:bg-blue-500 bg-blue-600 '}) {
    return <Link href={link}><a className={`order--1 flex items-center justify-center rounded-full ${className} px-4 py-3 text-sm text-white font-medium`}>{children}</a></Link>
}

export default Button