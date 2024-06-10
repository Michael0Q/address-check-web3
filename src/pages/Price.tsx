import styled, { keyframes } from "styled-components"
import { useAppSelector } from "../utils/useRedux"

export const Price = () => {

    const plan = useAppSelector((state) => state.plan.val);

    return(
        <PriceFrame>
            <PriceInfo>
                <Title>
                    Free
                </Title>
                <Ul>
                    <Li>・100検索/1DAY</Li>
                </Ul>
                <Button isThisPlan={plan === 'Free'} disabled={plan === 'Free'}>
                    {plan === 'Free'? 
                        <span style={{color: '#1677ff', fontSize: '30px'}}>
                            ✔
                        </span> 
                        :
                        <span>
                            選択
                        </span>
                    }
                </Button>
            </PriceInfo>
            <PriceInfo>
                <Title>
                    Personal
                </Title>
                <Ul>
                    <Li>・1000検索/1DAY</Li>
                    <Li>・カスタマーサポート</Li>
                </Ul>
                <Button isThisPlan={plan === 'Personal'} disabled={plan === 'Personal'}>
                {plan === 'Personal'? 
                    <span style={{color: '#1677ff', fontSize: '30px'}}>
                        ✔
                    </span> 
                    :
                    <span>
                        選択
                    </span>
                }
                </Button>
            </PriceInfo>    
            <PriceInfo>
                <Title>
                    Business
                </Title>
                <Ul>
                    <Li>・10000検索/1DAY</Li>
                    <Li>・カスタマーサポート</Li>
                    <Li>・新機能優先アクセス</Li>
                </Ul>
                <Button isThisPlan={plan === 'Business'} disabled={plan === 'Business'}>
                {plan === 'Business'? 
                    <span style={{color: '#1677ff', fontSize: '30px'}}>
                        ✔
                    </span> 
                    :
                    <span>
                        選択
                    </span>
                }
                </Button>
            </PriceInfo>
        </PriceFrame>
    )
}

const PriceFrameAnimation = keyframes`
    from {
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const PriceFrame = styled.div`
    width: 100vw;
    height: 73vh;
    background-color: transparent;
    text-align: center;
    padding-top: 120px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    animation: ${PriceFrameAnimation} 1s forwards;
    overflow-y: auto;
`

const PriceInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 334px;
    height: 447px;
    margin: 20px;
    border-radius: 10px;
    border: 3px solid white;
    background-color: #08012e;
`

const Title = styled.div`
    color: white;
    font-size: 40px;
    border-radius: 5px;
    background-color: #1677ff;
    height: 60px;
    padding-top: 10px;
`

const Ul = styled.div`
    color: white;
    padding-left: 15px;
    margin-top: 8px;
    flex: 1; /* 追加: 残りのスペースを占める */
`

const Li = styled.span`
    font-size: 20px;
    text-align: left;
    display: block;
    margin-bottom: 10px;
`

const Button = styled.button<{isThisPlan: boolean}>`
    color: black;
    width: 60%;
    font-size: 20px;
    border-radius: 5px;
    border-color: ${({isThisPlan}) => isThisPlan? '#1677ff' : 'black'} ;
    background-color: white;
    height: 50px;
    align-self: center;
    margin-bottom: 30px;
    :hover {
        cursor: pointer;
    }
`
