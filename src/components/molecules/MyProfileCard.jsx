const MyProfileCard = ({ contacts = [] }) => {
  return (
    <div className="w-11/12 mx-auto py-16">
      <div className="flex flex-wrap justify-center gap-6 lg:gap-6">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg w-full sm:w-56 md:w-48 lg:w-64 p-6 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center"
          >
            <div className="relative w-full h-80 overflow-hidden mb-6">
              <img
                src={contact.avatarUrl}
                alt={`${contact.name}'s avatar`}
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{contact.name}</h2>
            <p className="text-gray-600 mb-1 text-sm sm:text-base">{contact.role}</p>
            <p className="text-gray-500 text-sm sm:text-base">{contact.email}</p>
            {contact.phone && <p className="text-gray-500 text-sm sm:text-base">{contact.phone}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfileCard;
