import {React,useState} from 'react';
import * as XLSX from 'xlsx';
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useLocation } from 'react-router-dom';
// const  Grid = ()=>{
// const [rowData, setRowData] = useState([
//   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
//   { make: "Ford", model: "F-Series", price: 33850, electric: false },
//   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
// ]);
// const location = useLocation()
// setRowData(location.state)
// // Column Definitions: Defines the columns to be displayed.
// const [colDefs, setColDefs] = useState([
//   { field: "make" },
//   { field: "model" },
//   { field: "price" },
//   { field: "electric" },
// ]);
// return (
//   <div
//     className="ag-theme-quartz" // applying the Data Grid theme
//     style={{ height: 500 }} // the Data Grid will fill the size of the parent container
//   >
//     <AgGridReact rowData={rowData} columnDefs={colDefs} />
//   </div>
// );
// }

// export default Grid


const Grid = () => {
  const location = useLocation();
  console.log(location.state);

  const [rowData, setRowData] = useState(location.state);

const [colDefs, setColDefs] = useState([
  { field: "State/ Federal " },
  { field: "State Regulators" },
  { field: "Report division" },
  { field: "Report Name" },
  { field: "Frequency" },
  { field: "Regulatory  Date" },
  { field: "Report Owner" },
]);
const defaultCol = {
  sortable:true,
  filter:true
}
  return <div
    className="ag-theme-quartz" // applying the Data Grid theme
    style={{ height: 500 }} // the Data Grid will fill the size of the parent container
  >
    <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultCol}/>
  </div>;
};

export default Grid;