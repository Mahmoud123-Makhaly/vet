'use client';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

interface IModalMaker {
  isOpen: boolean;
  toggle: () => void;
  children?: React.ReactNode;
}
const ModalMaker = (props: IModalMaker) => {
  const { toggle, isOpen, children } = props;

  return (
    <div>
      <Modal centered isOpen={isOpen} toggle={toggle}>
        {children}
      </Modal>
    </div>
  );
};

export default ModalMaker;
