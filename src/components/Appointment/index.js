import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import { MdOutlineDone, MdCancelPresentation, MdDeleteOutline } from "react-icons/md";

import "./index.css"

const appointmentStatus = {
    done: "DONE",
    cancel: "CANCELED",
    default: "UPCOMING"
}

const sortByOption = [
    {
        optionId: "4563",
        value: "ALL",
        display: "All"
    },
    {
        optionId: "4564",
        value: "DONE",
        display: "Done"
    },
    {
        optionId: "4565",
        value: "CANCELED",
        display: "Cancel"
    },
    {
        optionId: "4566",
        value: "UPCOMING",
        display: "Upcoming"
    },
];

const data = JSON.stringify([{
    appointentDate: "2023-05-23",
    doctor: "Ramesh artho",
    hospital: "xyz hospital chennai",
    id:"a5e988a9-cd7e-443e-8a3a-7038d416b48c",
    appointmentStatus: "UPCOMING",
    priority: 3
}]);

// localStorage.removeItem("appointmentList");
let getAppointmentList = localStorage.getItem("appointmentList");
if (!getAppointmentList) localStorage.setItem("appointmentList", data);




class Appointment extends Component{
    state = {
        addAppoinment: false, 
        appointmentList: [...JSON.parse(localStorage.getItem("appointmentList"))],
        // appointmentList: [...data],
        hospitalName: "",
        doctorName: "",
        appDate: "",
        errMessage: "",
        sortBy: sortByOption[0].value
    }

    addAppoinment = ()=> {
        this.setState((prevState)=> ({addAppoinment: !prevState.addAppoinment, errMessage: ""}))
    }

    readHospitalName = (e)=> this.setState({hospitalName: e.target.value})

    readDoctorName = (e)=> this.setState({doctorName: e.target.value})

    readAppDate = (e)=> this.setState({appDate: e.target.value})

    changeSortBy = (e)=> this.setState({sortBy: e.target.value})

    deleteAppointment = (id)=>{
        this.setState((prevState)=>{
            return {
                appointmentList: prevState.appointmentList.filter(item=> item.id !== id)
            }
        }, this.updateLocalStorage)
    }

    doneAppointment = (id)=>{
        this.setState((prevState)=>{
            return {
                appointmentList: prevState.appointmentList.map(item=>{
                    if (item.id === id){
                        return {...item, appointmentStatus: appointmentStatus.done, priority: 1}
                    }
                    return item
                })
            }
        }, this.updateLocalStorage)
    }

    cancelAppointment = (id)=>{
        this.setState((prevState)=>{
            return {
                appointmentList: prevState.appointmentList.map(item=>{
                    if (item.id === id){
                        return {...item, appointmentStatus: appointmentStatus.cancel, priority: 0}
                    }
                    return item
                })
            }
        }, this.updateLocalStorage)
    }

    collectData = (e)=>{
        e.preventDefault()
        const {hospitalName, doctorName, appDate} = this.state;
        const object = {
            id: uuidv4(),
            hospital: hospitalName,
            doctor: doctorName,
            appointentDate: appDate,
            appointmentStatus: appointmentStatus.default,
            priority: 3
        }
        // console.log(object)
        if (!hospitalName) {
            this.setState({errMessage: "*required hospital name"})
            return
        }
        if (!doctorName) {
            this.setState({errMessage: "*required doctor name"})
            return
        }
        if (!appDate) {
            this.setState({errMessage: "*required appointment date"})
            return
        }
        if (hospitalName && doctorName && appDate){
            this.setState((prevState)=>{
                return {
                    appointmentList: [...prevState.appointmentList, object],
                    hospitalName: "",
                    doctorName: "",
                    appDate: "",
                    addAppoinment: !prevState.addAppoinment,
                    errMessage: ""
                }
            }, this.updateLocalStorage)
        }
    }

    updateLocalStorage = ()=>{
        const {appointmentList} = this.state
        localStorage.setItem("appointmentList", JSON.stringify(appointmentList))
    }

    showForm = ()=>{
        const {hospitalName, doctorName, appDate, errMessage} = this.state;

        return(
            <form className="form-grid-container" onSubmit={this.collectData}>
                <div className="form-grid-item">
                    <label htmlFor = "hospital-name">Hospital Name</label>
                    <input placeholder="Enter Hospital Name" id = "hospital-name" type = "text" value={hospitalName} onChange={this.readHospitalName}/>
                </div>
                <div className="form-grid-item">
                    <label htmlFor = "doctor-name">Doctor Name</label>
                    <input placeholder="Enter Doctor Name" id = "doctor-name" type = "text" value={doctorName} onChange={this.readDoctorName}/>
                </div>
                <div className="form-grid-item">
                    <label htmlFor = "appointment-date">Date</label>
                    <input id = "appointment-date" type = "date" value={appDate} onChange={this.readAppDate}/>
                </div>
                <div className="form-grid-item">
                    <button className="create-btn" type = "submit">Create</button>
                </div>
                {errMessage.length !== 0 && <div className="form-grid-item">
                    <p className="error-class">{errMessage}</p>
                </div>}
            </form>
        )
    }

    showAppointmentDetails = ()=>{
        let {appointmentList, sortBy} = this.state;
        appointmentList = appointmentList.sort((a, b)=> b.priority - a.priority);
        let finalList = sortBy === sortByOption[0].value ? 
                                    appointmentList : 
                                    appointmentList.filter(item=> item.appointmentStatus === sortBy);


        return(
            <ul className="appointment-list-container">
                {finalList.map(item=> {
                    let status;
                    switch (item.appointmentStatus){
                        case appointmentStatus.done:
                            status =  appointmentStatus.done;
                            break;
                        case appointmentStatus.cancel:
                            status = appointmentStatus.cancel;
                            break;
                        default:
                            status = appointmentStatus.default;
                            break;
                    }
                    return (
                        <li key = {item.id} className = {
                                            `appointment-card 
                                            ${status === "DONE" ? "appointment-done" : ""}
                                            ${status === "CANCELED" ? "cancel-appointment" : ""}`}>
                            <div className="appointment-card-left">
                                <h3 className="appointment-typo"><span  className="bold-letters">Hospital:</span> {item.hospital}</h3>
                                <h3 className="appointment-typo"><span  className="bold-letters">Doctor:</span> Dr. {item.doctor}</h3>
                                <h3 className="appointment-typo"><span  className="bold-letters">Appointment:</span> {item.appointentDate}</h3>
                            </div>

                            <div className="appointment-card-right">
                                <button className="btn-transparent" onClick={()=> this.doneAppointment(item.id)}><MdOutlineDone className="card-icons-appointment" /></button>
                                <button className="btn-transparent" onClick={()=> this.cancelAppointment(item.id)}><MdCancelPresentation className="card-icons-appointment" /></button>
                                <button className="btn-transparent" onClick={()=> this.deleteAppointment(item.id)}><MdDeleteOutline className="card-icons-appointment" /></button>
                            </div>
                            {(status === "DONE" || status === "CANCELED") && <div className= "position-absolute">
                                <h1>{status}</h1>
                            </div>}
                            {status === "UPCOMING"  && <div className= "position-absolute">
                                <h1>{status}...</h1>
                            </div>}
                        </li>
                    )
                })}
            </ul>
        )
    }

    render(){
        const {addAppoinment, appointmentList, sortBy} = this.state;

        return(
            <section className="appointment-container">
                <div className="add-appointment-container">
                    <select value={sortBy} onChange = {this.changeSortBy}>
                        {sortByOption.map(item=> <option key = {item.optionId} value = {item.value}>{item.display}</option>)}
                    </select>
                    <button className="appointment-btn" type = "button" onClick={this.addAppoinment}>
                        {addAppoinment ? "Close Form" : "Book Appointment"}
                    </button>
                </div>
                {addAppoinment && this.showForm()}
                {appointmentList.length !== 0 && this.showAppointmentDetails()}
                {appointmentList.length === 0 && <div className="no-appointment"><h1>No Appointments...</h1></div>}
            </section>
        )
    }
}

export default Appointment