
import ButtonStyled from './button.styled';
import { Link } from 'react-router-dom';

 

function MyButton({count, handleClick, showButton }) {


  return (
    <><ButtonStyled.Container onClick={handleClick} className='Button'>
      <ButtonStyled.Text>You clicked {count} times</ButtonStyled.Text>
    </ButtonStyled.Container>
    {showButton && ( <Link to={`/Page2/${count}`}><ButtonStyled.Container>
          <ButtonStyled.Text>Go to Page 2</ButtonStyled.Text>
          </ButtonStyled.Container>
        </Link>)}
    </>
     
  );
}



export default MyButton;  