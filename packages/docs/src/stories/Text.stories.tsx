import { Text, TextProps } from '@hiapp-ui/react';
import type { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque assumenda voluptatibus blanditiis, voluptatem voluptate nisi modi qui ad quidem labore molestias animi accusantium dolorem dolores sint eius minus commodi. Hic?',
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
};
