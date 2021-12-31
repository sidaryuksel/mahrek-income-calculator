import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { green, lightGreen, grey } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

const BasicCard = () => {
  const [name, setName] = React.useState("You");
  const [price, setPrice] = React.useState(0);
  const [add, setAdd] = React.useState(false);
  const [clear, setClear] = React.useState(false);

  const inputProps = {
    step: 100,
  };

  const handleClickAdd = () => {
    console.log(name);
    console.log(price);

    setAdd(true);
    console.log("add: ",add);
    ///burada tre'ye children eklenecek
  }
  const handleClickClear = () => {
    console.log(name);
    console.log(price);

    setClear(true);
    console.log("clear: ",clear);
    //////burda clear props unu true olarak set edicem
  }
  return (

    <Card sx={{ maxWidth: 155, alignContent: "center", display: "inline-block", justifyContent: "center" }}>
      <CardHeader
        avatar={<PersonIcon />}
        title={<TextField name="name" id="name" label="" variant="standard" title="You" value={name} onChange={(e) => {console.log(name); setName(e.target.value);}}/>} />
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
          onChange={(e) => {console.log(price); setPrice(parseInt(e.target.value));}}
        />
        <Typography sx={{width:"100%", fontSize:'12px', fontWeight:'800'}}>Total: 1500</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add card" size="small">
          <AddIcon
          name="add"
            sx={{ fontWeight: "bold", fontSize: "medium", backgroundColor: green[500], color: lightGreen[50] }}
            onClick={handleClickAdd}
          />
        </IconButton>
        <IconButton aria-label="clear" size="small" sx={{ margin: "0px 5px 0px auto" }}>
          <ClearIcon
          name="clear"
            sx={{ fontWeight: "bold", fontSize: "medium", backgroundColor: grey[500], color: grey[50] }}
            onClick={handleClickClear}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default BasicCard;