import { mockData } from '../constants/mockData';

export const Feed = () => {
    return(
        mockData.map(item => {
            <div className='wrapper'>
                <div className="lleft">
                    {item.img}
                </div>
                <div className="rright">
                    <p>{item.author}</p>
                    <p>{item.text}</p>
                </div>
            </div>
        })
    )
}