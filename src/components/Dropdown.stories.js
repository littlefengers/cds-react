//RFCP TO GENERATE THIS!!!
import React from "react"
import { action } from "@storybook/addon-actions"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs/react"
import { StylesProvider } from "@material-ui/styles"
import { host } from "storybook-host"
import Dropdown from "./Dropdown"

export default {
  component: Dropdown,
  title: "Dropdown",
  decorators: [withKnobs, host({ width: 400, height: 40 })]
}

export const Default = ({children}) => {
  return (
    <StylesProvider injectFirst>
      <Dropdown label={text("Label",'default label')}>
        <option aria-label="None" value="" />
        <option value={'item1'}>Item 1</option>
        <option value={'item2'}>Item 2</option>
        <option value={'item3'}>Item 3</option>
      </Dropdown>
    </StylesProvider>
  )
}
