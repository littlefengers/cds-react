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
  decorators: [withKnobs, host({ width: 400 })]
}

export const Default = () => {
  return (
    <StylesProvider injectFirst>
      <Dropdown>
        <option aria-label="None" value="" />
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </Dropdown>
    </StylesProvider>
  )
}
