import { Card, CardImg, CardText, CardBody } from "reactstrap";

const Flashcard = (props) => {
  return (
    <div>
      <div class="row">
        <div class="col-md-10 col-lg-6">
          <Card>
            <h1 className="display-3">{props.titulo}</h1>
            <div class="row">
              <div class="col-md-8 col-lg-4">
                <CardImg top width="100%" src={props.imagen}></CardImg>
              </div>
            </div>
            <CardBody>
              <CardText>{props.texto}</CardText>
            </CardBody>
          </Card>
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
