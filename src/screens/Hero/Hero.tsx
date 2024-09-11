
type Props = {};
const Hero = (props: Props) => {
  return (
    <section className="relative bg-orange-50 h-screen overflow-hidden">

      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-white opacity-60"></div>

      {/* Content */}
      <div className="relative flex items-center justify-center h-full">
        <div className="container mx-auto text-center px-6 lg:px-12">
          <h1 className="text-5xl font-bold text-black lg:text-6xl leading-tight">

            תזונה בהתאמה אישית
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            <h2 className=" text-2xl">B.Sc יפית קרופניק - דיאטנית קלינית</h2>
            השיגו בריאות מיטבית עם אסטרטגיות תזונה מותאמות אישית
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full hover:bg-indigo-500 transition duration-300"
            >
              התחילו עכשיו
            </a>
          </div>
        </div>
      </div>
    </section>

  )
};
export default Hero;


{/* <section className="bg-orange-50 py-24 mt-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div className="relative order-1 lg:order-1">
      <Image
        src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/hero.png"
        alt="אישה נהנית מאוכל, ארוחות במיכלי אחסון וקערות אוכל על שולחן"
        width={600}
        height={600}
        className="w-full h-auto"
      />
    </div>
    <div className="space-y-8 order-2 lg:order-2 text-right">
      <h1 className="text-5xl font-bold text-gray-900 leading-tight">
לעשות שינוי בגוף 
      </h1>
      <p className="text-xl text-gray-600 leading-relaxed">
      להפסיק להתעסק באובססיביות לגבי אוכל במקום להתחיל תרגיש טוב לגוף שלך. להתחיל לחיות אורח חיים בריא ומאוזן
      </p>
      <div className="space-x-4">
        <a href="#" className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-300 mr-4">
          התחל לאכול בריא
        </a>
        <a href="#" className="inline-block px-8 py-4 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-100 transition duration-300 border-2 border-gray-200">
          למידע נוסף ↓
        </a>
      </div>
    </div>
  
  </div>
</section> */}