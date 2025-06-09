import { Avatar, Card } from "flowbite-react";

type UserCardsProps = {
    id: number;
    name: string;
    image: string;
    description: string
}

function UserCards(UserCardsProps: UserCardsProps) {
    const [id, name, image, description] = UserCardsProps
    return (<Card href={id} className="max-w-sm">
        <img src={image} alt="go go pwoer rangers" />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
        </p>
    </Card>)
}

export default UserCards