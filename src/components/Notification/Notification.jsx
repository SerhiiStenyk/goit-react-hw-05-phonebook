import React from 'react';
import s from './Notification.module.css';

const Notification = () => (
        <div className={s.alert}>
            <p className={s.text}>Contact already exist!</p>
        </div>
    );

export default Notification;