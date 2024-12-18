"use client";
import { useState } from "react";
import styles from "./FormRent.module.css";

export interface IInitialData{
  name:string;
  surname:string;
  telephone:string;
  address:string;
}

const FormRent = () => {
  const initialData = {name: "", surname: "",telephone: "", address:""}
  const [data,setData] = useState<IInitialData>(initialData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data, [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    return true;
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundForm}>
      <div className={styles.titlecontainer}>
        <h3 className={styles.title}>Completa los siguientes datos para alquilar</h3>
      </div>
      <form className={styles.formRent} onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="">Nombre</label>
          <input 
          type="text"
          name="name"
          id="name" 
          placeholder="Ej: Lucas"
          value={data.name}
          onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Apellido</label>
          <input 
          type="text"
          name="surname"
          id="surname" 
          placeholder="Ej: Ramirez"
          value={data.surname}
          onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Telefono</label>
          <input 
          type="text"
          name="telephone"
          id="telephone" 
          placeholder="Ej: 11 8343-2345"
          value={data.telephone}
          onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Direccion del evento</label>
          <input 
          type="text"
          name="address"
          id="address" 
          placeholder="Ej: Av cordoba 182"
          value={data.address}
          onChange={handleChange}
          />
        </div>
        <div className={styles.divButton}>
        <button>Averiguar Presupuesto</button>
        </div>
      </form>
      </div>
    </div>
  );
};
export default FormRent;
