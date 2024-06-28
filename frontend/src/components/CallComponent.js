import React, { useState } from 'react';
import axios from 'axios';

const CallComponent = () => {
    const [roomUrl, setRoomUrl] = useState('');

    const createRoom = () => {
        axios.post('http://localhost:5000/create-room')
        .then(response => {
            setRoomUrl(response.data.url);
        })
        .catch(error => {
            console.error('Error creating room:', error);
        });
    };

    return (
        <div>
            <h1>Start a Call</h1>
            <button onClick={createRoom}>Create Room</button>
            {roomUrl && (
                <div>
                    <h2>Room URL</h2>
                    <a href={roomUrl} target="_blank" rel="noopener noreferrer">{roomUrl}</a>
                </div>
            )}
        </div>
    );
};

export default CallComponent;
