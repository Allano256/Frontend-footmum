import React, { useEffect, useRef, useState } from 'react'

const useClickOutSideToggle = () => {

    // This is for the burger menue
    const [expanded, setExpanded]=useState(false);
    // the ref will be used to reference if the user clicked inside or outside the menue
    const ref = useRef(null);
   

    useEffect(()=> {
      // The useEffect will handle clicks outside the burger menue
      const handleClickOutside= (event)=>{
        if(ref.current && !ref.current.contains(event.target)){
          setExpanded(false)
        }
      }

      document.addEventListener('mouseup',handleClickOutside)
      // Even though the navbar wont be unmounted its still good practice to to remove event listeners incase its use on an element that could unmount
      return ()=> {
        document.removeEventListener('mouseup', handleClickOutside)
      }
    }, [ref]);


  return {expanded, setExpanded, ref}
}

export default useClickOutSideToggle
