"use client";
import { useEffect, useState } from "react";
import styles from "./FormRent.module.css";
import { validateAddress, validateName, validatePhone } from "@/helpers/validation";
import { formService } from "@/services/form.service";

export interface IInitialData{
  name:string;
  surname:string;
  telephone:string;
  address:string;
  speakers?:string;
  console?:string;
  microphones?:string;
}

const FormRent = () => {
  const initialData: IInitialData = {name: "", surname: "",telephone: "", address:"",microphones:"0",console:"0",speakers:"0"}
  const initialDirty = {name: false, surname:false , telephone:false, address:false}
  const [data,setData] = useState<IInitialData>(initialData)
  const [error, setError] = useState(initialData);
  const [dirty, setDirty] = useState(initialDirty);

  useEffect(() => {
    setError({
      name: validateName(data.name),
      surname: validateName(data.surname),
      telephone: validatePhone(data.telephone),
      address: validateAddress(data.address)
    })
  },[data])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {        
    setData({
      ...data, [e.target.name]: e.target.value
    });
    setDirty({...dirty,[e.target.name]: true});
  };

  const handleOnSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    
    const res= await formService(data)
    if(res.success){
      alert("formulario subido correctamente")
    }
    else{      
      console.log(res);
      
      // return alert (`Completa correctamente: ${res.error.map((err:any) => err.property)}`)
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundForm}>
      <div className={styles.titlecontainer}>
        <h3 className={styles.title}>Completa los siguientes datos para alquilar</h3>
      </div>
      <form className={styles.formRent} onSubmit={handleOnSubmit}>
        <div className={styles.divInput}>
          <label htmlFor="">Nombre</label>
          <input 
          type="text"
          name="name"
          id="name" 
          placeholder="Ej: Lucas"
          value={data.name}
          onChange={handleChange}
          />
          {dirty.name ? <p className={styles.errorText}>{error.name}</p> : null }
        </div>
        <div className={styles.divInput}>
          <label htmlFor="">Apellido</label>
          <input 
          type="text"
          name="surname"
          id="surname" 
          placeholder="Ej: Ramirez"
          value={data.surname}
          onChange={handleChange}
          />
          {dirty.surname ? <p className={styles.errorText}>{error.surname}</p> : null }
        </div>
        <div className={styles.divInput}>
          <label htmlFor="">Telefono</label>
          <input 
          type="text"
          name="telephone"
          id="telephone" 
          placeholder="Ej: 11 8343-2345"
          value={data.telephone}
          onChange={handleChange}
          />
          {dirty.telephone ? <p className={styles.errorText}>{error.telephone}</p> : null }
        </div>
        <div className={styles.divInput}>
          <label htmlFor="">Equipo</label>
          <div className={styles.sound}>
        <div onChange={handleChange}>
        <h4>parlantes</h4>
        <select name="speakers" id="speakers">
          <option value="0">0</option>
          <option value="1">1 </option>
          <option value="2">2 </option>
        </select>
        </div>
        <div onChange={handleChange}>
        <h4>consola</h4>
        <select name="console" id="console">
          <option value="0">0</option>
          <option value="1">1 </option>
        </select>
        </div>
        <div onChange={handleChange}>
        <h4>microfonos</h4>
        <select name="microphones" id="microphones">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        </div>
        </div>
          {dirty.telephone ? <p className={styles.errorText}>{error.telephone}</p> : null }
        </div>
        <div className={styles.divInput}>
          <label htmlFor="">Direccion del evento</label>
          <input 
          type="text"
          name="address"
          id="address" 
          placeholder="Ej: Av cordoba 182"
          value={data.address}
          onChange={handleChange}
          />
          {dirty.address ? <p className={styles.errorText}>{error.address}</p> : null }
        </div>
        {error.address || error.name || error.address || error.telephone ? (
        <div className={styles.divButtonError}>
        <button disabled={true}>Averiguar Presupuesto</button>
        </div>
        ) : (
          <div className={styles.divButton}>
        <button>Averiguar Presupuesto</button>
        </div>
        )}
      </form>
      </div>
    </div>
  );
};
export default FormRent;
