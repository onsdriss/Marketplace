import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Slider } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '88%',
        display: 'block',
        margin: '35px auto 0 auto'
    },
    thumb: {
        color: '#111111'
    },
    rail: {
        color: '#000000'
    },
    track: {
        color: '#111111'
    },
});

const Price = ({value, changePrice, products}) => {

    const classes = useStyles();

    //find max price, for min price is default 0
    const maxOfAllPrice = products.reduce((accumulator, products) => Math.max(products.price, accumulator), 0);

  return (
    <div className={classes.root}>
                                                                                  {/* this is important */}
      <Slider value={value} onChange={changePrice} valueLabelDisplay='on' min={0} max={maxOfAllPrice} classes={{thumb:classes.thumb, rail:classes.rail, track:classes.track}} />
    </div>
  )
}

export default Price
