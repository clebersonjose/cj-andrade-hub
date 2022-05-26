import Link from 'next/link';
import { AnchorProps } from './interfaces';
import AnchorStyle from './styles';

const Anchor = ({
  href, children, target, rel,
}: AnchorProps) => (
  <Link href={href} passHref>
    <AnchorStyle target={target} rel={rel}>{children}</AnchorStyle>
  </Link>
);

Anchor.defaultProps = {
  target: '_self',
};

export default Anchor;
