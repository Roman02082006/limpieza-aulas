/*import { Navigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Cargando...</p>;
  if (!user) return <Navigate to="/Login_Admin" replace />; 

  return children;
};

export default PrivateRoute;*/
// src/Componentes/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { auth, db } from "../Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

const PrivateRoute = ({ children, requiredRole }) => {
  const [user, loading] = useAuthState(auth);
  const [role, setRole] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      if (user) {
        const userRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setRole(docSnap.data().rol);
        }
      }
      setChecking(false);
    };
    fetchRole();
  }, [user]);

  if (loading || checking) return <p>Cargando...</p>;
  if (!user) return <Navigate to="/" />;
  if (requiredRole && role !== requiredRole) return <Navigate to="/" />;

  return children;
};

export default PrivateRoute;
