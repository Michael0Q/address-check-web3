import {lazy, useEffect, useState, CSSProperties, ChangeEventHandler, useRef, Suspense} from 'react';
import './App.css';
import {styled} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Transaction, sampleTransactions } from './Web3TypeOf';
import {Loading} from './comp/Loading'
const TransactionViewer =  lazy(() => delayForDemo(import('./comp/TransactionViewer')))
const delayForDemo = (promise : any) => {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  }).then(() => promise);
}
type AppDisplay = 
| 'Home'
| 'Result';

const App = () => {

  const sumpleMap = new Map();
  sumpleMap.set('A', 10);
  sumpleMap.set('B', 20);
  sumpleMap.set('C', 30);
  sumpleMap.set('D', 40);

  const getTransactions : any = async (address : string) => {

    const URI = 'https://api.etherscan.io/api'.concat(
      '?module=account',
      '&action=txlist',
      `&address=${address}`,
      '&startblock=0',
      '&endblock=99999999',
      '&page=1',
      '&sort=asc',
      '&apikey=31EDPSECNKMS7RNDMM8HSIBXHVBUIHSDVN',
    ); 
    return fetch(URI)
      .then(e => e.json())
      .then(e => e.result);
  } 

/* State-START */
  const [canEnter, setCanEnter] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  const [display, setDisplay] = useState<AppDisplay>('Home');
  const [isLoding, setIsLoding] = useState<boolean>(false);
  const meteoRef = useRef<HTMLDivElement | null>(null);
  const transactionMap = useRef<Map<string, number>>(sumpleMap);

  useEffect(() => {
    setCanEnter(address.length != 0 && isValidAddress(address));
  }, [address]);

  useEffect(() => {
    if(window.onclick === null){
      window.addEventListener('click', createMeteo);
    }
  }, []);

  const createMeteo = () => {
    const meteoElement = document.createElement('div');
    meteoElement.classList.add('meteo');
    meteoElement.style.left = `${Math.random() * 100}%`;
    meteoElement.addEventListener('animationend', () => {
      meteoElement.remove();
    });
    meteoRef.current?.appendChild(meteoElement);
  };

  const isValidAddress = (address : string) : boolean => {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
}

  /**
   * 【サブミット処理】
   * 入力されたアドレスからEthscanAPIにてTransactionsを取得し
   * アドレス別の総取引量を算出する。
   * @param e 
   */
  const submit = async (e : any) => {
    if(canEnter && e.key === 'Enter'){
      const result : Transaction = await getTransactions(address);
      const map = new Map<string, number>();
      result.map((e) => {
        const key = e.from === address ? e.to : e.from;
        const txValue : number = Number.parseInt(e.value) / 1e18;
        if(map.has(key)){
          map.set(key, txValue + (map.get(key) as number));
        }else{
          map.set(key, txValue);
        }
      });
      transactionMap.current = new Map([...map].sort((a, b) => b[1] - a[1]));
      setDisplay('Result');
    }
  }

  const handleAddress : ChangeEventHandler<HTMLInputElement>  = (e) => {
    setAddress(e.target.value);
    createMeteo();
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
          <TransactionViewer transactionMap={transactionMap.current}/>
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
