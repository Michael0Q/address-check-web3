import styled, { keyframes } from "styled-components";
import { useState, CSSProperties } from "react";
import { Transactions } from "../component/transactionviewer/Transactions";
import { useSelector } from "react-redux";
import { Transaction, TransactionMap } from "../context/type/Web3TypeOf";
import { RootState } from "../redux/store";
import { Button } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import '../context/styles/transactionveiwer.css'

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
            <RightButton visible={currentItem + 1 == trn.length} icon={<RightCircleOutlined style={{fontSize: '60px'}} />} onClick={next}></RightButton>
            <LeftButton visible={currentItem == 0} icon={<LeftCircleOutlined style={{fontSize: '60px'}}/>} onClick={back}></LeftButton>
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

const RightButton = styled(Button)<{visible : boolean}>`
    position: fixed;
    color: aliceblue;
    background-color: transparent;
    border: 0;
    top: 50%;
    right: 5%;
    height: 70px;
    width: 70px;
    z-index: 100;
    visibility: ${({visible}) => visible? 'hidden' : 'visible'};
`

const LeftButton = styled(RightButton)`
    top: 50%;
    left: 5%;
    z-index: 100;
    visibility: ${({visible}) => visible? 'hidden' : 'visible'} ;
`

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
export default TransactionViewer;