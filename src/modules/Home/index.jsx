
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserDetailsEpics } from '../../stores/modules/home/home.actions'
import View from './View';

function mapStateToProps(state) {
  return {
    user: state.Home.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    services: bindActionCreators(
      {
        getUserDetailsEpics
      },
      dispatch,
    ),
    dispatch,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);