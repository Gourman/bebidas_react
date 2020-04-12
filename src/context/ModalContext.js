// eslint-disable-next-line
import React, { createContext, useState, useEffect } from 'react';
// eslint-disable-next-line
import axios from 'axios';

// crear el context

export const ModalContext = createContext();

const ModalProvider = (props) => {

    // state del provider
    // eslint-disable-next-line
    const [idreceta, guardarIdReceta] = useState(null)

    return ( 
        <ModalContext.Provider
            value={{
                guardarIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;