import Link from "next/link";

const BreadCrumbs = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
        <ol className="flex flex-wrap p-0 mb-8 list-none bg-transparent font-semibold text-xs tracking-wider uppercase">
          {items.map((link, i) => <li key={i} className={`${link.active ? "text-gold-main" : "text-[#827f92]"} ${(i > 0) && "pl-5 before:inline-block before:pr-2 before:text-[#6c757d] before:content-['/']"} flex`}>
            {!link.active ? <Link href={link.destination}>{link.title}</Link> : link.title}
          </li>)}
        </ol>
    </nav>
  )
}

export default BreadCrumbs;