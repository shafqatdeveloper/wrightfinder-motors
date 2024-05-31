import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { MdDelete, MdModeEdit, MdSell } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTable, usePagination, useSortBy } from "react-table";
import { toast } from "react-toastify";

const AllCars = () => {
  const [cars, setCars] = useState([]);

  const deleteCarPostHandler = async (id) => {
    const confirmDelete = confirm("Are you Sure to Delete this Car");
    if (confirmDelete) {
      const response = await axios.delete(`/api/admin/car/delete/${id}`);
      if (response.status === 200) {
        toast(response.data.message, {
          theme: "dark",
        });
      } else {
        toast(response.data.message, {
          theme: "dark",
        });
      }
    }
  };
  const markAsSoldCarHandler = async (id) => {
    const confirmSold = confirm("Are you Sure to Mark this Car as SOLD");
    if (confirmSold) {
      const response = await axios.put(`/api/admin/car/mark/sold/${id}`);
      if (response.status === 200) {
        toast(response.data.message, {
          theme: "dark",
        });
      } else {
        toast(response.data.message, {
          theme: "dark",
        });
      }
    }
  };

  useEffect(() => {
    const fetchAllCars = async () => {
      const response = await axios.get("/api/cars");
      setCars(response.data.cars);
    };
    fetchAllCars();
  }, [deleteCarPostHandler]);

  const columns = useMemo(
    () => [
      {
        Header: "Photo",
        accessor: "galleryImagesArray",
        Cell: ({ value }) => {
          const imageUrl = value[0]?.imageName;
          return (
            <img
              src={`${import.meta.env.VITE_API_URL}/uploads/${imageUrl}`}
              alt="Car Pic"
              style={{ width: "50px", height: "40px", borderRadius: "10px" }}
            />
          );
        },
      },
      {
        Header: "Car Name",
        accessor: "name",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Style",
        accessor: "style",
      },
      {
        Header: "Seats",
        accessor: "seats",
      },
      {
        Header: "Driveline",
        accessor: "driveline",
      },
      {
        Header: "Exterior Color",
        accessor: "exteriorColor",
      },
      {
        Header: "Availability",
        accessor: "available", // Assuming 'id' is the unique identifier for each row
        Cell: ({ value }) => (
          <div className="flex space-x-3">
            {value === true ? <h1>AV</h1> : <h1>SOLD</h1>}
          </div>
        ),
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Action",
        accessor: "_id", // Assuming 'id' is the unique identifier for each row
        Cell: ({ row }) => (
          <div className="flex space-x-3">
            <button
              onClick={() => deleteCarPostHandler(row._id)}
              className="bg-red-500 text-white p-2 rounded"
            >
              <MdDelete size={25} />
            </button>
            <button
              onClick={() => {
                if (row.available === true) {
                  markAsSoldCarHandler(row._id);
                } else {
                  toast("This car is already SOLD", {
                    theme: "dark",
                  });
                }
              }}
              className="bg-[#3c2163] text-white p-2 rounded"
            >
              <MdSell size={25} />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // Instead of 'rows', we use 'page'
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: cars,
      initialState: { pageIndex: 0 }, // Set initial page index
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="w-full px-2 overflow-x-auto">
      <h1 className="text-3xl font-bold font-sans text-center pt-2 pb-10">
        ALL CARS
      </h1>
      <table
        {...getTableProps()}
        className="bg-[#3c2163] w-full text-white border border-white rounded-lg shadow-md"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())} // Enable sorting
                  className="py-2 px-4 text-left"
                >
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={
                  row.index % 2 === 0 ? "bg-[#17A8E2]" : "bg-[#2b9cc9]"
                }
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="py-2 px-4 border-t border-[#5a3a7d]"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Pagination controls */}
      <div className="pagination flex items-center justify-center space-x-4 mt-4">
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          {"<<"}
        </button>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          {"<"}
        </button>
        <span className="text-gray-600">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          {">"}
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          {">>"}
        </button>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          className="bg-white text-gray-800 border border-gray-300 rounded px-2 py-1"
        >
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AllCars;
