import { regionIdType } from "../../hooks/useAppAPI/types";

export default interface PostType {
    id: number;
    regionId: regionIdType;
    email: string;
    textContent: string;
    creationDate: Date
}