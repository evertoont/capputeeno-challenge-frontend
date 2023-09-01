import { theme } from "@/app/theme"
import styled from "styled-components"

export const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 3px 5px;
    font-size: 10px;
    display: inline-block;

    background-color: ${theme.colors.delete};
    color: white;

    margin-left: -10px;
`

export const CartContainer = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
`