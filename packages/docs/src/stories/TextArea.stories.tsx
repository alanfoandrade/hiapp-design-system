import { Box, Text, TextArea, TextAreaProps } from '@hiapp-ui/react';
import type { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size="sm">Observations</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations',
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
