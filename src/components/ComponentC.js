import { bgcolor } from '@mui/system'
import React from 'react'
import { UserContext } from '../App'

const ComponentC = () => {

  return (
    <div>
        <UserContext.Consumer>
            {
                value => {
                   return <div  style={{ backgroundColor: value.bgcolor ? 'blue ' : 'white'}}>
                    <button onClick={value.handleBackground}>change background color</button>
                   </div>
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentC