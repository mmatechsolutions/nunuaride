import { useState} from "react";


const AddCar = () => {
    const [formData, setFormData] = useState({
        make: "",
        model: "",
        year: "",
        mileage: "",
        fuelType: "",
        transmission: "",
        condition: "",
        engineSize: "",
        color: "",
        description: "",
        images: [],
        features: ""
    });


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData,[name]: value});
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const imageUrls = files.map(file => URL.createObjectURL(file));
        setFormData({ ...formData, images: imageUrls });
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return ( 
        <div className="addForm">
            <h2>List a Car</h2>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input  type="text" name="make" placeholder="Car make" onChange={handleChange} value={formData.make}/>
                    <input type="text" name="model" placeholder="Car model" onChange={handleChange} value={formData.model}/>
                    <input type="number" name="year" placeholder="YOM" onChange={handleChange} value={formData.year} />
                    <input type="number" name="mileage" placeholder="Mileage" onChange={handleChange} value={formData.mileage}/>
                    <input type="text" name="fuelType" placeholder="Fuel type" onChange={handleChange} value={formData.fuelType}/>
                    <input type="text" name="transmission" placeholder="Transmission" onChange={handleChange} value={formData.transmission}/>
                    <input type="text" name="condition" placeholder="Condition" onChange={handleChange} value={formData.condition}/>
                    <input name="engineSize" placeholder="Engine capacity(in cc)" onChange={handleChange} value={formData.engineSize}/>
                    <input type="text" name="color" placeholder="Color" onChange={handleChange} value={formData.color}/>
                    <textarea type="text" name="description" placeholder="Description" onChange={handleChange} value={formData.description}/>
                    <input type="file"  name="images" multiple onChange={handleImageChange}  placeholder="Select images"/> 
                        <div>
                            {formData.images.map((image, index) => (
                                <img key={index} src={image} alt="Car preview" width="100" />
                            ))}
                        </div>
                    <input type="text" name="features" placeholder="features(sunroof,airbags etc)" onChange={handleChange} value={formData.features}/>
                    <button type="submit ">Submit</button>
                </form>
            </div>
            <div className="adminDash">Admin Dash</div>
        </div>
     );
}
 
export default AddCar;