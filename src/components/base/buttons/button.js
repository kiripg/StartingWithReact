
import ButtonStyled from './button.styled';


function MyButton({ messageWhenReached, count, handleClick, showMessage }) {

  
 


  return (
    <><ButtonStyled.Container onClick={handleClick} className='Button'>
      <ButtonStyled.Text>You clicked {count} times</ButtonStyled.Text>
    </ButtonStyled.Container>
    {showMessage && <p>{messageWhenReached}</p>}
    </>
     
  );
}



export default MyButton;  