import TableCell from "@mui/material/TableCell";
import { TableRowsProps, TableRowsNames } from "../../interfaces/interfaces";

const TableRow: React.FC<TableRowsProps> = ({ tableRowsNames }) => {
  return (
    <>
      {tableRowsNames.map((item: TableRowsNames) => (
        <TableCell
          sx={{ color: "white", width: `100%/${tableRowsNames.length}` }}
          key={item.rowName}
        >
          {item.rowName}
        </TableCell>
      ))}
    </>
  );
};

export default TableRow;
