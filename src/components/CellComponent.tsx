import { Cell } from "../models/cell";
import {FC} from 'react';

interface CellProps {
    cell: Cell;
}

const CellComponent: FC<CellProps> = ({cell}) => {
    return (
        <div className={['cell', cell.color].join(' ')}>
            {cell.figure}
        </div>
    );
};

export default CellComponent;