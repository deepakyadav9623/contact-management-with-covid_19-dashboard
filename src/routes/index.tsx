import { Route, Routes } from 'react-router-dom';
import ContactList from '../components/ContactList';
import ChartAndMap from '../components/ChartAndMap';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" Component={ContactList} />
            <Route path="/maps-chart" Component={ChartAndMap} />
        </Routes>
    );
}

export default AppRoutes;