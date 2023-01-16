import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavLink,
    Button,
} from 'reactstrap';
export default function Menu(props) {

    let colorUno = 'secondary'
    let colorDos = 'secondary'
    let colorTres = 'secondary'
    switch (props.menuItem) {
        case 'UNO':
            colorUno = 'primary'
            break;
        case 'DOS':
            colorDos = 'primary'
            break;
        case 'TRES':
            colorTres = 'primary'
            break;
    }
    return (
        <div>
            <Navbar>
                <NavbarBrand href="/">MYFPSCHOOL</NavbarBrand>
                <NavLink>
                    <Button color={colorUno} onClick={()=>props.changeMenu("UNO")} >UNO</Button>{" "}
                    <Button color={colorDos} onClick={()=>props.changeMenu("DOS")} >DOS</Button>{" "}
                    <Button color={colorTres} onClick={()=>props.changeMenu("TRES")} >TRES</Button>
                </NavLink>
            </Navbar>
        </div>
    );
}