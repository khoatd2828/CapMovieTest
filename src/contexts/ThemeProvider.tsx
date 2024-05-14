import React from 'react'
import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'

type Props = {
    children: React.ReactNode
}
export const ThemeProvider = ({children} : Props) => {
  return <ConfigProvider>
    <StyleProvider hashPriority='high'>{children}</StyleProvider>
  </ConfigProvider>
}
 