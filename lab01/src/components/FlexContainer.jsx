
import PropTypes from 'prop-types';

function FlexContainer({ data, element }) {
  return (
    <div className="d-flex flex-wrap justify-content-start">
      {data.map(item => (
        <div className="col-md-4 col-sm-6 mb-3" key={item.id}> {/* Używamy klas Bootstrap do rozkładu w kolumnach */}
          {element(item)}
        </div>
      ))}
    </div>
  );
}

FlexContainer.propTypes = {
  data: PropTypes.array.isRequired,
  element: PropTypes.func.isRequired,
};

export default FlexContainer;
