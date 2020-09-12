import React, {useState} from 'react';
import moment from 'moment';

function PayReport(){

    function formatDate(date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    function getDateOfWeek(w, y) {
        let d = (1 + (w - 1) * 7);
        let newDate = new Date(y, 0, d);
        return formatDate(newDate);
    }

    function getWeekNumber(e) {
        const today = new Date(e);
        const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
        const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    }

    function changeDate(e){
        setDate(e)
        setWkNum(getWeekNumber(new Date(e)))
    }

    // moment().startOf('week').toDate(), moment().endOf('week').toDate();

    function changeWeek(e){
        let currentYear = new Date(date).getFullYear()
        let newDate = new Date(getDateOfWeek(e, currentYear))
        let mDate = moment(getDateOfWeek(e, currentYear))
        if(currentYear != newDate.getFullYear()){
            let nwWkNum = getWeekNumber(newDate);
            setWkNum(nwWkNum);
            setDate(formatDate(newDate));
        } else {
            setWkNum(getWeekNumber(newDate))
            setDate(formatDate(newDate))
        }
        let d = moment(mDate).startOf('week')
        console.log(d._d)
        console.log(newDate)
    }

    const [date, setDate] = useState(formatDate(new Date()));
    const [wkNum, setWkNum] = useState(getWeekNumber(new Date(date)));

    return (
        <div>
            <div className="search">
                <div className="item">
                    <label>Week Number: </label>
                    <input type="number" value={wkNum} onChange={e => changeWeek(e.target.value)}/>
                    <input type="date" id="status" value={date} onChange={e => changeDate(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default PayReport;