import styled from "styled-components";
import { useRef, useState } from "react";
import { Transactions } from "../component/transactionviewer/Transactions";
import { useSelector } from "react-redux";

export const TransactionViewer = () => {
    const trn = useSelector((state : any) => state.trnsaction.trn);
    const [currentItem, setCurrentItem] = useState(0);

    const next = () => {
        setCurrentItem((n) => trn.length == n + 1 ? n : n + 1);
    }
    const back = () => {
        setCurrentItem(n => n + 1 == 0 ? n : n - 1);
    }

    return(
        <>
            <BackButton onClick={back}>戻る</BackButton>
            <NextButton onClick={next} >次へ</NextButton>
            <Frame transform={currentItem} dataLength={trn.length} id='tx-viewer'>
                {trn.map((e : any)=> {
                    return(
                        <Transactions  txMap={e}/>
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
        return `translate3d(${-500 * transform}px, 0, 0)`;
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