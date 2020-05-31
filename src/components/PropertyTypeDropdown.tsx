import React, { ChangeEvent } from 'react'

type DropdownProps = {
    chosenPropertyTypes: string[]
    changePropertyTypes: (propertyType: string[]) => void
}

export function PropertyTypeDropdown (props: DropdownProps) {
    const possiblePropertyTypes = [
        'All',
        'Automotive',
        'Bulky Goods/Showroom',
        'Child Care',
        'Commercial Fast Food',
        'Development',
        'Food - General',
        'Gym/Fitness',
        'Hotel',
        'Medical/Dental',
        'Mixed Use',
        'Office',
        'Petrol',
        'Retail',
        'Warehouse'
    ]

    return (
        <label className="two">Property Type (Marketing)
            <select multiple value={props.chosenPropertyTypes} name="propertyType" id="#propertyType" onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                props.changePropertyTypes([...e.target.selectedOptions].map((option) => option.value))
            }} tabIndex={2} >
                {possiblePropertyTypes.map((propertyType) => {
                    return <option key={propertyType} value={propertyType}>{propertyType}</option>
                })}
            </select>
        </label>
    )
}
