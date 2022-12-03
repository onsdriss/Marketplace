import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap'
    },
    toggle: {
        fontFamily: 'myFont',
        border: 'none',
        color: '#111111',
        padding: '5px 10px !important'
    },
});

const MainCategory = ({options, value, selectToggle}) => {

    const classes = useStyles();

  return (
    <ToggleButtonGroup value={value} onChange={selectToggle} className={classes.root} exclusive>
      {options.map(({label, _id, value}) => <ToggleButton className={classes.toggle} value={value} key={_id}>{label}</ToggleButton>)}
    </ToggleButtonGroup>
  )
}

export default MainCategory
