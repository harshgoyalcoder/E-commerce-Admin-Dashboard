import { DataGrid } from '@mui/x-data-grid';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
// import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Avatar, Box, Button } from '@mui/material';
import {useDispatch,useSelector} from 'react-redux';
import { deleteProduct, getProducts } from "../redux/apiCalls";
 

export default function ProductList() {
//   const [data, setData] = useState(productRows);
  const dispatch=useDispatch();
  const products=useSelector((state)=>state.product.products)

  useEffect(()=>{
    getProducts(dispatch);
  },[dispatch]);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
    deleteProduct(id,dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <Box sx={{display:"flex",alignItems:"center"}}>
            <Avatar src={params.row.img} alt="" />
            {params.row.title}
          </Box>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
    // },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
             <Button variant="contained">Edit</Button>
            </Link>
            <DeleteOutline style={{marginLeft:"40px"}} onClick={() => handleDelete(params.row._id)} sx={{color:"red",cursor:"pointer"}}
              
            />
          </>
        );
      },
    },
  ];

  return (
    <Box  padding={4} flex={4}>
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row)=>row._id}
        pageSize={8}
        checkboxSelection
      />
    </Box>
  );
}