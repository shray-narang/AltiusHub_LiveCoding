import React,{useState} from "react";
import axios from "axios";

function imageUpload(){
    const [image,setImage] = useState(null);
    const handleImageChange = (e)=>{
        setImage(e.target.files[0]);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',image);
        try{
            const response = await axios.post('/upload', formData);
        }
        catch(error){

        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleImageChange}/>
                <button type="submit">Upload</button>
            </form>
        </div>
    )
}

export default imageUpload