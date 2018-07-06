const customCheckBox = ({ input, label }) => {
  return (
  
      <Checkbox
        label={label}
        checked={input.value ? true : false}
        onChange={(e, { checked }) => input.onChange(checked)}
      />
   
  );
};

export {customCheckBox}