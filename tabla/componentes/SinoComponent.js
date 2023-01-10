import React from "react";
import { Card, CardImg, CardBody, Button } from "reactstrap";
const Sino = (props) => {
  return (
    <div>
      <Card>
        <h1 className="display-3">{props.titulo}</h1>
        <div class="row">
          <div class="col-md-4 col-lg-2">
            <CardImg top with="100%" src={props.imagen} alt={props.imagencap} />
          </div>
        </div>

        <CardBody>
          <Button>YES</Button>
          &nbsp;
          <Button>NO</Button>
        </CardBody>
      </Card>
    </div>
  );
};
export default Sino;
