import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
const Navbaar = () => {

    const [contacts, setContacts] = useState([
        { name: "Subroto Biswas", phone: "1-477-935-8478 x6430", email: "Karley.Dach@jasper.info" },
        { name: "Kurtis Weissnat", phone: "210.067.6132", email: "Telly.Hoeger@billy.biz" },
        { name: "Nicholas Runolfsson", phone: "586.493.6943 x140", email: "Sherwood@rosamond.me" },
        { name: "Glenna Reichert", phone: "(775)976-6794 x1206", email: "Chaim.McDermott@dana.io" },
        { name: "Clementina DuBuque", phone: "024-648-3804", email: "Rey.Padberg@karina.biz" },
    ]);
 const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [temp, setTemp] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleEdit = (index) => {
    setEditIndex(index);
    setTemp(contacts[index]); // load selected contact
    setEditMode(true);
  };

  // save edited data
  const handleSave = () => {
    const updated = [...contacts];
    updated[editIndex] = temp; // update only 1 contact
    setContacts(updated);
    setEditMode(false);
  };

    const deleteNote = (key) => {
        const newtasks = [...contacts]
        newtasks.splice(key, 1)
        setContacts(newtasks)

    }
    return (

        <div>
            <div className="flex bg-blue-600 items-center justify-between py-6 px-16 text-3xl text-white">Contect Book
                <button className="bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm text-black">Create Contact</button>
            </div>
            <div className="bg-white shadow-md rounded-b-lg mx-20  my-20 overflow-auto">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="w-10 p-3"></th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr></thead>

                    <tbody className="w-screen ">
                        {contacts.map((ele, key) => (
                            <tr key={key} className="">
                                <td className="p-3 ">
                                    <input type="checkbox" />
                                </td>
                                <td className="p-3 font-medium text-center">{ele.name}</td>
                                <td className="p-3 font-medium text-center">{ele.phone}</td>
                                <td className="p-3 font-medium text-center">{ele.email}</td>
                                <td className="p-3 text-center gap-4">
                                    <button onClick={()  => handleEdit(key)} className="cursor-pointer"><FiEdit size={18} /></button>
                                  
                                    <button onClick={() => deleteNote(key)} className="text-red-500  cursor-pointer"><MdDelete size={20} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {editMode && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-white p-6 shadow-xl rounded-lg w-80">
          <h3 className="text-lg font-bold mb-3">Edit Contact</h3>

          <input
            type="text"
            placeholder="Name"
            value={temp.name || ""}
            onChange={(e) => setTemp({ ...temp, name: e.target.value })}
            className="border p-2 w-full mb-2"
          />

          <input
            type="text"
            placeholder="Phone"
            value={temp.phone || ""}
            onChange={(e) => setTemp({ ...temp, phone: e.target.value })}
            className="border p-2 w-full mb-2"
          />

          <input
            type="email"
            placeholder="Email"
            value={temp.email || ""}
            onChange={(e) => setTemp({ ...temp, email: e.target.value })}
            className="border p-2 w-full mb-2"
          />

          <div className="flex justify-end gap-4 mt-3">
            <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">
              Save
            </button>

            <button onClick={() => setEditMode(false)} className="bg-gray-400 text-white px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        </div>
      )}
        </div>

    )
}
export default Navbaar
