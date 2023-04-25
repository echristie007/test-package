import React from 'react';

import { Card } from '/src';
const Template = (args) => <Card {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    title: 'Add user',
    href: '#',
    description: 'API to add an Object',
    path: ['parent', 'API'],
};

export default {
    title: 'Components/Card',
    component: Card,
    parameters: { actions: { argTypesRegex: '^on.*' } },
};
