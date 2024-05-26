import React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes, css } from 'styled-components';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

type StarProps = {
  top: number;
  left: number;
  size: number;
  isShine: boolean;
  duration: number;
  fromOpacity: number;
};

const generateShineKeyframes = (fromOpacity: number) => keyframes`
  from {
    opacity: ${fromOpacity};
  }
  to {
    opacity: 1;
  }
`;

const Star = styled.div<StarProps>`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: white;
  border-radius: 50%;
  animation: ${({ isShine, duration, fromOpacity }) =>
    isShine ? css`${generateShineKeyframes(fromOpacity)} ${duration}s infinite alternate` : 'none'};
`;

const createStars = () => {
  const stars: StarProps[] = [];
  for (let i = 0; i < 100; i++) {
    stars.push({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.floor(Math.random() * 4) + 1,
      isShine: true,
      duration: Math.random() * 2 + 1, // 1秒から3秒の間でランダムに設定
      fromOpacity: Math.random() * 2, // 0.5から1の間でランダムに設定
    });
  }

  return (
    <>
      {stars.map((star, index) => (
        <Star
          key={index}
          top={star.top}
          left={star.left}
          size={star.size}
          isShine={star.isShine}
          duration={star.duration}
          fromOpacity={star.fromOpacity}
        />
      ))}
    </>
  );
};



ReactDOM.render(
  <React.StrictMode>
    {createStars()}
    <App />
  </React.StrictMode>
  ,document.getElementById('root') as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
