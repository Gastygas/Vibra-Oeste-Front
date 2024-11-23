"use client";
import styles from "./FormRent.module.css";
const FormRent = () => {
  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    return true;
  };
  return (
    <div className={styles.container}>
        <h3>Completa los siguientes datos para alquilar</h3>
      <form className={styles.formRent} onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="">Nombre</label>
          <input 
          type="text"
          name=""
          id="" 
          placeholder="Ej: Lucas"
          />
        </div>
        <div>
          <label htmlFor="">Apellido</label>
          <input 
          type="text"
          name=""
          id="" 
          placeholder="Ej: Ramirez"
          />
        </div>
        <div>
          <label htmlFor="">Busca la direccion del evento</label>
          <input 
          type="text"
          name=""
          id="" 
          placeholder="Ej: Ramirez"
          />
        </div>

      </form>
    </div>
  );
};
export default FormRent;
