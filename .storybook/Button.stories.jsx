import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../src/index.jsx';

export default {
	component: Button,
	title: 'Button',
	argTypes: {
		color: {
			control: { type: 'color' }
		},
		contrastColor: {
			control: { type: 'color' }
		},
		size: {
			options: ['sm', 'md', 'lg'],
			control: { type: 'select' }
		},
		variant: {
			options: ['text', 'outlined', 'contained'],
			control: { type: 'select' }
		}
	},
	args: {
		onClick: action('onClick Called'),
	},

};

const Template = (args) => <Button {...args}>Button</Button>;

export const Demo = Template.bind({});
Demo.args = {
	variant: 'text',
	color: '#212121',
	size: 'md',
	contrastColor: '#ffffff',
};