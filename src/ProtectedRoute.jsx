import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { supabase } from '../lib/supabaseClient';

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn, user } = useUser(); // isLoaded is important
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkRole = async () => {
      if (!isLoaded) return; // wait for Clerk to load

      if (!isSignedIn || !user) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('users')
        .select('role')
        .eq('clerkid', user.id)
        .maybeSingle();

      if (error) {
        console.error("Supabase error:", error);
        setIsAdmin(false);
      } else {
        setIsAdmin(data?.role === 'admin');
      }

      setLoading(false);
    };

    checkRole();
  }, [isLoaded, isSignedIn, user]);

  if (!isLoaded || loading) return <p>Loading...</p>;
  if (!isAdmin) return <Navigate to="/" replace />;

  return <>{children}</>;
};

export default ProtectedRoute;
