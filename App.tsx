import React from './node_modules/@types/react/ts5.0';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import AssetList from './AssetList';

export default () => {
  return <Environment />;
};

const Environment = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AssetList />} />
      </Routes>
    </Router>
  );
};
