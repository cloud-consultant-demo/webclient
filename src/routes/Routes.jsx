import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/home/App';
import Questions from '../components/questions/App';
import Response from '../components/response/App';
import CloudChoice from '../components/cloudchoice/App';
import Deploy from '../components/deploy/App';
import { FormDataProvider } from '../context/formDataContext';

const AppRoutes = () => {
  return (
    <FormDataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/cloudchoice" element={<CloudChoice />} />
          <Route path="/response" element={<Response />} />
          <Route path="/deploy" element={<Deploy />} />
        </Routes>
      </Router>
    </FormDataProvider>
  );
};

export default AppRoutes;

