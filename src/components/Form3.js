import React from 'react'

const Form3 = () => {
    return (
        <div>
<label for="exampleDataList" class="form-label">Datalist example</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
<datalist id="datalistOptions">
  <option value="London"/>
  <option value="Usa"/>
  <option value="France"/>
  <option value="NewYork"/>
  <option value="Germany"/>
  <option value="Tunisia"/>
  <option value="Else..."/>

</datalist>  
        </div>
    )
}

export default Form3
