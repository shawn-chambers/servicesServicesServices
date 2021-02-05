import React, { useContext } from 'react';
import { ReviewsContext } from '../../ReviewsContext';
import { HeaderContainer } from './HeaderStyles.css';
import StarAverage from './StarAverage';

const Header = (props) => {
  const { average } = useContext(ReviewsContext);

  return (
    <HeaderContainer>
      <div className='container'>
        <h1>{Math.round(average * 100)/100}</h1>
        <StarAverage average={average} size={'35px'}/>
      </div>
    </HeaderContainer>
  )

}

export default Header;