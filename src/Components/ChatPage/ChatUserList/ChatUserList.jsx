import { NavLink } from 'react-router-dom';

const ChatUserList = (props) => {
    // формируем путь с id
    const path = '/chatPage/' + props.id;

    return (
        <div>
            <img src={props.photoUrl} />
            <div>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default ChatUserList;