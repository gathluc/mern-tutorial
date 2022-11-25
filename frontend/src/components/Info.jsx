
import { useState, useRef } from "react";
// import View from "./viewInfo";
import BasicDocument from "./createPdf";

const FormX = () => {
    const [formValues, setFormValues] = useState({
      name: "",
      email: "",
      description: ""
    });
    const [isFormVisible, setIsFormVisible] = useState(true);

    const inputFileRef = useRef();

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);

        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        console.log(inputFileRef?.current?.files);
        setIsFormVisible(false);
    };

    return (
    <>
      {isFormVisible ? (
        <form id="formu" onSubmit={handleSubmit} className="row">
          <h1>FORM SEND to PDF</h1>
          <div className="col-md-6">
            <label>Full Name</label>
            <input
              placeholder="Text input"
              name="name"
              value={formValues?.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label>Email</label>
            <input
              type="email"
              placeholder="Text input"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label>Description</label>
            <textarea  placeholder="Description"
              name="description"
              value={formValues.description}
              onChange={handleChange}>
           </textarea>
          </div>
          <div className="col-md-6">
            <label>File / Image</label>
            <input type="file" ref={inputFileRef} />
          </div>
          <button type="submit" className="color-primary">
            Save
          </button>
        </form>
      ) : (
        <BasicDocument data={formValues} />
      )}
    </>
  );
};

export default FormX;