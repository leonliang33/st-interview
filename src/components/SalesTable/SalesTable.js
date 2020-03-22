import React from "react";
import { useSelector } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const SalesTable = () => {
    let data = useSelector(state => state.data);
    data = data.flatMap((product) => product.sales);
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell align="left">Week Ending</TableCell>
                    <TableCell align="right">Retail Sales</TableCell>
                    <TableCell align="right">Wholesale Sales</TableCell>
                    <TableCell align="right">Units Sold</TableCell>
                    <TableCell align="right">Retailer Margin</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {data.map((sales, index) => (
                <TableRow key={index}>
                    <TableCell align="left">{sales.weekEnding}</TableCell>
                    <TableCell align="right">{sales.retailSales}</TableCell>
                    <TableCell align="right">{sales.wholesaleSales}</TableCell>
                    <TableCell align="right">{sales.unitsSold}</TableCell>
                    <TableCell align="right">{sales.retailerMargin}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    );
}

export default SalesTable;