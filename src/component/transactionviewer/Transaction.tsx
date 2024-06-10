import {styled} from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../utils/useRedux';
import { renewTrn } from '../../redux/slices/trnSlice';
import { Button as AntButton, Typography } from 'antd';
import { useState, Dispatch, SetStateAction } from "react";
import { disableVal } from '../../redux/slices/disabledSlice';

const SeatchButton = styled(AntButton)`
    &.ant-btn[disabled] {
        background-color: white; /* ボーダーの色も変更 */
    }
`

type TransactionProps = {
    address: string, 
    totalValue : number, 
    isLastTrn?: boolean, 
    isLastElement? : boolean,
}

export const Transaction = (props : TransactionProps) => {
    const {address} = props;
    const dispatch = useAppDispatch();
    const selector = useAppSelector(state => state.disable.val);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearchButton = () => {
        setIsSearching(e => !e);
    }

    return (
        <>
            <Frame id='tx'>
                {props.isLastTrn &&
                    <ButtonWrapper>
                        <SeatchButton loading={isSearching} onClick={handleSearchButton} disabled={selector}>
                            {isSearching ? '':'➡️'}
                        </SeatchButton>
                    </ButtonWrapper>
                }
                <Address copyable={{text: props.address}}>{`${props.address.substring(0, 15)}...`}</Address>
                <Amount>{`TVL ${props.totalValue.toFixed(4)} ETH`}</Amount>
            </Frame>
            {props.isLastElement &&       
            <EmptyFrame>
            </EmptyFrame>}
        </>
    );
}

const Frame = styled.div`
    position: relative;
    background-color: transparent;
    height: 100px;
    width: 300px;
    margin-bottom: 15px;
    border: 7px ridge white;
    border-radius: 8px;
`;

const EmptyFrame = styled(Frame)`
    visibility: hidden;
`;
const ButtonWrapper = styled.div`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
`;


const Address = styled(Typography.Paragraph)`
    color: aliceblue;
    width: 80%;
    margin-top : 10px;
    margin-left: 8px;
    border-left: 5px solid white;
    padding-left: 5px;
    font-size: 18px;
    overflow: hidden;
`
const Amount = styled.div`
    color: aliceblue;
    width: 70%;
    margin-top : 10px;
    margin-left: 8px;
    border-left: 5px solid white;
    padding-left: 5px;
    font-size: 24px;
`