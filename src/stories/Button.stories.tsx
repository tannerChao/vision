/*
 * @Author: your name
 * @Date: 2021-08-17 01:34:03
 * @LastEditTime: 2021-08-17 17:05:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vision-core-code/src/stories/Button.stories.tsx
 */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button';
import { Alarm } from '@material-ui/icons';


export default {
  title: 'Material-Ui/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} > Default </Button>;
const Icon: ComponentStory<typeof Button.ButtonIcon> = (args) => <Button.ButtonIcon {...args} > <Alarm></Alarm> </Button.ButtonIcon>;
 
export const Default = Template.bind({});

Default.args= {
  color: 'primary',
  variant: "contained",
}

export const DefaultIcon = Icon.bind({});

DefaultIcon.args= {
  color: 'primary',
}
