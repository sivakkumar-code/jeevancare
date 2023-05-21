import {Component} from "react";

import Medicine from "../Medicine";
import Activities from "../Activities";
import History from "../History";
import Appointment from "../Appointment";
import "./index.css";
const tabs = [
    {tabId:1, tabName: "Medicine"}, 
    {tabId:2, tabName: "Activities"},
    {tabId:3, tabName: "Appointment"},
    {tabId:4, tabName: "History"}
];
const availableTabs = {
    medicine: 1,
    activities: 2,
    appointment: 3,
    history: 4
}


class Home extends Component{
    state = {
        whatToDisplay: tabs[0].tabId
        // whatToDisplay: 4
    }

    changeTab = (id)=>{
        this.setState({whatToDisplay: id})
    }

    showTab = ()=>{
        const {whatToDisplay} = this.state;
        console.log(whatToDisplay === availableTabs.history);

        switch (whatToDisplay){
            case availableTabs.activities:
                return <Activities/>;
            case availableTabs.history:
                return <History/>;
            case availableTabs.appointment:
                return <Appointment />;
            default:
                return <Medicine/>;
        }
    }

    render(){
        const {whatToDisplay} = this.state

        return(
            <div className="bg-container">
                <header className="header-section">
                <img src = "https://res.cloudinary.com/dmhszvxi1/image/upload/v1684673955/Kartin%20llc/logo2_qhwg3k.png" alt = "logo" className="logo-image" />
                </header>
                <section className="profile-section">
                    <div className="profile-section-grid-container">
                        <div className="profile-img-container">
                            <img src = "https://images.unsplash.com/photo-1626457610369-14df89c09fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt = "profile" className="profile-image"/>
                        </div>
                        <div className="bio-container">
                            <h3>Name: Sunita Sharma</h3>
                            <h3>Age: 66</h3>
                            <h3>Address: 75 / 356 Anna nagar, chennai-600040.</h3>
                            <h3>Contact: 9578324102</h3>
                            <h3>Emergency Contact: Sri Ram (+91-8885498821)</h3>
                        </div>
                    </div>
                </section>
                <section className="nav-section">
                    <ul className="ul-nav-container">
                        {
                            tabs.map(item=>{
                            return <li className={`nav-li ${whatToDisplay === item.tabId ? "selected-nav-li" : ""}`} key = {item.tabId} onClick = {()=> this.changeTab(item.tabId)}>{item.tabName}</li>
                        })
                        }
                    </ul>
                </section>
                {this.showTab()}
            </div>
        )
    }
}

export default Home