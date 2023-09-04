import React, { useState } from "react";
import "./Maintenance.css"; // Import your CSS stylesheet
import { useForm } from "react-hook-form";

export default function Maintenance() {
  const [isAddBookMenuOpen, setAddBookMenuOpen] = useState(false);

  // Function to toggle the Add Book menu
  const toggleAddBookMenu = () => {
    setAddBookMenuOpen(!isAddBookMenuOpen);
  };
  const { register, handleSubmit } = useForm();

  async function addBook(formData) {
    const data = await fetch("http://localhost:5000/api/v1/book/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const res = await data.json();
    console.log(res);
  }
  return (
    <div className="book-management-container">
      <h1>Book Management</h1>
      <div className="button-container">
        <button onClick={toggleAddBookMenu}>Add Book</button>
        <button>Update Book</button>
        <button>Get Book</button>
      </div>
      {isAddBookMenuOpen && (
        <div className="add-book-menu">
          <form onSubmit={handleSubmit(addBook)}>
            <div className="form-group">
              <label htmlFor="bookName">Book Name: </label>
              <input
                {...register("name", {
                  required: "Please enter a username",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author Name: </label>
              <input
                {...register("author", {
                  required: "Please enter an author name",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="serialno">Serial No: </label>
              <input
                {...register("serialno", {
                  required: "Please enter serial no.",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity: </label>
              <input
                {...register("quantity", {
                  required: "Please enter quantity",
                })}
              />
            </div>
            <button>Add Book</button>
          </form>
        </div>
      )}
    </div>
  );
}
