import React from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'RadioButton',
  component: RadioButton,
};

export const Default = () => <RadioButton label="Default Radio Button" checked={false} />;

export const Selected = () => <RadioButton label="Selected Radio Button" checked={true} />;