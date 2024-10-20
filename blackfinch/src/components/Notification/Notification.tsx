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
            <Modal.Body className='m-2 notificationBody'>
            {cartItemDetails.map((item: any) => (
                <div className='modalBodyText'>
                    <span className='me-2'>{'Added '}</span>
                    <span className='fw-bolder me-2'>{`${item.qty}`}</span>
                    <span className='me-2'>{'of '}</span>
                    <span className='fw-bolder text-uppercase me-2'>{`${item.ship}`}</span>
                    <span>{'to your basket!'}</span>
                </div>
                ))}
            </Modal.Body>
      </Modal.Dialog>
    );
};

export default Notification