import styled, { keyframes, css } from "styled-components";
import { AppDispatch } from "../../redux/store";
import { useAppDispatch, useAppSelector } from "../../utils/useRedux";
import { goAbout, goHome, goPrice } from "../../redux/slices/displaySlice";
import { X_URL } from "../../context/config/config";

export const ButtonArea = () => {
    const dispatch = useAppDispatch();
    const display = useAppSelector((state) => state.display.val);
    
    const goX = () => {
        window.open(X_URL, "_blank", "noopener,noreferrer");
    };
    
    return (
        <ButtonAreaFrame>
            <Button count={3} display={display === "Home"} onClick={() => dispatch(goHome())}>home</Button>
            <Button count={2} display={display === "About"} onClick={() => dispatch(goAbout())}>about</Button>
            <Button count={1} display={display === "Price"} onClick={() => dispatch(goPrice())}>price</Button>
            <Button count={0} display={display === "Contact"}>
                contact
                <PopContainer>
                    <Pop onClick={goX} count={0}>X</Pop>
                </PopContainer>
            </Button>
        </ButtonAreaFrame>
    );
};

const ButtonAreaFrame = styled.div`
    display: inline-flex;
    height: 100%;
    width: calc(100% - 150px);
    position: relative;
    top: 0%;
    left: 0%;
    background-color: transparent;
    :hover {
        cursor: pointer;
    }
`;

const buttonAnimation = keyframes`
    from {
        scale: 1;
    }
    to {
        scale: 1.4;
    }
`;

const PopContainer = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-20px);
    transition: visibility 0.5s, opacity 0.5s ease, transform 0.5s ease;
`;

const Button = styled.button<{ count: number; display: boolean }>`
    height: 100%;
    width: 100px;
    position: absolute;
    bottom: 0%;
    right: ${({ count }) => (count === 0 ? "0%" : count * 100 + "px")};
    margin-right: 20px;
    background-color: transparent;
    font-size: 22px;
    color: white;
    border: 0;
    animation: ${({ display }) =>
        display ? css`${buttonAnimation} 1s infinite alternate` : ""};
    &:hover ${PopContainer} {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
    }
`;

const Pop = styled.button<{ count: number }>`
    height: 100%;
    width: 100%;
    position: relative;
    margin-right: 20px;
    background-color: transparent;
    font-size: 22px;
    color: white;
    border: 0;
`;
