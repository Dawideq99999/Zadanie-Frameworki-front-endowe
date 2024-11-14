
import FlexContainer from '../components/FlexContainer';
import { data } from '../data/module-data';

function Lab3Page() {
  return (
    <div>
      <h1>Laboratorium 3</h1>
      <FlexContainer 
        data={data} 
        element={({ name, id }) => (
          <div key={id} className="card" style={{ width: '18rem', margin: '10px' }}>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default Lab3Page;
