import { useState } from 'react';
import "../assets/css/Person.css";

const Person = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { name, surname, email };
    setPeople([...people, newPerson]);
    setName("");
    setSurname("");
    setEmail("");
  };

  return (
    <div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <input
              type="text"
              className='form-control'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className='form-control'
              placeholder='Surname'
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <input
              type="email"
              className='form-control'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
      </div>
      <div className="container-table">
        <table className='table'>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{person.name}</td>
                <td>{person.surname}</td>
                <td>{person.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Person;
