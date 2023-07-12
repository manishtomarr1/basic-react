import React,{Fragment} from "react";
import Provider from "./provider";
import Context from './context'

const CheckContext=() =>{
 

    return (
        <div>
          <Context.Consumer>
           {(context) => (
            <Fragment>
                <h1>Mission Name from CheckContext: {context.data.mName}</h1>
            </Fragment>
           )}
          </Context.Consumer>
        </div>
    )
}
export default CheckContext;