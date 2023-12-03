import { Robot } from '../containers/App';
import Card from './Card';

type robotProps = {
    robots: Robot[]
}

const CardList = ({robots}: robotProps) => {
    const cardArr = robots.map((user,i) => {
        return <Card key={i} 
                    id={user.id} 
                    name={user.name} 
                    username={user.username} 
                    email={user.email} />
    })

    return (
        <div>
            {cardArr}
        </div>
    )
}

export default CardList;