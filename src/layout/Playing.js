import React from "react"
import "./../scss/style.scss"
import { makeStyles } from "@material-ui/core/styles"
import Button from "../components/Buttons"
import TextField from "@material-ui/core/TextField"
import Notifications from "../components/Notifications";

const useStyles = makeStyles({
  root: {
 
  }
})


const Playing = () => { 
//Using CSS in JS
const classes = useStyles()
  return (
    <section className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
      {/* <Button variant="primary" ariaLabel="Some Aria Text">
        Test
      </Button> */}

      <Notifications variant="error">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat nam eaque adipisci. Labore, sed deleniti dolorum voluptatem pariatur commodi nobis libero, repellat dicta eum voluptates illo veritatis? Ad, optio?</Notifications>
    

    </section>
  )
}

export default Playing
