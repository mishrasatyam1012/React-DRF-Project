import React from 'react'
import Button from './Button';

const Main = () => {
  return (
    <>
      <div className="main container-lg text-light  ">
        <div className="text-center pt-5  bg-light-dark">
          <h1>Stock Prediction App</h1>
          <p className='p-3 lead'>
            This stock prediction application utilizes machine learning
            techniques, specifically employing Keras, TensorFlow, and LSTM
            models, integrated within the Django framework. It forecasts future
            stock prices by analyzing 100-day and 200-day moving averages,
            essential indicators widely used by stock analysts to inform trading
            and investment decisions.
          </p>
          <Button value="Login Now" type="info" />
        </div>
      </div>
    </>
  );
}

export default Main