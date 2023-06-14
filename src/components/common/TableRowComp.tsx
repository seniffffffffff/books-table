import TableCell from "@mui/material/TableCell";
import { TableRowsProps, TableRowsNames } from "../../interfaces/interfaces";
const TableRowComp: React.FC<TableRowsProps> = ({ tableRowsNames }) => {
  return (
    <>
      {tableRowsNames.map((item: TableRowsNames) => (
        <TableCell sx={{ color: "white" }} key={item.rowName}>
            {item.rowName}
        </TableCell>
      ))}
    </>
  );
};

export default TableRowComp;
