import Head from 'next/head';

export default function DomainHead({ children }: { children: any }) {
  return (
    <Head>{children}</Head>
  );
}
