import React from 'react';
import ReactDOM from 'react-dom';
import ReviewPage from './components/ReviewPage';;
import { ReviewsContextProvider } from './ReviewsContext';
import { GlobalStyle } from './global.styles.css';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <ReviewsContextProvider>
        <ReviewPage />
      </ReviewsContextProvider>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('reviews'));