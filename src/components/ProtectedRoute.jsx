import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/hooks/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()
   // 1.Load current authenticated user
    const {user, isLoading, isAuthenticated} = useUser()

    // 2. If no authenricated user then navigate to /login
    useEffect(() => {
      if(!isAuthenticated && !isLoading) navigate('/login')
    }, [isAuthenticated, isLoading, navigate])
    
    //3.While loading show spinner
    if(isLoading) return <Spinner/>
    
    //4. if there is an authenticated user load the app (applayout components with all of its childrens)
    if(isAuthenticated) return children;
};


export default ProtectedRoute;
