import React from "react"
import PropTypes from "prop-types"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import FormHelperText from "@material-ui/core/FormHelperText"
import OutlinedInput from "@material-ui/core/OutlinedInput"

function TextFieldTooltip({ name,helperText,label,linkText }) {
  return (
    <FormControl variant="outlined" fullWidth="true" size="small">
      <InputLabel htmlFor="component-outlined">{label}</InputLabel>
      <OutlinedInput id="component-outlined" value={name} label="Name" />
      <FormHelperText>{helperText}</FormHelperText>
      <div className="outlined__link-text"><a href="#">{linkText}</a></div>
    </FormControl>
  )
}

TextFieldTooltip.propTypes = {}

export default TextFieldTooltip
