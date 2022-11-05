import CellComponent from "./CellComponent";
import {Fragment, FC} from 'react';
import {Board} from '../models/board';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
    return (
        <div className="board">
            {board.cells.map((row, index) =>
            <Fragment key={index}>
                {row.map(cell =>
                    <CellComponent
                        cell={cell}
                        key={cell.id}
                    />
                )}
            </Fragment>
            )}
        </div>
    );
};

export default BoardComponent;