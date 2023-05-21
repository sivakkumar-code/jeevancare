import { Component } from "react";
import {v4 as uuidv4} from "uuid";
import { GoDiffAdded } from "react-icons/go";
import {MdDelete, MdEdit} from "react-icons/md";

import "./index.css";

const sampelMedicinesList = [
    {
        disease: "Arthritis",
        id:"dbf59947-1600-45d8-b5be-988f3c8a38ec",
        tablets: [
            {
                id: '7f713ed4-2344-4474-b260-13e0b5d48f6e', 
                tabletName: 'ibuprofen (Advil)'
            },
            {
                id: 'e4fbe52f-108d-48ea-ac7f-37986e616a49', 
                tabletName: 'methotrexate (Trexall)'
            },
            {
                id: '88cfa014-75a6-41d4-b63a-4c79f67b7426', 
                tabletName: 'adalimumab (Humira)'
            }
        ]
    },
    {
        disease: "Hypertension (High blood pressure)",
        id:"5085c02b-1d63-40e8-a7b0-a5e77df8f9d3",
        tablets: [
            {
                id: '5f23dd23-46e5-49cf-8076-7ea9a5983877', 
                tabletName: 'lisinopril (Prinivil)'
            },
            {
                id: '21447649-880a-4205-b0fd-47d4add76033', 
                tabletName: 'amlodipine (Norvasc)'
            },
            {
                id: '69154410-72d2-4764-a028-9f8f68779a9e', 
                tabletName: 'furosemide (Lasix)'
            }
        ]
    },
    {
        disease: "Diabetes",
        id:"6f6826f9-c54c-4fc3-b8b1-a40b6b97c345",
        tablets: [
            {
                id: '9fe2d7a2-da4c-4f7f-a32f-2056d9a8062d', 
                tabletName: 'Metformin (Glucophage)'
            },
            {
                id: '6a83b8d7-16a7-49a0-95db-f2f56b0ea97b', 
                tabletName: 'gliclazide (Diamicron)'
            },
            {
                id: '0eb61621-1534-47e4-867d-73342691f920', 
                tabletName: 'sitagliptin (Januvia)'
            }
        ]
    }
];

// localStorage.removeItem("medicinesList");

let getMedicinesList = localStorage.getItem("medicinesList");
if (!getMedicinesList) localStorage.setItem("medicinesList", JSON.stringify(sampelMedicinesList));




class Medicine extends Component{
    state = {
        medicalCondition: "", 
        tablets: "", 
        medicinesList: [...JSON.parse(localStorage.getItem("medicinesList"))],
        showForm: false,
        errMessage: "",
        updateId: ""
    }

    addMedicine = ()=> this.setState(prevState => (
        {
            showForm: !prevState.showForm, 
            updateId: "",
            medicalCondition: "",
            tablets: "",
            errMessage: ""
        }
    ))

    readTablets = (e)=> this.setState({tablets: e.target.value})

    readDiseaseName = (e)=> this.setState({medicalCondition: e.target.value})

    deleteMedicineCard = (id)=>{
        this.setState(prevState=>{
            return {
                medicinesList: prevState.medicinesList.filter(item=>item.id !== id)
            }
        }, this.updateLocalStorage)
    }

    editMedicineCard = (id)=>{
        this.setState(prevState=>{
            const obj = prevState.medicinesList.find(item=> item.id === id);
            let tabletsString = obj.tablets.map(item=> item.tabletName);
            tabletsString = tabletsString.join("\n");
            return{
                showForm: true,
                medicalCondition: obj.disease,
                tablets: tabletsString,
                updateId: id
            }
        })
    }

    collectData = (e)=>{
        e.preventDefault();
        const {medicalCondition, tablets, updateId} = this.state;
        const tabletsArray = tablets.split("\n");

        if (!medicalCondition) {
            this.setState({errMessage: "*required Disease Name"})
            return
        }
        if (!tablets) {
            this.setState({errMessage: "*required Tablets Name"})
            return
        }

        if (medicalCondition && tablets && updateId){
            this.setState(prevState=>{
                const obj = prevState.medicinesList.find(item=> item.id === updateId);
                if (obj){
                    return {
                        medicinesList: prevState.medicinesList.map(item=>{
                            if (item.id === updateId){
                                return {...item, disease: medicalCondition, 
                                    tablets: tabletsArray.map(item=>{
                                        return {
                                            id: uuidv4(),
                                            tabletName: item
                                        }
                                    })
                                }
                            }
                            return item
                        }),
                        medicalCondition: "",
                        tablets: "",
                        showForm: !prevState.showForm,
                        errMessage: "",
                        updateId: "",

                    }
                }
            }, this.updateLocalStorage)
            return
        }
        let object = {
            id: uuidv4(),
            disease: medicalCondition,
            tablets: tabletsArray.map(item=>{
                return {
                    id: uuidv4(),
                    tabletName: item
                }
            })
        }

        console.log(object)

        if (medicalCondition && tablets && !updateId){
            this.setState((prevState)=>{
                return {
                    medicinesList: [...prevState.medicinesList, object],
                    medicalCondition: "",
                    tablets: "",
                    showForm: !prevState.showForm,
                    errMessage: "",
                    updateId: ""
                }
            }, this.updateLocalStorage)
        }
    }

    updateLocalStorage = ()=>{
        const {medicinesList} = this.state
        localStorage.setItem("medicinesList", JSON.stringify(medicinesList))
    }

    showFormElement = ()=>{
        const {medicalCondition, tablets, errMessage, updateId} = this.state;

        return(
            <form className="form-grid-container" onSubmit={this.collectData}>
                <div className="form-grid-item">
                    <label htmlFor = "disease-name">Disease Name</label>
                    <input 
                        placeholder="Enter Hospital Name" 
                        id = "disease-name" 
                        type = "text" 
                        value={medicalCondition} 
                        onChange={this.readDiseaseName} 
                        />
                </div>
                <div className="form-grid-item">
                    <label htmlFor = "tablets-name">Tablets Name</label>
                    <textarea 
                        cols="10" 
                        rows="6" 
                        placeholder="Enter each tablets in new line" 
                        id = "tablets-name" 
                        value={tablets}
                        onChange={this.readTablets}
                        />
                </div>
                <div className="form-grid-item">
                    <button className="create-btn" type = "submit">{updateId ? "Update" : "Add"}</button>
                </div>
                {errMessage.length !== 0 && <div className="form-grid-item">
                    <p className="error-class">{errMessage}</p>
                </div>}
            </form>
        )
    }

    render(){
        const {medicinesList, showForm} = this.state;

        return(
            <section className="tab-section">
                <div className="add-btn-container">
                    <button className="add-btn" onClick={this.addMedicine}>
                        <GoDiffAdded className="add-icon"/>
                    </button>
                </div>
                {showForm && this.showFormElement()}
                <ul className="medicines-ul-list-container">
                    {medicinesList.map(item=>{
                        return (<li key = {item.id} className = "med-conditon-list">
                            <div className="card-highlight">
                                <h3 className="disease-name">{item.disease}</h3>
                                <ul className="tablets-ul-list">
                                    {item.tablets.map(element=>{
                                        return <li key = {element.id} className="tablets-name">{element.tabletName}</li>
                                    })}
                                </ul>
                            </div>
                            <div className="delete-edit-btn-container">
                                <button 
                                    className="btn-transparent" 
                                    onClick={()=> this.editMedicineCard(item.id)}>
                                        <MdEdit className="card-icons" />
                                </button>
                                <button 
                                    className="btn-transparent" 
                                    onClick={()=> this.deleteMedicineCard(item.id)}>
                                        <MdDelete className="card-icons" />
                                </button>                                
                            </div>
                        </li>)
                    })}
                </ul>
            </section>
        )
    }
}

export default Medicine