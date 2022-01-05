import React, { useEffect } from 'react';
import './App.css';
import { AppPropType } from './components/PropType';
import storeType from './redux/actions/storeType';
import { connect } from 'react-redux';
import { getPersons } from './redux/actions';
import TreeNode from './components/TreeNode';

const App:React.FC<AppPropType> = ({persons, getPersons}) => {

  useEffect(() => {
    const data = getPersons();
    console.log("user effect", data);
}, [getPersons]);

  return (
    <div className="App">
      <h1>Income Calculating</h1>
      <h3>Sidar Yuksel Mahrek Project</h3>
      <TreeNode />
    </div>
  );
}
const mapState = (state: storeType) => {
  return {
    persons: state.persons,
  }
}

export default connect(mapState, {getPersons})(App);
