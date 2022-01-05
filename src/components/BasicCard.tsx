import * as React from 'react';
import { Card, CardHeader, CardContent, CardActions, TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { green, lightGreen, grey } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import {v4} from 'uuid';
import { TreeNodeDatum} from 'react-d3-tree/lib/types/common';
import storeType, { person } from '../redux/actions/storeType';
import { connect } from 'react-redux';
import { getPersons, updatePerson } from '../redux/actions';

const BasicCard: React.FC<TreeNodeDatum> = (nodeDatum) => {
  console.log("node datum: ",nodeDatum);

  const [person, setPerson] = React.useState({
    id: 0,
    name: "",
    price: 0,
    totalPrice: 0,
    children: []
  })

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [id, setId] = React.useState("");
  const [add, setAdd] = React.useState(false);
  const [clear, setClear] = React.useState(false);

  const inputProps = {
    step: 100,
  };

  const handleClickAdd = () => {
    console.log(person);
    setId(v4());
    console.log("id:" , id);

    setAdd(true);

    /////////////////
    ////değiştirilecek, gelen propstaki person datası update edilecek.
    //updatePErson(data eklencek);
    console.log("add: ", add);

   // updatePerson(node);

  }
  const handleClickClear = () => {
    console.log(person);

    setClear(true);
    /////////////////
    ////değiştirilecek, gelen propstaki person datası update edilecek.
    //updatePErson(data eklencek);
    /*
    setPerson(prevState => {
      const list = { name: prevState.name, price: prevState.price };
      return list;
    })*/
    console.log("clear: ", clear);
    console.log("person: ", person);
  }

  return (
    <>
      <Card sx={{ maxWidth: 155, alignContent: "center", display: "inline-block", justifyContent: "center" }}>
        <CardHeader
          avatar={<PersonIcon />}
          title={<TextField name="name" id="name" label="" variant="standard" title="You" value={person.name} onChange={(e) => { console.log(person.name); setPerson({ ...person, name: e.target.value }); }} />} />
        <CardContent sx={{ margin: "0px", padding: "0" }}>
          <span style={{ fontSize: "0.8rem", padding: "0", marginRight: "5px" }}>Self BV:</span>
          <TextField
            name="Self BV:"
            id="self-bv"
            variant="standard"
            type="number"
            inputProps={inputProps}
            value={person.price}
            sx={{ width: "45%", textAlign: "right", margin: "0", padding: "0", fontSize: "0.8rem" }}
            onChange={(e) => { console.log(person.price); setPerson({ ...person, price: parseInt(e.target.value) }); }}
          />
          <Typography sx={{ width: "100%", fontSize: '12px', fontWeight: '800' }}>Total: 1500</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton name="add" aria-label="add card" size="small" onClick={handleClickAdd}>
            <AddIcon
              sx={{ fontWeight: "bold", fontSize: "medium", backgroundColor: green[500], color: lightGreen[50] }}
            />
          </IconButton>
          <IconButton aria-label="clear" size="small" sx={{ margin: "0px 5px 0px auto" }} onClick={handleClickClear}>
            <ClearIcon
              name="clear"
              sx={{ fontWeight: "bold", fontSize: "medium", backgroundColor: grey[500], color: grey[50] }}
            />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}

const mapStateToProps = (state: storeType) => {
  return {
    persons: state.persons,
  };
};

export default connect(mapStateToProps, {
  getPersons,
  updatePerson,
})(BasicCard);