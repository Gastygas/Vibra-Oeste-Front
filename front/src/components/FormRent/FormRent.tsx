"use client";
import { useEffect, useState } from "react";
import styles from "./FormRent.module.css";
import {
  validateAddress,
  validateCity,
  validateName,
  validateNumberAddress,
  validatePhone,
  validateStartHour,
} from "@/helpers/validation";
import { formService } from "@/services/form.service";
// import { Loader } from '@googlemaps/js-api-loader'

export interface IInitialData {
  name: string;
  surname: string;
  telephone: string;
  city: string;
  numberAddress: string;
  address: string;
  startHour: string;
  endHour?: string;
  speakers?: string;
  console?: string;
  microphones?: string;
  mapLocation?: { lat: number; lng: number };
  addressMaps?: string;
}

const Form = () => {
  const initialData: IInitialData = {
    name: "",
    surname: "",
    telephone: "",
    address: "",
    city: "",
    numberAddress: "",
    startHour: "",
    microphones: "0",
    console: "0",
    speakers: "0",
    mapLocation: { lat: 24, lng: 42 },
    addressMaps: "",
  };
  const initialDirty = {
    name: false,
    surname: false,
    telephone: false,
    address: false,
    city: false,
    numberAddress: false,
    startHour: false,
  };
  const [data, setData] = useState<IInitialData>(initialData);
  const [error, setError] = useState(initialData);
  const [dirty, setDirty] = useState(initialDirty);
  // const [map, setMap] = useState<google.maps.Map | null>(null);
  // const [marker, setMarker] = useState<google.maps.Marker | null>(null);

  useEffect(() => {
    setError({
      name: validateName(data.name),
      surname: validateName(data.surname),
      telephone: validatePhone(data.telephone),
      address: validateAddress(data.address),
      city: validateCity(data.city),
      numberAddress: validateNumberAddress(data.numberAddress),
      startHour: validateStartHour(data.startHour),
    });
  }, [data]);

  // useEffect(() => {
  //   const loader = new Loader({
  //     apiKey: `${process.env.NEXT_PUBLIC_MAPS_KEY}`,
  //     version: 'weekly',
  //     libraries: ['places'],
  //   });
  //   loader.load().then(() => {
  //     initMap();
  //   });
  // })

  // const initMap = () => {
  //   const mapOptions = {
  //     center: { lat: -38.005965, lng: -57.544678 },
  //     zoom: 15,
  //   };
  //   const mapDiv = document.getElementById('map') as HTMLElement;
  //   const newMap = new google.maps.Map(mapDiv, mapOptions);
  //   setMap(newMap);
  //   console.log(map);

  //   const input = document.getElementById('addressMaps') as HTMLInputElement;
  //   const autocomplete = new google.maps.places.Autocomplete(input, {
  //     fields: ['address_components', 'geometry'],
  //     types: ['address'],
  //   })

  //   autocomplete.addListener('place_changed', () => {
  //     const place = autocomplete.getPlace();
  //     if (place.geometry && place.geometry.location) {
  //       const location = place.geometry.location;
  //       const newCoordinates = { lat: location.lat(), lng: location.lng() };
  //       newMap.setCenter(location);
  //       if (marker) {
  //         marker.setPosition(newCoordinates)
  //       } else {
  //         const newMarker = new google.maps.Marker({
  //           position: newCoordinates,
  //           map: newMap,
  //         });
  //         setMarker(newMarker);
  //       }
  //       const streetNumber = getAddressComponent(place, 'street_number') || '';
  //       const route = getAddressComponent(place, 'route') || '';
  //       const fullAddress = `${route} ${streetNumber} `.trim();
  //       setData(prevData => ({
  //         ...prevData,
  //         address: fullAddress,
  //         mapLocation: newCoordinates,
  //       }));
  //     }
  //   });
  // };

  // const getAddressComponent = (place: google.maps.places.PlaceResult, type: string) => {
  //   const component = place.address_components?.find((comp) => comp.types.includes(type));
  //   return component ? component.long_name : '';
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setDirty({ ...dirty, [e.target.name]: true });
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await formService(data);
    if (res.success) {
      alert("formulario subido correctamente");
      window.location.href = `https://api.whatsapp.com/send?phone=541136021862&text=
        // Nombre:${data.name}%20${data.surname}%20
        // Parlantes:${data.speakers}
        // Consola:${data.console}
        // Microfonos:${data.microphones}
        // Comienzo:${data.startHour}
        // Fin:${data.endHour ? data.endHour : "ninguna"}
        // Ciudad: ${data.city}
        // Direccion:${data.address}%20${data.numberAddress}`;
    } else {
      console.log(res);

      // return alert (`Completa correctamente: ${res.error.map((err:any) => err.property)}`)
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundForm}>
        <div className={styles.titlecontainer}>
          <h3 className={styles.title}>
            Completa los siguientes datos para alquilar
          </h3>
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
            {dirty.name ? (
              <p className={styles.errorText}>{error.name}</p>
            ) : null}
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
            {dirty.surname ? (
              <p className={styles.errorText}>{error.surname}</p>
            ) : null}
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
            {dirty.telephone ? (
              <p className={styles.errorText}>{error.telephone}</p>
            ) : null}
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
            {/* {dirty.telephone ? <p className={styles.errorText}>{error.telephone}</p> : null } */}
          </div>
          <div className={styles.divInput}>
            <label htmlFor="">Horario</label>
            <div className={styles.divTime}>
              <div>
                <h4>Comienzo</h4>
                <input
                  type="datetime-local"
                  name="startHour"
                  id="startHour"
                  value={data.startHour}
                  onChange={handleChange}
                />
              </div>
              <div>
                <h4>Fin</h4>
                <input
                  type="datetime-local"
                  name="endHour"
                  id="endHour"
                  value={data.endHour}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className={styles.divInput}>
            <label htmlFor="">Ciudad</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Ej: Merlo"
              value={data.city}
              onChange={handleChange}
            />
            {dirty.city ? (
              <p className={styles.errorText}>{error.city}</p>
            ) : null}
          </div>
          <div className={styles.divInput}>
            <label htmlFor="">Direccion del evento</label>
            <div className={styles.divAddress}>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Ej: Av cordoba"
                value={data.address}
                onChange={handleChange}
              />
              {/* <label htmlFor="addresMaps" className='mb-6 text-center'>Busca tu direccion aquí</label>
            <input
            type="text"
            id="addressMaps"
            name="addressMaps"
            onChange={handleChange}
            value={data.addressMaps}
            placeholder="Dirección"
            className={styles.inputStyle} />
            <div id="map" style={{ height: '400px', width: '800px' }}></div> */}
              <label htmlFor="">N°</label>
              <input
                type="text"
                name="numberAddress"
                id="numberAddress"
                placeholder="134"
                value={data.numberAddress}
                onChange={handleChange}
              />
            </div>
            {dirty.address ? (
              <p className={styles.errorText}>{error.address}</p>
            ) : null}
            {dirty.numberAddress ? (
              <p className={styles.errorText}>{error.numberAddress}</p>
            ) : null}
          </div>
          {error.address ||
          error.name ||
          error.address ||
          error.telephone ||
          error.numberAddress ||
          error.city ||
          error.startHour ? (
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
export default Form;
