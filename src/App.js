import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Error, Register, ProtectedRoute } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    AllJobs,
    Profile,
    SharedLayout,
    Stats,
    AddJob,
} from "./pages/dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <SharedLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Stats />} />
                    <Route path="all-jobs" element={<AllJobs />} />
                    <Route path="add-job" element={<AddJob />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="landing" element={<Landing />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <ToastContainer position="top-center" />
        </BrowserRouter>
    );
}

/* 
https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/31961576#overview
#### 67) SetEditJob Reducer
*/

/* 
import styled from "styled-components";
// How to use styled components
const Buitton = styled.button`
    background: red;
    color: white;
    font-size: 2rem;
`;
const SecondBuitton = styled.button`
    background: blue;
    color: yellow;
    font-size: 2rem;
`; 

function App() {
    return (
        <div>
            <Buitton>Click Me</Buitton>
            <SecondBuitton>Click Me</SecondBuitton> 
            <Landing />
        </div>
    );
}
*/
export default App;
