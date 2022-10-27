import { DivDropDownBox, DivDropDownMenu, DivMenu } from './style'
import { useState } from 'react'

export default function DropDownMenu({children, menus}){

  const [isOpen, setIsOpen] = useState(false);
  const keys = new Array(menus.length).fill(1).map((key, index) => key + index)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  
  return  <DivDropDownBox>
      <a href='#' onClick={toggleOpen}> { children } </a>
      <DivDropDownMenu isOpen={isOpen}>
        {menus.map((menu, index) => <a href={menu.href || '#'} onClick={menu.onclick} key={keys[index]}><DivMenu><h5>{menu.title}</h5></DivMenu></a>)}
      </DivDropDownMenu>
    </DivDropDownBox>
}