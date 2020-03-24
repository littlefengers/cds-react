import React from "react"
import { StylesProvider } from "@material-ui/styles"
import InputLabel from "@material-ui/core/InputLabel"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import SvgIcon from '@material-ui/core/SvgIcon';
import NativeSelect from "@material-ui/core/NativeSelect"
import { sizing } from '@material-ui/system';


const Dropdown = ({children, label}) => {
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
      });

    const handleChange = event => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
  function CdsDownIcon(props) {
        return (
          <SvgIcon {...props}>
            <path d="M43.7372,14.6847407 L42.2478697,13.2526923 C41.8838704,12.9001289 41.273205,12.9193596 40.8865391,13.2924358 L23.9999062,29.5270187 L7.11594003,13.2911537 C6.72794081,12.9193596 6.11727537,12.9014109 5.75194276,13.2514102 L4.26394574,14.6847407 C3.89594648,15.03474 3.91594644,15.6219183 4.30394566,15.9949945 L21.8505772,32.8667556 L23.2959076,34.2564964 L23.3399075,34.2975219 C23.4959072,34.4488037 23.7025735,34.5193164 23.9145731,34.5334189 C23.9439063,34.535983 23.9719063,34.5462394 24.0012396,34.5475214 C24.0265728,34.5462394 24.0505728,34.537265 24.0745727,34.5347009 C24.2905723,34.5218805 24.5012386,34.4513678 24.6612382,34.2975219 L24.7039048,34.2564964 L26.1505686,32.8667556 L43.6958668,15.9962765 C44.083866,15.6219183 44.103866,15.03474 43.7372,14.6847407 Z" />
          </SvgIcon>
        );
      }

      
  return (
    <StylesProvider injectFirst>
      <FormControl variant="outlined" fullWidth="true">
        <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label={label}
          inputProps={{
            name: "age",
            id: "outlined-age-native-simple"
          }}
          IconComponent = {CdsDownIcon}
        >
          {children}
        </Select>
      </FormControl>
    </StylesProvider>
  )
}

Dropdown.propTypes = {}

export default Dropdown
