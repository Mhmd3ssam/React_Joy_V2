import PropTypes from "prop-types";

import { useState } from "react";

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { mdiLockOutline, mdiLockOpenVariantOutline } from "@mdi/js";

import Icon from "./Icon";

function PasswordField({
  name,
  label,
  required,
  size,
  placeholder,
  disabled,

  value,
  onChange,
  onFocus,
  onBlur,

  error,
  helperText,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <FormControl
      fullWidth
      variant="outlined"
      error={error}
      required={required}
      size={size || "small"}
    >
      <InputLabel name={name}>{label}</InputLabel>
      <OutlinedInput
        id={name}
        name={name}
        label={label}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder || ""}
        autoComplete="new-password"
        disabled={disabled}
        value={value}
        onChange={onChange}
        onFocus={(e) => {
          setIsFocused(true);
          !!onFocus && onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          !!onBlur && onBlur(e);
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              edge="end"
              size="small"
              onClick={() => setShowPassword(!showPassword)}
            >
              <Icon
                icon={showPassword ? mdiLockOpenVariantOutline : mdiLockOutline}
                size={size === "small" ? "small" : "medium"}
                color="primary"
              />
            </IconButton>
          </InputAdornment>
        }
      />
      {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

PasswordField.prototype = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  size: PropTypes.oneOf(["medium", "small"]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,

  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,

  error: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default PasswordField;
