import * as React from 'react';
import { Card, CardHeader, CardContent, CardActions, TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { green, lightGreen, grey } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import { v4 } from 'uuid';
import storeType, { person } from '../redux/actions/storeType';
import { connect } from 'react-redux';
import { updateNode, createNode, clearNodeAndChildren, updateTotal } from '../redux/actions';

const BasicCard = (props: any) => {
  console.log("props: ", props);
  /*
    const [person, setPerson] = React.useState({
      id: 0,
      name: "",
      price: 0,
      totalPrice: 0,
      parentId: ""
    })
  */
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [parentId, setParentId] = React.useState("");

  const [add, setAdd] = React.useState(false);
  const [clear, setClear] = React.useState(false);

  React.useEffect(() => {
    setName(props.name);
    setId(props.id);
    setTotalPrice(props.totalPrice);
    setPrice(props.price);
    setParentId(props.parentId);
  }, [setName, setId, setPrice, setTotalPrice, setParentId]);

  const inputProps = {
    step: 100,
  };

  const handleClickAdd = () => {
    setAdd(true);

    /////////////////
    ////değiştirilecek, gelen propstaki person datası update edilecek.
    console.log("add: ", add);
    console.log("parentID", id)

    const create = props.createNode(id);
    console.log("create :", create);
  }
  const handleClickClear = () => {
    // console.log(person);

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
    props.clearNodeAndChildren(id);
  }
  console.log("useefect id: ", id)

  return (
    <>
      <Card sx={{ maxWidth: 155, alignContent: "center", display: "inline-block", justifyContent: "center" }}
        onClick={() => {const data= {id, name, price}; props.updateNode(data); props.updateTotal(data)}}
      >
        <CardHeader
          avatar={<PersonIcon />}
          title={
            <TextField
              name="name"
              id="name"
              label=""
              variant="standard"
              title="You"
              value={name}
              onChange={(e) => { console.log("input name:", e.target.value); setName(e.target.value); }}
            />
          } />
        <CardContent sx={{ margin: "0px", padding: "0" }}>
          <span style={{ fontSize: "0.8rem", padding: "0", marginRight: "5px" }}>Self BV:</span>
          <TextField
            name="Self BV:"
            id="self-bv"
            variant="standard"
            type="number"
            inputProps={inputProps}
            value={price}
            sx={{ width: "45%", textAlign: "right", margin: "0", padding: "0", fontSize: "0.8rem" }}
            onChange={(e) => { console.log(price); setPrice(parseInt(e.target.value)); }}
          />
          <Typography sx={{ marginLeft: "-35px", padding: "0", width: "100%", fontSize: '12px', fontWeight: '800' }}>Total: {totalPrice}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton name="add" aria-label="add card" size="small" onClick={() => handleClickAdd()}>
            <AddIcon
              sx={{ fontWeight: "bold", fontSize: "medium", backgroundColor: green[500], color: "#fff" }}
            />
          </IconButton>
          <IconButton aria-label="clear" size="small" sx={{ margin: "0px 5px 0px auto" }} onClick={() => handleClickClear()}>
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
  updateNode, createNode, clearNodeAndChildren, updateTotal
})(BasicCard);