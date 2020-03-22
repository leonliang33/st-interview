import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import {useSelector, useDispatch} from 'react-redux'
import actions from '../../action/action.js';
import ProductDetails from '../ProductDetails/ProductDetails';
import ProductOverview from '../ProductOverview/ProductOverview';

const loadData = async () => {
    const data = await import('../../data/data.json')
    return data;
}

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        async function load() {
            const data = await loadData();
            dispatch(actions.saveData(data.default))
        }
        load()
    }, [])

    return (
        <Grid container justify="space-evenly" direction="row">
            <ProductOverview item xs={6}></ProductOverview>
            <ProductDetails item xs={6}></ProductDetails>
        </Grid>
    );
}

export default Main;
