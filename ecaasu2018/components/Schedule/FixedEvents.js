import EventObj from '../EventObj/EventObj.js'
import ScheduleObj from './ScheduleObj.js';

export const FIXED_EVENTS = {
  friday: [
    {
      key: 1000,
      title: "Check-In",
      speaker: "",
      description: "Welcome to ECAASU 2018! Come check-in at our registration tables in the entry area of Statler Hall! After receiving your name card and tote bag (containing lanyard, plastic sleeve, pen, and program booklet), feel free to check out our merchandise table, meet new people, or grab a bite to eat off-campus! At 7:00pm, our Opening Ceremony will begin — attendees must have a name card (which you can slip into the plastic sleeve + clip onto the lanyard) in order to enter the auditorium.",
      location: "Statler Hall",
      timeSlot: 0,
      deletable: false,
      scheduleMarker: "4:00 PM",
    },
    {
      key: 1001,
      title: "Opening Ceremony",
      speaker: "Speakers: Dr. Vijay Pendakur, Mei Lum & Diane Wong. Student performers: Yamatai, Bhangra, Fenmo",
      description: "Let the conference begin! Come to Statler Hall Auditorium to see an amazing selection of speakers and performers to celebrate the official start of ECAASU 2018 at Cornell University!",
      location: "Statler Hall Auditorium", 
      timeSlot: 1,
      deletable: false,
      scheduleMarker: "7:00 PM",
    },
    {
      key: 1002,
      title: "Social Hour + Shuttles",
      speaker: "",
      description: "What an amazing Opening Ceremony! Now’s the time to meet new people, catch up with old friends, or catch a ride back to our 2 partner hotels downtown to catch some Z’s. See you bright and early tomorrow morning!",
      location: "Sage Hall bus stop",
      timeSlot: 2,
      deletable: false,
      scheduleMarker: "9:00 PM",
    },
  ],
  saturdayAM: [
    {
      key: 1003,
      title: "Check-In",
      speaker: "",
      description: "Welcome to ECAASU 2018! If you weren’t able to check-in Friday night, come check-in at our registration tables in the first floor of Klarman Hall (which is accessible through Goldwin Smith Hall)! After receiving your name card and tote bag (containing lanyard, plastic sleeve, pen, and program booklet), feel free to check out our merchandise table, meet new people, or grab breakfast in the Physical Sciences Building (PSB)! At 8:00am, our Morning Kickoff will begin in PSB — attendees must have a name card (which you can slip into the plastic sleeve + clip onto the lanyard) in order to attend the Kickoff and the workshops that will follow.",
      location: "Klarman Hall Atrium",
      timeSlot: 3,
      deletable: false,
      scheduleMarker: "7:00 AM",
    },
    {
      key: 1004,
      title: "Morning Kickoff",
      speaker: "Raymond Partolan", 
      description: "Rise and shine! Come to the atrium of Physical Sciences Building to attend the Morning Kickoff for a full day of learning, socializing, and networking! The Kickoff will include a speech from Raymond Partolan, an immigrant rights activist, along with other remarks from the ECAASU Conference Team.",
      location: "Physical Sciences Building (PSB) Atrium",
      timeSlot: 4,
      deletable: false,
      scheduleMarker: "8:00 AM",
    },
  ],
  saturdayPM: [
    {
      key: 1005,
      title: "Networking Fair",
      speaker: "",
      description: "Time to network! Come to Klarman Hall Atrium to network with one of our partner organizations. Whether you’re interested in non-profits, tech, or civil service, there’s an organization for everyone to connect with at our Networking Fair. Bonus points: bring some paper copies of your resume with you!",
      location: "Klarman Hall Atrium",
      timeSlot: 11,
      deletable: false,
      scheduleMarker: "3:00 PM",
    },
    {
      key: 1006,
      title: "Free Time + Shuttles",
      speaker: "",
      description: "Whew, it’s been a long day — good thing we built a break into the schedule! For the next 2 hours, you can relax, explore Cornell’s campus, chat with friends (old and new), or catch a shuttle back to your hotel to change for the Dinner Banquet and Closing Ceremony!",
      location: "Somewhere",
      timeSlot: 12,
      deletable: false,
      scheduleMarker: "4:00 PM",
    },
    {
      key: 1007,
      title: "Dinner Banquet",
      speaker: "",
      description: "Dinnertime! Your name card should have an “element” at the upper right corner. If you have Fire, go to PSB; if you have Water, go to Klarman; if you have Earth, go to Duffield; and if you have Air, go to Biotech G10. If you’re done eating, feel free to take a picture in our photobooth (there’s one in each dinner venue) with your squad. Bon appetit!",
      location: "Physical Sciences Building (PSB) Atrium, Klarman Hall Atrium, Duffield Hall Atrium, Biotechnology Building G10",
      timeSlot: 13,
      deletable: false,
      scheduleMarker: "6:00 PM",
    },
    {
      key: 1008,
      title: "Closing Ceremony + Performance Showcase",
      speaker: "Mimi Thi Nguyen, Paul Tran, Bambu & DJ Phatrick, Steven Lim",
      description: "It’s time! Make your way over to Statler Hall Auditorium for a rousing finale to ECAASU 2018! Enjoy a diverse selection of keynote speakers and performers to highlight the night.",
      location: "Statler Hall Auditorium",
      timeSlot: 14,
      deletable: false,
      scheduleMarker: "8:00 PM",
    },
    {
      key: 1009,
      title: "Shuttles to Hotels",
      speaker: "",
      description: "Catch a shuttle to catch some Z’s! You deserve it!",
      location: "Uris Hall bus pull-off",
      timeSlot: 15,
      deletable: false,
      scheduleMarker: "9:00 PM",
    }
  ],
};