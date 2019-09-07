import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitRegistrationEpic, submitRegistrationCancel } from '../..//stores/modules/registration/registration.actions';
import View from './View';

const mapStateToProps = state => {
  return {
    isSuccess: state.Registration.isSuccess
  };
};

const mapDispatchToProps = dispatch => ({
  services: bindActionCreators(
    {
      submitRegistrationEpic,
      submitRegistrationCancel
    },
    dispatch,
  ),
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
