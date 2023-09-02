import { FlightFilters } from './components/FlightFilters';
import { FlightList } from './components/FlightList';

export default function App() {
  return (
    <div className="App">
      <FlightFilters />
      <FlightList />
    </div>
  );
}
