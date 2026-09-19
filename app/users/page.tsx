import UserCard from "../components/UserCard/UserCard";


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
    return (
        <div>
            {
                users.map(user=> <UserCard key={user.id} user={user} />)
            }
        </div>
    );
};

export default UsersPage;