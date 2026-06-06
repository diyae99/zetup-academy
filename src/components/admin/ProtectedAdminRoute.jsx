import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient.js';

export default function ProtectedAdminRoute({ children }) {
  const [isChecking, setIsChecking] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    let isMounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (isMounted) {
        setSession(data.session);
        setIsChecking(false);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  if (isChecking) {
    return (
      <div dir="ltr" className="grid min-h-screen place-items-center bg-lightBlue text-lg font-black text-navy">
        Chargement...
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
