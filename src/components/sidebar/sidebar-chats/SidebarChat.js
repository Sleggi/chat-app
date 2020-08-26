import React, { useEffect, useState } from 'react'
import './sidebar-chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete'
import db from '../../../firebase';
import { Link } from 'react-router-dom'



function SidebarChat({ addNewChat, id, name }) {
    const [seed, setSeed] = useState('')
    const [messages, setMessages] = useState('')



    useEffect(() => {
        if (id) {
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc')
                .onSnapshot(snapshot => (setMessages(snapshot.docs.map(doc => doc.data()))))
        }
    }, [id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const createChat = () => {
        const roomName = prompt('Введите название чата');

        if (roomName) {
            // adding new room in our database rooms collection
            db.collection('rooms').add({
                name: roomName,
            })

        }
    }

    const deleteChat = () => {
        const deleteRoom = window.confirm('Удалить чат ?')
        if (deleteRoom) {
            db.collection('rooms').doc(id).delete()
        }
    }


    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <div className="sidebarChat__infoText">
                        <h2>{name}</h2>
                        <p>{messages[0]?.message}</p>
                    </div>
                    <IconButton onClick={deleteChat}>
                        <DeleteIcon />
                    </IconButton>
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
