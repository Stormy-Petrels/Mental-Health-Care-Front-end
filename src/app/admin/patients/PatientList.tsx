"use client";
import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { format } from "date-fns";
import { get } from "https";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { ChangeEvent } from "react";

export default function PatientList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const handleIsAddClose = () => {
    setIsAdd(false);
  };

  

  //   useEffect(() => {
  //     getData();
  //   }, [isAdd]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/admin/patients"
        );
        setData(response.data.payload);
        setIsLoading(false);
      } catch (error) {
        console.log("err", error);
      }
    };

    getData();
  }, []);

  const handleChangePage = (event: ChangeEvent<any>, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<any>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //   const editRecord = (row) => {
  //     console.log("row ", row);
  //   };

  // const deleteRecord = (row) => {
  //   confirmAlert({
  //     title: "Confirm to submit",
  //     message: "Are you sure to do this.",
  //     buttons: [
  //       {
  //         label: "Yes",
  //         onClick: () => deleteRow(row),
  //       },
  //       {
  //         label: "No",
  //       },
  //     ],
  //   });
  // };

  // const deleteRow = (row) => {
  //   let data = JSON.stringify({ id: row.id });

  //   let config = {
  //     method: "delete",
  //     url: "api/users",
  //     data: data,
  //   };

  //   axios
  //     .request(config)

  //     .then((response) => {
  //       getData();
  //       toast.success("deleted sucessfully !", {
  //         position: "top-right",
  //         autoClose: 1000,
  //         hideProgressBar: true,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //       // console.log('data', response);
  //       // setData(response.data);
  //       // setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log("err", error);
  //       toast.error("Can't delete", {
  //         position: "top-right",
  //         autoClose: 1000,
  //         hideProgressBar: true,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     });
  // };

  return (
    <>
      <>
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl mb-4">Management patients</h1>
          <Button
            className="mb-2"
            onClick={() => setIsAdd(true)}
            variant="contained"
            width="200px"
            sx={{
              backgroundColor: '#E61F57',
              '&:hover': {
                backgroundColor: '#E61F59',
              },
            }}
            startIcon={<AddIcon />}
          >
            Add patient
          </Button>
        </div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ minWidth: 70 }}>
                    Name
                  </TableCell>

                  <TableCell align="left" style={{ minWidth: 100 }}>
                    Email
                  </TableCell>

                  <TableCell align="left" style={{ minWidth: 70 }}>
                    Phone
                  </TableCell>

                  <TableCell align="left" style={{ minWidth: 50 }}>
                    Address
                  </TableCell>

                  <TableCell align="left" style={{ minWidth: 170 }}>
                    Health Condition
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: 170 }}>
                    Note
                  </TableCell>
                  <TableCell align="center" style={{ minWidth: 170 }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {!isLoading &&
                  data &&
                  data.length > 0 &&
                  data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: any, index: number) => (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        <TableCell key={index} align="left">
                          {row.fullName}
                        </TableCell>
                        <TableCell key={index} align="left">
                          {row.email}
                        </TableCell>
                        <TableCell key={index} align="left">
                          {row.phone}
                        </TableCell>
                        <TableCell key={index} align="left">
                          {row.address}
                        </TableCell>
                        <TableCell key={index} align="left">
                          {row.healthCondition}
                        </TableCell>
                        <TableCell key={index} align="left">
                          {row.note}
                        </TableCell>
                        <TableCell key={index} align="right">
                          <div className="flex justify-center">
                            <div
                              className="cursor-pointer text-green-700 mr-2"
                              // onClick={() => editRecord(row)}
                            >
                              <EditIcon />
                            </div>
                            <div
                              className="cursor-pointer text-orange-700"
                              // onClick={() => deleteRecord(row)}
                            >
                              <DeleteIcon />
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </>
    </>
  );
}
