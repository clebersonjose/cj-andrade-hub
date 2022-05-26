import { ReactNode } from 'react';

export interface AnchorProps {
  href: string,
  children: ReactNode,
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: string | undefined,
}
