import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import SalesChart from '../SalesChart/SalesChart';
import SalesTable from '../SalesTable/SalesTable';

const ProductDetail = () => {

    return (
        <Grid container direction="column" justify="center" item xs={8} spacing={1}>
           <Card item xs={12} spacing={3} style={{margin: 25, padding: 10}}>
              <Typography variant="body1" component="h5">
               Retail Sales
             </Typography>
              <SalesChart/>
           </Card>

           <Card item xs={12} spacing={3} style={{margin: 25}}>
              <SalesTable/>
           </Card>
        </Grid>
     )
}

export default ProductDetail
