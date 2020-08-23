import React, { useState, useEffect } from 'react';
import './sidebar.css';
import SidebarChat from './sidebar-chats/SidebarChat'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { SearchOutlined } from '@material-ui/icons'
import db from '../../firebase';


const Sidebar = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        // go to database 'rooms' coolection. on any change of snapshot(like screenshot)onSnapshot works in realtime (updating, deleting)
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            // docs referenig to the list of elements in the database
            setRooms(snapshot.docs.map(doc => (
                // we creating our on objects
                ({
                    id: doc.id, // doc.id is the id of document in firebase database
                    data: doc.data(),
                })
            )))
        ))

        // clean up function, whenever the component unmounts we call unsubscribe and 
        // it's deattach this realtime listener after it's done using it
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__headerLeft">
                    <Avatar />
                    <h2>Name</h2>
                </div>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchConteiner">
                    <SearchOutlined />
                    <input placeholder='Search' type="text" />
                </div>

            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;