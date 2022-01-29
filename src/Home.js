import React from 'react';
import Banner from './Banner';
import './Home.css';
import Card from './Card';

function Home() {
    return <div className="home">
        <Banner />

        <div className="home__section">
            <Card
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Online Experiences"
                description="unique activities we can do together, led by a world of hosts."
            />
            <Card src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Unique stays"
                description="Spaces are one than just a place to sleep."
            />

            <Card src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="Entire homes" description="Comfortable private places, with room for friends family." />
        </div>

        <div className="home__section">

            <Card src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="3 Bedroom Flat in Bournemouth" description="Superhost with a stunning view of the beachside in Sunny Bournemouth" price="$130/night" />

            <Card src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="Penthouse in London" description="Enjoy the amazing sights of London with this stunning penthouse" price="$350/night" />

            <Card src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="1 Bedroom apartment" description="Superhost with great amenties and a fabolous shopping complex nearby"
                price="$70/night" />
        </div>
    </div>;
}

export default Home;
