import Link from "next/link";

const DomainLink = ({ href, children }: { href: string, children: any }) => {
  return <Link href={href}>{children}</Link>
}

DomainLink.defaultProps = {
  href: "/",
  children: undefined
}

export default DomainLink;