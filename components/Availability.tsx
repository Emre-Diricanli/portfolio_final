"use client";
import WorldMap from "@/components/ui/world-map";

const Availability = () =>{
    return (
        <section className=" py-20  w-full" id='availability'>
            <div className="max-w-7xl mx-auto  text-center">
                <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
                    Availability
                </p>
                <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
                    I am based in Atlanta, GA, USA, I embrace the flexibility of remote work
                    and thrive in collaborative digital environments. Whether it&apos;s contributing to a startup’s growth
                    or enhancing a team’s efficiency, I bring strong communication, problem-solving, and development
                    skills to the table. Let’s build something amazing together!
                </p>
            </div>
            <WorldMap
                dots={[
                    {
                        start: {
                            lat: 64.2008,
                            lng: -149.4937,
                        }, // Alaska (Fairbanks)
                        end: {
                            lat: 34.0522,
                            lng: -118.2437,
                        }, // Los Angeles
                    },
                    {
                        start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                        end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                    },
                    {
                        start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                        end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                    },
                    {
                        start: { lat: 51.5074, lng: -0.1278 }, // London
                        end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                    },
                    {
                        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                    },
                    {
                        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                    },
                ]}
            />
        </section>
    );
}
export default Availability;