import React from 'react';
import { useSelector } from "react-redux";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import home from '../../images/home.png'
import sales from '../../images/sales.png'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './ProductOverview.css';

const ProductOverview = () => {
    let data = useSelector(state => state.data);

    const createTags = (product) => {
        return product.tags.map((tag, index) => {
            return (
                <Chip key={index} className="tags" variant="outlined" style={{backgroundColor:'white'}} label={tag}></Chip>
            )
        })
    }

    const createSubtitle = (product) => {
        return <Typography className="description" variant="body2" color="textSecondary" component="p">
            {product.subtitle}
        </Typography>
    }

    const createTitle = (product) => {
        return (
            <Typography gutterBottom variant="h5" component="h2">
                {product.title}
            </Typography>
        )
    }


    return (
        data.map((product) => {
            return (
                <Card alignItems="left" style={{margin: 15, padding: 15}}>
                    <img className="blender-image" style={{height: 150, padding: 20}} src={product.image}/>
                    <CardContent style={{width: 250}}>
                    {createTitle(product)}
                    {createSubtitle(product)}
                    {createTags(product)}
                    </CardContent>
                    <List>
                        <ListItem button key="1">
                            <ListItemIcon>
                            <img style={{height: 25}} src={home}/>
                            </ListItemIcon>
                            <ListItemText secondary="Overview" />
                        </ListItem>
                        <ListItem button key="2">
                            <ListItemIcon>
                                <img style={{height: 25}} src={sales}/>
                            </ListItemIcon>
                            <ListItemText secondary="Sales" />
                        </ListItem>
                    </List>
                </Card>
            )
        })
     )
}

export default ProductOverview
