import React, { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import './Notification.css';
import Modal from 'react-bootstrap/Modal';

interface NotificationProps {
    cartItemDetails: any;
}

const Notification: React.FC<NotificationProps> = ({ cartItemDetails}) => {



    return (        
        <Modal.Dialog className='notificationContainer'>
            <Modal.Header className='notificationHeader ms-2'>
                <Modal.Title>Success</Modal.Title>
            </Modal.Header>
            <Modal.Body className='m-4 notificationBody'>
            {cartItemDetails.map((item: any) => (
                <>
                    <p>{'Added '}</p>
                    <p className='mx-2 fw-bolder'>{`${item.qty}`}</p>
                    <p>{'of '}</p>
                    <p className='mx-2 fw-bolder text-uppercase'>{`${item.ship}`}</p>
                    <p>{'to your basket!'}</p>
                </>
                ))}
            </Modal.Body>
      </Modal.Dialog>
    );
};

export default Notification