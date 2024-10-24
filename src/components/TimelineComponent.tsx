import { useState, useEffect } from "react";
import { FaGraduationCap, FaBriefcase, FaBook, FaBuilding, FaChartLine, FaHandshake } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

const getEventIcon = (event: { icon?: JSX.Element }) => {
  return event.icon || <FaBriefcase />;
};

const TimelineEvent = ({ event, index }: { event: any; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const isLeft = index % 2 === 0;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1,
      }
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`mb-2 flex justify-between items-center w-full ${isLeft ? "flex-row" : "flex-row-reverse"}`}
      style={{ marginTop: index > 0 ? "-2rem" : "0" }}
    >
      <div className="w-5/12"></div>
      <div className="w-2/12 flex justify-center">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full h-10 w-10 flex items-center justify-center text-white text-lg shadow-lg z-10">
          {getEventIcon(event)}
        </div>
      </div>
      <motion.div
        className="w-5/12 bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-md font-bold mb-0.5 text-blue-700">{event.title}</h3>
        <p className="text-xs text-gray-600 mb-0.5 font-semibold">{event.date}</p>
        <p className="text-xs text-gray-700">{event.description}</p>
      </motion.div>
    </motion.div>
  );
};

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  category: string;
  icon: JSX.Element;
}

const TimelineComponent = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const mockEvents = [
          {
            id: 1,
            title: "Graduated from Kittatinny Regional High School",
            date: "1984",
            description: "Hampton, NJ",
            category: "education",
            icon: <FaGraduationCap />,
          },
          {
            id: 2,
            title: "Closing Administrator at Associates Abstract, Inc.",
            date: "1985-1989",
            description: "Hawley, PA",
            category: "early career",
            icon: <FaBriefcase />,
          },
          {
            id: 3,
            title: "Office Manager at MAC Mortgage Co., Inc.",
            date: "1989-1991",
            description: "Greentown, PA",
            category: "mortgage industry",
            icon: <FaBuilding />,
          },
          {
            id: 4,
            title: "Bookkeeper/Secretary at John C. Ernst Company",
            date: "1998-2000",
            description: "Dover, NJ",
            category: "diversifying experience",
            icon: <FaBriefcase />,
          },
          {
            id: 5,
            title: "Office Manager at Pocono Builders Association",
            date: "2000-2005",
            description: "East Stroudsburg, PA",
            category: "real estate development",
            icon: <FaBuilding />,
          },
          {
            id: 6,
            title: "Obtained PA Real Estate License",
            date: "2005",
            description: "Pocono Real Estate Academy",
            category: "professional development",
            icon: <FaBook />,
          },
          {
            id: 7,
            title: "Closing Administrator at Fidelity Home Abstract, Inc.",
            date: "2005-2006",
            description: "East Stroudsburg, PA",
            category: "title industry",
            icon: <FaBriefcase />,
          },
          {
            id: 8,
            title: "Transaction Coordinator, Compliance Review Officer, Assistant to Broker of Record at Keller Williams Real Estate",
            date: "2006-2013",
            description: "Stroudsburg, PA",
            category: "real estate brokerage",
            icon: <FaHandshake />,
          },
          {
            id: 9,
            title: "Owner/President, Transaction Coordinator at PA Real Estate Support Services, LLC",
            date: "2013-Present",
            description: "Bushkill, PA",
            category: "entrepreneurship",
            icon: <FaChartLine />,
          },
        ];
        setEvents(mockEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-300 to-purple-300"></div>
        <AnimatePresence>
          {events.map((event, index) => (
            <TimelineEvent key={event.id} event={event} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TimelineComponent;
