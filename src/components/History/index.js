import "./index.css"

const medicalHistory = [
    {condition: "Hypertension (diagnosed in 2000)", year: 2000, id:10001},
    {condition: "Type 2 diabetes (diagnosed in 2010)", year: 2010, id:10002},
    {condition: "Hyperlipidemia (high cholesterol) (diagnosed in 2012)", year: 2012, id:10003},
    {condition: "History of myocardial infarction (heart attack) (2017)", year: 2017, id:10004},
    {condition: "Chronic kidney disease (stage 3) (diagnosed in 2018)", year: 2018, id:10005},
    {condition: "Depression (diagnosed in 2012)", year: 2012, id:10006},
    {condition: "Age-related macular degeneration (diagnosed in 2021)", year: 2021, id:10007},
    {condition: "Osteoporosis (diagnosed in 2019)", year: 2019, id:10008}
];

medicalHistory.sort((a, b)=> b.year - a.year);

const currentMedication = [
    "Lisinopril 10mg (for hypertension)",
    "Metformin 1000mg (for diabetes)",
    "Atorvastatin 20mg (for hyperlipidemia)",
    "Ibuprofen 400mg (as needed for arthritis pain)",
    "Aspirin 81mg (as a blood thinner)",
    "Alendronate 70mg (for osteoporosis)",
    "Omeprazole 20mg (for GERD)",
    "Antidepressant medication (name and dosage to be specified)",
    "Eye drops for macular degeneration (name to be specified)"
]

const surgicalHistory = ["Coronary artery bypass graft (CABG) surgery (2017) after myocardial infarction", "Knee replacement surgery (2016) for osteoarthritis"];

const familyHistory = [
    "Father: Hypertension, diabetes, and heart disease",
    "Mother: Hypertension and osteoporosis",
    "Siblings: No known medical conditions"
]


const History = ()=>{
    let count = 19543;
    return(
        <section className="tab-section">
            <div className="history-container">
                <div className="history-section-container">
                    <h2 className="history-section-heading">Current Medication</h2>
                    <ol className="current-medication-container">
                        {currentMedication.map(item=> <li key = {count++}>{item}</li>)}
                    </ol>
                </div>
                <div className="history-section-container">
                    <h2 className="history-section-heading">Medical History</h2>
                    <ol className="current-medication-container">
                        {medicalHistory.map(item=> <li key = {item.id}>{item.condition}</li>)}
                    </ol>
                </div>
                <div className="history-section-container">
                    <h2 className="history-section-heading">Surgical History</h2>
                    <ol className="current-medication-container">
                        {surgicalHistory.map(item=> <li key = { 41 * count++}>{item}</li>)}
                    </ol>
                </div>
                <div className="history-section-container">
                    <h2 className="history-section-heading">Family History</h2>
                    <ol className="current-medication-container">
                        {familyHistory.map(item=> <li key = { 29 * count++}>{item}</li>)}
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default History