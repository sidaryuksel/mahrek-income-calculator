import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppPropType } from './components/PropType';
import TreeNode from './components/TreeNode';
import { getPersons } from './redux/actions';
import storeType from './redux/actions/storeType';
import './App.css';

const App: React.FC<AppPropType> = ({persons, getPersons}) => {
  useEffect(() => {
    getPersons();

  }, [getPersons]);
  
  console.log("person from db:", persons);

  return (
    <div className="App">
      {/*
      <h1>Income Calculating</h1>
      <h3>Sidar Yuksel Mahrek Project</h3>
      */}
     { persons.length !== 0 ?
      <TreeNode />
      : null}
    </div>
  );
}

const mapState = (state: storeType) => {
  return {
    persons: state.persons,
  }
}

export default connect(mapState, { getPersons })(App);
