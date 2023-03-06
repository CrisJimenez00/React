import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FARMACOS } from "./componentes/datos.js";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Alert,
  Button,
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  UncontrolledAccordion,
} from "reactstrap";

const VentanaModalDiccionario = (props) => {
  const [farmaco, setFarmaco] = React.useState("");
  const [filtro, setFiltro] = React.useState("");
  const { className } = props;

  const handleChange = (event) => {
    setFarmaco(event.target.value);
  };

  const handleFiltro = (event) => {
    setFiltro(event.target.value);
  };

  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className}>
        <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
        <ModalBody>
          <FormGroup row>
            <Label sm={2}> Filtrar: </Label>
            <Col sm={10}>
              <Input
                onChange={handleFiltro}
                id="filtro"
                name="filtro"
                type="Text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input
                onChange={handleChange}
                onClick={handleChange}
                id="selectMulti"
                name="selectMulti"
                type="select"
              >
                {FARMACOS.map((value, index) => {
                  if (filtro !== "") {
                    if (
                      value.descATC.toLowerCase().includes(filtro.toLowerCase())
                    ) {
                      return (
                        <option
                          key={index}
                          value={value.codATC + "|" + value.descATC}
                        >
                          {value.codATC + "|" + value.descATC}
                        </option>
                      );
                    }
                  } else {
                    return (
                      <option
                        key={index}
                        value={value.codATC + "|" + value.descATC}
                      >
                        {value.codATC + "|" + value.descATC}
                      </option>
                    );
                  }
                })}
              </Input>
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          {farmaco === "" ? "ELIGE UN FÁRMACO" : farmaco}
          <Button
            color="primary"
            onClick={() => {
              let datos = farmaco.split("|");
              setFiltro("");
              setFarmaco("");
              if (props.excluir) {
                datos.push("EXCLUIR");
              }
              props.add(datos);
            }}
          >
            {props.aceptar}
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ModalFooter>
      </Modal>
    </div>
  );
};

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      rxseleccionar: "",
      rxenmascarar: "",
      diccionario: "FÁRMACO",
      excluir: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  add(datos) {
    this.toggleModal();
    if (datos[2] === "EXCLUIR") {
      if (this.state.rxenmascarar === "") {
        this.setState({ rxenmascarar: datos[0] });
        return;
      }
      this.setState({
        rxenmascarar: this.state.rxenmascarar + ", " + datos[0],
      });
    } else {
      if (this.state.rxseleccionar === "") {
        this.setState({ rxseleccionar: datos[0] });
        return;
      }
      this.setState({
        rxseleccionar: this.state.rxseleccionar + ", " + datos[0],
      });
    }
  }

  setIsOpen(d) {
    if (d === undefined) return;
    this.setState({ isOpen: d });
  }

  toggleModal() {
    this.setIsOpen(!this.state.isOpen);
  }

  render() {
    return (
      <>
        <div>
          <UncontrolledAccordion defaultOpen={["1"]} stayOpen>
            <AccordionItem>
              <AccordionHeader targetId="1">
                GESTION DE FARMACOS
              </AccordionHeader>
              <AccordionBody accordionId="1">
                <Row>
                  <Col>
                    <Alert color="info">
                      Incluir X Medicamentos:
                      <Input
                        type="textarea"
                        name="rxseleccionar"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.rxseleccionar}
                      />
                      <Button
                        onClick={() => {
                          this.setState({ excluir: false });
                          this.toggleModal();
                        }}
                        color="info"
                      >
                        Add
                      </Button>{" "}
                      <Button
                        color="info"
                        onClick={() => {
                          this.setState({ rxseleccionar: "" });
                        }}
                      >
                        Clear
                      </Button>
                    </Alert>
                  </Col>
                  <Col>
                    <Alert color="danger">
                      Excluir X Medicamentos:
                      <Input
                        type="textarea"
                        name="rxenmascarar"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.rxenmascarar}
                      />
                      <Button
                        onClick={() => {
                          this.setState({ excluir: true });
                          this.toggleModal();
                        }}
                        color="danger"
                      >
                        Add
                      </Button>{" "}
                      <Button
                        color="danger"
                        onClick={() => {
                          this.setState({ rxenmascarar: "" });
                        }}
                      >
                        Clear
                      </Button>
                    </Alert>
                  </Col>
                </Row>
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
        </div>
        <VentanaModalDiccionario
          diccionario={this.state.diccionario}
          add={(datos) => this.add(datos)}
          mostrar={this.state.isOpen}
          aceptar={"Añadir"}
          toggle={() => this.toggleModal()}
          titulo={"ADD " + this.state.diccionario}
          excluir={this.state.excluir}
        />

        <br />
      </>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filter />
      </div>
    );
  }
}

export default App;
