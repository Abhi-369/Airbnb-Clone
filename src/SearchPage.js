import React from 'react';
import './SearchPage.css'
import { Button } from "@material-ui/core";
import SearchResult from './SearchResult'

function SearchPage() {
  return <div className="searchPage">

    <div className="searchPage__info">
      <p>62 stays - 26 august to 30 august - 2 guest</p>
      <h1>Stays nearby</h1>
      <Button variant="outlined"
      >Cancellation Flexibility</Button>

      <Button variant="outlined"
      >Type of place</Button>

      <Button variant="outlined"
      >Price</Button>

      <Button variant="outlined"
      >Rooms and beds</Button>

      <Button variant="outlined"
      >More filters</Button>

    </div>
    
    <SearchResult img="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg"
      title="Stay at this spacious Edwardian House" description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathroom - wifi - Kitchen - Free parking - washing Machine" star={4.73}
      price="$30 / night"
      total="$117 total"
    />

    <SearchResult img="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg"
     location="Private room in center of London" title="Independant luxury studio apartment" description="2 guest - 3 bedroom - 1 bed - 1.5 shared bathroom - wifi - Kitchen" star={4.3}
      price="$40 / night"
      total="$157 total"
    />

    <SearchResult img="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg"
    location= "Private room in center of London"
      title="30 mins to Oxford Street, Excel London" description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathroom - wifi - Kitchen - Free parking - washing Machine" star={4.73}
      price="$40 / night"
      total="$117 total"
    />
    
    <SearchResult img="https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg"
    location= "Private room in center of London"
      title="London Studio Apartments" description="4 guest - 4 bedroom - 4 bed - 2 bathroom - Free parking - washing Machine" star={3}
      price="$35 / night"
      total="$207 total"
    />

    <SearchResult img="https://images.pexels.com/photos/1879061/pexels-photo-1879061.jpeg"
    location= "Private room in center of London"
      title="30 mins to Oxford Street, Excel London" description="1 guest - 1 bedroom - 1 bed - 1.5 shared  bathroom - wifi - kitchen - Free parking - washing Machine" star={4.1}
      price="$55 / night"
      total="$320 total"
    />

    <SearchResult img="https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg"
    location= "Private room in center of London"
      title="Spacious Peaceful Modern Bedroom" description="3 guest - 1 bedroom - 1 bed - 1.5 shared bathroom - wifi - Free parking - Dry Cleaning" star={5}
      price="$60 / night"
      total="$450 total"
    />

    <SearchResult img="https://images.pexels.com/photos/2747901/pexels-photo-2747901.jpeg"
    location= "Private room in center of London"
      title="The Blue Room In the London" description="2 guest - 1 bedroom - 1 bed - 1.5 shared bathroom - wifi - Washing Machine" star={4.23}
      price="$65 / night"
      total="$480 total"
    />

    <SearchResult img="https://images.pexels.com/photos/53603/bedroom-architectural-interior-lifestyle-53603.jpeg"
    location= "Private room in center of London"
      title="Independent luxury studio apartment" description="3 guests - 1 bedroom - 1 bed - 1.5 shared bathroom - wifi - Kitchen - Free parking - Washing Machine" star={3.85}
      price="$90 / night"
      total="$650 total"

    />

  </div>;
}

export default SearchPage;
