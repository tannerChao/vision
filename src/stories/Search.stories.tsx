/*
 * @Author: your name
 * @Date: 2021-08-17 21:54:16
 * @LastEditTime: 2021-08-18 10:20:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vision-core-code/src/stories/Search.stories.tsx
 */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Search from '../components/Search';
import { Alarm } from '@material-ui/icons';


export default {
	title: 'Material-Ui/Search',
	component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />

export const Default = Template.bind({});
export const disableUnderline = Template.bind({});
Default.args = {
	autoFocus: true,
	placeholder: "Search…",
}
disableUnderline.args = {
	disableUnderline: true,
	startAdornment: true,
	endAdornment: false,
	BoxProps: {

	}
}