import React from 'react';
import CheckBox from 'react-native-checkbox';
export const customCheckBox = ({ input, lable }) => {
  console.log(input)
  return (
  
  <CheckBox
  label={lable}
  checked={false}
  onChange={(checked) => input.onChange(checked)}
/>
   
  );
};

