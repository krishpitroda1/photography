import React, { useState } from 'react';

function Clients() {
  const [activeCategory, setActiveCategory] = useState('all');

  

  const clientStories = [
    {
      id: 1,
      category: 'wedding',
      name: 'Sarah & Michael',
      event: 'Beach Wedding',
      location: 'Maui, Hawaii',
      story: "Our wedding day was absolutely magical, and the photos captured every beautiful moment perfectly. The photographer's eye for detail and ability to capture genuine emotions made our special day even more memorable. We couldn't be happier with the results!",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      video: null,
      featured: true
    },
    {
      id: 2,
      category: 'portrait',
      name: 'Emma Rodriguez',
      event: 'Professional Headshots',
      location: 'New York, NY',
      story: "I needed professional headshots for my business and the photographer made me feel so comfortable and confident. The lighting and composition are perfect, and I've received so many compliments on my new photos.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      video: null,
      featured: false
    },
    {
      id: 3,
      category: 'fashion',
      name: 'Luxe Fashion House',
      event: 'Spring Collection',
      location: 'Los Angeles, CA',
      story: "Working with this photographer for our fashion campaign was incredible. They understood our brand aesthetic perfectly and delivered stunning images that exceeded our expectations. The attention to detail and creative vision is unmatched.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      video: null,
      featured: true
    },
    {
      id: 4,
      category: 'event',
      name: 'Tech Startup Conference',
      event: 'Annual Conference',
      location: 'San Francisco, CA',
      story: "The photographer captured our conference perfectly, from the keynote speakers to the networking sessions. The photos perfectly represent the energy and professionalism of our event. Highly recommended!",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      video: null,
      featured: false
    },
    {
      id: 5,
      category: 'wedding',
      name: 'Jessica & David',
      event: 'Garden Wedding',
      location: 'Napa Valley, CA',
      story: "Our garden wedding was a dream come true, and the photographer captured every magical moment. The natural lighting and beautiful surroundings were perfectly highlighted in our photos. We're forever grateful!",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      video: null,
      featured: false
    },
    {
      id: 6,
      category: 'portrait',
      name: 'Marcus Chen',
      event: 'Family Portraits',
      location: 'Seattle, WA',
      story: "Our family portraits turned out absolutely beautiful. The photographer was amazing with our kids and captured their personalities perfectly. These photos will be treasured for generations to come.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      video: null,
      featured: false
    }
  ];

  const filteredStories = activeCategory === 'all' 
    ? clientStories 
    : clientStories.filter(story => story.category === activeCategory);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide">Client Stories</h1>
          <p className="text-xl md:text-2xl mb-4 font-light">Real experiences, real moments, real magic</p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-red-500 mx-auto"></div>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="text-4xl font-bold text-amber-500 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="text-4xl font-bold text-amber-500 mb-2">1000+</div>
            <div className="text-gray-600">Events Captured</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="text-4xl font-bold text-amber-500 mb-2">5.0</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="text-4xl font-bold text-amber-500 mb-2">50+</div>
            <div className="text-gray-600">Awards Won</div>
          </div>
        </div>

       
        {/* Featured Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Story</h2>
          {clientStories.filter(story => story.featured).map((story) => (
            <div key={story.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={story.image} 
                    alt={story.event}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-amber-400 to-red-500 text-white text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{story.name}</h3>
                  <p className="text-lg text-amber-600 mb-2">{story.event}</p>
                  <p className="text-gray-600 mb-4">{story.location}</p>
                  <div className="flex mb-4">
                    {renderStars(story.rating)}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{story.story}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.filter(story => !story.featured).map((story) => (
            <div key={story.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={story.image} 
                  alt={story.event}
                  className="w-full h-64 object-cover"
                />
                {story.video && (
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{story.name}</h3>
                  <div className="flex">
                    {renderStars(story.rating)}
                  </div>
                </div>
                <p className="text-lg text-amber-600 mb-2">{story.event}</p>
                <p className="text-gray-600 mb-3">{story.location}</p>
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{story.story}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex justify-center mb-4">
                {renderStars(5)}
              </div>
              <p className="text-gray-200 mb-4 italic">"The photographer's creativity and attention to detail exceeded all our expectations. Every photo tells a story."</p>
              <p className="text-amber-400 font-semibold">- Maria & James</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex justify-center mb-4">
                {renderStars(5)}
              </div>
              <p className="text-gray-200 mb-4 italic">"Professional, talented, and incredibly easy to work with. Our wedding photos are absolutely stunning!"</p>
              <p className="text-amber-400 font-semibold">- Rachel & Tom</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex justify-center mb-4">
                {renderStars(5)}
              </div>
              <p className="text-gray-200 mb-4 italic">"The best investment we made for our special day. The photos are beyond beautiful and capture every emotion."</p>
              <p className="text-amber-400 font-semibold">- Lisa & Mark</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Create Your Story?</h2>
          <p className="text-gray-600 mb-8 text-lg">Let's capture your special moments and create memories that last a lifetime.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-amber-500 to-red-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              Book Your Session
            </a>
            <a 
              href="/portfolio" 
              className="inline-flex items-center px-8 py-3 border-2 border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-500 hover:text-white transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
