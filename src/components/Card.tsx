import { Robot } from "../containers/App";

const Card = (robots: Robot) => {
    const { id, name, email } = robots;
    const robotAPIlink = 'https://robohash.org/'
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 tc shadow-5'>
            <img src={`${robotAPIlink}${id}`} alt={name} className='img' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;