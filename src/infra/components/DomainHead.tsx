import Head from "next/head";

const DomainHead = ({ children }: { children: any }) => {
  return (
    <Head>{children}</Head>
  )
}

export default DomainHead;
