import React, { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import './Notification.css';
import Modal from 'react-bootstrap/Modal';

interface NotificationProps {
    quantity: number;
}

const Notification: React.FC<NotificationProps> = ({ quantity }) => {

    return (        
        <Modal.Dialog className='notificationContainer'>
            <Modal.Header>
                <Modal.Title>Success</Modal.Title>
            </Modal.Header>
            <Modal.Body className='m-4'>
                <p>{`Added ${quantity} starship(s) to your basket!`}</p>
            </Modal.Body>
      </Modal.Dialog>
    );
};

export default Notification