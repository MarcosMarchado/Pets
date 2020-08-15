export const TOKEN_KEY = "@pets-Token";
// export const isAuthenticated = () => {
//     console.log("batata")
//     return localStorage.getItem(TOKEN_KEY) !== null
// }
export const getToken = () => localStorage.getItem(TOKEN_KEY) || false;

export const login = (token: string) => localStorage.setItem(TOKEN_KEY, token);

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};