import { useEffect , useState , useRef } from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";

import "./table.css"



export default function ClientsTable() {
    const dbUrl ="http://localhost:3200/clients";
    const [clients, setClients] = useState();
    const  [fileData, setFileData] = useState([]);

    
    
    const fileRef =useRef();


    useEffect(() => {
        fetch(dbUrl)
            .then((res) => res.json())
            .then((data) => setClients(data));
            console.log("rendered from db")
    }, []);

    // check if the file is excel valid
    const isExcelFile = (file)=> {
        const allowedExtensions =[".xlsx",".xls"];
        const fileName = file.name.toLowerCase();
        const extension = fileName.slice(fileName.lastIndexOf("."));
        return allowedExtensions.includes(extension);

    }
    // function for fetch data from file 
    const handleFile =(e)=> {
        const file = e.target.files[0];
        if(!file) return;
        if(isExcelFile(file) && file.size !== 0 ){
            const reader = new FileReader();
            reader.readAsBinaryString(file);
            reader.onload = function(e) {
                const data1 = e.target.result
                const workbook = XLSX.read(data1, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const parsedData = XLSX.utils.sheet_to_json(sheet,{defval:null});
                
                //console.log(parsedData)
                setFileData(parsedData)
                //save date to database
                fetch(dbUrl,{
                    method:"POST",
                    headers:{
                        "content-Type":"application/json"
                    },
                    body:JSON.stringify(parsedData)
                   }).then((res) => {
                       console.log(res)
                       alert("Client Added Successfully")
                       window.location.reload()
                   }).catch((err) => {
                       console.log(err)
                   })
                
                
                
            };
        }else{
            alert("Please upload a valid excel file")
        }
    }
    
                
                    
    

            return (
            <div className="clients-container">
                <h2>Clients Table Records</h2>
                <div X>
                    <Link to="/client/create" className="btn btn-add">Add new Client</Link>
                    <div>
                        <label htmlFor="addExcel" className="btn btn-add">Add Excel</label>
                        <input type="file" id="addExcel" 
                        className="" accepts=".xlsx , .xls , .csv , .pdf"
                        onChange={handleFile}
                        ref={fileRef}
                        />
                    </div>            
                    <table className="table rwd-table ">
                        <thead>
                            <tr className="tr table-header">
                                <th className="th id">ID</th>
                                <th className="th">Name</th>
                                <th className="th">Address</th>
                                <th className="th">Position</th>
                                <th className="th">Social Number</th>
                                <th className="th">Phone Number</th>
                                <th className="th">Payment Date</th>
                                <th className="th">Action</th>
                            </tr>
                        </thead>
            
                        <tbody className="table-body">
                            { clients && clients.map((client, index) => {
                            
                                return(
                                    <tr key={index} className="tr table-row">
                                        <td className="box id">{index + 1}</td>
                                        <td className="box">{client.name}</td>
                                        <td className="box">{client.address}</td>
                                        <td className="box position">{client.position}</td>
                                        <td className="box">{client.socialNumber}</td>
                                        <td className="box">{client.phone}</td>
                                        <td className="box">{client.paymentDate}</td>
                                
                                        <td>
                                            <a href="" className="btn">View</a>
                                            <a href="" className="btn ">Edit</a>
                                            <a href="" className="btn ">Delete</a>
                                        </td>
                                    </tr>

                                )
                            })

                            }
                                { fileData && fileData.map((client,index) => {
                                
                                    return(
                                        <tr className="table-row">
                                            <td className="box">{index + 1}</td>
                                            <td className="box">{client.name}</td>
                                            <td className="box">{client.address}</td>
                                            <td className="box">{client.position}</td>
                                            <td className="box">{client.socialNumber}</td>
                                            <td className="box">{client.phone}</td>
                                            <td className="box">{client.paymentDate}</td>
                                    
                                            <td>
                                                <a href="" className="btn">View</a>
                                                <a href="" className="btn ">Edit</a>
                                                <a href="" className="btn ">Delete</a>
                                            </td>
                                        </tr>

                                    )
                                    })
                                
                                }
                        </tbody>
                    </table>
                </div>
            </div>
  );        
}       