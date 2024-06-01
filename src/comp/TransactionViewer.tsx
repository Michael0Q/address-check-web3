import styled from "styled-components";
import { Transactions } from "./Transactions";
import { useRef, useState } from "react";
import { Transaction, sampleTransactions } from '../Web3TypeOf';


const getTransactions : any = async (address : string) => {

    const URI = 'https://api.etherscan.io/api'.concat(
        '?module=account',
        '&action=txlist',
        `&address=${address}`,
        '&startblock=0',
        '&endblock=99999999',
        '&page=1',
        '&offset=10',
        '&sort=asc',
        '&apikey=31EDPSECNKMS7RNDMM8HSIBXHVBUIHSDVN',
    ); 
    return fetch(URI)
        .then(e => e.json())
        .then(e => e.result);
    } 

export const TransactionViewer = (props : {txArray : Map<string, number>[], handleTxData : (txMap : Map<string, number>) => {}}) => {
    const {txArray, handleTxData} = props
    const [currentItem, setCurrentItem] = useState(0);
    
    const next = () => {
        setCurrentItem(n => txArray.length == (currentItem + 1) * 2 ? 0 : n + 1);
    }
    const back = () => {
        setCurrentItem(n => currentItem == 0 ? 0 : n - 1);
    }

    const expandTx = async (address: string) => {
        console.log('expandTxed');
        const result : Transaction = await getTransactions(address);
        const map = new Map<string, number>();
        result.map((e, index) => {
            console.log(index);
            const key = e.from === address ? e.to : e.from;
            const txValue : number = Number.parseInt(e.value) / 1e18;
            if(map.has(key)){
                map.set(key, txValue + (map.get(key) as number));
            }else{
                map.set(key, txValue);
            }
        });
        handleTxData(map);
    }
    return(
        <>
            <BackButton onClick={back}>戻る</BackButton>
            <NextButton onClick={txArray.length == currentItem * 2 ? () => {} : next} >次へ</NextButton>
            <Frame transform={currentItem} dataLength={txArray.length} id='tx-viewer'>
                {txArray.map((e, index)=> {
                    return(
                        <Transactions onClick={expandTx} txMap={e}/>
                    );
                })}
            </Frame>
        </>
    )
}

const Frame = styled.div<{transform : number, dataLength : number}>`
    height: 600px;
    width: 100vw;
    padding-top: 150px;
    margin-left: 20px;
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    white-space: nowrap;
    overflow: visible;
    transform: ${({ transform, dataLength }) => {
        if(dataLength % 2 == 0){
            return dataLength == transform * 2 ? '' : `translate3d(${-1000 * transform}px, 0, 0)`;
        }
    }};
    transition: 1s
`
const NextButton = styled.div`
    position: fixed;
    background-color: aliceblue;
    top: 0%;
    left: 20%;
    height: 100px;
    width: 100px;
    z-index: 100;
`

const BackButton = styled(NextButton)`
    top: 0%;
    left: 0%;
    z-index: 100;
`

export default TransactionViewer