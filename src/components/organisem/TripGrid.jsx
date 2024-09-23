import TripCard from '../molecules/TripCard';
import Sydney from '../../asserts/PNG/sydney.jpeg';
import Destinations from '../../asserts/PNG/destinations.jpeg';
import Restaurant from '../../asserts/PNG/resturant.png';

 const TripGrid = () => {
  const trips = [
    {
      title: 'Sydney\'s 10 most fashionable 5 star hotels',
      description: 'Browse the fastest growing tourism sector in the heart of Australia tourism capital....',
      image: Sydney,
    },
    {
      title: 'Top cities for Vegan Travellers',
      description: 'Top sites where you do not have to worry about being a vegan. Our tourist guide is here....',
      image: Restaurant,
    },
    {
      title: 'World\'s top destinations during and post covid timeline',
      description: 'Pandemic is still intact and will be here for a longer time. Here’s where your next destination....',
      image: Destinations,
    },
  ];

  return (
    <div className="text-start w-11/12 mx-auto  mt-[12px]">
      <h2 className="text-{28px} font-bold mb-4">Get inspiration for your next trip</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trips.map((trip, index) => (
          <TripCard
            key={index}
            image={trip.image}
            title={trip.title}
            description={trip.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TripGrid;
