import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, AttachFile } from '@material-ui/icons'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import db from '../../firebase'


function Chat() {
    const [input, setInput] = useState('')
    const [seed, setSeed] = useState('')
    const { roomId } = useParams()
    const [roomName, setRoomName] = useState('')



    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) =>
                setRoomName(snapshot.data().name)
            )
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage = (e) => {
        e.preventDefault()
        console.log(input)
        setInput('')
    }

    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">

                <p className={`chat__message ${true && `chat__reciever`}`}>
                    <span className='chat__name'>Pop</span>
                Hey
                <span className='chat__timeStamp'>3:50pm</span>
                </p>
                <p className="chat__message">Hey</p>
                <p className="chat__message">Hey</p>
            </div>
            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type='text' placeholder='Type a message' />
                    <button type='submit' onClick={sendMessage}></button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
