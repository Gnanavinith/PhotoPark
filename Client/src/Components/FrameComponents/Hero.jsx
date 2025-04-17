import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" min-h-screen relative bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
              Special Offer: 15% off your first order
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frame Your Memories with Premium Quality Frames
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Upload your favorite photos and choose from our collection of handcrafted frames. 
              Preview your framed photo instantly and get it delivered to your doorstep.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/customize">
                <button className="inline-flex h-10 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                  Upload & Customize
                </button>
              </Link>
              <Link to="/gallery">
                <button className="inline-flex h-10 px-4 py-2 border-2 border-black text-black rounded-lg hover:bg-gray-100">
                  Browse Frame Gallery
                </button>
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] aspect-square relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] border-[20px] border-frame-black relative">
                <img 
                  src="/placeholder.svg"
                  alt="Framed Photo Example"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-[60%] h-[60%] border-[16px] border-frame-walnut rotate-6 shadow-lg">
              <img 
                src="/placeholder.svg"
                alt="Framed Photo Example"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-[50%] h-[50%] border-[12px] border-frame-oak -rotate-6 shadow-lg">
              <img 
                src="/placeholder.svg"
                alt="Framed Photo Example"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
