import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp'
import ProblemsSet from './components/allProblems'
import SingleProblem from './components/singleProblem';

/*
 * Temporary problems array schema
 */
const problems = [
    {
        title: '201. Bitwise AND of Numbers Range',
        difficulty: 'Medium',
        acceptance: '42%',
        slug: 'bitwise',
    },
    {
        title: '202. Happy Number',
        difficulty: 'Easy',
        acceptance: '54.9%',
        slug: 'happy-number',
    },
    {
        title: '203. Remove Linked List Elements',
        difficulty: 'Hard',
        acceptance: '42%',
        slug: 'remove-linked-list',
    },
];


/**
 * This is the main entery of the App
 * @returns 
 */
function App() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/problemsSet" element={<ProblemsSet problems={problems} />} />
            <Route path="/problems/:problem_slug" element={<SingleProblem />} />
          </Routes>
        </Router>
      </div>
    );
  }

export default App;
