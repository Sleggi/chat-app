import React, { useEffect, useState } from 'react'
import './sidebar-chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';


function SidebarChat({ addNewChat }) {
    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const createChat = () => {
        const roomName = prompt('Enter name of the chat');

        if (roomName) {
            // do some in database
        }
    }

    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last mesage...</p>
            </div>
        </div>
    ) : (

            <div className="sidebarChat_add">
                <IconButton onClick={createChat}>
                    <AddIcon />
                </IconButton>
            </div>


        )
}

export default SidebarChat
