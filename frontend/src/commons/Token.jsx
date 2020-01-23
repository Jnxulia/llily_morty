const TOKEN_KEY = 'jwt';

export const login = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
}

export const LogOut = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }
}
export const headerRequest =()=> {
    return {
        headers: { 'Content-Type': 'application/json' ,
                    'jwt' : localStorage.getItem(TOKEN_KEY)
                }
      }
};   
