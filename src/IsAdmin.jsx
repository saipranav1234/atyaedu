import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { supabase } from '../lib/supabaseClient';

const IsAdmin = ({ children }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkRole = async () => {
      if (!isLoaded || !isSignedIn || !user) return;

      const { data, error } = await supabase
        .from('users')
        .select('role')
        .eq('clerkid', user.id)
        .maybeSingle();

      if (!error && data?.role === 'admin') {
        setIsAdmin(true);
      }
    };

    checkRole();
  }, [isLoaded, isSignedIn, user]);

  return isAdmin ? <>{children}</> : null;
};

export default IsAdmin;
