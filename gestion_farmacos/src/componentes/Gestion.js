import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Badge,
  Button,
  Input,
} from "reactstrap";
import { FARMACOS } from "./datos";
import { Toast } from "reactstrap";
import { ToastHeader } from "reactstrap";
import { ToastBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Gestion(props) {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            <div className="d-flex justify-content-between p-3 m-5">
              <Toast className="bg-info">
                <ToastHeader>Medicamentos incluidos</ToastHeader>
                <ToastBody>
                  <Input />
                  <Button color="info" onClick={toggle}>
                    Add
                  </Button>
                  <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggle}>
                        Do Something
                      </Button>{" "}
                      <Button color="secondary" onClick={toggle}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                  <Button color="info">Clean</Button>
                </ToastBody>
              </Toast>
              <Toast className="bg-danger">
                <ToastHeader>Medicamentos excluidos</ToastHeader>
                <ToastBody>
                  <Input />
                  <Button color="danger" onClick={toggle}>
                    Add
                  </Button>
                  <Modal isOpen={modal} toggle={toggle} {...args}>
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggle}>
                        Do Something
                      </Button>{" "}
                      <Button color="secondary" onClick={toggle}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                  <Button color="danger">Clean</Button>
                </ToastBody>
              </Toast>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Gestion;
