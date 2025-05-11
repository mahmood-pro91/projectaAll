import "./addform.css";






export default function AddForm() {
  return (
    <div className="addForm">
      <form className="form">
        <label htmlFor="id" >Enter your Id : </label>
        <input id="id" type="text" placeholder="Enter your Id" />
        <label htmlFor="name" >Enter your Name : </label>
        <input id="name" type="text" placeholder="Enter your name" />
        <label htmlFor="email" >Enter your Email : </label>
        <input id="email" type="email" placeholder="Enter your phone email" />
        <label htmlFor="phone">Enter your Phone : </label>
        <input id="phone" type="text" placeholder="Enter your phone" />
        <label htmlFor="address">Enter your Address : </label>
        <input id="address" type="text" placeholder="Enter your address" />
        <label htmlFor="id-number">Enter your social-number : </label>
        <input id="id-number" type="text" placeholder="Enter your social-number" />
        <button className= "btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
}