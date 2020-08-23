import React, { useEffect, useState } from 'react'
import './sidebar-chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import db from '../../../firebase';
import { Link } from 'react-router-dom'

function SidebarChat({ addNewChat, id, name }) {
    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const createChat = () => {
        const roomName = prompt('Enter name of the chat');

        if (roomName) {
            // adding new room in our database rooms collection
            db.collection('rooms').add({
                name: roomName,

            })

        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>Last mesage...</p>
                </div>
            </div>
        </Link>
    ) : (

            <div className="sidebarChat_add">
                <IconButton onClick={createChat}>
                    <AddIcon />
                </IconButton>
            </div>


        )
}

export default SidebarChat
