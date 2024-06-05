import {lazy, useEffect, useState, CSSProperties, ChangeEventHandler, useRef, Suspense} from 'react';
import './App.css';
import {styled} from 'styled-components';
import {Loading} from './component/Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch, useAppSelector } from './utils/useRedux';
import { renewTrn } from './redux/slices/trnSlice';
import { isValidAddress } from './utils/web3Utils'; 
import { createMeteo } from './utils/utils';
const TransactionViewer =  lazy(() => delayForDemo(import('./pages/TransactionViewer')))

const delayForDemo = (promise : any) => {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  }).then(() => promise);
}

type AppDisplay = 
| 'Home'
| 'Result';

const App = () => {

  const dispatch = useAppDispatch();

/* State-START */
  const [canEnter, setCanEnter] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  const [display, setDisplay] = useState<AppDisplay>('Result');
  const meteoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setCanEnter(address.length != 0 && isValidAddress(address));
  }, [address]);

  useEffect(() => {
    if(window.onclick === null){
      window.addEventListener('click', () => createMeteo(meteoRef));
    }
  }, []);

  /**
   * 【サブミット処理】
   * 入力されたアドレスからEthscanAPIにてTransactionsを取得し
   * アドレス別の総取引量を算出する。
   * @param e 
   */
  const submit = async (e : any) => {
    if(canEnter && e.key === 'Enter'){
      dispatch(renewTrn(address));
      setDisplay('Result');
    }
  }

  const handleAddress : ChangeEventHandler<HTMLInputElement>  = (e) => {
    setAddress(e.target.value);
    createMeteo(meteoRef);
  }

  console.log('app.jsx render!');
  return (
    <>
      {display === 'Home' && 
        <>
          <div className='meteo-fall-area' ref={meteoRef}></div>
          <NoticeMessage visible={canEnter}><span style={{color : 'green'}}>Let's Enter</span></NoticeMessage>      
          <NoticeMessage visible={address.length != 0 && !canEnter}><span style={{color : 'red'}}>It's not address</span></NoticeMessage>
          <InputAddressFlame onKeyDown={submit}>
            <FontAwesomeIcon style={faSearchStyle} icon={faMagnifyingGlassArrowRight} size='2x' color={canEnter ? 'green' : 'grey'} fade={canEnter}  />
            <InputAddressArea typeof='text' onChange={handleAddress}></InputAddressArea>
          </InputAddressFlame>
        </>
      }
      {display === 'Result' &&
        <Suspense fallback={<Loading/>}>
          <TransactionViewer />
        </Suspense>
      }
    </>
  );
}

const NoticeMessage = styled.div<{visible:boolean}>`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  height: 40px;
  width: 100%;
  font-size: 50px;
  margin: 0 auto;
  text-align: center;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: opacity 1s ease;
`
const InputAddressFlame = styled.div`
    position: relative;
    margin: 230px auto;
    width: 450px;
`
const InputAddressArea = styled.input`
  height: 30px;
  width: 100%;
  margin: 0 auto;
  display: block;
`
const faSearchStyle : CSSProperties = {
  'position': 'absolute',
  'right' : '0px',
  'marginTop' :'2px'
}

export default App;
