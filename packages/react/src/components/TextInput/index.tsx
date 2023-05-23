import { ComponentProps, forwardRef, ElementRef } from 'react';

import { TextInputContainer, Prefix, Input } from './styles';

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
  variant: 'sm' | 'md';
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, variant, ...props }, ref) => (
    <TextInputContainer variant={variant}>
      {!!prefix && <Prefix>{prefix}</Prefix>}

      <Input ref={ref} {...props} />
    </TextInputContainer>
  ),
);

TextInput.displayName = 'TextInput';
