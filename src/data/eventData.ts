export interface EventProgrammeItem {
  day: string;
  date: string;
  time: string;
  title: string;
  venue: string;
  focus: string;
  badge?: string;
  isSpecial?: boolean;
}

export interface MinisterProfile {
  name: string;
  role: string;
  designation: string;
  title: string;
  image: string;
  bio: string;
  honorific: string;
}

export const EVENT_DATA = {
  name: "ABA CITYWIDE CRUSADE 2026",
  shortName: "Aba Crusade 2026",
  organizer: "Diocese of Aba Ngwa North (Anglican Communion)",
  theme: "THINK BEFORE YOU BELIEVE",
  scriptureReference: "ACTS 17:11",
  scriptureVerse: "These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so.",
  dates: "2nd - 5th December 2026",
  startDateISO: "2026-12-02T16:00:00+01:00", // Nigerian Time (WAT, UTC+1)
  dailyTime: "4:00 PM Daily",
  venue: "Ngwa High School Playground, Aba",
  state: "Abia State, Nigeria",
  registrationUrl: "https://www.geteventrally.com/events/bc7509fd-31fb-4ec1-881a-7e07f1a7ad8b",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ngwa+High+School+Playground+Aba",
  
  ministersConference: {
    title: "MINISTERS CONFERENCE",
    date: "Saturday, 5th December 2026",
    time: "9:00 AM",
    venue: "Ngwa High School Playground, Aba",
    description: "A specialized strategic gathering for pastors, church leaders, evangelists, and gospel ministers for spiritual impartation, ministry empowerment, and biblical realignment."
  },

  schedule: [
    {
      day: "Day 1",
      date: "Wednesday, 2nd December 2026",
      time: "4:00 PM",
      title: "Opening Crusade Rally & Spiritual Awakening",
      venue: "Ngwa High School Playground, Aba",
      focus: "Sound Doctrine, Deliverance & Great Worship",
      badge: "Day 1 Kick-off"
    },
    {
      day: "Day 2",
      date: "Thursday, 3rd December 2026",
      time: "4:00 PM",
      title: "Biblical Renewal & Faith Building",
      venue: "Ngwa High School Playground, Aba",
      focus: "Examining the Word, Healing & Miracles",
      badge: "Day 2"
    },
    {
      day: "Day 3",
      date: "Friday, 4th December 2026",
      time: "4:00 PM",
      title: "Citywide Holy Ghost Encounter & Breakthrough",
      venue: "Ngwa High School Playground, Aba",
      focus: "Mass Worship, Salvation Call & Intercession for Aba",
      badge: "Day 3 Mega Night"
    },
    {
      day: "Day 4 - Morning Session",
      date: "Saturday, 5th December 2026",
      time: "9:00 AM",
      title: "Ministers Conference",
      venue: "Ngwa High School Playground, Aba",
      focus: "Equipping Kingdom Leaders for Doctrinal Purity & Growth",
      badge: "Special Leadership Session",
      isSpecial: true
    },
    {
      day: "Day 4 - Grand Finale",
      date: "Saturday, 5th December 2026",
      time: "4:00 PM",
      title: "Grand Crusade Finale & Overflow Anointing",
      venue: "Ngwa High School Playground, Aba",
      focus: "Commissioning, Impartation & Victorious Celebration",
      badge: "Grand Finale"
    }
  ] as EventProgrammeItem[],

  ministers: [
    {
      name: "The Rt. Rev. Dr. Iyke J. Egbuonu",
      honorific: "Rt. Rev'd Dr.",
      role: "Guest Speaker",
      designation: "Guest Speaker",
      title: "Bishop, Diocese of Oji River",
      image: "/assets/speaker-iyke-egbuonu.jpg",
      bio: "A dynamic teacher of the Gospel, sound biblical scholar, and spirit-filled vessel of God renowned for expository ministry and transformative preaching of the Word across Nigeria and beyond."
    },
    {
      name: "The Rt. Rev. Nathan C. O. Kanu JP, PhD.",
      honorific: "Rt. Rev'd",
      role: "Host",
      designation: "Host",
      title: "Bishop, Diocese of Aba Ngwa North (Anglican Communion)",
      image: "/assets/host-nathan-kanu.jpg",
      bio: "Visionary shepherd, teacher of truth, and chief host of the Aba Citywide Crusade. Passionately committed to biblical literacy, spiritual reformation, and the revival of the body of Christ."
    }
  ] as MinisterProfile[]
};
