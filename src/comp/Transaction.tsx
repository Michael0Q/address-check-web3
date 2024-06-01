import {styled} from 'styled-components';

export const Transaction = (props : {address: string, totalValue : number, isLast? : boolean, onClick : (address: string) => {}}) => {
    const {address, totalValue, onClick} = props;

    const handle = () => {
        console.log('handled')
        onClick(address);
    }
    return (
        <>
            <Frame onClick={handle} id='tx'>
                <Address >{props.address}</Address>
                <Amount >{props.totalValue + '  ETH'}</Amount>
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
    width: 300px;
    margin-bottom: 15px;
    border-color: #b1f9f5;
    border-width: 3px;
    border-radius: 15px;
    display: flex;
    flex-flow: column;
    align-items: center;
`;

const EmptyFrame = styled(Frame)`
    visibility: hidden;
`;
const Address = styled.span`
    margin-top : 10px;
    border-radius: 15px;
`
const Amount = styled.span`

    margin-top : 10px;
    border-radius: 15px;
`