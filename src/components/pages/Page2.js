import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../App.css';
import ButtonStyled from '../base/buttons/button.styled';


export default function Page2() {

    const navigate = useNavigate();
    const {count}= useParams();
    const handleGoBack=()=>{
        navigate("/");
    }

    return (

        <><p>This is the page {count}!!</p>
            <ButtonStyled.Container onClick={handleGoBack}>
                <ButtonStyled.Text>Go Back!</ButtonStyled.Text>
            </ButtonStyled.Container></>

    );
 

}

