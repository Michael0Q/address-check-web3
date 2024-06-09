import {styled} from 'styled-components';
import { Logo } from '../component/header/Logo';
import { ButtonArea } from '../component/header/ButtonArea';

export const Header = () => {
    return(
        <>
            <HeaderFrame>
                <Logo></Logo>
                <ButtonArea></ButtonArea>
            </HeaderFrame>
        </>
    )
}

const HeaderFrame = styled.div`
    height: 50px;
    width: 100%;
    position: relative;
    top: 0%;
    background-color: transparent;
`