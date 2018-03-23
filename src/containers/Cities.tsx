import Cities from '../components/Cities';
import * as Actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
import { City } from '../types';

const mapStateToProps = (state: StoreState) => {
  return {
    cities: state.cities
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<StoreState>
) => {
  return {
    dispatchCitiesStart: () => {
      dispatch(Actions.fetchCities());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
