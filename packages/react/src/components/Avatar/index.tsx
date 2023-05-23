import { User } from 'phosphor-react';
import { ComponentProps } from 'react';

import { AvatarContainer, AvatarFallback, AvatarImage } from './styles';

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export function Avatar({ size, ...props }: AvatarProps) {
  return (
    <AvatarContainer size={size}>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  );
}
