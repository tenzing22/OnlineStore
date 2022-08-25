import React from 'react'
import GlobalContextProvider from './GlobalContext'
import MyComponent from './MyComponent'
import UseContex from './UseContex'

const Main = () => {
  return (
    <>
   <MyComponent image={`https://tse4.mm.bing.net/th?id=OIP.8BgiDchgW7zaaGF8bbks-QHaEL&pid=Api&P=0&w=252&h=142`}
   title={`title`} description={`this is description`}/>
   <GlobalContextProvider>
       <UseContex/>
   </GlobalContextProvider>


       </>
  )
}

export default Main