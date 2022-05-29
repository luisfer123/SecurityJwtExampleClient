import { Role } from "./Role";

export class User {
    id: number | null = null;
    username: string = '';
    password: string = '';
    roles: Array<Role> = new Array();
}