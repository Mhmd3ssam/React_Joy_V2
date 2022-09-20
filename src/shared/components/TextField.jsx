import { useState } from "react";

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  InputAdornment,
} from "@mui/material";

import Icon from "./Icon";

function TextField({
  name,
  label,
  type,
  error,
  helperText,
  required,
  size,
  placeholder,
  disabled,
  rows,

  icon,
  iconColor,
  iconSize,
  iconPosition,

  value,
  onChange,
  onBlur,
  onFocus,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const renderIcon = () => {
    if (!isFocused && !value) return null;

    return (
      <InputAdornment position={iconPosition}>
        <Icon icon={icon} size={iconSize} color={iconColor} />
      </InputAdornment>
    );
  };

  return (
    <FormControl
      fullWidth
      variant="outlined"
      error={error}
      required={required}
      size={size || "small"}
    >
      <InputLabel htmlFor={name}> {label}</InputLabel>
      <OutlinedInput
        id={name}
        name={name}
        type={type}
        placeholder={placeholder || ""}
        disabled={!!disabled}
        multiline={!!rows}
        rows={rows}
        value={value}
        onChange={onChange}
        onBlur={(e) => {
          setIsFocused(false);
          !!onBlur && onBlur(e);
        }}
        onFocus={(e) => {
          setIsFocused(false);
          !!onFocus && onFocus(e);
        }}
        startAdornment={!!icon && iconPosition === "start" && renderIcon()}
        endAdornment={!!icon && iconPosition === "end" && renderIcon()}
        sx={{
          backgroundColor: disabled ? "gray" : "white",
        }}
      />
      {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

export default TextField;
