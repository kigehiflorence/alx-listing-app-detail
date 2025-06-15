import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {property.images.map((img, i) => (
          <img key={i} src={img} alt={property.name} className="w-full h-60 object-cover rounded-lg" />
        ))}
      </div>

      {/* Layout: Description & Booking */}
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {/* Description */}
          <h2 className="text-2xl font-semibold mt-4">Description</h2>
          <p className="mt-2">{property.description}</p>

          {/* Amenities */}
          <h2 className="text-2xl font-semibold mt-6">What this place offers</h2>
          <ul className="flex flex-wrap mt-2">
            {property.category.map((item, i) => (
              <li key={i} className="bg-gray-200 m-1 px-3 py-1 rounded-full">{item}</li>
            ))}
          </ul>

          {/* Reviews */}
          <ReviewSection reviews={property.reviews} />
        </div>

        {/* Booking Section */}
        <div>
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
