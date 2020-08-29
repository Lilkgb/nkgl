import React, {useState} from 'react';

function PayReport(){

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    function getWeekNumber(d) {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
        var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
        return weekNo;
    }

    function changeInfo(e){
        setDate(e)
        setWkNum(getWeekNumber(new Date(e)))
    }

    const [date, setDate] = useState(formatDate(new Date()));
    const [wkNum, setWkNum] = useState(getWeekNumber(new Date(date)));

    console.log(date)
    console.log(wkNum)

    return (
        <div>
            <div className="search">
                <div className="item">
                    <label>Week Number: </label>
                    <input type="number" value={wkNum} onChange={e => setWkNum(e.target.value)}/>
                    <input type="date" id="status" value={date} onChange={e => changeInfo(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default PayReport;