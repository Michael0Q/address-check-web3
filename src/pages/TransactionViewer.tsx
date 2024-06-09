import styled from "styled-components";
import { useState } from "react";
import { Transactions } from "../component/transactionviewer/Transactions";
import { useSelector } from "react-redux";
import { Transaction, TransactionMap } from "../context/type/Web3TypeOf";
import { RootState } from "../redux/store";

export const TransactionViewer = () => {
    const trn : TransactionMap[] = useSelector((state : RootState) => state.trnsaction.val);
    const [currentItem, setCurrentItem] = useState(0);

    const next = () => {
        setCurrentItem((n) => trn.length == n + 1 ? n : n + 1);
    }

    const back = () => {
        setCurrentItem(n => n == 0 ? n : n - 1);
    }
    return(
        <>
            <BackButton visible={currentItem == 0} onClick={back}>戻る</BackButton>
            <NextButton visible={currentItem + 1 == trn.length} onClick={next} >次へ</NextButton>
            <Frame transform={currentItem} id='tx-viewer'>
                {trn.map((e : any, index: number)=> {
                    return(
                        <Transactions  txMap={e} isLastTrn={index + 1 == trn.length}/>
                    );
                })}
            </Frame>
        </>
    );
}

const Frame = styled.div<{transform : number}>`
    height: 600px;
    width: 100vw;
    padding-top: 150px;
    margin-left: 20px;
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    white-space: nowrap;
    overflow: visible;
    transform: ${({ transform }) => {
        return `translate3d(${-500 * transform}px, 0, 0)`;
    }};
    transition: 1s
`
const NextButton = styled.div<{visible : boolean}>`
    position: fixed;
    background-color: aliceblue;
    top: 50%;
    right: 0%;
    height: 100px;
    width: 100px;
    z-index: 100;
    visibility: ${({visible}) => visible? 'hidden' : 'visible'} ;
`

const BackButton = styled(NextButton)`
    top: 50%;
    left: 0%;
    z-index: 100;
    visibility: ${({visible}) => visible? 'hidden' : 'visible'} ;
`

export default TransactionViewer