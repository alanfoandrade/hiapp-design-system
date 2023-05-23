import { Button, ButtonProps } from '@hiapp-ui/react';
import type { StoryObj, Meta } from '@storybook/react';
import { ArrowRight } from 'phosphor-react';

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const PrimaryDisabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
};

export const SecondaryDisabled: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
    disabled: true,
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
};

export const TertiaryDisabled: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
    disabled: true,
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
};
