import React from 'react'

export default function Filter(props) {
    const startYear = 1990;
const currentYear = new Date().getFullYear();

const yearsArray = Array.from({ length: currentYear - startYear + 1 }, (_, index) => startYear + index);

  return (
    <div>
      <div>
        COURSE:
      <select defaultValue="---"  onChange={props.course}>
        <option value="---" >___</option>
        <option value="BE">BE</option>
        <option value="MTech">Mtec</option>
        <option value="MCA">MCA</option>
        <option value="PhD">PHD</option>
        <option value="MBA">MBA</option>
      
      </select>
      </div>
      <div>
        BRANCH:
      <select defaultValue="---"  onChange={props.branch}>
        <option value="---" >___</option>
        <option value="CSE">CSE</option>
        <option value="ME">ME</option>
        <option value="CE">CE</option>
        <option value="EC">EC</option>
        <option value="IP">IP</option>
        <option value="EI">EI</option>
      
      </select>
      </div>
      <div>year of graduation:
        <select defaultValue="---" onChange={props.yog}>
          <option value="---">___</option>
            {yearsArray.map((item)=>(
               <option value={Number(item)}>{item}</option>
            ))}
        </select>
      </div>
    </div>
  )
}
