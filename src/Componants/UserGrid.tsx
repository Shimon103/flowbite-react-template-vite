import Card from "./Card";
import { User } from "../types/TUsers";

interface UsersGridProps {
  users: User[];
}

function UsersGrid({ users }: UsersGridProps) {
  return (
    <div className="m-4 grid grid-cols-1 gap-4 md:grid-cols-3">
      {users.map((user) => (
        <Card key={user._id} prop={user} />
      ))}
    </div>
  );
}

export default UsersGrid;
