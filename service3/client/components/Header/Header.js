import React, { useContext } from 'react';
import { ReviewsContext } from '../../ReviewsContext';
import { HeaderContainer } from './HeaderStyles.css';
import StarAverage from './StarAverage';

const Header = (props) => {
  const { average } = useContext(ReviewsContext);

  return (
    <HeaderContainer>
      <div className='container'>
        <StarAverage average={average} size={'35px'} />
        <h1>{Math.round(average * 100) / 100}/5</h1>
      </div>
    </HeaderContainer>
  )

}

export default Header;