import { Role } from "../_model/Role";

/**
 * Represents the current logged in User.
 * It is stored in local storage. No sensitive information
 * should be placed here. Jwt token is stored in a cookie.
 */
export class Principal {
    id: number | null = null;
    username: string = '';
    email: string = '';
    roles: Array<string> = new Array();

    /**
     * Converts a plain Javascript object into a Principal object,
     * with same data.
     * 
     * @param data Principal in plain Javascript object
     * @returns An Object of type Principal with fields initialized with 
     * passed data.
     */
    static fromData(data: Principal): Principal {
        const principal = new Principal();
        principal.id = data.id;
        principal.username = data.username;
        principal.email = data.email;
        principal.roles = data.roles;

        return principal;
    }
}