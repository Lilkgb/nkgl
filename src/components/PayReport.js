import React, {useState} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';


function PayReport(props){

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

    function currentDate(){
        let today = new Date();
        setDate(formatDate(new Date()))
        setWkNum(getWeekNumber(new Date(today)))
        setWkDay(["daily"])
    }

    // moment().startOf('week').toDate(), moment().endOf('week').toDate();

    function changeWeek(e){
        let currentYear = new Date(date).getFullYear()
        let newDate = new Date(getDateOfWeek(e, currentYear))
        let mDate = moment(getDateOfWeek(e, currentYear))
        let startOfWk = new Date(moment(mDate).startOf('week'));
        let arry = [];
        let endOfYear = new Date(moment().endOf('year'));
        if(e === "" || e === undefined  || e === null){
            return setWkNum("")
        } else {
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
        console.log(formatDate(endOfYear))
        console.log(getWeekNumber(endOfYear))
    }

    const [date, setDate] = useState(formatDate(new Date()));
    const [wkNum, setWkNum] = useState(getWeekNumber(new Date(date)));
    const [wkDay, setWkDay] = useState(["daily"])
    const [newPayReport, setNewPayReport] = useState([]);
    const [daName, setDaName] = useState("")


    function pushToNewPayReport(e){
        e.preventDefault()
        console.log(daName)
        setDaName("")
    }

    return (
        <div>
            <div className="search">
                <div className="item">
                    <label>Week Number: </label>
                    <input type="number" pattern="\d*" max="99" value={wkNum} onChange={e => changeWeek(e.target.value)}/>
                    <input type="date" id="status" value={date} onChange={e => changeDate(e.target.value)} />
                    <button onClick={currentDate}>Today</button>
                </div>
            </div>
            {Object.keys(wkDay).map((days) => {
                let day = wkDay[days];
                if(day === "daily"){
                    return <div>
                        <h1>daily</h1>
                </div>
                } else {
                    day = moment(day).format("MM/Do/YY");
                    return <div>
                    <h1>Showing {day}</h1>
                </div>
                }
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    allEmployees: state.employeesState
  })

export default connect(mapStateToProps)(PayReport);