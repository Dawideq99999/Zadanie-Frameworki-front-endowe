import PropTypes from 'prop-types';
import PersonalInfo from "../components/PersonalInfo";

function Lab1Page({ names }) {
    return (
        <>
            <h1>Laboratorium 1</h1>
            <h3>Lista imion</h3>
            {names.map((o) => <PersonalInfo key={o.id} {...o} />)}
        </>
    );
}

Lab1Page.propTypes = {
    names: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            
        })
    ).isRequired,
};

export default Lab1Page;
