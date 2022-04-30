import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./ManageProducts.css";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ManageProducts = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];

  const [allProducts, setAllProducts] = useState([]);
  const date = new Date().toLocaleDateString();

  useEffect(() => {
    fetch("https://protected-stream-32771.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        console.log(data);
      });
  }, []);

  // manage all products delete method for admin
  const handleDelete = (id) => {
    fetch(`https://protected-stream-32771.herokuapp.com/deletePd/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const proceed = window.confirm(
          "Stop! are you sure you want to delete?"
        );
        if (proceed) {
          if (data.deletedCount === 1) {
            const remainingOrders = allProducts.filter(
              (order) => order._id !== id
            );
            setAllProducts(remainingOrders);
          }
        }

        // Swal.fire({
        //   title: "Hey! are you sure you want to do this?",
        //   showCancelButton: true,
        //   confirmButtonText: `Delete`,
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     if (data.deletedCount === 1) {
        //       const remainingProducts = allProducts.filter(
        //         (order) => order._id !== id
        //       );

        //       setAllProducts(remainingProducts)
        //     }
        //     if (result.isConfirmed.ok) {
        //       Swal.fire('Deleted!', '', 'success') 
        //     }
        //   }
        // });
      });
  };

  return (
    // <div className="container">
    //   <h2>Manage All Products For Admin</h2>
    //   <table className="table">
    //     <thead>
    //       <tr>
    //         <th scope="col">Id</th>
    //         <th scope="col">ProductName</th>
    //         <th scope="col">Price</th>
    //         <th scope="col">Date</th>
    //         <th scope="col">Option</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {allProducts.map((product) => (
    //         <tr>
    //           <td>{product?._id}</td>
    //           <td>{product?.name}</td>
    //           <td>${product?.price}</td>
    //           <td>{date}</td>
    //           <td>
    //             <button className="btn btn-primary" onClick={() => handleDelete(product._id)}>
    //               Delete
    //             </button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>

    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: { md: 650, sm: 650, xs: "100%" },
          width: { xs: "100%" },
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allProducts.map((product) => (
            <TableRow
              key={product._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product._id}
              </TableCell>
              <TableCell align="center">{product.name}</TableCell>
              <TableCell align="center">{product.price}</TableCell>
              <TableCell align="center">
                {product?.model ? product.model : "not given"}
              </TableCell>
              <TableCell align="center">
                {/* <Button
                  size='small'
                  color="error"
                  
                  onClick={() => handleDelete(product._id)}
                >
                </Button> */}
                <DeleteIcon
                  sx={{ cursor: "pointer" }}
                  size="small"
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(product._id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    // <Paper className="container">
    //   <Table>
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Id</TableCell>
    //         <TableCell numeric>Product Name</TableCell>
    //         <TableCell numeric>Price</TableCell>
    //         <TableCell numeric>Date</TableCell>
    //         <TableCell numeric>Options</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {allProducts.map((product) => (
    //         <TableRow key={product._id}>
    //           <TableCell component="th" scope="row">
    //             {product._id}
    //           </TableCell>
    //           <TableCell numeric>{product.name}</TableCell>
    //           <TableCell numeric>{product.price}</TableCell>
    //           <TableCell numeric>{date}</TableCell>
    //           <TableCell numeric>
    //             <Button
    //               color="warning"
    //               onClick={() => handleDelete(product._id)}
    //             >
    //               Delete
    //             </Button>
    //           </TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </Paper>
  );
};

export default ManageProducts;
