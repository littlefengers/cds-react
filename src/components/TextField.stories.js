import React from "react"
import { action } from "@storybook/addon-actions"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs/react"
import TextField from "@material-ui/core/TextField"
import TextFieldHelpLink from './TextFieldHelpLink';
import TextFieldTooltip from './TextFieldTooltip';
import { StylesProvider } from "@material-ui/styles";
import { host } from 'storybook-host';


export default {
  component: TextField,
  title: "TextField",
  decorators: [withKnobs, host({ width: 400, height: 40 })]
}

export const Input = () => {
  return (
    <StylesProvider injectFirst>
      <form noValidate autoComplete="off">
      <TextField id="outlined-basic" label={text("Label","Label")} variant="outlined" size="small" fullWidth="true"/>
    </form>
  </StylesProvider>
  )
}


export const InputWithHelperText = () => {
    return (
      <StylesProvider injectFirst>
        <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label={text("Label","Label")} variant="outlined" size="small" helperText={text("Help Text","Help Text")} fullWidth="true"/>
      </form>
    </StylesProvider>
    )
}

export const InputWithHelperTextError = () => {
  return (
    <StylesProvider injectFirst>
      <form noValidate autoComplete="off">
      <TextField id="outlined-basic" label={text("Label","Label")} variant="outlined" size="small" helperText={text("Help Text","Error Help Text")} error="true" fullWidth="true"/>
    </form>
  </StylesProvider>
  )
}

export const InputHelpLink = () => {
  return (
    <StylesProvider injectFirst>
      <form noValidate autoComplete="off">
      <TextFieldHelpLink id="outlined-basic" label={text("Label","Label")} variant="outlined" size="small" helperText={text("Help Text","Help Text")} helpLink={text("Helper Link","Helper Link")}fullWidth="true"/>
    </form>
  </StylesProvider>
  )
}