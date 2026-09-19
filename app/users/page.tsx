

const userFetch = async()=>{
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        return res.json();
    } catch (error) {
        throw new Error(`${error} found`);
    }
}


const UsersPage = async() => {
    const users = await userFetch();

    console.log(users);
    return (
        <div>
            
        </div>
    );
};

export default UsersPage;