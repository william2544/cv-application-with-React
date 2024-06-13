import { useState } from "react";
import './App.css'

function Info() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [number,setNumber] = useState('')
    const [shool,setSchool] = useState('')
    const [study,setTitleOfStudy] = useState('')
    const [date,setDate] = useState('')
    const [company,setCompany] = useState('')
    const [position,setPosition] = useState('')
    const [startDate,setstartDate] = useState('')
    const [endDate,setEndDate] = useState('')

    // states for edit
    const [editGeneral,setEditGeneral] = useState(true)
    const [ediEducation,setEditEducation] = useState(true)
    const [editPreactical,setEditPractical] = useState(true)

    // function addName(e) {
    // setName(e.target.value);
    // }
    // function addEmail(e) {
    // setEmail(e.target.value);
    // }
    // function addNumber(e){
    // setNumber(e.target.value);
    // }
    // function addShcoolName(e) {
    //     setSchool(e.target.value)
    // }
    // function addTitle(e){
    //     setTitleOfStudy(e.target.value)
    // }
    // function addDate(e) {
    //     setDate(e.target.value)
    // }
    //  hundle input changes
    function hundleInputChanges(e,setter) {
        setter(e.target.value);
    }

    // hundle for edit modes
    function tugleEdigeneral() {
        setEditGeneral(!editGeneral);
    }
    function tugleEducation() {
        setEditEducation(!ediEducation);
    }
    function tugglePractical() {
        setEditPractical(!editPreactical);
    }
// submit hundler
    function hunldeSubmitGeneral(e) {
        e.preventDefault();
        setEditGeneral(false);
    }
    function hundleSubmitEducation(e) {
        e.preventDefault();
        setEditEducation(false);
    }
    function hundleSubmitPractical(e) {
        e.preventDefault();
        setEditPractical(false);
    }

    return(
        <div className='generalInfo'>
            <div className="leftSide">
                <h1>Your CV Application</h1>

                <h3>add general information</h3>

                {editGeneral ?
                    (
                        <div className="content">
                            <form onSubmit={hunldeSubmitGeneral}>
                            <input type="text" placeholder="name" value={name} onChange={(e) => hundleInputChanges(e, setName)}/>
                            <input type="email" placeholder="email" name="" value={email} onChange={(e) => hundleInputChanges(e, setEmail)} />
                            <input type="number" placeholder="phone number" value={number} onChange={(e) => hundleInputChanges(e, setNumber)} />
                            <button type="submit">Save</button>
                            </form>
                        </div>
                        
                    )
                :
                (
                    <div>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Phone Number: {number}</p>
                        <button onClick={tugleEdigeneral}>Edit</button>
                    </div>
                )
                }
                

                <h3>add your educational experience</h3>
                {ediEducation ?
                    (
                        <div className="content">
                            <form onSubmit={hundleSubmitEducation}>
                            <input type="text" placeholder="school name" value={shool} onChange={(e) => hundleInputChanges(e, setSchool)} />
                            <input type="text" placeholder="Tittle of study" value={study} onChange={(e) => hundleInputChanges(e, setTitleOfStudy)}/>
                            <input type="date" placeholder="Date?" value={date} onChange={(e) => hundleInputChanges(e, setDate)} />
                            <button type="submit">Save</button>
                            </form>
                        </div>
                    )
                :
                    (
                        <div>
                            <p>School: {shool}</p>
                            <p>Title of Study: {study}</p>
                            <p>Date: {date}</p>
                            <button onClick={tugleEducation}>Edit</button>
                        </div>
                    )
                }
                
                <h4>add practical experience</h4>
                {editPreactical?
                    (
                        
                        <div className="content">
                            <form onSubmit={hundleSubmitPractical}>
                                <input type="text" placeholder="Company" value={company} onChange={(e) => hundleInputChanges(e, setCompany)}/>
                                <input type="text" placeholder="Position" value={position} onChange={(e) => hundleInputChanges(e, setPosition)} />
                                <input type="date" placeholder="Started jod on?"  value={startDate} onChange={(e) => hundleInputChanges(e, setstartDate)}/>
                                <input type="date" name="" id="" placeholder="end job on date?" value={endDate} onChange={(e) => hundleInputChanges(e, setEndDate)}/>
                            <button type="submit">Save</button>
                            </form>
                        </div>
                    )
                :
                    (
                        <div>
                            <p>Company: {company}</p>
                            <p>Position: {position}</p>
                            <p>Start Date: {startDate}</p>
                            <p>End Date: {endDate}</p>
                            <button onClick={tugglePractical}>Edit</button>
                        </div>
                    )
                }
                
            </div>
            <div className="rightSide">
                <h2>Summary</h2>
                <h3>General Information</h3>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone Number: {number}</p>

                <h3>Educational Experience</h3>
                <p>School: {shool}</p>
                <p>Title of Study: {study}</p>
                <p>Date: {date}</p>

                <h3>Practical Experience</h3>
                <p>Company: {company}</p>
                <p>Position: {position}</p>
                <p>Start Date: {startDate}</p>
                <p>End Date: {endDate}</p>
            </div>

        </div>
        
    )



}
export default Info