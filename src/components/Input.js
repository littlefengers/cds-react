import React from "react"
import PropTypes from "prop-types"
import $ from "jquery"

//Need to run this on mount

const newfield = () => {
  $(".input-field-v2 .input-outline").each(function(index) {
    if ($(this).attr("value") !== undefined && $(this).attr("value") !== "") {
      $('label[for="' + $(this).attr("id") + '"]').addClass("active")
    }
  })

  $("body").on("focusout", ".input-field-v2 .input-outline", function(element) {
    if (!element.target.value && !element.target.placeholder) {
      $("label[for='" + $(element.target).attr("id") + "']").removeClass(
        "active"
      )
    } else {
      $("label[for='" + $(element.target).attr("id") + "']").addClass("active")
    }
  })
}

const formValidate = (error, element) => {
  $(error).attr("aria-live", "polite")
  $(error).addClass("dynamic-error")
  var errordiv = '<span class="offscreen">Error: </span>'
  $(error).prepend(errordiv)
  error.insertAfter(element)
  $(".input-field-v2")
    .find(":input.error:first")
    .focus()
}

function Input({ labelText, invalid }) {
  newfield()

  return (
    <div className="form-group input-field-v2 dns-ui-field">
      <input
        className={`ctHidden input-outline form-control ${
          invalid ? "error" : ""
        }`}
        id="item1"
      />
      <label className="label-outline form-label" for="item1">
        This is label text
      </label>
    </div>
  )
}

Input.propTypes = {}

export default Input
