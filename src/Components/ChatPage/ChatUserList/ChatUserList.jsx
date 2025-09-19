import { NavLink } from 'react-router-dom';

const ChatUserList = (props) => {
    // Формируем путь до конкретного чата по id пользователя
    const path = '/chatPage/' + props.id;

    return (
        <div>
            {/* Аватар пользователя */}
            <div><img src={props.photoUrl} /></div>

            {/* Имя пользователя как ссылка на чат с ним */}
            <div>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default ChatUserList;