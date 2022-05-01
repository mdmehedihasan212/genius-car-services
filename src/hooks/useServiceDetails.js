import { useEffect, useState } from "react";

const useServiceDetails = serviceId => {
    const [services, setServices] = useState({});

    useEffect(() => {
        const url = `https://afternoon-lowlands-28127.herokuapp.com/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [serviceId])
    return [services, setServices];
}

export default useServiceDetails;