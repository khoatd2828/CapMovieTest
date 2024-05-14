import React, {useState} from 'react'
import {css, styled} from 'styled-components'

type DemoComponentProps = {
    name?: string
    age? : number
    sum: () => void
    sum1?():void
    total(a:number, b:number): void
}

export const DemoComponent = ({name, total}: DemoComponentProps) => {
    console.log(name)
    const [number, setNumber] = useState<number>()
  return (
    <div>DemoComponent
        {/* <button
        className='ml-10 py-10 border border-red-500 rouded-10 hover:bg-red-500 hover:text-white'
        onClick={() => total(10,20)}>Call total</button> */}
        <button
        className='ml-10 py-10 border border-red-500 rouded-10 hover:bg-red-500 hover:text-white'
        onClick={() => setNumber(10)}>+Number</button>
        <Button onClick={() => total(10,20)} bgColor='red' disable>
            Call total
        </Button>
    </div>
  )
}

// styled
const Button = styled.button<{bgColor: string; disable?: boolean}>`
  margin-left: 10px;
  padding: 10px 20px;
  border:  1px solid red;
  border-radius: 10px;
  background: ${(props) => props.bgColor};
  ${(props) => {
    if (props.disable) {
      return css`
      background: gray;
      pointer-events: none;
      `
    }
  }}
  &:hover {
    background: cyan;
    color: #fff
  }
`