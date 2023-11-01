import { useState } from "react";
import { PrimaryButton } from "../common/PrimaryButton";
import { SearchBar } from "./SearchBar";
import { FilterForm } from "./FilterForm";
import { OrderForm } from "./OrderForm";
import { useSelector } from "react-redux";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Rating,
  Slider,
  TextField,
  FormControl,
  RadioGroup,
  Radio,
} from "@mui/material";

export const SearchAside = () => {
  const searchBarValue = useSelector((state) => state.searchBar.value);
  const filterSearchValue = useSelector((state) => state.filterSearch.value);
  const orderSearchValue = useSelector((state) => state.orderSearch.value);

  //Data
  const categories = [
    "Java",
    "C#",
    "Kotlin",
    "C",
    "C++",
    "SQL",
    "HTML",
    "CSS",
    "Dart",
  ];
  const duration = ["Any", "< 1h", "1h - 4h", "> 4h"];

  //Selected Data
  //Rating can be obtained
  const [rating, setRating] = useState(3);
  const [selectedDuration, setSelectedDuration] = useState("Any");
  const [selectedCategories, setSelectedCategories] = useState([]);
  //Price can be obtained with price[0 or 1]
  const [price, setPrice] = useState([0, 500]);
  return (
    <>
      <aside className="w-3/12 top-16 sticky h-screen overflow-y-auto">
        <div className="m-4 mt-8 flex justify-around">
          <FilterForm></FilterForm>
          <OrderForm></OrderForm>
        </div>
        <div className="m-4 flex justify-around">
          <SearchBar />
          <PrimaryButton
            text="Search"
            size="medium"
            onClick={() => {
              console.log(selectedCategories);
              console.log(selectedDuration);
              console.log(price[0] + " - " + price[1]);
              console.log(rating);
              console.log(orderSearchValue);
              console.log(filterSearchValue);
              console.log(searchBarValue);
            }}
          />
        </div>
        <div className="m-6">
          <div className="flex justify-center">
            <Typography variant="h6" component="h2">
              Categories:
            </Typography>
          </div>
          <div className="w-full max-h-52 overflow-y-auto">
            <FormGroup>
              {categories.map((category, index) => (
                <FormControlLabel
                  key={index}
                  value={category}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedCategories((prevSelectedCategories) => [
                        ...prevSelectedCategories,
                        category,
                      ]);
                    } else {
                      setSelectedCategories((prevSelectedCategories) =>
                        prevSelectedCategories.filter(
                          (selectedCategory) => selectedCategory !== category
                        )
                      );
                    }
                  }}
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#008080",
                        },
                      }}
                    />
                  }
                  label={category}
                />
              ))}
            </FormGroup>
          </div>
          <div className="flex justify-center">
            <Typography variant="h6" component="h2">
              Price range (€):
            </Typography>
          </div>
          <Slider
            className="m-2"
            getAriaLabel={() => "Price Range"}
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            valueLabelDisplay="auto"
            sx={{
              color: "#008080",
            }}
            step={50}
            min={0}
            max={500}
          />
          <div className="mb-2 flex justify-center">
            <div className="w-1/4 mr-4">
              <TextField
                label="Min:"
                size="small"
                type="number"
                id="min"
                inputProps={{ min: 0, style: { textAlign: "center" } }}
                placeholder="Min"
                value={parseInt(price[0])}
                onChange={(event) =>
                  setPrice([
                    event.target.value === ""
                      ? 0
                      : parseInt(event.target.value),
                    price[1],
                  ])
                }
              />
            </div>
            <div className="flex items-center">
              <Typography>-</Typography>
            </div>
            <div className="w-1/4 ml-4">
              <TextField
                label="Max:"
                type="number"
                inputProps={{ min: 0, style: { textAlign: "center" } }}
                size="small"
                id="max"
                value={parseInt(price[1])}
                placeholder="Max"
                onChange={(event) =>
                  setPrice([
                    price[0],
                    event.target.value === ""
                      ? 500
                      : parseInt(event.target.value),
                  ])
                }
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Typography variant="h6" component="h2">
              Duration:
            </Typography>
          </div>
          <div className="m-2 w-full max-h-42 overflow-y-auto">
            <FormControl>
              <RadioGroup defaultValue="Any" name="radio-buttons-group">
                {duration.map((duration, index) => (
                  <FormControlLabel
                    key={index}
                    value={duration}
                    onChange={() => {
                      setSelectedDuration(duration);
                    }}
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#008080",
                          },
                        }}
                      />
                    }
                    label={duration}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
          <div className="flex justify-center">
            <Typography variant="h6" component="h2">
              Rating:
            </Typography>
          </div>
          <div className="mb-20">
            <Rating
              size="medium"
              className="m-2"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </div>
        </div>
      </aside>
    </>
  );
};
