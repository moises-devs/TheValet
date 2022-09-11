import React, {useState} from "react";
export const ModalContext = React.createContext({});

export default function ModalContextProvider(props) {
    const [showModal, setShowModal] = useState(false);
    
    function toggleModal() {
        setShowModal( prevState => {
            return !prevState;
        })
    }

    return (
        <ModalContext.Provider value={{
            showModal,
            toggleModal
        }}>
            {props.children}

        </ModalContext.Provider> 
    );
    
}