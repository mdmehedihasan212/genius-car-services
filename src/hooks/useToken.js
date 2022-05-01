import axios from "axios";

const { useState, useEffect } = require("react")

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const getToken = async () => {
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://afternoon-lowlands-28127.herokuapp.com/login', { email });
                setToken(data.token);
                localStorage.setItem('accessToken', data.token);
            }
        }
        getToken();
    }, [user])
    return [token];
}

export default useToken;