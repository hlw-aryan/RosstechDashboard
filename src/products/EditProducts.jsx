import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import { db } from "../firebase-config";
import Swal from "sweetalert2";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { useAppStore } from "../appStore";
import { useEffect } from "react";

export default function EditProducts({ fid, closeEvent }) {
  const [ReferenceNo, setReferenceNo] = useState("");
  const [Producer, setProducer] = useState("");
  const [Product, setProduct] = useState("");
  const [Day, setDay] = useState("");
  const [NoOfBoxesPerPallet, setNoOfBoxesPerPallet] = useState("");
  const [NoOfPallets, setNoOfPallets] = useState("");
  const [Unit, setUnit] = useState(""); 
  const [NoOfKG, setNoOfKG] = useState("");
  const [PricePerUnit, setPricePerUnit] = useState("");
  const [TotalPrice, setTotalPrice] = useState("");
  const [ArrivedGoods, setArrivedGoods] = useState("");
  const [StatusOfGoods, setStatusOfGoods] = useState("");
  const [Comments, setComments] = useState("");
  const setRows = useAppStore((state) => state.setRows);
  const empCollectionRef = collection(db, "products");

  useEffect (() => { 
    console.log("FID : " + fid.id);
    setReferenceNo(fid.ReferenceNo);
    setProducer(fid.Producer);
    setProduct(fid.Product);
    setDay(fid.Day);
    setNoOfBoxesPerPallet(fid.NoOfBoxesPerPallet);
    setNoOfPallets(fid.NoOfPallets);
    setUnit(fid.Unit);
    setNoOfKG(fid.NoOfKG);
    setPricePerUnit(fid.PricePerUnit);
    setTotalPrice(fid.TotalPrice);
    setArrivedGoods(fid.ArrivedGoods);
    setStatusOfGoods(fid.StatusOfGoods);
    setComments(fid.Comments);
  }, []);

  const handleReferenceNoChange = (event) => {
    setReferenceNo(event.target.value);
  };
  const handleProducerChange = (event) => {
    setProducer(event.target.value);
  };
  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };
  const handleDayChange = (event) => {
    setDay(event.target.value);
  };
  const handleNoOfBoxesPerPalletChange = (event) => {
    setNoOfBoxesPerPallet(event.target.value);
  };
  const handleNoOfPalletsChange = (event) => {
    setNoOfPallets(event.target.value);
  };
  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };
  const handleNoOfKGChange = (event) => {
    setNoOfKG(event.target.value);
  };
  const handlePricePerUnitChange = (event) => {
    setPricePerUnit(event.target.value);
  };
  const handleTotalPriceChange = (event) => {
    setTotalPrice(event.target.value);
  };
  const handleArrivedGoodsChange = (event) => {
    setArrivedGoods(event.target.value);
  };
  const handleStatusOfGoodsChange = (event) => {
    setStatusOfGoods(event.target.value);
  };
  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };
  const createUser = async () => {
    const userDoc = doc(db,"products",fid.id);
    const newFields = {
      ReferenceNo: ReferenceNo,
      Producer: Producer,
      Product: Product,
      Day: Day,
      NoOfBoxesPerPallet: NoOfBoxesPerPallet,
      NoOfPallets: NoOfPallets,
      Unit: Unit,
      NoOfKG: NoOfKG,
      PricePerUnit: PricePerUnit,
      TotalPrice: TotalPrice,
      ArrivedGoods: ArrivedGoods,
      StatusOfGoods: StatusOfGoods,
      Comments: Comments
    };
    await updateDoc(userDoc,newFields);
    getProducts();
    closeEvent();
    Swal.fire("Submitted!", "Your file has been submitted.", "success");
  };

  const getProducts = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Edit Products
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={5}>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="Reference no."
            variant="outlined"
            value={ReferenceNo}
            onChange={handleReferenceNoChange}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="Producer."
            variant="outlined"
            value={Producer}
            onChange={handleProducerChange}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="Product"
            variant="outlined"
            value={Product}
            onChange={handleProductChange}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="Day"
            variant="outlined"
            value={Day}
            onChange={handleDayChange}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="No of box per pallet"
            variant="outlined"
            value={NoOfBoxesPerPallet}
            onChange={handleNoOfBoxesPerPalletChange}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="No of pallets"
            variant="outlined"
            value={NoOfPallets}
            onChange={handleNoOfPalletsChange}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="Unit"
            variant="outlined"
            value={Unit}
            onChange={handleUnitChange}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="No of K.G"
            variant="outlined"
            value={NoOfKG}
            onChange={handleNoOfKGChange}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="Price per Unit"
            variant="outlined"
            value={PricePerUnit}
            onChange={handlePricePerUnitChange}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="Total Price"
            variant="outlined"
            value={TotalPrice}
            onChange={handleTotalPriceChange}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="Arrived Goods"
            variant="outlined"
            value={ArrivedGoods}
            onChange={handleArrivedGoodsChange}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="Status of Goods"
            variant="outlined"
            value={StatusOfGoods}
            onChange={handleStatusOfGoodsChange}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={15}>
          <TextField
            id="outlined-basic"
            label="Any Comments"
            variant="outlined"
            value={Comments}
            onChange={handleCommentsChange}
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={15}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={createUser}>
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
