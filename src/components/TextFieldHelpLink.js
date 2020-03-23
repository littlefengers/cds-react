import React from "react"
import PropTypes from "prop-types"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import FormHelperText from "@material-ui/core/FormHelperText"
import OutlinedInput from "@material-ui/core/OutlinedInput"

function TextFieldHelpLink({ name, helperText, label, helpLink }) {
  return (
    <FormControl variant="outlined" fullWidth="true" size="small">
      <InputLabel htmlFor="component-outlined">{label}</InputLabel>
      <OutlinedInput id="component-outlined" value={name} label="Name" />
      <FormHelperText>{helperText}</FormHelperText>
      <div className="outlined__link-text">
        <a href="#">{helpLink}</a>
      </div>
    </FormControl>
  )
}

TextFieldHelpLink.propTypes = {
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
  helpLink: PropTypes.string.isRequired
}

TextFieldHelpLink.defaultProps = {
  label: "Label",
  helperText: "Help text",
  helpLink: "Help link"
}

export default TextFieldHelpLink
