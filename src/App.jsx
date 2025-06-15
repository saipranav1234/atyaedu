import React , {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import CoursesPage from './pages/Courses/CoursesPage';
import EventsPage from './pages/Events/EventsPage';
import CourseDetailsPage from './pages/Courses/CourseDetailsPage';
import EventsDetail from './pages/Events/EventsDetail'
import ScrollToTop from './ScrollToTop';
// import PreLoader from './PreLoader/PreLoader';
import TallyForm from './TallyForm';
import {useSmoothScroll} from './useSmoothScroll'
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useUser } from '@clerk/clerk-react';
import {supabase} from '../lib/supabaseClient'
import DashboardHome from './dashboards/DashboardHome';
import ProtectedRoute from './ProtectedRoute';
import SSOCallback from './SSOCallback';

const App = () => {

  const { isSignedIn, user } = useUser();

 
  

  useEffect(() => {
    const syncToSupabase = async () => {
      if (isSignedIn && user) {
        const { id, fullName, primaryEmailAddress } = user;
  
        // Step 1: Check if user with clerkid already exists
        const { data: existingUser, error: fetchError } = await supabase
          .from('users')
          .select('id')
          .eq('clerkid', id)
          .maybeSingle(); // Returns null instead of throwing if not found
  
        if (fetchError) {
          // console.error('❌ Error checking user in Supabase:', fetchError.message);
          return;
        }
  
        // Step 2: Insert only if not already present
        if (!existingUser) {
          const { error: insertError } = await supabase.from('users').insert([
            {
              clerkid: id,
              name: fullName,
              email: primaryEmailAddress?.emailAddress,
            },
          ]);
  
          if (insertError) {
            // console.error('❌ Supabase insert error:', insertError.message);
          } else {
            // console.log('✅ New user inserted into Supabase');
          }
        } else {
          // console.log('ℹ️ User already exists in Supabase');
        }
      }
    };
  
    syncToSupabase();
  }, [isSignedIn, user]);
  




  useSmoothScroll()
  return (
    <div className='app'> 
    {/* <PreLoader/> */}
    <Router>
      <ScrollToTop/>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardHome />
                </ProtectedRoute>
              }
            />
            <Route path="/sso-callback" element={<SSOCallback />} />
          <Route path="/courses/:courseId" element={<CourseDetailsPage />} />
          <Route path="/events/:eventTitle" element={<EventsDetail />} />
          {/* <Route path="/forms" element={<TallyForm/>} /> */}
          {/* <Route path="/courses/course1" element={<Course1 />} />
          <Route path="/courses/course2" element={<Course2 />} />
          <Route path="/courses/course3" element={<Course3 />} />
          <Route path="/events/event1" element={<Event1 />} />
          <Route path="/events/event2" element={<Event2 />} />
          <Route path="/events/event3" element={<Event3 />} /> */}
        </Routes>
        <Footer />  
      </div>
    </Router>
    </div>
  );
};

export default App;
 