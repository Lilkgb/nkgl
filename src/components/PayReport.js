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
        setWkDay(["daily"])
    }

    // moment().startOf('week').toDate(), moment().endOf('week').toDate();

    function changeWeek(e){
        let currentYear = new Date(date).getFullYear()
        let newDate = new Date(getDateOfWeek(e, currentYear))
        let mDate = moment(getDateOfWeek(e, currentYear))
        let startOfWk = new Date(moment(mDate).startOf('week'));
        let arry = []
        if(currentYear != newDate.getFullYear()){
            setWkNum(getWeekNumber(newDate));
            setDate(formatDate(startOfWk));
        } else {
            setWkNum(getWeekNumber(newDate))
            setDate(formatDate(startOfWk))
        }
        for (let i=0; i<7; i++){
            if(i===0){
                arry.push(formatDate(startOfWk.setDate(startOfWk.getDate())));
            } else {
                arry.push(formatDate(startOfWk.setDate(startOfWk.getDate() + 1)));
            }
        }
        setWkDay(arry)
    }

    const [date, setDate] = useState(formatDate(new Date()));
    const [wkNum, setWkNum] = useState(getWeekNumber(new Date(date)));
    const [wkDay, setWkDay] = useState(["daily"])

    return (
        <div>
            <div className="search">
                <div className="item">
                    <label>Week Number: </label>
                    <input type="number" value={wkNum} onChange={e => changeWeek(e.target.value)}/>
                    <input type="date" id="status" value={date} onChange={e => changeDate(e.target.value)} />
                </div>
            </div>
            {Object.keys(wkDay).map((days) => {
                let day = wkDay[days];
                if(day === "daily"){
                    return <div>Showing {day}</div>
                } else {
                    day = moment(day).format("MM/Do/YY");
                    return <div>Showing {day}</div>
                }
            })}
        </div>
    )
}

export default PayReport;