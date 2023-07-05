import React from "react"
import Day from "./day"

class Calendar extends React.Component{
    constructor() {
        super()
        this.date = new Date()
        this.currentYear = new Date().getFullYear()
        this.currentMonth = new Date().getMonth()
    }
    // counts days in month
    daysCount(month = this.currentMonth) {
        return new Date(this.currentYear, month + 1, 0).getDate()
    }
    // finds index of first day in this month
    firstDayInMonth() {
        return new Date(this.currentYear, this.currentMonth).getDay()
    }
    // dotays day of month
    today() {
        return new Date().getDate()
    }

    daysFromPreviousMonth(daysCounter, daysFromPreviousMonth) {
        for (let i = 0; i < daysFromPreviousMonth; i++) {
            // first day to render from previous month
            var daysBefore = this.daysCount(this.currentMonth - 1) - daysFromPreviousMonth + 1

            // number of days to render from previous month
            daysCounter++
        }
    
        return [daysCounter, daysBefore]
    }


    render(){
        let pastDaysLeft = this.firstDayInMonth() - 1;
        // sets number 6 if first day in month was Sunday
        pastDaysLeft = pastDaysLeft < 0 ?  6 : pastDaysLeft
        const days = []
        const dayData = this.daysFromPreviousMonth(0, pastDaysLeft)
        const daysInMonth = this.daysCount()
        // sets maximum number of days in calendar month
        const maxDays = (dayData[0] + daysInMonth) > (5 * 7) ? (6 * 7) : (5 * 7)
        // counter of rendered days
        let daysCounter = 0

        
        for (let i = 0; i < dayData[0]; i++) {
            days.push(<Day day={dayData[1] + i} stateOfDay='previous' key={dayData[1] + i + 'previous'}/>)
            daysCounter++
        }
        
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(<Day day={i} stateOfDay='current' key={i + 'current'}/>)
            daysCounter++
        }

        console.log('daysCounter :>> ', daysCounter);
        console.log('maxDays :>> ', maxDays);
        
        for (let j = daysCounter, i = 1; j < maxDays; j++, i++) {
            days.push(<Day day={i} stateOfDay='future' key={i + 'future'}/>)
        }

        return(
            <div className="calendar">
            {days}
            </div>
        )
    }
}

export default Calendar