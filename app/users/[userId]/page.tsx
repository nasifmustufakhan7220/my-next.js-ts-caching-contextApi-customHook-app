import IUserType from "@/types/users";

export const generateStaticParams = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: IUserType[] = await res.json();

    return users.slice(0,3).map(user=> ({userId: user.id.toString()}));
}

interface IParamsProps {
    params: Promise<{userId: string}>
}

const UserDetailsPage = async({params}:IParamsProps) => {

    const {userId} = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    const user: IUserType = await res.json();
    const {username, address, company, phone} = user;
    return (
        <div className="border-2 border-amber-300 p-4">
            <h1>{username}</h1>
            <p>{address.city}</p>
            <p>{company.name}</p>
            <p>{phone}</p>
        </div>
    );
};

export default UserDetailsPage;