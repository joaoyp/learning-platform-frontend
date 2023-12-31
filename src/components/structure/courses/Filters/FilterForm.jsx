import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { useDispatch } from "react-redux";
import { setFilterSearch } from "../../../../redux/slices/filterSlice";

export const FilterForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <FormControl className="w-5/12">
        <InputLabel id="filterBy">Filter By:</InputLabel>
        <Select
          displayEmpty
          label="Filter By:"
          defaultValue="Creation"
          onChange={(event) => {
            dispatch(setFilterSearch(event.target.value));
          }}
        >
          <MenuItem value="Creation">Creation</MenuItem>
          <MenuItem value="Alphabetically">Alphabetically</MenuItem>
          <MenuItem value="Price">Price</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
