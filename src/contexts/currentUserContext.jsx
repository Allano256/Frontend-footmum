import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useHistory } from "react-router-dom";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const history =useHistory();

  const handleMount = async () => {
    try {
      const { data } = await axiosRes.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

 

  // useMemo is used to cache complex values that take time to compute, use it here coz it runs before the childrebn components are mounted.

  useMemo(()=>{

    axiosReq.interceptors.request.use(
      async(config)=>{
        try{
          await axios.post('/dj-rest-auth/token/refresh/')
        } catch(err){
          setCurrentUser((prevCurrentUser)=> {
            if(prevCurrentUser){
            history.push('/signin')
            }
            // Redirect them to signin page and set the curren user to null
            return null
          });
          return config;
        }
        return config;
      },
      (err)=>{
        return Promise.reject(err)
      }
    )




    axiosRes.interceptors.response.use(
      (response)=>response,
      async (err)=>{
        if(err.response?.status==401){
          try{
            await axios.post('/dj-rest-auth/token/refresh/')
          } catch(err){
            setCurrentUser(prevCurrentUser =>  {
              if(prevCurrentUser){
                history.push('/signin')
              }
              return null
            })
          }
          // If no error refreshing the token, return err.config to exit the interceptor
          return axios(err.config)
        }
        // I the error was not a 401 i will reject the Promise with an error to exit the interceptor
        return Promise.reject(err)
      }
    )
  },[history] );

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};