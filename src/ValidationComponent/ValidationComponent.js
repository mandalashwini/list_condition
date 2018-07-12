import React from 'react'
const ValidationComponent = (props) => {
  //  alert(props)
    let status
    if(props.len < 5)
    status = "Text Too Short"
    else if (props.len > 10)
        status = "Text Too Long"
    else
        status = "Correct Text"
    return(
    <p>{status}</p>
    );
}
export default ValidationComponent