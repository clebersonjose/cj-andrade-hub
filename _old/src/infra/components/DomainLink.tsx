import Link from 'next/link';

export default function DomainLink({
  href,
  children
}: {
  href: string;
  children: any;
}) {
  return <Link href={href}>{children}</Link>;
}
