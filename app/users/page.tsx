import IUserType from "@/types/users";
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
    const users: IUserType[] = await userFetch();
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {
                users.map(user=> <UserCard key={user.id} user={user} />)
            }
        </div>
    );
};

export default UsersPage;