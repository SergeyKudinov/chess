import { Colors } from "../colors";
import logo from '../../assets/black-king';
import {Cell} from '../cell'; 

export enum FigureNames {

}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureName;
    id: number;
}