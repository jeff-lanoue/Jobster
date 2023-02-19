import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Error, Dashboard, Register } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="landing" element={<Landing />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

/* 
https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/31850036#overview
442 #### 21) React Toastify 
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
