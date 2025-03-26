import { useState } from "react";

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
        imagePreviews: [], // Store preview URLs
        features: ""
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "images") {
            const fileArray = Array.from(files);
            const remainingSlots = 5 - formData.images.length; // Limit to 5 images
            
            if (remainingSlots <= 0) {
                alert("You can only upload up to 5 images.");
                return;
            }

            const selectedFiles = fileArray.slice(0, remainingSlots); // Pick only allowed number
            const imageUrls = selectedFiles.map(file => URL.createObjectURL(file));

            setFormData((prevData) => ({
                ...prevData,
                images: [...prevData.images, ...selectedFiles], // Append new images
                imagePreviews: [...prevData.imagePreviews, ...imageUrls] // Append new previews
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDatTOSend = new FormData();
        formDatTOSend.append("make", formData.make);   
        formDatTOSend.append("model", formData.model);
        formDatTOSend.append("year", formData.year);
        formDatTOSend.append("mileage", formData.mileage);
        formDatTOSend.append("fuelType", formData.fuelType);
        formDatTOSend.append("transmission", formData.transmission);
        formDatTOSend.append("condition", formData.condition);
        formDatTOSend.append("engineSize", formData.engineSize);
        formDatTOSend.append("color", formData.color);
        formDatTOSend.append("description", formData.description);
        formDatTOSend.append("features", formData.features);
        
        formData.images.forEach((image) => {
            formDatTOSend.append("images", image);
        });

        try{
            const response = await fetch("http://localhost:5000/add",{
                method: "POST",
                body: formDatTOSend
            });
            const data = await response.json();
            console.log(data);
            alert("Car added successfully");   
            } catch (error) {
                console.log(error);
                alert("An error occured, please try again");
        }
    };

    return (
        <div className="addForm">
            <h2>List a Car</h2>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="make" placeholder="Car make" onChange={handleChange} value={formData.make} />
                    <input type="text" name="model" placeholder="Car model" onChange={handleChange} value={formData.model} />
                    <input type="number" name="year" placeholder="YOM" onChange={handleChange} value={formData.year} />
                    <input type="number" name="mileage" placeholder="Mileage" onChange={handleChange} value={formData.mileage} />
                    <input type="text" name="fuelType" placeholder="Fuel type" onChange={handleChange} value={formData.fuelType} />
                    <input type="text" name="transmission" placeholder="Transmission" onChange={handleChange} value={formData.transmission} />
                    <input type="text" name="condition" placeholder="Condition" onChange={handleChange} value={formData.condition} />
                    <input type="text" name="engineSize" placeholder="Engine capacity (in cc)" onChange={handleChange} value={formData.engineSize} />
                    <input type="text" name="color" placeholder="Color" onChange={handleChange} value={formData.color} />
                    <textarea name="description" placeholder="Description" onChange={handleChange} value={formData.description} />

                    <input type="file" name="images" multiple onChange={handleChange} accept="image/*" />
                    <div>
                        {formData.imagePreviews.map((image, index) => (
                            <img key={index} src={image} alt="Car preview" width="100" />
                        ))}
                    </div>

                    <input type="text" name="features" placeholder="Features (sunroof, airbags, etc.)" onChange={handleChange} value={formData.features} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddCar;
