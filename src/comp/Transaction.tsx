import {styled} from 'styled-components';

export const Transaction = (props : {address: string, totalValue : number, isLast : boolean}) => {
    return (
        <>
            <Frame>
                <WalletName >{'wallet.name'}</WalletName>
                <Address >{props.address}</Address>
                <Amount >{props.totalValue}</Amount>
            </Frame>
            {props.isLast &&       
            <EmptyFrame>
            </EmptyFrame>}
        </>
    );
}

const Frame = styled.div`
    background-color: #b1f9f5;
    height: 100px;
    width: 700px;
    margin-bottom: 15px;
    border-color: #b1f9f5;
    border-width: 3px;
    border-radius: 15px;
    display: flex;
    flex-flow: column;
    align-items: center;
`;
const EmptyFrame = styled.div`
    background-color: #b1f9f5;
    height: 100px;
    width: 700px;
    margin-bottom: 250px;
    border-color: #b1f9f5;
    border-width: 3px;
    border-radius: 15px;
    display: flex;
    flex-flow: column;
    align-items: center;
`;
const WalletName = styled.span`
    margin-top : 10px;
    border-radius: 15px;
`
const Address = styled.span`
    margin-top : 10px;
    border-radius: 15px;
`
const Amount = styled.span`
    margin-top : 10px;
    border-radius: 15px;
`