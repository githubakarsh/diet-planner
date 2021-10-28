
import { useEffect } from 'react';

/**
 * 
 * @param {*} title 
 * @returns a react hook where it is used to set the title of the application {document title}
 */
export const UseHelmet = (title) => {
      return useEffect(() => {
        window.document.title = title;
      }, [title])  
}
