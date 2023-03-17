const fetchMembers = async (setMembers) => {
    try {
        const response = await fetch(process.env.REACT_APP_GET_MEMBERS_URL);
        const json = await response.json();
        const members = json.filter((item) => item.marathon.indexOf(16) >= 0); //16

        setMembers(members);
    } catch (error) {
        console.log("Error members: ", error);
    }
};

export default fetchMembers;