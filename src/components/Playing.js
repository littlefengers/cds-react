import React from 'react'
import './../scss/style.scss';



class Playing extends React.Component{ 
    
    person(name){
        return name + " Doe";
    }

    getBirthday(yearBirthday)
    {
        return Date.getFullyYear() - yearBirthday
    }
    render () {
        return (
            `You are around`
        )
    }

    
}

export default Playing;