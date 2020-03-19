import React from "react"
import { action } from "@storybook/addon-actions"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs/react"
import TextField from "@material-ui/core/TextField"
import { StylesProvider } from "@material-ui/styles";


export default {
  component: TextField,
  title: "TextField",
  decorators: [withKnobs]
}

export const Input = () => {
  return (
    <StylesProvider injectFirst>
      <form noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Label" variant="outlined" size="small"/>
    </form>
  </StylesProvider>
  )
}


export const InputWithHelperText = () => {
    return (
      <StylesProvider injectFirst>
        <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Label" variant="outlined" size="small" helperText="Help text"/>
      </form>
    </StylesProvider>
    )
}