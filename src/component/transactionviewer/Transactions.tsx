import styled from 'styled-components';
import { Transaction } from './Transaction';

export const Transactions = (props: { txMap: Map<string, number>}) => {
    return (
        <Frame id='tx-frame'>
            <InlineFrame id='tx-inline-frame'>
                {Array.from(props.txMap).map((e : any, index) => {
                    return (
                        <Transaction key={index} address={e[0]} totalValue={e[1]} isLast={++index == props.txMap.size} />
                    );
                })}
            </InlineFrame>
        </Frame>
    );
};

const Frame = styled.div`
    display: inline-block;
    height: 100%;
    overflow-x: visible;
`;

const InlineFrame = styled.div`
    display: inline-block;
    height: 100%;
    width: 500px;
    overflow-y: auto;
`
