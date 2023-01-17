import React from "react";
import messagesList from "../data/messagesList";
import { READ, UNREAD } from "../constants";
import PropTypes from 'prop-types';

import readIcon from '../icons/read.svg';
import unreadIcon from '../icons/unread.svg';

function Email({ messages, setMessageStatus }) {
    return (
        <div className="messages-list">
            <ul>
                {messagesList.map((message) => (
                    <li key={message.id}>
                        <p className="email-title">{message.title}</p>
                        <div className="button">
                            <button
                                type="button"
                                title="Marcar como lida"
                                onClick={ () => setMessageStatus(message.id, READ) }
                            >
                                <img src={ readIcon } alt="" />
                            </button>
                            <button
                                type="button"
                                title="Marcar como não lida"
                                onClick={ () => setMessageStatus(message.id, UNREAD) }
                            >
                                <img src={ unreadIcon } alt="" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

Email.propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        status: PropTypes.number,
      }),
    ).isRequired,
    setMessageStatus: PropTypes.func.isRequired,
  };
  

export default Email;