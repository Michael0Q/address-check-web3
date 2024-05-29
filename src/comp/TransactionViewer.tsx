import React from "react";
import { Transaction } from "./Transaction";
import styled from "styled-components";

export const TransactionViewer = (props : {transactionMap : Map<string, number>}) => {
    
    const txLength = props.transactionMap.size
    return(
        <Frame>
            {Array.from(props.transactionMap).map((e, index)=> {
                return(
                    <Transaction address={e[0]} totalValue={e[1]} isLast={++index == txLength}  />
                );
            })}
        </Frame>
    )
}

const Frame = styled.div`
    height: 600px;
    padding-top: 180px;
    padding-left: 80px;
    padding-right: 80px;
    display: flex;
    flex-flow: column;
    align-items: center;
    overflow-y: auto;
`

export default TransactionViewer