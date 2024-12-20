import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import  logoignite from '../../assets/Logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoignite} alt="" />
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history" title="Historico">
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}