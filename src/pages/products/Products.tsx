import { useState } from "react";
import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { products } from "../../data";
import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img} alt="" />;
    },
  },
  {
    field: "title",
    headerName: "Title",
    width: 250,
    type: "string",
  },
  {
    field: "color",
    headerName: "Color",
    width: 250,
    type: "string",
  },
  {
    field: "price",
    headerName: "Price",
    type: "string",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "string",
    width: 200,
  },
  {
    field: "inStock",
    headerName: "In Stock",
    type: "boolean",
    width: 150,
  },
];
const Products = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="products">
    <div className="info">
      <h1>Products</h1>
      <button onClick={() => setOpen(true)}>Add New Products</button>
    </div>
    <DataTable slug="products" columns={columns} rows={products} />
    {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
  </div>
  );
}

export default Products
