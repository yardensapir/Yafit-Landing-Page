'use client'

import animationData from '../../../public/lotties/avocado_2.json'
import Lottie from "lottie-react";

type Props = {};
const About = (props: Props) => {
    return (
        <section className="relative bg-gray-100 overflow-hidden" dir="rtl">
            <div className="container mx-auto px-6 lg:px-12 py-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">

                    <div className="lg:order-2">
                        <Lottie animationData={animationData} loop={true} />
                    </div>

                    <div className="text-right">
                        <h2 className="text-4xl font-bold text-black mb-4">
                            השיגו את מטרות הבריאות שלכם
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            יפית היא דיאטנית קלינית מוסמכת עם ניסיון רב, המציעה שירותי ייעוץ תזונתי מותאמים אישית בתל אביב. בהכוונה המקצועית שלה, תוכלו לבצע בחירות תזונתיות נכונות ולהגיע ליעדי הבריאות שלכם. סמכו על יפית לייעוץ תזונתי מדויק ויעיל, המבוסס על שנים של ניסיון וידע מעמיק.
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-white transform skew-y-6"></div>



        </section>



    )
};
export default About;
