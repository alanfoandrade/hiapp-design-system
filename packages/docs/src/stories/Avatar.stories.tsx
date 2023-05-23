import { Avatar, AvatarProps } from '@hiapp-ui/react';
import type { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/alanfoandrade.png',
    alt: 'Alan Andrade',
    size: 'md',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};

export const Small: StoryObj<AvatarProps> = {
  args: {
    size: 'sm',
  },
};

export const Large: StoryObj<AvatarProps> = {
  args: {
    size: 'lg',
  },
};

export const XLarge: StoryObj<AvatarProps> = {
  args: {
    size: 'xl',
  },
};

export const XXLarge: StoryObj<AvatarProps> = {
  args: {
    size: '2xl',
  },
};
