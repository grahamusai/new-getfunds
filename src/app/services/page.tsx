import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="flex gap-7 px-24 py-20 mt-16">
        <div className="w-1/2 ">
          <div className="image px-10 py-[11rem] flex justify-center items-center bg-gray-300">image</div>
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-bold">About getfunds</h2>
          <p className="pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum non
            in earum placeat iusto esse omnis, distinctio consequatur? Sapiente
            nemo ut accusamus minus enim voluptatum facere reiciendis, repellat
            facilis quia?
          </p>
          <p className="pt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa neque
            obcaecati reiciendis aliquam nisi doloremque recusandae aspernatur
            nam unde fugiat rem similique delectus molestiae temporibus, enim
            nesciunt ut quaerat! Blanditiis neque rem maxime, dolorum debitis,
            maiores explicabo, ipsam velit mollitia in dolores numquam quasi
            laudantium quisquam necessitatibus cum sequi commodi!
          </p>
          <p className="pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id dolores fugiat deleniti, numquam doloribus, aliquam perspiciatis incidunt vitae officia libero enim corrupti! Fugiat aspernatur placeat inventore non, eum consequuntur.
          </p>
        </div>
      </div>
      <div className="flex gap-7 px-24 py-20">
        
        <div className="w-1/2">
          <h2 className="text-3xl font-bold">About getfunds</h2>
          <p className="pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum non
            in earum placeat iusto esse omnis, distinctio consequatur? Sapiente
            nemo ut accusamus minus enim voluptatum facere reiciendis, repellat
            facilis quia?
          </p>
          <p className="pt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa neque
            obcaecati reiciendis aliquam nisi doloremque recusandae aspernatur
            nam unde fugiat rem similique delectus molestiae temporibus, enim
            nesciunt ut quaerat! Blanditiis nequ                                                                                                                                                                e rem maxime, dolorum debitis,
            maiores explicabo, ipsam velit mollitia in dolores numquam quasi
            laudantium quisquam necessitatibus cum sequi commodi!
          </p>
          <p className="pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id dolores fugiat deleniti, numquam doloribus, aliquam perspiciatis incidunt vitae officia libero enim corrupti! Fugiat aspernatur placeat inventore non, eum consequuntur.
          </p>
        </div>
        <div className="w-1/2 ">
          <div className="image px-10 py-[11rem] flex justify-center items-center bg-gray-300">image</div>
        </div>
      </div>
      
      
      <Footer />
    </div>
  )
}

export default Services