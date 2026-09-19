import IUserType from "@/.next/types/user";

interface IUserProps{
    user: IUserType
}

const UserCard = ({user}:IUserProps) => {
    const {name} = user;


  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Show Details</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
