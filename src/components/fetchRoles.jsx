const fetchRoles = async (setRoles) => {
    try {
        const response = await fetch(process.env.REACT_APP_GET_ROLES_URL);
        const json = await response.json();
        const listRoles = [];

        json.forEach(item => {
            listRoles[item.id] = item.name
        });

        setRoles(listRoles);
    } catch (error) {
        console.log("error roles", error);
    }
};

export default fetchRoles;