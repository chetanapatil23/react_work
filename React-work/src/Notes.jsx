import { useState } from "react";
import { MdClose } from "react-icons/md";

const Notes = () => {
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [tasks, setTasks] = useState([])
    const sunmitNote = (e) => {
        e.preventDefault();
        const newTasks = [...tasks]
        newTasks.push({ title, details })
        setTasks(newTasks)
        setTitle("")
        setDetails("")
    }
    const deleteNote = (idx) => {
        const newtasks = [...tasks]
        newtasks.splice(idx, 1)
        setTasks(newtasks)

    }
    return (
        <div className="h-screen lg:flex bg-gray-400 text-2xl">

            <form onSubmit={(e) => {
                sunmitNote(e)
            }} className="flex flex-col lg:w-1/2 items-start gap-4 p-10">
                <h1 className="text-3xl font-bold">ADD Notes</h1>

                <input type="text"
                    placeholder="Enter Notes Heading"
                    className="px-5 w-1/2 py-2 border-2 rounded"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }} />

                <textarea type="text"
                    className="px-5 py-2 w-1/2 h-30 border-2 rounded"
                    placeholder="Enter Datils"
                    value={details}
                    onChange={(e) => {
                        setDetails(e.target.value)
                    }} />
                <button type="submit" className="bg-white w-1/2 active:scale-95 px-5 py-2 border-2 rounded">Add Note</button>

            </form>
            <div className=" lg:w-1/2 lg:border-l-2 p-10">
                <h1 className="text-3xl font-bold">Recent Notes</h1>
                <div className="flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-full">
                    {tasks.map(function (elem, idx) {
                        return <div key={idx} className=" relative h-52 w-40 rounded-xl bg-cover text-black py-4 px-4 bg-[url('https://img.freepik.com/free-vector/leafy-patterned-note-background_53876-97734.jpg?semt=ais_hybrid&w=740&q=80')]">
                            <button onClick={() => deleteNote(idx)} className="absolute top-2 right-2 rounded-full"><MdClose /></button>
                            <h3 className="leading-tight text-2xl font-bold">{elem.title}</h3>
                            <p className="mt-4 leading-tight font-medium text-gray-500">{elem.details}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Notes
